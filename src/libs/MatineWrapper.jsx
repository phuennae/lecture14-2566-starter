"use client"
import { MantineProvider } from "@mantine/core"

export const MantineWrapper = ({children}) =>{
    return(
        <MantineProvider withGlobalStyles withNormalizeCSS>
            {children}
        </MantineProvider>
    );
};