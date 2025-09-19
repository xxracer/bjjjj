import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import styles from './button.module.css';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild = false, variant = "default", ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const className = `${styles.button} ${styles[variant] || styles.default}`;

    return (
      <Comp
        className={className}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
