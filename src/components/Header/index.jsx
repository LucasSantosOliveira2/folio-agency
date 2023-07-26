import styled from "styled-components";
import Logo from '../../assets/lightmode.png';
import { FaBars } from "react-icons/fa";
import { StyledButton } from './../Button/index';
import { useState } from "react";

const HeaderContainer = styled.header`
    position: fixed;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    padding: 52px 32px;
    background-color:${props => props.theme.colors.illustration.white};

    @media screen and (min-width: 868px) {
        padding: 64px 72px;
        position: static;
    }
`;

const LogoImage = styled.img`
    width: 127px;
    height: 32px;
    cursor: pointer;
`;

const Nav = styled.nav`
    display: ${({ show }) => (show ? 'flex' : 'none')};
    flex-direction: column;
    list-style-type: none;
    z-index: 4;
    position: fixed;
    align-items: center;
    top: 130px;
    left: 0px;
    width: 100%; 
    gap: 64px;
    height: 100%; 
    background-color:${props => props.theme.colors.illustration.white};

    li a{
        text-decoration: none;
        text-align: center;
        font-size: 1.5rem;
        font-weight: 600;
        color: ${props => props.theme.colors.text.primary};
    }

    li a:hover{
        color: ${props => props.theme.colors.background.blue};
        cursor: pointer;
    }

    @media screen and (min-width: 868px) {
        display: flex;
        background-color:${props => props.theme.colors.illustration.white};
        flex-direction: row;
        width: auto;
        height: auto;
        position: static;
        li a {
            font-size: 1.125rem;
        }
    }
`;

const HiddenButton = styled(StyledButton)`
    @media screen and (max-width: 868px) {
        display: none;
    }
`;

const BurgerIcon = styled(FaBars)`
    cursor: pointer;
    @media screen and (min-width: 868px) {
        display: none;
    }
`;

export function Header() {
    const [show, setShow] = useState(false);

    const handleBurgerClick = () => {
        setShow(!show)
    }

    return (
        <HeaderContainer>
            <LogoImage src={Logo} alt="Logo" />
            <BurgerIcon onClick={handleBurgerClick} size={28} color="#232340" />
            <Nav show={show ? true : undefined}>
                <li><a href="#about">About</a></li>
                <li><a href="#work">Work</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#jobs">Jobs</a></li>
            </Nav>
            <HiddenButton>Contact Us</HiddenButton>
        </HeaderContainer>
    );
}
