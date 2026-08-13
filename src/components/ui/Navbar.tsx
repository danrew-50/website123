import { getTranslations } from 'next-intl/server'
import Button from './Button'
import LanguageSwitcher from './LanguageSwitcher'

type NavLink = {
    key: string
    href: string
}

const links: NavLink[] = [
    { key: 'home', href: '/' },
    { key: 'option1', href: '/1' },
    { key: 'option2', href: '/2' },
    { key: 'option3', href: '/3' },
]

async function Navbar() {
    const t = await getTranslations('navbar')

    return (
        <nav className="w-full flex items-center justify-between px-8 py-6 border-b border-white/40 bg-white/30 backdrop-blur-xl backdrop-saturate-150 shadow-lg shadow-black/5">
            <div className="font-bold text-lg text-black leading-tight shrink-0">
                {t('title')}
            </div>

            <div className="flex items-center gap-1">
                {links.map((link) => (
                    <Button key={link.key} text={t(link.key)} variant="ghost" href={link.href} size="sm" />
                ))}
            </div>

            <div className="shrink-0">
                <LanguageSwitcher />
            </div>
        </nav>
    )
}

export default Navbar