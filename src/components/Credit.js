import React from 'react';

const Credit = ({title, copyright}) => {
    return (
        <div className="credit">
            <h2 className="title">{title}</h2>
            <h3 className="copyright">{copyright}</h3>
        </div>
    );
};

export default Credit;
