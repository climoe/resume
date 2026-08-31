"use client"

import React, {JSX} from "react";
import { AspectRatio as AspectRatioPrimitive } from "radix-ui"

function AspectRatio({
    ...props
}: React.ComponentProps<typeof AspectRatioPrimitive.Root>): JSX.Element {
    return <AspectRatioPrimitive.Root
            data-slot="aspect-ratio"
            {...props} />
}

export { AspectRatio }
