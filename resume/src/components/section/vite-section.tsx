import React from 'react';


interface ViteSectionProps {
	title: string;
	id?: string;
}

export default function ViteSection({id, title, children}: {id: string, title: string,  children: React.ReactNode})  {
	return (
		<section className={"vite"} id={id}>
			<h1 className={"vite-title"}>{title}</h1>
			{children}
		</section>
	);
};
