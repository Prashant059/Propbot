"use client"

import React from "react"
import { cn } from "../../lib/utils"

export const Select = ({ children, value, onValueChange }) => {
  return (
    <div className="relative">
      {React.Children.map(children, (child) => React.cloneElement(child, { value, onValueChange }))}
    </div>
  )
}

export const SelectTrigger = React.forwardRef(({ className, children, value, onValueChange, ...props }, ref) => {
  return (
    <button
      className={cn(
        "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  )
})

SelectTrigger.displayName = "SelectTrigger"

export const SelectValue = ({ placeholder }) => {
  return <span className="text-muted-foreground">{placeholder}</span>
}

export const SelectContent = ({ children }) => {
  return (
    <div className="absolute top-full left-0 right-0 z-50 mt-1 bg-white border border-gray-200 rounded-md shadow-lg">
      {children}
    </div>
  )
}

export const SelectItem = ({ value, children, onValueChange }) => {
  return (
    <div
      className="px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer"
      onClick={() => onValueChange && onValueChange(value)}
    >
      {children}
    </div>
  )
}
