import React, { Suspense} from 'react';

import  CareerSection from '@/components/section/carrier-section';
import  AnimatedSection  from '@/components/section/animated-section';

import Consult from '@/components/shared/consult';
import Analyze from '@/components/shared/analyze';
import Preloader from '@/components/shared/preloader';

import Education from "@/components/education/education";
import Identity from '@/components/identity/identity';
import CourseList from '@/components/courses/course-list';
import Navbar  from '@/components/ui/navbar/navbar';
import type { NavigationItem } from '@/components/ui/navbar/navbar';

import Experience from "@/components/experience/experience";
import Skills from '@/components/skills/skills';

import { getAllCourses, getAllEducationEvents, getAllExperiences, getPersonalData, getTechnologySkills } from '@/lib/content-loading/content-loading'

export default async function HomePage() {
	const courses = getAllCourses();
	const experiences = getAllExperiences();
	const educations = getAllEducationEvents();
	const personal = getPersonalData();
	const skills = getTechnologySkills();

	const navigationData: NavigationItem = [
		{
			title: 'About Me',
			href: '#about'
		},
		{
			title: 'Experience',
			href: '#experience'
		},
		{
			title: 'Education',
			href: '#education'
		},
		{
			title: 'Skills',
			href: '#skills'
		},
		{
			title: 'Courses',
			href: '#courses'
		}
	]

	return (
		<Suspense fallback={<Preloader/>}>
			<div className={'homepage'}>
				<CareerSection>
					<Navbar />
					<AnimatedSection>
						<Identity identity={personal}/>
					</AnimatedSection>
					<AnimatedSection>
						<Experience experiences={experiences}/>
					</AnimatedSection>
					<AnimatedSection>
						<Consult/>
						<Education education={educations}/>
					</AnimatedSection>
					<AnimatedSection>
						<Skills skillset={skills}/>
						<Analyze/>
					</AnimatedSection>
					<AnimatedSection>
						<CourseList courses={courses}/>
					</AnimatedSection>
				</CareerSection>
			</div>
		</Suspense>
	);
}
