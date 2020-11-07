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
    },
  },
})

export default theme
