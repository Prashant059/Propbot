"use client";

import React, { useState, useRef, useEffect } from "react";
import { cn } from "../../lib/utils";

export const Select = ({ children, value, onValueChange }) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef();

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={containerRef}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          value,
          onValueChange,
          open,
          setOpen,
        })
      )}
    </div>
  );
};

export const SelectTrigger = React.forwardRef(
  ({ className, children, open, setOpen }, ref) => {
    return (
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={cn(
          "flex h-10 w-full items-center justify-between rounded-md border border-input bg-white px-3 py-2 text-sm shadow-sm focus:outline-none",
          className
        )}
        ref={ref}
      >
        {children}
        <span className="ml-2">{open ? "▲" : "▼"}</span>
      </button>
    );
  }
);
SelectTrigger.displayName = "SelectTrigger";

export const SelectValue = ({ value, placeholder }) => {
  return <span className="text-gray-700">{value || placeholder}</span>;
};

export const SelectContent = ({ children, open }) => {
  if (!open) return null;
  return (
    <div className="absolute top-full left-0 right-0 z-50 mt-1 bg-white border border-gray-200 rounded-md shadow-lg">
      {children}
    </div>
  );
};

export const SelectItem = ({ value, children, onValueChange, setOpen }) => {
  return (
    <div
      className="px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer"
      onClick={() => {
        onValueChange && onValueChange(value);
        setOpen(false); // close dropdown after selection
      }}
    >
      {children}
    </div>
  );
};
