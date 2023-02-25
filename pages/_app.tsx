import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Nav from "@/components/nav";

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary:{
      main:'#ffffff'
    }
  },
  typography: {
    fontFamily: [
      'Noto Sans',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h1: {
      fontSize: '15rem',
      fontWeight: 600
    },
    h2: {
      fontWeight: 400
    },
    h3: {
      fontWeight: 300
    },
    h4: {
      fontWeight: 400,
      fontSize: '1.5rem'
    },
    h5: {
      fontWeight: 300,
      fontSize: '1.15rem'
    },
    h6: {
      fontSize: '1rem',
      lineHeight: 2,
      fontWeight: 400
    },
    body2: {
      fontWeight: 300,
      lineHeight: 1.25
    },
    subtitle2: {
      color: '#999'
    }
  }
})
export default function App({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={theme}>
    <Nav />
    <Component {...pageProps} />
  </ThemeProvider>
}
