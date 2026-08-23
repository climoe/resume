'use client';

import React, {ComponentPropsWithRef, useContext, useRef, useState} from 'react';
import {useReactToPrint} from 'react-to-print';

import DefaultInput from "@/components/input/default-input";
import {PrinterIcon} from '@phosphor-icons/react';
import Header from "@/components/shared/header";

import {CssVarConstant, useCssVar} from "@/lib/utils/use-others";
import {LanguageContext} from "@/lib/context/language-context";

import "../../globals.css";

function LayoutWithRef(props: ComponentPropsWithRef<'div'>) {
	return <main {...props}>{props.children}</main>;
}

export function CVLayout({ children }: {children: React.ReactNode}): React.ReactNode {
	const DARK = useCssVar(CssVarConstant.DARK);

	const languageContext = useContext(LanguageContext);
	const componentRef = useRef<HTMLDivElement>(null);

	const [companyName, setCompanyName] = useState('');

	const pageStyle = `
      @page {
        size: A4;
        margin: .5in 0 .5in !important;
      }

      @page:first{
        margin-top: 0;
      } 
`;
	const printRef = useRef<HTMLDivElement>(null);
	const useHandlePrint = () =>
		useReactToPrint({
			contentRef: printRef,
			pageStyle: pageStyle,
			documentTitle: 'CV - Kamil Klimczak'
		});

	const handleChangeCompanyName = (event: React.ChangeEvent<HTMLInputElement>): void => {
		setCompanyName(event.target.value);
	};

	return (
		<LanguageContext value={languageContext}>
			<Header stylesheet={"../../globals.css"} />
			<section className={'row-flex-center'}>
				<DefaultInput
					value={companyName}
					onChange={handleChangeCompanyName}
				/>
				<PrinterIcon
					size={'4rem'}
					color={DARK}
					weight='duotone'
					onClick={useHandlePrint()}
				/>
			</section>
			<LayoutWithRef ref={componentRef}>
				{children}
				<section className={'processing-agree'}>
					<span>
						"I consent to the processing by my personal data
						included in my CV for the purposes of the recruitment
						process and further recruitment processes"
					</span>
				</section>
			</LayoutWithRef>
		</LanguageContext>

	);
}
export default CVLayout;
