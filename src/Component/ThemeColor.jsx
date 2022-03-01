
import {createGlobalStyle} from 'styled-components';

    //for light theme
   export const lightTheme ={
        body:'#fff',
        fontColor:'#000',
        transition:'all 1s ease'
    };
    //for darktheme
    export const darkTheme = {
        body:'#000',
        fontColor:'#fff ',
        transition:'all  1s ease'
    };

    export const GlobalStyles =  createGlobalStyle `
        body{
            background-color: ${(props) => props.theme.body};
        }
    `;
  
