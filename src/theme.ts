import { createMuiTheme } from '@material-ui/core/styles'

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#66CC66', // green
    },
    secondary: {
      main: '#FFA9D3', // pink
    },
    // error: {
    //   main: red.A400
    // },
    background: {
      default: '#fff',
    }
  },
  typography: {
    button: {
      textTransform: 'none'
    },
    body1: {
      fontFamily: ["'Work Sans', 'sans-serif'"].join(',')
    },
    body2: {
      fontFamily: ["'Work Sans', 'sans-serif'"].join(',')
    },
    h1: {
      fontFamily: ["'Space Mono', 'sans-serif'"].join(','),
      textAlign: 'center',
      fontWeight: 'normal',
      color: '#2C2B2B'
    },
    h2: {
      fontFamily: ["'Space Mono', 'sans-serif'"].join(','),
      textAlign: 'center',
      fontWeight: 'normal',
      color: '#2C2B2B'
    },
    h3: {
      fontFamily: ["'Space Mono', 'sans-serif'"].join(','),
      textAlign: 'center',
      fontWeight: 'normal',
      color: '#2C2B2B'
    },
    h4: {
      fontFamily: ["'Space Mono', 'sans-serif'"].join(','),
      textAlign: 'center',
      fontWeight: 'lighter',
      color: '#2C2B2B'
    },
    h5: {
      fontFamily: ["'Space Mono', 'sans-serif'"].join(','),
      textAlign: 'center',
      fontWeight: 'lighter',
      color: '#2C2B2B'
    },
    h6: {
      fontFamily: ["'Space Mono', 'sans-serif'"].join(','),
      textAlign: 'center',
      fontWeight: 'lighter',
      color: '#2C2B2B'
    }
  }
})

export default theme
