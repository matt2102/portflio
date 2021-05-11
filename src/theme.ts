import { createMuiTheme} from '@material-ui/core/styles';


export default createMuiTheme({
      palette: {
        primary: {
          main: "#C9D4D4",
          dark: "#000000",
        },
        secondary: {
          main: "#C586C0",
          light:  "#FFD700",
          dark: "#4EC9B0"
        },
        background: {
          default: "#1E1E1E"
        },
        text: {
          secondary: '#7CDCFE'
        }
    },
    typography: {
      subtitle1: {
        fontSize: 40
      }
    }
})
