import React from 'react';

import './input.module.css';

export default function DefaultInput({
	onChange,
	value
} : {
	onChange: (event: React.ChangeEvent) => void,
	value: string
}) {
	return (
		<input className={'default-input'}
			placeholder='Type company name'
			value={value}
			onChange={onChange}
		/>
	);
};
