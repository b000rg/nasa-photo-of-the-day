import React from 'react';

const GetNew = ({dateInput, setDateInput, setDate}) => {
    const newPhoto = () => {
        setDate(dateInput);
        setDateInput('');
    };

    return (
        <div className="get-new">
            <label htmlFor="date">Enter a date for a new photo:</label>
            <input name="date" type="date" value={dateInput} onChange={(event) => {setDateInput(event.target.value)}} />
            <div className="new-button" onClick={newPhoto}>Show me something else!</div>
        </div>
    );
};

export default GetNew;
