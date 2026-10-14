'use client';

import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

import LanguageProvider from '@/lib/context/language-context';

import Footer from '@/components/ui/footer/footer';
import Header from '@/components/shared/header';
import LayoutWithRef from "@/components/layout-ref/layout-ref";

import './globals.css';

export default function PageLayout({ children }: React.PropsWithChildren): React.ReactNode {
	const componentRef = useRef<HTMLElement>(null);
	const pageStyle = `
		@page {
		  size: A4;
		  margin: .5in 0 .5in !important;
		}
	
		@page:first{
		  margin-top: 0;
		} 
	`;

	const handlePrint = useReactToPrint({
		contentRef: componentRef,
		pageStyle: pageStyle,
		documentTitle: 'CV - Kamil Klimczak'
	});

	return (
		<html lang='en'>
			<body>
				<LanguageProvider>
					<Header stylesheet={"./src/app/globals.css"}/>
					<LayoutWithRef ref={componentRef}>
						{children}
					<Footer handlePrint={handlePrint} />
					</LayoutWithRef>
				</LanguageProvider>
			</body>
		</html>
	);
}
