import React from 'react';

import { SkillsRatingDots } from '@/components/skills/skills-rating-dots';

// import './skills.module.css';

export const SkillsRating = ({ skillName, skillRate, skillDesc } : {skillName: string, skillRate: number, skillDesc: string}) => {
	return (
		<article className={"skills-rating"}>
			<h5 className={"skill-name"}>{skillName}</h5>
			<SkillsRatingDots range={skillRate} />
			<p className={"skills-description"}>{skillDesc}</p>
		</article>
	);
};
