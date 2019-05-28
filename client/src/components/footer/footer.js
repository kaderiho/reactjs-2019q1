import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    width: 1024px;
    margin: 0 auto;
    height: 45px;
    background-color: #3c3c3c;
    padding: 11px 32px;
    box-sizing: border-box;
`;

const Footer = () => (
    <FooterContainer>
        <a href="/" className="logoLink">
            netflixroulette
        </a>
    </FooterContainer>
);

export default Footer;
