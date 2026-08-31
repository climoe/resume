import React, {ComponentPropsWithRef} from "react";

export default function LayoutWithRef(props: ComponentPropsWithRef<'main'>) : React.ReactNode {
    return (
        <main {...props}>
            {props.children}
        </main>
    )
}