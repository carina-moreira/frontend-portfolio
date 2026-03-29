import * as React from "react"
import { cn } from "@/lib/utils"

export interface TagProps {
  label: string
  bgColor?: string
  textColor?: string
  className?: string
}

export const Tag = ({
  label,
  bgColor = "bg-light-grey",
  textColor = "text-black",
  className,
}: TagProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm",
        bgColor,
        textColor,
        className,
      )}
    >
      {label}
    </span>
  )
}
