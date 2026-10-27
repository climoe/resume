'use client';

import { Separator } from '@/components/ui/base/separator';
import { Button } from '@/components/ui/button/button'

import {AtomIcon, LinkedinLogoIcon, AtIcon, XLogoIcon, GithubLogoIcon, HeartIcon, PrinterIcon} from "@phosphor-icons/react";
import { JSX } from "react";
import {useCssVar} from "@/lib/utils/use-others";

const Footer = ({ handlePrint }: { handlePrint: () => void}) => {

    const PURPLE = useCssVar('PURPLE')
    const ROYAL = useCssVar('ROYAL')

    type Socials = {
        label: string,
        component: JSX.Element
    }[]

    const socials: Socials = [
        { label: 'GitHub', component: (<GithubLogoIcon size={40} color={useCssVar('DARK')}/>) },
        { label: 'Email', component: (<AtIcon size={40} color={useCssVar('PURPLE')}/>) },
        { label: 'LinkedIn', component: (<LinkedinLogoIcon size={40} color={useCssVar('ROYAL')}/>) },
        { label: 'X', component: (<XLogoIcon size={40} color={useCssVar('DARK')}/>) }
    ]

    return (
        <footer className='footer-main'>
            <div className='footer-separator-bar'>
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
            <div className='footer-info'>
                <span className={'footer-tech'}>
                    <span>Made with<AtomIcon size={'2rem'} color={ROYAL}/></span>
                    <span>and <HeartIcon size={'2rem'} color={PURPLE}/>for better web.</span>
                </span>
                <span className='footer-copyright'>
                    <span className={'footer-rights'}>{`©${new Date().getFullYear()}`} climoe. All rights reserved.</span>
                    <PrinterIcon className={'footer-printer'} size={'2rem'} onClick={handlePrint}/>
                </span>
            </div>
        </footer>
    )
}

export default Footer
