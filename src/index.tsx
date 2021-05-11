import { MuiThemeProvider } from "@material-ui/core/styles";
import ReactDOM from 'react-dom';
import theme from './theme';
import  HomeView from './views/Home';

ReactDOM.render(

    <MuiThemeProvider theme={theme}>
        <HomeView/>
    </MuiThemeProvider>
,
  document.getElementById('root')
);

