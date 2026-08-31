'use client';

import React from 'react';
import { TerminalWindowIcon } from '@phosphor-icons/react';

const Hero = () => {
	return (
		<div className={'hero'}>
			<a className={'logo'} href='/'>
				<TerminalWindowIcon size={'6.4rem'} />
			</a>
		</div>
	);
};

export default Hero;
