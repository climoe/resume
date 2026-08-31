import * as React from 'react';

import { useCn } from '@/lib/utils/use-others';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
	return (
		<input
			type={type}
			data-slot='input'
			className={useCn(
				'input',
				className
			)}
			{...props}
		/>
	);
}

export { Input };
