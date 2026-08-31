import React, { Suspense} from 'react';

import  CareerSection from '@/components/section/carrier-section';
import  AnimatedSection  from '@/components/section/animated-section';

import Dev from '@/components/shared/dev';
import Consult from '@/components/shared/consult';
import Analyze from '@/components/shared/analyze';
import Preloader from '@/components/shared/preloader';

import MainTitle from '@/components/shared/main-title';
import Education from "@/components/education/education";
import Identity from '@/components/identity/identity';
import CourseList from '@/components/courses/course-list';
import Menu from '@/components/menu/menu';
import Experience from "@/components/experience/experience";
import  Skills from '@/components/skills/skills';
import Timeline from "@/components/ui/timeline/timeline";
import Hero from "@/components/hero/hero";

import { getAllCourses, getAllEducationEvents, getAllExperiences, getMainTitleData, getPersonalData, getTechnologySkills } from '@/lib/content-loading/content-loading'

export default async function HomePage() {
	const mainTitle = getMainTitleData();
	const courses = getAllCourses();
	const experiences = getAllExperiences();
	const educations = getAllEducationEvents();
	const personal = getPersonalData();
	const skills = getTechnologySkills();

	return (
		<Suspense fallback={<Preloader />}>
			<div className={'homepage'}>
				<section className={"intro"}>
					<section className={'row-flex-section'}>
						<MainTitle mainTitle={mainTitle} />
						<Dev />
					</section>
				</section>
				<Menu />
				<Hero />
				<CareerSection>
					<AnimatedSection>
						<Timeline/>
					</AnimatedSection>
					<AnimatedSection>
						<Identity identity={personal} />
					</AnimatedSection>
					<AnimatedSection>
						<Experience experiences={experiences} />
					</AnimatedSection>
					<AnimatedSection>
						<Consult />
						<Education education={educations} />
					</AnimatedSection>
					<AnimatedSection>
						<Skills skillset={skills} />
						<Analyze />
					</AnimatedSection>
					<AnimatedSection>
						<CourseList courses={courses} />
					</AnimatedSection>
				</CareerSection>
			</div>
		</Suspense>
	);
}
