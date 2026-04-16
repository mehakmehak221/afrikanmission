"use client";

import { forwardRef, type TextareaHTMLAttributes } from "react";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  required?: boolean;
  hint?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  function TextArea(
    { label, error, required, hint, className = "", id, ...props },
    ref,
  ) {
    const inputId =
      id || `field-${label.toLowerCase().replace(/\s+/g, "-")}`;

    return (
      <div className="flex flex-col gap-2 group">
        <label
          htmlFor={inputId}
          className="font-display uppercase tracking-stamp text-xs text-mute group-focus-within:text-gold transition-colors duration-300"
        >
          {label}
          {required && <span className="ml-1 text-gold">*</span>}
        </label>
        <textarea
          id={inputId}
          ref={ref}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
          className={`
            w-full bg-transparent border border-hairline rounded-sm
            px-4 py-3 text-paper placeholder-mute/60
            font-body text-base md:text-lg
            min-h-[120px] resize-y
            transition-all duration-500 premium-ease
            hover:border-gold/50
            focus:border-gold focus:shadow-[0_0_15px_rgba(212,175,55,0.15)] focus:bg-gold/5
            ${error ? "border-ember focus:border-ember focus:shadow-[0_0_15px_rgba(218,64,3,0.15)]" : ""}
            ${className}
          `}
          {...props}
        />
        {hint && !error && (
          <p className="text-xs text-mute font-body italic">{hint}</p>
        )}
        {error && (
          <p
            id={`${inputId}-error`}
            className="text-xs text-ember font-body italic"
          >
            {error}
          </p>
        )}
      </div>
    );
  },
);

export default TextArea;
