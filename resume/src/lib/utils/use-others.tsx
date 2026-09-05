'use client';

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import {useCallback, useEffect, useState} from "react";

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

    const [property, setProperty] = useState('');

    const valueResolver = useCallback(() => {
        const computedStyle = window.getComputedStyle(document.documentElement);
        const propertyValue = computedStyle.getPropertyValue(`${color[variable]}`)
        setProperty(propertyValue)
    }, [variable]);

    useEffect(() => {
        valueResolver()
    }, [property]);

    return property;

}