'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import Button from './Button'
import LanguageSwitcher from './LanguageSwitcher'

type MobileNavLink = {
    key: string
    href: string
    label: string
}

type MobileNavProps = {
    title: string
    links: MobileNavLink[]
}

function MenuIcon() {
    return (
        <svg width="40" height="40" viewBox="0 0 100 100">
            <path
                className="line line1"
                d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
            />
            <path className="line line2" d="M 20,50 H 80" />
            <path
                className="line line3"
                d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
            />
        </svg>
    )
}

function MobileNav({ title, links }: MobileNavProps) {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : ''
        return () => {
            document.body.style.overflow = ''
        }
    }, [isOpen])

    useEffect(() => {
        function handleEscape(e: KeyboardEvent) {
            if (e.key === 'Escape') setIsOpen(false)
        }
        document.addEventListener('keydown', handleEscape)
        return () => document.removeEventListener('keydown', handleEscape)
    }, [])

    return (
        <>
            <nav
                className={clsx(
                    "w-full relative z-[70] flex items-center justify-between px-8 py-6 border-b backdrop-blur-xl backdrop-saturate-150 shadow-lg shadow-black/5 transition-colors duration-300",
                    isOpen ? "bg-black/50 border-white/10 text-white" : "bg-white/30 border-white/40 text-black"
                )}
            >
                <div className="font-bold text-lg leading-tight shrink-0">
                    {title}
                </div>

                <div className="hidden md:flex items-center gap-1">
                    {links.map((link) => (
                        <Button key={link.key} text={link.label} variant="ghost" href={link.href} size="sm" />
                    ))}
                </div>

                <div className="flex items-center gap-3 shrink-0">
                    <div className="rounded-full bg-white">
                        <LanguageSwitcher />
                    </div>
                    <button
                        type="button"
                        aria-label="Toggle menu"
                        aria-expanded={isOpen}
                        onClick={() => setIsOpen((prev) => !prev)}
                        className={clsx('menu flex items-center -mr-2 md:hidden', isOpen && 'opened')}
                    >
                        <MenuIcon />
                    </button>
                </div>
            </nav>

            <div
                className={clsx(
                    "fixed inset-0 z-[60] md:hidden bg-black text-white",
                    "flex flex-col items-center justify-center gap-10 px-8",
                    "transition-opacity duration-500 ease-in-out",
                    isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                )}
            >
                {links.map((link, index) => (
                    <Link
                        key={link.key}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        style={{ transitionDelay: isOpen ? `${120 + index * 80}ms` : '0ms' }}
                        className={clsx(
                            "text-4xl sm:text-5xl font-bold tracking-tight",
                            "hover:opacity-70 active:opacity-50",
                            "transition-all duration-500 ease-out",
                            isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                        )}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        </>
    )
}

export default MobileNav
