'use client';

import React, {JSX, use, useContext} from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar/avatar";
import {LanguageContext} from '@/lib/context/language-context';

import social from '../../public/images/social.jpg';

import type {
    AboutProps,
    ContactProps,
    IdentityProps,
    PersonalProps,
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

import {CssVarConstant, useCssVar} from "@/lib/utils/use-others";

function Personal({personal, id}: { personal: PersonalProps, id: string }) {

    const PINK = useCssVar(CssVarConstant.PINK);

    return (
        <section className={'identity-personal'} id={id}>
            <h2 className={'identity-name'}>
                {personal.name}
                <span> | {personal.position}</span>
            </h2>
            <div className={"identity-avatar"}>
                <div className={'identity-avatar-container'}/>
                <Avatar size={'lg'}>
                    <AvatarImage src={social.src}/>
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
            <div className={'identity-location'}>
				<span className={'identity-pin-container'}>
					<span className={'identity-pin'}>
						<MapPinAreaIcon size={48} color={PINK}/>
					</span>
				</span>
                <span className={'identity-city'}>
					{personal.city}, {personal.country}
				</span>
            </div>
        </section>
    )
}


function Contact({contact, social} : {contact: ContactProps, social: SocialProps}): JSX.Element {

    const PURPLE = useCssVar(CssVarConstant.PURPLE);
    const PINK = useCssVar(CssVarConstant.PINK);
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
    const languageContext = useContext(LanguageContext);
    const id = use(identity);
    const {
        personal,
        about,
        contact,
        social
    } = languageContext.language === 'en'
        ? id.frontmatter.language.en
        : id.frontmatter.language.pl;
    return (
        <div className={'identity'}>
            <section className={'grid-section'}>
                <Personal id={'about'} personal={personal}/>
                <Contact contact={contact} social={social}/>
                <About about={about}/>
            </section>
        </div>
    );
}
