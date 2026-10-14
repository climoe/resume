import React, {JSX} from 'react';
import Head from 'next/head';

export default function Header({stylesheet}: {stylesheet: string}): JSX.Element {
	const metadata = {
		name: 'Climoe',
		content: 'Welcome on my site about IT eXperience'
	};
	return (
		<>
			<Head>
				<title>climoe | IT Software Engineer</title>
				<meta name={metadata.name} content={metadata.content}/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
				<link rel="icon" href="/icon?<generated>" type="image/<generated>" sizes="<generated>"/>
				<link rel="stylesheet" href={stylesheet}/>
			</Head>
		</>
	);
}
