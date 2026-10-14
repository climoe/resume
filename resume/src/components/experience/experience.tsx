'use client';

import React, { JSX, use } from 'react';
import { motion } from 'framer-motion';

import  ViteSection  from '@/components/section/vite-section';
import { Project } from '@/components/experience/project';
import { LanguageContext } from '@/lib/context/language-context';
import type { ExperienceListProps, ReturnProps } from '@/lib/content-loading/content-types';
// import './experience.module.css';

export default function Experience({
	experiences
}: {
	experiences: Promise<ReturnProps<ExperienceListProps>>;
}): JSX.Element {
	const context = use(LanguageContext);
	const exp = use(experiences);
	const { label, experience } =
		context?.value === 'en'
			? exp.frontmatter.language.en
			: exp.frontmatter.language.pl;

	return (
		<ViteSection id='experience' title={label}>
			<ul>
				{experience.map((exp, index) => {
					return (
						<motion.li whileTap={{ scale: 0.95 }} key={index}>
							<time>
								{exp.time.from} - {exp.time.to}
							</time>
							<span className='company'>
								<strong>{exp.company}</strong>
								{exp.projects.map((p, index) => {
									return (
										<Project
											name={p.name}
											position={p.position}
											details={p.description}
											role={p.role}
											technologies={p.technology}
											key={index}
										/>
									);
								})}
							</span>
						</motion.li>
					);
				})}
			</ul>
		</ViteSection>
	);
}
