'use client';

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

const CssVarColor = {
    PINK: '#FF33CCFF',
    ORANGE: '#FF6633FF',
    ROYAL: '#38ACF5FF',
    PURPLE: '#793BEEFF',
    DARK: '#30231DFF',
    GRAY: '#6A7282FF',
} as const;

export type CssVarConstant = keyof typeof CssVarColor;

export function useCssVar(variable: CssVarConstant) : string {
    return CssVarColor[variable];
}