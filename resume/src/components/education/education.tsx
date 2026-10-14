'use client';

import React, { JSX, use } from 'react';
import { motion } from 'framer-motion';

import { LanguageContext } from '@/lib/context/language-context';
import ViteSection from '@/components/section/vite-section';
import type { EducationProps, ReturnProps } from '@/lib/content-loading/content-types';

export default function Education({
	education
}: {
	education: Promise<ReturnProps<EducationProps>>;
}): JSX.Element {
	const context = use(LanguageContext);
	const edu = use(education);
	const { title, events } =
		context?.value === 'en'
			? edu.frontmatter.language.en
			: edu.frontmatter.language.pl;
	return (
		<ViteSection id='education' title={title}>
			<ul>
				{events.map((ev, index) => {
					return (
						<motion.li whileTap={{ scale: 0.95 }} key={index}>
							<time>
								{ev.time.from} - {ev.time.to}
							</time>
							<span>
								<strong>{ev.title}</strong>
								{ev.description}
							</span>
						</motion.li>
					);
				})}
			</ul>
		</ViteSection>
	);
}
