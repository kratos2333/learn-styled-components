import React, {useState, useContext} from 'react';
import styled, {ThemeContext} from "styled-components";
import {Link, useLocation} from 'react-router-dom';
import {Toggle} from "./Toggle";

const HeaderWrapper = styled.header`
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 0 16px;
  position: fixed;
  top: 0;
  background-image: linear-gradient(to right, ${p => p.theme.primaryColor}, ${p => p.theme['secondaryColor']});
  border-bottom: 3px solid ${p => p.theme['secondaryColor']};
`;


const Menu = styled.nav`
  display: ${p => p.open ? 'block':'none'};
  font-family: 'Open Sans';
  position: absolute;
  width: 100%;
  top: 60px;
  left: 0;
  padding: 8px;
  box-sizing: border-box;
  border-bottom: 3px solid ${p => p.theme['secondaryColor']};
  background: ${p => p.theme.bodyBackgroundColor};
  
  // Add responsive design
  @media(min-width: 768px){
    display: flex;
    position: relative;
    width: initial;
    border-bottom: none;
    margin: auto 0 auto auto;
    background: none;
    left: initial;
    top: initial;
  }
`;

// !!! override style from a styled component
const MenuAlt = styled(Menu)`
  border-top: 5px solid black
`

// !!! Note that we can even override a component from another lib, this Link component below is from react-router-dom
const StyledLink = styled(Link)`
  padding: 4px 8px;
  display: block;
  text-align: center;
  box-sizing: border-box;
  margin: auto 0;
  font-weight: ${p=>p.isactive?'bold':'normal'};
  color: ${p => p.theme.bodyFontColor};
`

// We are styling targetting the direct children so use >
const MobileMenuIcon = styled.div`
  margin: auto 0 auto auto;
  width: 25px;
  min-width: 25px;
  padding: 5px;
  >div{
    height: 3px;
    background: ${p => p.theme.bodyFontColor};
    margin: 5px 0;
    width: 100%;
  }
  
  @media(min-width: 768px){
    display: none;
  }
`;

export function Header() {
    const {pathname} = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    // !!!! Destruct the theme and setTheme from the context we set in App.js ThemeProvider
    const {id, setTheme} = useContext(ThemeContext);
    return (
        <HeaderWrapper>
            <MobileMenuIcon onClick={() => setMenuOpen(s => !s)}>
                <div />
                <div />
                <div />
            </MobileMenuIcon>
            <Menu open={menuOpen}>
                <StyledLink to="/home" isactive={pathname === '/home'}>
                    Home
                </StyledLink>
                <StyledLink to="/login" isactive={pathname === '/login'}>
                    Login
                </StyledLink>
                <Toggle isActive={id === 'dark'} onToggle={setTheme}/>
            </Menu>
        </HeaderWrapper>
    )
}