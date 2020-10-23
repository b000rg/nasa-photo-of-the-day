import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-evenly;
    background-color: midnightblue;
    position: absolute;
    bottom: 0;
    overflow: auto;
    max-height: 60px;
`;

const FooterP = styled.p`
    flex-basis: 33%;
`;

const Footer = () => {
    return (
        <Container>
            <FooterP>NASA Astronomy Photo of the Day</FooterP>
            <FooterP>All photos provided by NASA through their APOD API.</FooterP>
            <FooterP>Page created by Gage Boyd for Lambda School's web development course.</FooterP>
        </Container>
    );
};

export default Footer;
