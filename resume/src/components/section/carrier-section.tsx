import React, {JSX} from "react";

// import './section.module.css';

export default function CarrierSection({children}: {children: React.ReactNode}): JSX.Element {
    return(
        <section className={"carrier"}>
            {children}
        </section>
    )
}

