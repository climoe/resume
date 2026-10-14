'use client';

import React, { JSX, use } from 'react';

import { LanguageContext } from '@/lib/context/language-context';
import  ViteSection  from '@/components/section/vite-section';
import  Course  from '@/components/courses/course';
import { CourseListProps, ReturnProps } from '@/lib/content-loading/content-types';

export default function CourseList({
	courses
}: {
	courses: Promise<ReturnProps<CourseListProps>>
}): JSX.Element {
	const context = use(LanguageContext);
	const c = use(courses);
	const { label, items } =
		context?.value === 'en'
			? c.frontmatter.language.en
			: c.frontmatter.language.pl;

	return (
		<ViteSection id='courses' title={label}>
			<ul>
				{items.map((item, index) => {
					return (
						<Course
							name={item.name}
							owner={item.owner}
							description={item.description}
							realized={item.realized}
							key={index}
						/>
					);
				})}
			</ul>
		</ViteSection>
	);
}
