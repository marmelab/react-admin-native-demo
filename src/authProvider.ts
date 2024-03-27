import polyglotI18nProvider from "ra-i18n-polyglot";
import englishMessages from "ra-language-english";

export const i18nProvider = polyglotI18nProvider(() => englishMessages, "en");
