'use client'

import React, {JSX, useRef} from 'react';

import { Button } from '@/components/ui/button/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu/dropdown-menu'

import useSticky from "@/lib/utils/use-sticky";
import {ListIcon, MagnifyingGlassIcon, TerminalWindowIcon} from "@phosphor-icons/react";


export type NavigationItem = {
    title: string
    href: string
}[]

const Navbar = ({ navigationData }: { navigationData: NavigationItem }): JSX.Element => {
    const elementRef = useRef<HTMLElement>(null);
    const isSticky: boolean = useSticky(elementRef);

    return (
        <header className='bg-background sticky top-0 z-50' ref={elementRef} data-sticky={isSticky}>
            <div className='mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-8 sm:px-6'>
                <div className='text-muted-foreground flex flex-5 items-center jusify-areound gap-8 font-medium md:justify-center lg:gap-16'>
                    <a href='#about' className='flex-1 hover:text-primary max-md:hidden'>
                        About Me
                    </a>
                    <a href='#experience' className='flex-1 hover:text-primary max-md:hidden'>
                        Experience
                    </a>
                    <span className={'align-self-center hero'}>
                        <a className={'logo'} href='/'>
				            <TerminalWindowIcon size={'2.5rem'} />
			            </a> climoe/resume
		            </span>
                    <a href='#education' className='flex-1 hover:text-primary max-md:hidden'>
                        Education
                    </a>
                    <a href='#skills' className='flex-1 hover:text-primary max-md:hidden'>
                        Skills
                    </a>
                </div>

                <div className='flex items-center gap-6'>
                    <Button variant='ghost' size='icon'>
                        <MagnifyingGlassIcon />
                        <span className='sr-only'>Search</span>
                    </Button>
                    <DropdownMenu>
                        <DropdownMenuTrigger className='md:hidden'>
                            <ListIcon />
                            <span className='sr-only'>Menu</span>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className='w-56' align='end'>
                            <DropdownMenuGroup>
                                {navigationData.map((item, index) => (
                                    <DropdownMenuItem key={index}>
                                        <a href={item.href}>{item.title}</a>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    )
}

export default Navbar
