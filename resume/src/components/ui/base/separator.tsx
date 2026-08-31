'use client';

import * as React from 'react';
import { Separator as SeparatorPrimitive } from 'radix-ui';

import { useCn } from '@/lib/utils/use-others';

function Separator({
	className,
	orientation = 'horizontal',
	decorative = true,
	...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
	return (
		<SeparatorPrimitive.Root
			data-slot='separator'
			decorative={decorative}
			orientation={orientation}
			className={useCn(
				'separator',
				className
			)}
			{...props}
		/>
	);
}

export { Separator };
