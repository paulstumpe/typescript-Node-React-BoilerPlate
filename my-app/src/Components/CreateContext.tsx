import { createContext, useContext } from 'react';

export enum Theme {
    Dark = 'Dark',
    Light = 'Light',
}

export type ThemeContextType = {
    theme: string;
    setTheme: (string: string) => void;
}

export const ThemeContext = createContext<ThemeContextType>(
    {
        theme: 'light',
        setTheme: theme => {
            return console.warn('no theme provider')
        }
    }

);




export const useTheme = () => {
    return  useContext(ThemeContext)
};