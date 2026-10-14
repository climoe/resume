'use client';

import React, {JSX, use, useState} from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { GlobeHemisphereWestIcon, TranslateIcon } from '@phosphor-icons/react';
import {LanguageContext} from '@/lib/context/language-context'

export default function Switch({ sticky = true} : { sticky: boolean}) : JSX.Element {
	const [isEn, setIsEn] = useState(true);
	const context = use(LanguageContext);

	const toggleSwitch = () => {
		setIsEn(!isEn);
		context?.toggle();
	};

	return (
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
						initial={{x: -10, opacity: 0}}
						animate={{x: 0, opacity: 1}}
						exit={{x: -10,  opacity: 0}}
						transition={{ duration: 0.025}}>
						{isEn ? (
							<GlobeHemisphereWestIcon size={'2.5rem'} />
						) : (
							<TranslateIcon size={'2.5rem'} />
						)}
					</motion.i>
				</AnimatePresence>
			</motion.div>
		</div>
	);
};
