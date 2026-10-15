'use client';

import React, {useRef, useState} from 'react';
import {useReactToPrint} from 'react-to-print';

import Input from "@/components/ui/base/input";
import Header from "@/components/shared/header";
import LayoutWithRef from "@/components/layout-ref/layout-ref";
import Switch from "@/components/button/switch/switch";
import {PrinterIcon} from '@phosphor-icons/react';

import { useCssVar} from "@/lib/utils/use-others";
import LanguageProvider from "@/lib/context/language-context";

import "../../globals.css";
import {Label} from "@/components/ui/base/label";



export function CVLayout({ children }: {children: React.ReactNode}): React.ReactNode {

	const PURPLE = useCssVar('PURPLE');
	const componentRef = useRef<HTMLElement>(null);
	const [companyName, setCompanyName] = useState<string>('');
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
				<LanguageProvider>
					<Header stylesheet={'../../globals.css'}/>
						<LayoutWithRef ref={componentRef}>
							<section className={'flex flex-row items-center justify-center'}>
								<Label className={'mr-[2rem] text-[1.5rem] print:hidden'}>Company Name:</Label>
								<Input
									className={'resume-input'}
									value={companyName}
									onChange={handleChangeCompanyName}/>
								<PrinterIcon className={'ml-[2rem] text-[2rem] print:hidden'}
									size={'4rem'}
									color={PURPLE}
									onClick={useHandlePrint()}/>
								<Switch sticky={true}/>
							</section>
							{children}
							<section className={'flex content-center justify-center m-[1.5rem_0] text-[1.5rem] italic text-center text-grey'}>
								<span>
									I consent to the processing by {companyName} my personal data
									included in my CV for the purposes of the recruitment
									process and further recruitment processes
								</span>
							</section>
						</LayoutWithRef>
				</LanguageProvider>
			</body>
		</html>
	);
}
export default CVLayout;
