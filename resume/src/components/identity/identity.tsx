'use client';

import React, {CSSProperties, JSX, use, useContext} from 'react';
import Image from 'next/image';
import {LanguageContext} from '@/lib/context/language-context';

import './identity.module.css';

import type {
    AboutProps,
    AccountProps,
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

import social from '@/public/images/social.jpg';

import {CssVarConstant, useCssVar} from "@/lib/utils/use-others";

const imageStyle: CSSProperties = {
    width: '15rem',
    height: '15rem',
    borderRadius: '50%',
    borderStyle: 'solid',
    zIndex: 5
};

const PINK = useCssVar(CssVarConstant.PINK);
const PURPLE = useCssVar(CssVarConstant.PURPLE);

function Personal({personal, id}: { personal: PersonalProps, id: string }) {
    return (
        <section className={'identity-personal'} id={id}>
            <h2 className={'identity-name'}>
                {personal.name}
                <span> | {personal.position}</span>
            </h2>
            <div className={"identity-avatar"}>
                <div className={'identity-avatar-container'}/>
                <Image
                    src={social}
                    style={imageStyle}
                    alt={'Avatar image'}
                    loading={'eager'}
                />
            </div>
            <div className={'identity-location'}>
				<span className={'identity-pin-container'}>
					<span className={'identity-pin'}>
						<MapPinAreaIcon size={16} color={PINK}/>
					</span>
				</span>
                <span className={'identity-city'}>
					{personal.city}, {personal.country}
				</span>
            </div>
        </section>
    );
};


function Contact({contact, social, accounts}: {contact: ContactProps, social: SocialProps, accounts: AccountProps[]}): JSX.Element {

    const openInNewTab = (url: string) => {
        let newWindow = undefined;
        if (typeof window !== 'undefined') {
            newWindow = window.open(url, '_blank', 'noopener, noreferrer');
        }
        if (newWindow)
            newWindow.opener = null;
    };

    const onClickUrl = (url: string) => {
        return () => openInNewTab(url);
    };

    return (
        <section className={'identity-contact'}>
            <h2>{contact.header}</h2>
            <p className={'identity-medium'}>
				<span className={'identity-contact-icon'}>
					<AtIcon
                        size={'var(--text-m)'}
                        color={PINK}
                        weight='duotone'
                    />
				</span>
                {contact.mail}
            </p>
            <p className={'identity-medium'}>
				<span className={'identity-contact-icon'}>
					<PhoneCallIcon
                        size={'var(--text-m)'}
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
};


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
        social,
        accounts
    } = languageContext.language === 'en'
        ? id.frontmatter.language.en
        : id.frontmatter.language.pl;
    return (
        <div className={'identity'}>
            <section className={'grid-section'}>
                <Personal id={'about'} personal={personal}/>
                <Contact contact={contact} social={social} accounts={accounts}/>
                <About about={about}/>
            </section>
        </div>
    );
}
