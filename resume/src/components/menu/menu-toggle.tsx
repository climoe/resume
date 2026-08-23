import * as React from 'react';
import {JSX} from 'react';
import {UserCircleIcon} from '@phosphor-icons/react';

import {CssVarConstant, useCssVar} from "@/lib/utils/use-others";
import './menu.module.css';

export default function MenuToggle({
	toggle,
	scrolled
}: {
	toggle: () => void;
	scrolled: boolean;
}): JSX.Element {
	const DARK = useCssVar(CssVarConstant.DARK)
	return (
		<button className={"toggle"} data-scrolled={scrolled} onClick={toggle}>
			<UserCircleIcon
				size={'8rem'}
				color={DARK}
				weight='duotone'
			/>
		</button>
	);
}
