'use client'

import React, {JSX, useRef} from 'react';

import useSticky from "@/lib/utils/use-sticky";
import Switch from "@/components/button/switch/switch";
import {TerminalWindowIcon} from "@phosphor-icons/react";


export type NavigationItem = {
    title: string
    href: string
}[]

const Navbar = (): JSX.Element => {
    const elementRef = useRef<HTMLElement>(null);
    const isSticky: boolean = useSticky(elementRef);

    return (
        <header className={'navbar'} ref={elementRef} data-sticky={isSticky}>
            <div className={'menu'}>
                <div className={'navbar-items'}>
                    <a href={'#about'} className='flex-1 hover:text-primary max-md:hidden'>
                        About Me
                    </a>
                    <a href={'#experience'} className='flex-1 hover:text-primary max-md:hidden'>
                        Experience
                    </a>
                    <div className={'hero'}>
                        <a className={'logo'} href='/'>
				            <TerminalWindowIcon size={'1.5rem'} />
			            </a>
                        <span className={'developer'}>climoe</span>
		            </div>
                    <a href={'#education'} className='flex-1 hover:text-primary max-md:hidden'>
                        Education
                    </a>
                    <a href={'#skills'} className='flex-1 hover:text-primary max-md:hidden'>
                        Skills
                    </a>
                </div>
                <div className='flex items-center gap-6'>
                    <Switch sticky={true}/>
                </div>
                <a href={'/cv'} className={'hover:text-primary max-md:hidden'}>
                    CV
                </a>
            </div>
        </header>
    )
}

export default Navbar
