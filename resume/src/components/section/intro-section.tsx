import React, {JSX} from "react";

// import './section.module.css';

export default function IntroSection({children} : {children: React.ReactNode}): JSX.Element {
	return (
		<section className={"intro"}>
			{children}
		</section>
	)
}