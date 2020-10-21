import React, {useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Photo = ({photo, setPhoto, date}) => {
    const fetchPhoto = () => {
        let params = {date: date, hd: true, api_key: '6HKVSa7ydWRZVHUBbq0saxvbg0X1VfebWwhcM2bH'};

        axios
            .get('https://api.nasa.gov/planetary/apod', {params: params})
            .then(({data}) => {
                setPhoto(data);
            })
            .catch(err => {
                console.log(err);
            });
    };
    
    useEffect(fetchPhoto, [date]);
    
    return (
        <div className="photo">
            <img src={photo.hdurl} alt={photo.title} />
        </div>
    );
};

export default Photo;
