import React from 'react';

const GetNew = ({setDate}) => {
    return (
        <div className="get-new">
            <label htmlFor="date">Enter a date for a new photo:</label>
            <input name="date" type="date" onChange={(event) => {setDate(event.target.value)}} />
        </div>
    );
};

export default GetNew;
