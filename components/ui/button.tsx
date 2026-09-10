import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center rounded-none font-black uppercase tracking-wider transition-all select-none cursor-pointer outline-none active:translate-x-[2px] active:translate-y-[2px] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-[#7DD3FC] text-black border-3 border-black shadow-[4px_4px_0px_#000] hover:bg-[#BAE6FD] hover:shadow-[6px_6px_0px_#000] active:shadow-[1px_1px_0px_#000]",
        secondary:
          "bg-[#BAE6FD] text-black border-3 border-black shadow-[4px_4px_0px_#000] hover:bg-white hover:shadow-[6px_6px_0px_#000] active:shadow-[1px_1px_0px_#000]",
        outline:
          "bg-white text-black border-3 border-black shadow-[4px_4px_0px_#000] hover:bg-[#BAE6FD] hover:shadow-[6px_6px_0px_#000] active:shadow-[1px_1px_0px_#000]",
        white:
          "bg-white text-black border-3 border-black shadow-[4px_4px_0px_#000] hover:bg-[#7DD3FC] hover:shadow-[6px_6px_0px_#000] active:shadow-[1px_1px_0px_#000]",
        black:
          "bg-black text-white border-3 border-black shadow-[4px_4px_0px_#7DD3FC] hover:bg-neutral-900 hover:shadow-[6px_6px_0px_#7DD3FC] active:shadow-[1px_1px_0px_#7DD3FC]",
        ghost:
          "border-3 border-transparent hover:border-black hover:bg-[#BAE6FD] hover:shadow-[3px_3px_0px_#000] active:shadow-none",
        destructive:
          "bg-[#FF4D4D] text-black border-3 border-black shadow-[4px_4px_0px_#000] hover:bg-[#ff3333] active:shadow-[1px_1px_0px_#000]",
        link: "text-black underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 gap-2 px-5 text-xs md:text-sm",
        sm: "h-8 gap-1.5 px-3 text-xs",
        lg: "h-14 gap-3 px-8 text-sm md:text-base tracking-[0.15em]",
        icon: "size-11",
        "icon-sm": "size-8",
        "icon-lg": "size-14",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
