import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Credit from './Credit';
import Explanation from './Explanation'
import GetNew from './GetNew';

const Apod = () => {
    let dateToGet = new Date();
    dateToGet.setDate(new Date().getDate() - 1);
    const [astroPhoto, setAstroPhoto] = useState({});
    const [date, setDate] = useState(dateToGet.toISOString().split('T')[0]); // useState("2020-08-24");

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod', {
            params: {date: date, hd: true, api_key: 'DEMO_KEY'}
        })
            .then(res => {
                setAstroPhoto(res.data);
            })
            .catch(err => {
                console.log(`${err}`);
            });
    }, [date]);

    return (
        <div>
            <img className="astro-photo" src={astroPhoto.hdurl} alt={astroPhoto.title} />
            <Credit title={astroPhoto.title} copyright={astroPhoto.copyright} />
            <Explanation explanation={astroPhoto.explanation} />
            <GetNew setDate={setDate} />
        </div>
    );
};

export default Apod;
