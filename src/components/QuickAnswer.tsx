import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { fadeUp } from "@/lib/animations";

interface QuickAnswerProps {
  question: string;
  answer: string;
}

/**
 * Bloc "Réponse rapide" optimisé pour ChatGPT, Google SGE et recherche vocale.
 * Le bloc est marqué [data-speakable] pour les schémas SpeakableSpecification.
 */
const QuickAnswer = ({ question, answer }: QuickAnswerProps) => {
  return (
    <section className="py-10 md:py-12 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <motion.div {...fadeUp} className="max-w-3xl mx-auto">
          <div className="flex items-start gap-4 p-5 md:p-7 rounded-2xl bg-water-gradient border border-accent/20">
            <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-foreground shadow-sm">
              <Sparkles className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold uppercase tracking-wider text-accent mb-1.5">Réponse rapide</p>
              <h2 className="font-display text-lg md:text-xl font-bold text-foreground mb-2 leading-snug">{question}</h2>
              <p className="text-foreground/85 leading-relaxed text-sm md:text-base" data-speakable>
                {answer}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuickAnswer;
