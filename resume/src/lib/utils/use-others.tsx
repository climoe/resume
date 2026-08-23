import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function useCn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function useDateFormat(input: string | number): string {
    const date = new Date(input);
    return date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });
}

export function useAbsoluteUrl(path: string) {
    return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
}

export enum CssVarConstant { PINK, ORANGE, ROYAL, PURPLE,DARK, GRAY }

type CssVarColor = {
    [key in keyof typeof CssVarConstant]: string;
};

export function useCssVar(variable: CssVarConstant) : string {
    const color: CssVarColor = {
        PINK: '--color-pink',
        ORANGE: '--color-orange',
        ROYAL: '--color-royal',
        PURPLE: '--color-purple',
        DARK: '--color-dark',
        GRAY: '--color-gray',
    };

    let computedProperty = null;

    if (typeof window !== "undefined") {
        // Client-side-only code
        const computedStyle = global.getComputedStyle(document.documentElement);
        computedProperty = computedStyle.getPropertyValue(`${color[variable]}`);
    }
    // @ts-ignore
    return computedProperty;

}