'use client';

import React, {JSX, use} from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar/avatar";
import {LanguageContext} from '@/lib/context/language-context';

import socialImage from '../../public/images/social.jpg';

import type {
    AboutProps,
    ContactProps,
    IdentityProps,
    ReturnProps,
    SocialProps
} from '@/lib/content-loading/content-types';

import {
    AtIcon,
    GithubLogoIcon,
    LinkedinLogoIcon,
    MapPinAreaIcon,
    PhoneCallIcon,
    TwitterLogoIcon
} from '@phosphor-icons/react';

import {useCssVar} from "@/lib/utils/use-others";


function Contact({contact, social} : {contact: ContactProps, social: SocialProps}): JSX.Element {

    const PURPLE = useCssVar('PURPLE');
    const PINK = useCssVar('PINK');
    const openInNewTab = (url: string) => {
        let newWindow = undefined;
        if (typeof window !== 'undefined') {
            newWindow = window.open(url, '_blank', 'noopener, noreferrer');
        }
        if (newWindow)
            newWindow.opener = null;
    };
    const accounts = social.accounts;
    function onClickUrl(url: string)  {
        return () => openInNewTab(url);
    }

    return (
        <section className={'identity-contact'}>
            <h2>{contact.header}</h2>
            <p className={'identity-medium'}>
				<span className={'identity-contact-icon'}>
					<AtIcon
                        size={24}
                        color={PINK}
                        weight='duotone'
                    />
				</span>
                 {contact.mail}
            </p>
            <p className={'identity-medium'}>
				<span className={'identity-contact-icon'}>
					<PhoneCallIcon
                        size={24}
                        color={PURPLE}
                        weight='duotone'
                    />
				</span>
                {contact.phone}
            </p>
            <h2>{social.header}</h2>
            <section className={'identity-accessibility'}>
                <LinkedinLogoIcon
                    size={'3rem'}
                    color={PURPLE}
                    weight='duotone'
                    onClick={onClickUrl(accounts[0].url)}
                />
                <TwitterLogoIcon
                    size={'3rem'}
                    color={PURPLE}
                    weight='duotone'
                    onClick={onClickUrl(accounts[1].url)}
                />
                <GithubLogoIcon
                    size={'3rem'}
                    color={PURPLE}
                    weight='duotone'
                    onClick={onClickUrl(accounts[2].url)}
                />
            </section>
        </section>
    );
}

function About({about} : { about: AboutProps}): JSX.Element {
    return (
        <div className={'identity-about'}>
            <h2>{about.header}</h2>
            <h3>{about.content}</h3>
        </div>
    );
}


export default function Identity({
	 identity
 }: {
    identity: Promise<ReturnProps<IdentityProps>>;
}): JSX.Element {

    const context = use(LanguageContext);

    const id = use(identity);
    const {
        personal,
        about,
        contact,
        social
    } = context?.value === 'en'
        ? id.frontmatter.language.en
        : id.frontmatter.language.pl;

    const PINK = useCssVar('PINK');


    return (
        <>
            <div className={'identity'}>
                <section className={'identity-info'}>
                    <h2 className={'identity-name'}>
                    {personal.name}
                    <span> | {personal.position}</span>
                </h2>
                    <section className={'identity-personal'}>
                    <div className={"identity-avatar"}>
                        <div className={'identity-avatar-container'}/>
                        <Avatar size={'lg'}>
                            <AvatarImage src={socialImage.src}/>
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                    <div className={'identity-location'}>
                            <span className={'identity-pin'}>
                                <MapPinAreaIcon size={'4rem'} fill={PINK}/>
                            </span>
                            <span className={'identity-city'}>
                            {personal.city}, {personal.country}
                        </span>
                    </div>
                </section>
                </section>
                <Contact contact={contact} social={social}/>
            </div>
            <About about={about}/>
        </>
    );
}
