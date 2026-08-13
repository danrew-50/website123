import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

import enUs from '../messages/en-us.json'
import de from '../messages/de.json'

const messagesMap = {
    'en-us': enUs,
    'de': de,
} as const

export default getRequestConfig(async ({ requestLocale }) => {
    let locale = await requestLocale

    if (!locale || !routing.locales.includes(locale as 'en-us' | 'de')) {
        locale = routing.defaultLocale
    }

    return {
        locale,
        messages: messagesMap[locale as 'en-us' | 'de']
    }
})