import { getTranslations, setRequestLocale } from 'next-intl/server'

export async function getT(locale: string, namespace?: string) {
    setRequestLocale(locale)
    return getTranslations(namespace)
}