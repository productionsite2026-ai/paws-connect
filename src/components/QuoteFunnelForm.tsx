import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { z } from "zod";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Loader2,
  Wrench,
  Flame,
  Droplets,
  AlertTriangle,
  Phone,
  Mail,
  User,
  MessageSquare,
  Calendar,
  Home,
  Building2,
  Send,
  Hammer,
  Recycle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { content, servicesCatalog, type ServiceKey, type DomainKey } from "@/data/content";
import { toast } from "@/hooks/use-toast";

// ============================================
// Schéma Zod
// ============================================
const formSchema = z.object({
  serviceType: z.enum(["installation", "depannage", "entretien"], {
    errorMap: () => ({ message: "Choisissez un type d'intervention" }),
  }),
  domain: z.enum(["plomberie", "chauffage"], {
    errorMap: () => ({ message: "Choisissez un domaine" }),
  }),
  prestation: z.string().trim().min(2, "Sélectionnez une prestation"),
  urgency: z.enum(["urgent", "semaine", "flexible"]),
  propertyType: z.enum(["maison", "appartement", "local_pro"]),
  name: z.string().trim().min(2, "Nom trop court").max(80, "Nom trop long"),
  phone: z
    .string()
    .trim()
    .min(8, "Téléphone invalide")
    .max(20, "Téléphone invalide")
    .regex(/^[\d\s+().-]+$/, "Format de téléphone invalide"),
  email: z.string().trim().email("Email invalide").max(150).optional().or(z.literal("")),
  postalCode: z
    .string()
    .trim()
    .regex(/^\d{5}$/, "Code postal à 5 chiffres")
    .optional()
    .or(z.literal("")),
  message: z.string().trim().max(800, "Message trop long").optional(),
});

type FormData = z.infer<typeof formSchema>;

// ============================================
// Options
// ============================================
const serviceOptions: { value: ServiceKey; label: string; desc: string; icon: typeof Hammer }[] = [
  { value: "installation", label: "Installation & Rénovation", desc: "Pose neuve, remplacement, rénovation complète", icon: Hammer },
  { value: "depannage", label: "Dépannage", desc: "Fuite, panne, urgence 7j/7 24h/24", icon: AlertTriangle },
  { value: "entretien", label: "Entretien", desc: "Maintenance, contrat annuel, mise aux normes", icon: Recycle },
];

const domainOptions: { value: DomainKey; label: string; icon: typeof Droplets }[] = [
  { value: "plomberie", label: "Plomberie", icon: Droplets },
  { value: "chauffage", label: "Chauffage", icon: Flame },
];

const urgencyOptions = [
  { value: "urgent" as const, label: "Urgent (< 24h)", icon: AlertTriangle },
  { value: "semaine" as const, label: "Cette semaine", icon: Calendar },
  { value: "flexible" as const, label: "Flexible", icon: CheckCircle2 },
];

const propertyOptions = [
  { value: "maison" as const, label: "Maison", icon: Home },
  { value: "appartement" as const, label: "Appartement", icon: Building2 },
  { value: "local_pro" as const, label: "Local pro", icon: Building2 },
];

interface QuoteFunnelFormProps {
  defaultService?: ServiceKey;
  defaultDomain?: DomainKey;
  variant?: "overlay" | "section";
}

const QuoteFunnelForm = ({ defaultService, defaultDomain, variant = "section" }: QuoteFunnelFormProps) => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<Partial<FormData>>({
    serviceType: defaultService,
    domain: defaultDomain,
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const totalSteps = 3;
  const progress = (step / totalSteps) * 100;

  const update = <K extends keyof FormData>(field: K, value: FormData[K]) => {
    setData((d) => ({ ...d, [field]: value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const next = () => {
    if (step === 1) {
      if (!data.serviceType) {
        setErrors({ serviceType: "Choisissez un type d'intervention" });
        return;
      }
      if (!data.urgency) {
        setErrors({ urgency: "Indiquez le délai souhaité" });
        return;
      }
    }
    if (step === 2) {
      if (!data.domain) {
        setErrors({ domain: "Choisissez plomberie ou chauffage" });
        return;
      }
      if (!data.prestation) {
        setErrors({ prestation: "Précisez la prestation" });
        return;
      }
      if (!data.propertyType) {
        setErrors({ propertyType: "Précisez le type de logement" });
        return;
      }
    }
    setStep((s) => Math.min(s + 1, totalSteps));
  };

  const prev = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = formSchema.safeParse(data);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormData, string>> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as keyof FormData] = err.message;
      });
      setErrors(fieldErrors);
      toast({ title: "Vérifiez vos informations", description: "Certains champs sont incorrects.", variant: "destructive" });
      return;
    }

    setSubmitting(true);
    try {
      const endpoint = content.company.formspreeEndpoint;
      if (endpoint.includes("REMPLACER_PAR_VOTRE_ID")) {
        await new Promise((r) => setTimeout(r, 800));
      } else {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            ...result.data,
            _subject: `Devis ${result.data.serviceType} ${result.data.domain} — ${result.data.name}`,
          }),
        });
        if (!res.ok) throw new Error("Échec d'envoi");
      }
      setSubmitted(true);
      toast({ title: "Demande envoyée ✅", description: "Nous vous rappelons sous 2h ouvrées." });
    } catch {
      toast({ title: "Erreur d'envoi", description: "Appelez-nous directement, nous décrochons.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  // Liste des prestations dynamique selon service + domaine
  const prestationList =
    data.serviceType && data.domain ? servicesCatalog[data.serviceType].domains[data.domain].items : [];

  // ============================================
  // CONFIRMATION
  // ============================================
  if (submitted) {
    return (
      <div className={containerCls(variant)}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-8 px-4"
        >
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-success/15 text-success mb-4">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <h3 className="font-display text-2xl font-bold text-foreground mb-2">Demande reçue !</h3>
          <p className="text-muted-foreground mb-6">
            Merci {data.name?.split(" ")[0]}. Nous vous rappelons sous <strong>2 heures ouvrées</strong> au {data.phone}.
          </p>
          <Button asChild variant="accent" size="lg" className="gap-2">
            <a href={`tel:${content.company.contact.mobileRaw}`}>
              <Phone className="h-4 w-4" /> Urgent ? Appelez maintenant
            </a>
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className={containerCls(variant)}>
      {/* Header + Progress */}
      <div className="px-5 pt-5 pb-4 border-b border-border bg-muted/30 rounded-t-2xl">
        <div className="flex items-center justify-between mb-3">
          <Badge variant="accentSoft" className="text-xs">
            Étape {step} / {totalSteps}
          </Badge>
          <span className="text-xs font-semibold text-muted-foreground">Devis gratuit en 60 secondes</span>
        </div>
        <div className="h-1.5 w-full bg-border rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-hero-gradient"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-5 sm:p-6">
        <AnimatePresence mode="wait">
          {/* ============ ÉTAPE 1 : Type d'intervention + délai ============ */}
          {step === 1 && (
            <motion.div
              key="step-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="space-y-5"
            >
              <div>
                <h3 className="font-display text-lg font-bold text-foreground mb-1">Que souhaitez-vous ?</h3>
                <p className="text-sm text-muted-foreground">Choisissez votre type d'intervention.</p>
              </div>
              <div className="space-y-2.5">
                {serviceOptions.map((opt) => {
                  const Icon = opt.icon;
                  const active = data.serviceType === opt.value;
                  return (
                    <button
                      type="button"
                      key={opt.value}
                      onClick={() => {
                        update("serviceType", opt.value);
                        // reset prestation si on change de service
                        update("prestation", "" as FormData["prestation"]);
                      }}
                      className={`w-full text-left p-3.5 rounded-xl border-2 transition-smooth ${
                        active
                          ? "border-accent bg-accent/5 shadow-sm"
                          : "border-border bg-card hover:border-accent/40"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent flex-shrink-0">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="font-semibold text-sm text-foreground">{opt.label}</div>
                          <div className="text-xs text-muted-foreground mt-0.5">{opt.desc}</div>
                        </div>
                        {active && <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />}
                      </div>
                    </button>
                  );
                })}
              </div>
              {errors.serviceType && <p className="text-xs text-destructive">{errors.serviceType}</p>}

              <div className="pt-2">
                <Label className="text-sm font-semibold text-foreground mb-2 block">Délai souhaité</Label>
                <div className="grid grid-cols-3 gap-2">
                  {urgencyOptions.map((opt) => {
                    const Icon = opt.icon;
                    const active = data.urgency === opt.value;
                    return (
                      <button
                        type="button"
                        key={opt.value}
                        onClick={() => update("urgency", opt.value)}
                        className={`flex flex-col items-center gap-1.5 p-3 rounded-lg border-2 transition-smooth ${
                          active ? "border-accent bg-accent/5" : "border-border bg-card hover:border-accent/40"
                        }`}
                      >
                        <Icon className={`h-4 w-4 ${active ? "text-accent" : "text-muted-foreground"}`} />
                        <span className="text-xs font-semibold text-foreground text-center leading-tight">{opt.label}</span>
                      </button>
                    );
                  })}
                </div>
                {errors.urgency && <p className="text-xs text-destructive mt-1">{errors.urgency}</p>}
              </div>
            </motion.div>
          )}

          {/* ============ ÉTAPE 2 : Domaine + prestation + logement ============ */}
          {step === 2 && (
            <motion.div
              key="step-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="space-y-5"
            >
              <div>
                <h3 className="font-display text-lg font-bold text-foreground mb-1">Plomberie ou chauffage ?</h3>
                <p className="text-sm text-muted-foreground">Précisez votre besoin.</p>
              </div>

              <div>
                <Label className="text-sm font-semibold text-foreground mb-2 block">Domaine</Label>
                <div className="grid grid-cols-2 gap-2">
                  {domainOptions.map((opt) => {
                    const Icon = opt.icon;
                    const active = data.domain === opt.value;
                    return (
                      <button
                        type="button"
                        key={opt.value}
                        onClick={() => {
                          update("domain", opt.value);
                          update("prestation", "" as FormData["prestation"]);
                        }}
                        className={`flex items-center gap-2.5 p-3.5 rounded-lg border-2 transition-smooth ${
                          active ? "border-accent bg-accent/5" : "border-border bg-card hover:border-accent/40"
                        }`}
                      >
                        <Icon className={`h-5 w-5 ${active ? "text-accent" : "text-muted-foreground"}`} />
                        <span className="text-sm font-semibold text-foreground">{opt.label}</span>
                      </button>
                    );
                  })}
                </div>
                {errors.domain && <p className="text-xs text-destructive mt-1">{errors.domain}</p>}
              </div>

              {data.serviceType && data.domain && (
                <div>
                  <Label htmlFor="prestation" className="text-sm font-semibold text-foreground mb-2 block">
                    Prestation
                  </Label>
                  <select
                    id="prestation"
                    value={data.prestation || ""}
                    onChange={(e) => update("prestation", e.target.value)}
                    className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  >
                    <option value="">— Sélectionner —</option>
                    {prestationList.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                  {errors.prestation && <p className="text-xs text-destructive mt-1">{errors.prestation}</p>}
                </div>
              )}

              <div>
                <Label className="text-sm font-semibold text-foreground mb-2 block">Type de logement</Label>
                <div className="grid grid-cols-3 gap-2">
                  {propertyOptions.map((opt) => {
                    const Icon = opt.icon;
                    const active = data.propertyType === opt.value;
                    return (
                      <button
                        type="button"
                        key={opt.value}
                        onClick={() => update("propertyType", opt.value)}
                        className={`flex flex-col items-center gap-1.5 p-3 rounded-lg border-2 transition-smooth ${
                          active ? "border-accent bg-accent/5" : "border-border bg-card hover:border-accent/40"
                        }`}
                      >
                        <Icon className={`h-4 w-4 ${active ? "text-accent" : "text-muted-foreground"}`} />
                        <span className="text-xs font-semibold text-foreground">{opt.label}</span>
                      </button>
                    );
                  })}
                </div>
                {errors.propertyType && <p className="text-xs text-destructive mt-1">{errors.propertyType}</p>}
              </div>

              <div>
                <Label htmlFor="message" className="text-sm font-semibold text-foreground mb-2 block">
                  Précisez votre besoin (optionnel)
                </Label>
                <Textarea
                  id="message"
                  placeholder="Ex : chaudière Saunier Duval qui s'arrête, code F28…"
                  value={data.message || ""}
                  onChange={(e) => update("message", e.target.value)}
                  maxLength={800}
                  rows={3}
                  className="resize-none"
                />
              </div>
            </motion.div>
          )}

          {/* ============ ÉTAPE 3 : Coordonnées ============ */}
          {step === 3 && (
            <motion.div
              key="step-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="space-y-4"
            >
              <div>
                <h3 className="font-display text-lg font-bold text-foreground mb-1">Vos coordonnées</h3>
                <p className="text-sm text-muted-foreground">Nous vous rappelons sous 2 heures ouvrées.</p>
              </div>

              <div>
                <Label htmlFor="name" className="text-sm font-semibold text-foreground mb-1.5 flex items-center gap-1.5">
                  <User className="h-3.5 w-3.5 text-accent" /> Nom complet *
                </Label>
                <Input
                  id="name"
                  placeholder="Jean Dupont"
                  value={data.name || ""}
                  onChange={(e) => update("name", e.target.value)}
                  maxLength={80}
                />
                {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="phone" className="text-sm font-semibold text-foreground mb-1.5 flex items-center gap-1.5">
                    <Phone className="h-3.5 w-3.5 text-accent" /> Téléphone *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="06 12 34 56 78"
                    value={data.phone || ""}
                    onChange={(e) => update("phone", e.target.value)}
                    maxLength={20}
                  />
                  {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <Label htmlFor="postalCode" className="text-sm font-semibold text-foreground mb-1.5">
                    Code postal
                  </Label>
                  <Input
                    id="postalCode"
                    placeholder="75001"
                    value={data.postalCode || ""}
                    onChange={(e) => update("postalCode", e.target.value)}
                    maxLength={5}
                  />
                  {errors.postalCode && <p className="text-xs text-destructive mt-1">{errors.postalCode}</p>}
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-sm font-semibold text-foreground mb-1.5 flex items-center gap-1.5">
                  <Mail className="h-3.5 w-3.5 text-accent" /> Email <span className="text-muted-foreground font-normal">(optionnel)</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="jean@exemple.fr"
                  value={data.email || ""}
                  onChange={(e) => update("email", e.target.value)}
                  maxLength={150}
                />
                {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed pt-1">
                <MessageSquare className="inline h-3 w-3 mr-1" />
                Vos données ne servent qu'à vous recontacter (RGPD).
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex gap-2 pt-5 mt-5 border-t border-border">
          {step > 1 && (
            <Button type="button" variant="outline" onClick={prev} className="gap-2">
              <ArrowLeft className="h-4 w-4" /> Retour
            </Button>
          )}
          {step < totalSteps && (
            <Button type="button" variant="accent" onClick={next} className="flex-1 gap-2">
              Continuer <ArrowRight className="h-4 w-4" />
            </Button>
          )}
          {step === totalSteps && (
            <Button type="submit" variant="accent" disabled={submitting} className="flex-1 gap-2">
              {submitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Envoi…
                </>
              ) : (
                <>
                  Recevoir mon devis <Send className="h-4 w-4" />
                </>
              )}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

const containerCls = (variant: "overlay" | "section") =>
  variant === "overlay"
    ? "bg-card border border-border rounded-2xl shadow-glow-soft overflow-hidden"
    : "bg-card border border-border rounded-2xl shadow-md overflow-hidden max-w-xl mx-auto";

export default QuoteFunnelForm;
