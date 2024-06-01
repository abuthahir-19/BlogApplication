import { nextui } from '@nextui-org/react';

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
    ],
    darkMode: 'class',
    theme: {
        extend: {},
        screens: {
            'x-ultra-xs': { 'min': '280px', 'max': '319px' },
            'ultra-xs': { 'min': '320px', 'max': '374px' },
            'xxs': { 'min': '375px', 'max': '475px' },
            'xs': { 'min': '475px', 'max': '640px' },
            'sm': { 'min': '640px', 'max': '768px' },
            'md': { 'min': '768px', 'max': '1100px' },
            'lg': { 'min': '1100px', 'max': '1280px' },
            'xl': { 'min': '1280px', 'max': '1535px' },
            '2xl': '1535px',
        },
        // colors: {
        //     'appblue': '#181A2A',
        // }
    },
    plugins: [nextui()],
}