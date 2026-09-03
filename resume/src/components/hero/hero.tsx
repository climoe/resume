'use client';

import React from 'react';
import { TerminalWindowIcon } from '@phosphor-icons/react';

const Hero = () => {
	return (
		<span className={'hero'}>
			<a className={'logo'} href='/'>
				<TerminalWindowIcon size={'2rem'} />
			</a>
		</span>
	);
};

export default Hero;
