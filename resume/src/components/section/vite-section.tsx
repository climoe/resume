import React from 'react';

// import './section.module.css';

export default function ViteSection({id, title, children}: {id?: string, title: string,  children?: React.ReactNode})  {
	return (
		<section className={"vite"} id={id}>
			<h1 className={"vite-title"}>{title}</h1>
			{children}
		</section>
	);
};
