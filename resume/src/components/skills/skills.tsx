'use client';

import React, { JSX, use } from 'react';

import { LanguageContext } from '@/lib/context/language-context';

import  ViteSection  from '@/components/section/vite-section';
import { SkillsRating } from '@/components/skills/skills-rating';
import { ReturnProps, SkillsProps } from '@/lib/content-loading/content-types';

// import './skills.module.css';

export default function Skills({
	skillset
}: {
	skillset: Promise<ReturnProps<SkillsProps>>;
}): JSX.Element {
	const context = use(LanguageContext);
	const skill = use(skillset);
	const { description, legend, skills } =
		context?.value === 'en'
			? skill.frontmatter.language.en
			: skill.frontmatter.language.pl;

	return (
		<ViteSection id='skills' title={description}>
			<div className={"skills"}>
				<section className={"category-grid"}>
					{skills.map((skill, index1) => {
						return (
							<section className={"category"} key={skill.category}>
								<h4 className={"skills-category"} key={index1}>
									{skill.category}
								</h4>
								<section className={"skills-grid"} key={skill.category}>
									{skill.items.map((item, index2) => {
										return (
											<SkillsRating
												skillName={item.name}
												skillRate={item.rate}
												skillDesc={item.description}
												key={index2}
											/>
										);
									})}
								</section>
							</section>
						);
					})}
				</section>
				<p className={"skills-legend"}>{legend}</p>
			</div>
		</ViteSection>
	);
}
