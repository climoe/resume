'use client';

import { Separator } from '@/components/ui/base/separator';
import { Button } from '@/components/ui/button/button'

import LinkedinIcon from '@/assets/social/linkedin';
import TwitterIcon from '@/assets/social/twitter';
import GithubIcon from "@/assets/social/github";
import EmailIcon from "@/assets/social/email";
import { AtomIcon, HeartIcon, PrinterIcon } from "@phosphor-icons/react";
import { JSX } from "react";

const Footer = ({ handlePrint }: { handlePrint: () => void}) => {

    type Socials = {
        label: string,
        component: JSX.Element
    }[]

    const socials: Socials = [
        { label: 'GitHub', component: (<GithubIcon/>) },
        { label: 'Email', component: (<EmailIcon/>) },
        { label: 'LinkedIn', component: (<LinkedinIcon/>) },
        { label: 'X', component: (<TwitterIcon/>) }
    ]

    return (
        <footer className='py-8 sm:py-16 lg:py-24'>
            <div className='mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center gap-3'>
                    <Separator className='flex-1' />
                <div className='flex items-center gap-3'>
                    {socials.map(social => (
                        <Button key={social.label} variant='outline' size='icon' aria-label={social.label} className='rounded-md'>
                            return ({ social.component })
                        </Button>
                    ))}
                </div>
                    <Separator className='flex-1' />
                </div>
            </div>
            <Separator />
            <div className='mx-auto flex max-w-7xl justify-center px-4 py-8 sm:px-6'>
                <p className='text-center font-medium text-balance'>
                    {`©${new Date().getFullYear()}`}{' '}
                    <a href='#' className='hover:underline'>
                        shadcn/studio
                    </a>
                    , Made with <span><AtomIcon size={12} className={'atom-royal'}/></span> and <span> <HeartIcon size={12} className={'heart-red'}/></span>❤️ for better web.
                </p>
                <PrinterIcon
                    size={'2rem'}
                    className={'fill-pink-500'}
                    weight='duotone'
                    onClick={handlePrint}/>
            </div>
        </footer>
    )
}

export default Footer
