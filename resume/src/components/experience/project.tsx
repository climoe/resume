import React from 'react';

import { Technology } from './technology';
import {ExperienceTechnologyProps} from "@/lib/content-loading/content-types";
// import './experience.module.css'

export const Project = ({ name, position, details, role, technologies }:
		{name: string, position: string, details: string, role: string, technologies: ExperienceTechnologyProps[]}) => {
	return (
		<section className={"project"}>
			<h5 className={"project-name"}>{name}</h5>
			<h5 className={'project-position'}>{position}</h5>
			<article className={'project-details'}>{details}</article>
			<article className={'project-role'}>{role}</article>
			<p className={'project-technologies'}>
				{technologies.map((tech, index) => {
					return <Technology name={tech.name} key={index}/>;
				})}
			</p>
		</section>
	);
};
