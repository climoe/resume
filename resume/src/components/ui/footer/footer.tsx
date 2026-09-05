'use client';

import { Separator } from '@/components/ui/base/separator';
import { Button } from '@/components/ui/button/button'

import {AtomIcon, LinkedinLogoIcon, AtIcon, XLogoIcon, GithubLogoIcon, HeartIcon, PrinterIcon} from "@phosphor-icons/react";
import { JSX } from "react";

const Footer = ({ handlePrint }: { handlePrint: () => void}) => {

    type Socials = {
        label: string,
        component: JSX.Element
    }[]

    const socials: Socials = [
        { label: 'GitHub', component: (<GithubLogoIcon size={32} color={'#000000'}/>) },
        { label: 'Email', component: (<AtIcon size={32} color={'#000000'}/>) },
        { label: 'LinkedIn', component: (<LinkedinLogoIcon size={32} color={'#000000'}/>) },
        { label: 'X', component: (<XLogoIcon size={32} color={'#000000'}/>) }
    ]

    return (
        <footer className='py-8 sm:py-16 lg:py-24'>
            <div className='mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center gap-3'>
                    <Separator className='flex-1' />
                    <div className='flex items-center gap-3'>
                        {socials.map(social => (
                            <Button key={social.label} variant='outline' size='icon' aria-label={social.label} className='rounded-md'>
                                { social.component }
                            </Button>
                        ))}
                    </div>
                    <Separator className={'flex-1'}/>
                </div>
            </div>
            <div className='mx-auto w-5xl space-around justify-center align-items-center px-4 py-8 sm:px-6'>
                <p className='w-[50rem] flex flex-3 font-medium justify-center align-self-center gap-2'>
                    <a className=' flex-1 hover:underline'>
                        {`©${new Date().getFullYear()}`}  climoe
                    </a>
                    <span className={'flex-1 w-[30rem] inline-flex justify-center align-self-center gap-1'}>
                        Made with <AtomIcon size={24} color={'#38ACF5FF'} className={'atom-royal'}/> and <HeartIcon color={'#501A96FF'} size={24} /> for better web.
                    </span>
                    <PrinterIcon
                        size={'2rem'}
                        className={'flex-1 stroke-pink-500'}
                        onClick={handlePrint}/>
                </p>
            </div>
        </footer>
    )
}

export default Footer
