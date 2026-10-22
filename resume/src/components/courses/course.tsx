import React, {JSX} from 'react';
import {CheckCircleIcon, HourglassIcon} from '@phosphor-icons/react';

import {useCssVar} from "@/lib/utils/use-others";

export default function Course({ name, owner, description, realized } : {name: string, owner: string, description: string, realized: boolean}): JSX.Element {

	const PURPLE = useCssVar('PURPLE');

	return (
		<article className={"course"}>
			{realized ? (
				<i className={"course-completion"}>
					<CheckCircleIcon size={'2rem'} color={PURPLE} />
				</i>
			) : (
				<i className={"course-completion"}>
					<HourglassIcon size={'2rem'} color={PURPLE} />
				</i>
			)}
			<p className={"course-name"}>
				{name}
				<span className={"course-description"}> - {description}</span>
				<span className={"course-owner"}> - {owner}</span>
			</p>
		</article>
	);
};
