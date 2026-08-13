'use client'

import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'

type DropdownOption = {
    value: string
    label: string
    icon?: React.ReactNode
}

type DropdownProps = {
    options: DropdownOption[]
    value: string
    onChange: (value: string) => void
    placeholder?: string
}

function Dropdown({ options, value, onChange, placeholder }: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    const selected = options.find((o) => o.value === value)

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                setIsOpen(false)
            }
        }
        function handleEscape(e: KeyboardEvent) {
            if (e.key === 'Escape') setIsOpen(false)
        }
        document.addEventListener('mousedown', handleClickOutside)
        document.addEventListener('keydown', handleEscape)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
            document.removeEventListener('keydown', handleEscape)
        }
    }, [])

    function handleSelect(optionValue: string) {
        onChange(optionValue)
        setIsOpen(false)
    }

    return (
        <div ref={containerRef} className="relative inline-block">
            <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                className={clsx(
                    "flex items-center gap-2 pl-3 pr-2.5 py-1.5 rounded-full text-sm font-semibold text-black",
                    "bg-white/40 border border-white/50 backdrop-blur-sm",
                    "hover:bg-white/60 active:bg-white/70 transition-all duration-200 ease-in-out cursor-pointer",
                    isOpen && "bg-white/70 ring-2 ring-black/10"
                )}
            >
                {selected?.icon}
                <span>{selected ? selected.label : placeholder}</span>
                <svg
                    className={clsx(
                        "w-3.5 h-3.5 text-black/50 transition-transform duration-200 ease-in-out",
                        isOpen && "rotate-180"
                    )}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>

            <div
                className={clsx(
                    "absolute right-0 top-full mt-2 min-w-[10rem] origin-top-right",
                    "rounded-2xl border border-white/50 bg-white shadow-xl shadow-black/10 p-1.5",
                    "transition-all duration-150 ease-out",
                    isOpen
                        ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 scale-95 -translate-y-1 pointer-events-none"
                )}
            >
                {options.map((option) => {
                    const isSelected = option.value === value
                    return (
                        <button
                            key={option.value}
                            type="button"
                            onClick={() => handleSelect(option.value)}
                            className={clsx(
                                "w-full flex items-center gap-2.5 text-left px-3 py-2 rounded-xl text-sm cursor-pointer",
                                "transition-colors duration-150 ease-in-out",
                                isSelected
                                    ? "bg-zinc-300 text-black font-bold"
                                    : "text-black/70 hover:bg-black/5 hover:text-black font-semibold"
                            )}
                        >
                            {option.icon}
                            <span>{option.label}</span>
                            {isSelected && (
                                <svg className="w-3.5 h-3.5 ml-auto" viewBox="0 0 20 20" fill="currentColor">
                                    <path
                                        fillRule="evenodd"
                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            )}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

export default Dropdown