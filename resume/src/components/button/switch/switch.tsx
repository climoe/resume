'use client';

import React, {JSX, useCallback, useContext, useState } from 'react';
import './switch.module.css'

import { AnimatePresence, motion } from 'framer-motion';
import { GlobeHemisphereWestIcon, TranslateIcon } from '@phosphor-icons/react';
import { LanguageContext } from '@/lib/context/language-context';


export default function Switch({ sticky } : {sticky: boolean}) : JSX.Element {
	const [isEn, setIsEn] = useState(true);
	const languageContext = useContext(LanguageContext);

	const toggleSwitch = useCallback(() => {
		setIsEn(!isEn);
		languageContext.switch(languageContext.language);
	}, [isEn, languageContext]);

	return (
		<LanguageContext value={languageContext}>
			<div
				role={'button'}
				className={'switch-container'}
				data-sticky={sticky}
				data-darkmode={isEn}
				style={{ justifyContent: isEn ? 'flex-end' : 'flex-start' }}
				onClick={toggleSwitch}
				onKeyDown={toggleSwitch}
				tabIndex={0}>
				<motion.div
					layout
					className={'handle'}
					data-sticky={sticky}>
					<AnimatePresence initial={false}>
						<motion.i
							className={'icon'}
							key={isEn ? 'en' : 'pl'}
							initial={{ y: -30, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: 30, opacity: 0 }}
							transition={{ duration: 0.2 }}>
							{isEn ? (
								<GlobeHemisphereWestIcon size={'3rem'} />
							) : (
								<TranslateIcon size={'3rem'} />
							)}
						</motion.i>
					</AnimatePresence>
				</motion.div>
			</div>
		</LanguageContext>
	);
};
