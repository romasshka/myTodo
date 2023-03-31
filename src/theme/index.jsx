import { createContext, useState, useMemo } from 'react';
import { createTheme } from '@mui/material';

export const tokens = (mode) => ({
    ...(mode === 'dark' ? {
        pageColor: "#1C273C",
        primary: "#354259",
        accent: "#44A0A0",
        white: {
            Default: "#FFFFFF",
            dark: "#E4E4E4",
        },
        green: {
            Default: "#4CAF50",
            light: "#9ED2C6",
        },
        turquoise: "#26A7B8",
        darkOrchid: "#9C27B0",
        red: "#FF5252",
        yellow: {
            Default: "#FFC107",
            light: "#E9C597",
        },
        grey: {
            Default: "#858585"
        }
    }
        :
        {
            pageColor: "#F7ECDE",
            primary: "#54BAB9",
            accent: "#38938A",
            white: {
                Default: "#FFFFFF",
                dark: "#E4E4E4",
            },
            green: {
                Default: "#4CAF50",
                light: "#9ED2C6",
            },
            turquoise: "#26A7B8",
            darkOrchid: "#9C27B0",
            red: "#FF5252",
            yellow: {
                Default: "#FFC107",
                light: "#E9C597",
            },
            grey: {
                Default: "#858585"
            }
        }
    )
})

export const themeSettings = (mode) => {
    const colors = tokens(mode)
    return {
        palette: {
            pageColor: {
                main: colors.pageColor
            },

            primary: {
                main: colors.primary
            },

            secondary: {
                main: colors.accent
            },

            white: {
                default: colors.white.Default,
                dark: colors.white.dark,
            },

            green: {
                main: colors.green.Default,
                light: colors.green.light,
            },

            turquoise: {
                main: colors.turquoise,
            },

            darkOrchid: {
                main: colors.darkOrchid,
            },

            red: {
                main: colors.red,
            },

            yellow: {
                main: colors.yellow.Default,
                light: colors.yellow.light,
            },
            grey: {
                main: colors.grey.Default,
            },


        },
        typography: {
            fontFamily: ['Open Sans', 'sans-serif'].join(','),
            fontSize: 20,
            fontWeight: 400,
            h1: {
                fontFamily: ['Open Sans', 'sans-serif'].join(','),
                fontSize: 32,
                fontWeight: 800,
                lineHeight: "90%",
            },

            h2: {
                fontFamily: ['Open Sans', 'sans-serif'].join(','),
                fontSize: 20,
                fontWeight: 800,
            },

            h3: {
                fontFamily: ['Open Sans', 'sans-serif'].join(','),
                fontSize: 20,
                fontWeight: 600,
            }
        },
        components: {
            MuiContainer: {
                defaultProps: {
                    maxWidth: "lg",
                },
            },
        }
    }
}


export const ColorModeContext = createContext({
    toggleColorMode: () => { }
})

export const useMode = () => {
    const [mode, setMode] = useState(localStorage.getItem('theme') || 'dark')

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => setMode((prev) => (prev === 'light' ? 'dark' : 'light'))
        }), []
    )

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
    localStorage.setItem('theme', mode)
    return [theme, colorMode]
}



