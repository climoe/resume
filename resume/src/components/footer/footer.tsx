import React from 'react';
import {AtomIcon, HeartStraightIcon, PrinterIcon} from '@phosphor-icons/react';

import {useCssVar} from "@/lib/utils/use-others";

export const Footer = ({ handlePrint }: { handlePrint: () => void}) => {

	const PINK = useCssVar('PINK')
	const ROYAL = useCssVar('ROYAL')

	return (
		<div className={"footer"}>
			<div className={"content"}>
				<span className={"content-by"}>
					Content made with{' '}
					<HeartStraightIcon size={'2rem'} color={PINK}/> and{' '}
					<AtomIcon size={'2rem'} color={ROYAL} />
				</span>
				<span className={"copyright"}>
					©climoe 2026. All rights reserved.
					<PrinterIcon
						size={'2rem'}
						color={PINK}
						weight='duotone'
						onClick={handlePrint}
					/>
				</span>
			</div>
		</div>
	);
};

export default Footer;
