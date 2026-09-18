'use client';

import React, {useContext, useRef, useState} from 'react';
import {useReactToPrint} from 'react-to-print';

import DefaultInput from "@/components/input/default-input";
import Header from "@/components/shared/header";
import LayoutWithRef from "@/components/layout-ref/layout-ref";
import {PrinterIcon} from '@phosphor-icons/react';

import {CssVarConstant, useCssVar} from "@/lib/utils/use-others";
import {LanguageContext} from "@/lib/context/language-context";

import "../../globals.css";



export function CVLayout({ children }: {children: React.ReactNode}): React.ReactNode {

	const DARK = useCssVar(CssVarConstant.DARK);
	const languageContext = useContext(LanguageContext);
	const componentRef = useRef<HTMLElement>(null);
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
	const useHandlePrint = () =>
		useReactToPrint({
			contentRef: componentRef,
			pageStyle: pageStyle,
			documentTitle: 'CV - Kamil Klimczak'
		});

	const handleChangeCompanyName = (event: React.ChangeEvent<HTMLInputElement>): void => {
		setCompanyName(event.target.value);
	};

	return (
		<html lang={'en'}>
			<body>
				<LanguageContext value={languageContext}>
					<Header stylesheet={'../../globals.css'}
							favicon={'../../favicon.svg'}/>
						<LayoutWithRef ref={componentRef}>
							<section className={'flex flex-row items-center justify-center'}>
								<DefaultInput
									value={companyName}
									onChange={handleChangeCompanyName}/>
								<PrinterIcon
									size={'4rem'}
									color={DARK}
									weight='duotone'
									onClick={useHandlePrint()}/>
							</section>
							{children}
							<section className={'flex content-center justify-center m-[1.5rem_0] text-[1.5rem] italic text-center text-grey'}>
								<span>
									"I consent to the processing by ${companyName} my personal data
									included in my CV for the purposes of the recruitment
									process and further recruitment processes"
								</span>
							</section>
						</LayoutWithRef>
				</LanguageContext>
			</body>
		</html>
	);
}
export default CVLayout;
