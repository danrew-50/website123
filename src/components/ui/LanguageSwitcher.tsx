'use client'

import { useLocale, useTranslations } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { useTransition } from 'react'
import Dropdown from './Dropdown'

const locales = [
    { code: 'en-us', flag: '🇺🇸' },
    { code: 'de', flag: '🇩🇪' },
] as const

function LanguageSwitcher() {
    const t = useTranslations('languageSwitcher')
    const locale = useLocale()
    const router = useRouter()
    const pathname = usePathname()
    const [, startTransition] = useTransition()

    function handleChange(nextLocale: string) {
        const segments = pathname.split('/')
        segments[1] = nextLocale
        const newPath = segments.join('/')

        startTransition(() => {
            router.replace(newPath)
        })
    }

    const options = locales.map(({ code, flag }) => ({
        value: code,
        label: t(code),
        icon: <span className="text-base leading-none">{flag}</span>,
    }))

    return (
        <Dropdown options={options} value={locale} onChange={handleChange} />
    )
}

export default LanguageSwitcher