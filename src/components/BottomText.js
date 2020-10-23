import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95%;
    margin: 0 auto;
    padding-bottom: 60px;
`;

const PhotoLabel = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column-reverse;
    width: 100%;
    padding-bottom: 10px;
    border-bottom: 1px solid grey;
    margin-bottom: 5px;
`;

const PhotoTitle = styled.h2`
    margin: 0;
`;

const BottomText = ({photo}) => {
    return (
        <Container className="bottom-text">
            <PhotoLabel>
                <div className="date">Astronomy Photo of the Day for {new Date(photo.date).toDateString()}</div>
                <PhotoTitle className="title">{photo.title}</PhotoTitle>
            </PhotoLabel>
            <div className="explanation">{photo.explanation}</div>
            {(photo?.copyright) ? <div className="copyright">©{photo.copyright}</div> : null}
        </Container>
    );
};

export default BottomText;
