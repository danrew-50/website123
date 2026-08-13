'use client'

import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'

function StickyNavWrapper({ children }: { children: React.ReactNode }) {
    const [hidden, setHidden] = useState(false)
    const lastY = useRef(0)

    useEffect(() => {
        function handleScroll() {
            const currentY = window.scrollY
            const goingDown = currentY > lastY.current

            if (currentY < 80) {
                setHidden(false)
            } else if (goingDown) {
                setHidden(true)
            } else {
                setHidden(false)
            }

            lastY.current = currentY
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div
            className={clsx(
                "sticky top-0 z-50 transition-[top] duration-300 ease-in-out",
                hidden ? "-top-[6rem]" : "top-0"
            )}
        >
            {children}
        </div>
    )
}

export default StickyNavWrapper