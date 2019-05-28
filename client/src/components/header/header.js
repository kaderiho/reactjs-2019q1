import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'components/Button/Button';
import styled from 'styled-components';
import './Header.scss';

const Wrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    padding: 0 32px;
`;

const Header = ({ isSearchButtonEnabled }) => (
    <Wrapper>
        <span className="logoLink">netflixroulette</span>
        {isSearchButtonEnabled && (
            <Link to="/">
                <Button
                    variant="contained"
                    color="fourth"
                    className="header-searchButton"
                >
                    Search
                </Button>
            </Link>
        )}
    </Wrapper>
);

export default Header;
