import React, { useState } from 'react';
import sunIcon from '../images/icon-sun.svg';
import moonIcon from '../images/icon-moon.svg';
import styled, {ThemeProvider} from "styled-components";
import {lightTheme , darkTheme ,GlobalStyles} from './ThemeColor';
import Background from '../images/bg-desktop-dark.jpg';

const Header =() => {

        const [theme, setTheme] = useState("light");
        const themeToggole = () =>{
            theme ==="light" ? setTheme ("dark") : setTheme ("light");
        }

  return (
            //Header components start
             <header style ={{ backgroundImage:`url(${Background})`}}>
                <div className="container">
                    <div className="header-wrapper">
                        <div className="logo">
                            <a href="index.html">
                            <h1>TODO</h1>
                            </a>
                        </div>
                        <div className="theme-icon">
                            {/* <img src={sunIcon} alt="Sun Icon" /> */}

                            <ThemeProvider theme={theme=== "light" ? lightTheme : darkTheme}>
                                <GlobalStyles/>
                                     <button onClick={() => themeToggole()} >
                                           <img src={sunIcon} alt="Sun Icon" />
                                         
                                    </button>
                            </ThemeProvider>
                        </div>
                    </div>
                </div>
            </header>
        

  )
}

export default Header;