'use client'

import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { useLenis } from '../SmoothScroll'

function StickyNavWrapper({ children }: { children: React.ReactNode }) {
    const [scrolled, setScrolled] = useState(false)
    const lenis = useLenis()

    useEffect(() => {
        if (!lenis) return

        function handleScroll({ scroll }: { scroll: number }) {
            setScrolled(scroll > 40)
        }

        lenis.on('scroll', handleScroll)
        return () => {
            lenis.off('scroll', handleScroll)
        }
    }, [lenis])

    return (
        <div
            className={clsx(
                "sticky z-50 transition-[top] duration-300 ease-in-out",
                scrolled ? "top-4" : "top-6"
            )}
        >
            {children}
        </div>
    )
}

export default StickyNavWrapper