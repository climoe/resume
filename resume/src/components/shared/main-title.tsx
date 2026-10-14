'use client';

import React, { JSX, use } from 'react';

import { LanguageContext } from '@/lib/context/language-context';
import { LanguageProps, ReturnProps } from '@/lib/content-loading/content-types';

// import './shared.module.css';

export default function MainTitle({mainTitle}: {mainTitle: Promise<ReturnProps<LanguageProps>>}): JSX.Element {
	const context = use(LanguageContext);
	const title = use(mainTitle);
	const { first, second } =
		context?.value === 'en'
			? title.frontmatter.language.en
			: title.frontmatter.language.pl;

	return (
		<p className={"main-title"}>
			{first} <span> {second} </span>
		</p>
	);
}
