import React from 'react';
import styled from 'styled-components';

const BottomText = ({photo}) => {
    return (
        <div className="bottom-text">
            <div className="date">Astronomy Photo of the Day for {new Date(photo.date).toDateString()}</div>
            <h2 className="title">{photo.title}</h2>
            <div className="explanation">{photo.explanation}</div>
            <div className="copyright">©{photo.copyright}</div>
        </div>
    );
};

export default BottomText;
