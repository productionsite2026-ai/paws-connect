import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/90",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/90",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "text-foreground border-border",
        accent: "border-transparent bg-accent text-accent-foreground hover:bg-accent/90 shadow-sm",
        accentSoft: "border-accent/20 bg-accent/10 text-accent",
        serviceBlue: "border-service-blue/20 bg-service-blue/10 text-service-blue",
        serviceCyan: "border-service-cyan/20 bg-service-cyan/10 text-service-cyan",
        serviceOrange: "border-service-orange/20 bg-service-orange/10 text-service-orange",
        serviceEmerald: "border-service-emerald/20 bg-service-emerald/10 text-service-emerald",
        serviceRose: "border-service-rose/20 bg-service-rose/10 text-service-rose",
        serviceViolet: "border-service-violet/20 bg-service-violet/10 text-service-violet",
        serviceAmber: "border-service-amber/20 bg-service-amber/10 text-service-amber",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
