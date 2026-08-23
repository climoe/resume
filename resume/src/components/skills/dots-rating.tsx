import React from 'react';
import {CircleWavyIcon} from '@phosphor-icons/react';
import {CssVarConstant, useCssVar,} from "@/lib/utils/use-others";

import './skills.module.css';

export const DotsRating = ({ range } : { range: number}) => {
	const PINK = useCssVar(CssVarConstant.PINK);
	const GRAY = useCssVar(CssVarConstant.GRAY);
	return (
		<div>
			{[...Array(range)].map((item, index) => {
				return (
					<CircleWavyIcon
						size={'1rem'}
						color={PINK}
						weight='duotone'
						key={index}
					/>
				);
			})}
			{[...Array(5 - range)].map((item, index) => {
				return (
					<CircleWavyIcon
						size={'1rem'}
						color={GRAY}
						weight='duotone'
						key={5 - index}
					/>
				);
			})}
		</div>
	);
};
