'use client';

import React, {JSX, useRef} from 'react';
import Link from 'next/link';

import Switch from '@/components/button/switch/switch';
import useSticky from '@/lib/utils/use-sticky';
import './menu.module.css';

export default function Menu () : JSX.Element{
	const elementRef = useRef<HTMLElement>(null);
	const isSticky: boolean = useSticky(elementRef);

	return (
		<nav className={'menu'} ref={elementRef} data-sticky={isSticky}>
			<li>
				<Link href='/#about' title='About' />
			</li>
			<li>
				<Link href='/#experience' title='Career' />
			</li>
			<li>
				<Link href='/#education' title='Eductaion' />
			</li>
			<li>
				<Link href='/#technology' title='Technology' />
			</li>
			<li>
				<Link href='/#courses' title='Courses' />
			</li>
			<Switch sticky={isSticky} />
		</nav>
	);
};