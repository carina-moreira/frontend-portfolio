import * as React from "react"
import { cn } from "@/lib/utils"

export interface IconButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  children: React.ReactNode
  ariaLabel?: string
}

export const IconButton = ({
  href,
  className,
  target = "_blank",
  rel = "noopener noreferrer",
  ariaLabel,
  children,
  ...props
}: IconButtonProps) => {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={cn(
        "text-black hover:text-blue transition-colors inline-flex items-center justify-center",
        className,
      )}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </a>
  )
}
