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
        <nav className="sticky top-4 z-50 flex items-center px-6 py-2.5 mx-4 rounded-2xl border border-white/40 bg-white/30 backdrop-blur-xl backdrop-saturate-150 shadow-xl shadow-black/10">
            <div className="font-bold text-lg text-black shrink-0">
                {t('title')}
            </div>

            <div className="flex-1 flex items-center justify-center gap-1">
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