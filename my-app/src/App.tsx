import React from 'react';
import logo from './logo.svg';
import './App.css';
import Banner from "./Components/Banner";
// import Map from "./Components/Map";
import BoardContainer from "./Components/BoardContainer";
import {Theme, ThemeContext} from "./Components/CreateContext";








function App() {
    const [theme, setTheme] = React.useState('light');


  return (
<ThemeContext.Provider value={{theme, setTheme}}>

      <div>
        <Banner/>
        <BoardContainer/>
      </div>
</ThemeContext.Provider>
  );
}

export default App;
