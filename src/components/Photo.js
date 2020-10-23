import React, {useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';

const APOD = styled.img`
    max-height: calc(100vh - 80px);
    max-width: 100%;
    object-fit: cover;
`;

const PhotoContainer = styled.div`
    width: 100%;
`;

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
        <PhotoContainer className="photo">
            <APOD src={photo.hdurl} alt={photo.title} />
        </PhotoContainer>
    );
};

export default Photo;
