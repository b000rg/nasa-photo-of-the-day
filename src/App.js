import React, {useState} from "react";
import "./App.css";
import Header from './components/Header';
import Photo from './components/Photo';
import BottomText from './components/BottomText';
import Footer from './components/Footer';

function App() {
  const getDateString = () => {
    let dateObj = new Date();
    let dateString = `${dateObj.getFullYear()}-${(dateObj.getMonth() > 8) ? dateObj.getMonth() + 1 : `0${dateObj.getMonth() + 1}`}-${(dateObj.getDate() > 8) ? dateObj.getDate() : `0${dateObj.getDay()}`}`;
    return dateString;
  };

  const [photo, setPhoto] = useState('');
  const [date, setDate] = useState(getDateString());

  return (
    <div className="App">
      <Header date={date} setDate={setDate} />
      <Photo photo={photo} setPhoto={setPhoto} date={date} />
      <BottomText photo={photo} />
      <Footer />
    </div>
  );
}

export default App;
