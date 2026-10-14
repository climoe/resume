'use client';

import {createContext, ReactNode, useMemo, useState} from 'react';

export type Language = 'en' | 'pl';

export type LanguageContextProps = {
	value: Language,
	toggle: () => Language
};

export const LanguageContext = createContext<LanguageContextProps | null>(null);

function LanguageProvider({ children }: { children: ReactNode }) {
	const [lang, setLang] = useState<Language>('en');

	const contextValue = useMemo<LanguageContextProps>(() => {
		return {
			value: lang,
			toggle: () => {
				const nextLang: Language = lang === 'en' ? 'pl' : 'en';
				setLang(nextLang);
				return nextLang;
			}
		};
	}, [lang]);

	return (
		<LanguageContext value={contextValue}>
			{children}
		</LanguageContext>
	);
}
export default LanguageProvider;
