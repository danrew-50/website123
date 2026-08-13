import { getTranslations } from 'next-intl/server'
import MobileNav from './MobileNav'

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
        <MobileNav
            title={t('title')}
            links={links.map((link) => ({ key: link.key, href: link.href, label: t(link.key) }))}
        />
    )
}

export default Navbar
