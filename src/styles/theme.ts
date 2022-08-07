import { extendTheme, Theme } from '@chakra-ui/react';

const theme = extendTheme({
    fonts: {
        heading: "Rubik, sans-serif",
        body: "Rubik, sans-serif",
    },
    colors: {
        gray: {
            "100": "#999999",
            "700": "#333333"
        }
    }
})

export default theme