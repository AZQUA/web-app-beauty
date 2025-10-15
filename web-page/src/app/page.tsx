import react from 'react';
import PortraitCard from './components/portrait-card'

const App = () => {
  return (
    <PortraitCard
      imageUrl = 'https://project42.sorokdva.eu/assets/images/carte2.png'
      text ="L'Alien Infiltré est le pire ennemi des menbres de la station. Il profitera de la moindre occasion durant la nuit pour dévorer les spationnautes paisiblement endormie. Mais faites attention, une petite espionne traine parfois dans les parages, et fera tout pour vous démasquer."
      />
  )
};

export default App;