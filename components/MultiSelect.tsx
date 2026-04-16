"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { Country } from "@/lib/countries";

interface MultiSelectProps {
  label: string;
  options: Country[];
  value: string[];
  onChange: (next: string[]) => void;
  max?: number;
  required?: boolean;
  error?: string;
  placeholder?: string;
}

export default function MultiSelect({
  label,
  options,
  value,
  onChange,
  max = 5,
  required,
  error,
  placeholder = "Search countries…",
}: MultiSelectProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
  }, [open]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return options;
    return options.filter((o) => o.name.toLowerCase().includes(q));
  }, [options, query]);

  const atMax = value.length >= max;

  function toggle(code: string) {
    if (value.includes(code)) {
      onChange(value.filter((c) => c !== code));
    } else if (!atMax) {
      onChange([...value, code]);
    }
  }

  function remove(code: string) {
    onChange(value.filter((c) => c !== code));
  }

  const selectedCountries = value
    .map((code) => options.find((o) => o.code === code))
    .filter((c): c is Country => !!c);

  return (
    <div className="flex flex-col gap-2" ref={wrapRef}>
      <div className="flex items-baseline justify-between">
        <label className="font-display uppercase tracking-stamp text-xs text-mute">
          {label}
          {required && <span className="ml-1 text-gold">*</span>}
        </label>
        <span className="font-display uppercase tracking-stamp text-[10px] text-mute">
          {value.length} / {max}
        </span>
      </div>

      <div className="relative">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-haspopup="listbox"
          aria-expanded={open}
          className={`
            w-full min-h-[52px] bg-transparent border border-hairline rounded-sm
            px-4 py-3 text-left
            transition-all duration-500 premium-ease
            hover:border-gold/50
            focus:border-gold focus:shadow-[0_0_15px_rgba(212,175,55,0.15)] focus:bg-gold/5
            ${error ? "border-ember focus:border-ember focus:shadow-[0_0_15px_rgba(218,64,3,0.15)]" : ""}
            ${open ? "border-gold shadow-[0_0_15px_rgba(212,175,55,0.15)] bg-gold/5" : ""}
          `}
        >
          {selectedCountries.length === 0 ? (
            <span className="text-mute font-body italic">{placeholder}</span>
          ) : (
            <div className="flex flex-wrap gap-2">
              {selectedCountries.map((c) => (
                <span
                  key={c.code}
                  className="
                    inline-flex items-center gap-2 px-3 py-1
                    border border-hairline bg-charcoal
                    text-sm font-body
                  "
                  onClick={(e) => {
                    e.stopPropagation();
                    remove(c.code);
                  }}
                >
                  <span>{c.flag}</span>
                  <span>{c.name}</span>
                  <span
                    className="text-mute hover:text-paper transition-colors"
                    aria-label={`Remove ${c.name}`}
                  >
                    ×
                  </span>
                </span>
              ))}
            </div>
          )}
        </button>

        {open && (
          <div
            className="
              absolute z-20 mt-2 w-full bg-charcoal/95 backdrop-blur-md border border-gold/30
              rounded-sm shadow-[0_20px_50px_-10px_rgba(0,0,0,0.8),0_0_20px_rgba(212,175,55,0.1)] overflow-hidden
              animate-fade-up
            "
          >
            <div className="p-3 border-b border-gold/20">
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search…"
                className="
                  w-full bg-transparent text-paper placeholder-mute/60
                  font-body text-sm px-2 py-2 focus:outline-none focus:bg-white/5 transition-colors rounded-sm
                "
              />
            </div>
            <ul
              role="listbox"
              aria-multiselectable="true"
              className="max-h-64 overflow-y-auto scroll-thin"
            >
              {filtered.length === 0 && (
                <li className="px-4 py-3 text-mute font-body italic text-sm">
                  No country matches "{query}"
                </li>
              )}
              {filtered.map((c) => {
                const selected = value.includes(c.code);
                const disabled = !selected && atMax;
                return (
                  <li
                    key={c.code}
                    role="option"
                    aria-selected={selected}
                    aria-disabled={disabled}
                    onClick={() => !disabled && toggle(c.code)}
                    className={`
                      group px-4 py-2.5 flex items-center gap-3
                      cursor-pointer font-body text-sm
                      transition-all duration-300 premium-ease
                      ${selected ? "bg-gold/10" : ""}
                      ${disabled ? "opacity-30 cursor-not-allowed" : "hover:bg-gold/20 hover:pl-6"}
                    `}
                  >
                    <span
                      aria-hidden
                      className={`
                        inline-flex h-4 w-4 items-center justify-center
                        border transition-all duration-300 rounded-sm
                        ${selected ? "bg-gold border-gold shadow-[0_0_10px_rgba(212,175,55,0.4)]" : "border-mute group-hover:border-gold/50"}
                      `}
                    >
                      {selected && (
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          className="animate-[scale-in_200ms_ease-out]"
                        >
                          <path
                            d="M1.5 5.2L4 7.7L8.5 2.5"
                            stroke="#000000"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </span>
                    <span className="text-lg group-hover:scale-110 transition-transform duration-300">{c.flag}</span>
                    <span className={`flex-1 ${selected ? "text-gold" : "text-paper group-hover:text-gold"}`}>{c.name}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>

      {error ? (
        <p className="text-xs text-ember font-body italic">{error}</p>
      ) : (
        <p className="text-xs text-mute font-body italic">
          Select up to {max} countries you want to join missions for or attend
          music tours in.
        </p>
      )}
    </div>
  );
}
