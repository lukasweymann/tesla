import React from 'react';
import './App.css';
import Header from './components/Header';

import Accesories from './assets/Desktop-Accessories.jpg';
import ModelS from './assets/Desktop-ModelS.jpeg';
import Model3 from './assets/Desktop-Model3.jpeg';
import ModelX from './assets/Desktop-ModelX.jpeg';
import ModelY from './assets/Desktop-ModelY.jpeg';
import SolarPanel from './assets/Desktop-ModelY.jpeg';
import SolarRoof from './assets/Desktop-SolarRoof.jpeg';
import Item from './components/Item';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="app_items_container">
      <Item
      title='Lowest Cost Solar Panels In America'
      desc='Money-back guarantee'
      backgroundImg={SolarPanel}
      leftBtnTxt='ORDER NOW'
      leftBtnLink=''
      rightBtnTxt='LEARN MORE'
      rightBtnLink=''
      twoButtons='true'
      first
      />
      <Item
      title='Model S'
      desc='$69,420'
      backgroundImg={ModelS}
      leftBtnTxt='CUSTOM ORDER'
      leftBtnLink=''
      rightBtnTxt='LEARN MORE'
      rightBtnLink=''
      twoButtons='true'
      />
      <Item
      title='Model 3'
      desc='Money-back guarantee'
      backgroundImg={Model3}
      leftBtnTxt='CUSTOM ORDER'
      leftBtnLink=''
      rightBtnTxt='LEARN MORE'
      twoButtons='true'
      />
      <Item
      title='Model X'
      desc='Money-back guarantee'
      backgroundImg={ModelX}
      leftBtnTxt='CUSTOM ORDER'
      leftBtnLink=''
      rightBtnTxt='LEARN MORE'
      twoButtons='true'
      />
      <Item
      title='Model Y'
      desc='Money-back guarantee'
      backgroundImg={ModelY}
      leftBtnTxt='CUSTOM ORDER'
      leftBtnLink=''
      rightBtnTxt='LEARN MORE'
      twoButtons='true'
      />
      <Item
      title='Solar for New Roofs'
      desc='Money-back guarantee'
      backgroundImg={SolarRoof}
      leftBtnTxt='ORDER NOW'
      leftBtnLink=''
      rightBtnTxt='LEARN MORE'
      twoButtons='true'
      />
      <Item
      title='Accesories'
      desc='Money-back guarantee'
      backgroundImg={Accesories}
      leftBtnTxt='SHOP NOW'
      leftBtnLink=''
      rightBtnTxt='LEARN MORE'
      twoButtons='true'
      />
      </div>
    </div>
  );
}

export default App;
