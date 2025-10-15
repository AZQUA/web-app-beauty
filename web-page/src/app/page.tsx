'use client';
import react, {useState} from 'react';
import PortraitCard from './components/portrait-card'
import Header from './components/header'
import Button from './components/burger_button';



const App = () => {
  
  const menuDeroulant = () => {
    
  };
  
  return (
    <div>
      <Header>
        <Button/>
      </Header>
      <div className='flex content-center justify-around'>
        <PortraitCard className=""
          imageUrl = 'https://project42.sorokdva.eu/assets/images/carte2.png'
          text ="L'Alien Infiltré est le pire ennemi des membres de la station. Il profitera de la moindre occasion durant la nuit pour dévorer les spationnautes paisiblements endormies. Mais faites attention, une petite espionne traine parfois dans les parages, et fera tout pour vous démasquer."
          description = "Alien Infiltré"
        />
        <PortraitCard 
          imageUrl = 'https://project42.sorokdva.eu/assets/images/carte3.png'
          text ="L'Analyste est un hacker. Il scan chaque nuit sans relâche les membres de la station afin de déterminer qui est l'infiltré."
          description = "Analyste"
        />
      </div>
    </div>
  )
};

export default App;