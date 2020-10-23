import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 10px 10%;
    background-color: midnightblue;
`;

const PageTitle = styled.h1`
    font-family: 'cairo';
    font-size: 2rem;
    margin: 0px;
`;

const DateInput = styled.input`
    margin: auto 0px;
`;

const Header = ({date, setDate}) => {
    const changeDate = evt => {
        setDate(evt.target.value);
    };
    
    return (
        <HeaderContainer>
            <PageTitle>NASA APOD</PageTitle>
            <DateInput type="date" value={date} onChange={changeDate} />
        </HeaderContainer>
    );
};

export default Header;
