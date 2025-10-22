'use client';
import react, {useState} from 'react';
import PortraitCard from './components/portrait-card'
import Header from './components/header'
import Button from './components/burger_button';
import Body from './components/body';
import PortraitCardReverse from './components/portrait-card-reverse'
import AlienImage from './image/carte_alien.png'
import AnalysteImage from './image/carte_analyste.png'
import MembreImage from './image/carte_membre-dequipage.png'

const App = () => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <div>
      <Header>
        <div>
          <Button isOpen={isMenuOpen} toggleMenu={handleToggleMenu} />
          
        </div>
      </Header>
      <Body isOpen={isMenuOpen}>
        <div className='flex content-center justify-evenly'>
          <PortraitCard 
            imageUrl = {AlienImage}
            text ="L'Alien Infiltré est le pire ennemi des membres de la station. Il profitera de la moindre occasion durant la nuit pour dévorer les spationnautes paisiblements endormies."
            description = "Alien Infiltré"
          />
          <PortraitCardReverse
            imageUrl = {MembreImage}
            text = "Le membre d'équipage est le plus loyale des citoyens, et un très bon spationaute. Mais la nuit, il a besoin de sommeil."
            description = "Membre d'équipage"
          />
          <PortraitCard 
            imageUrl = {AnalysteImage}
            text = "L'Analyste est un hacker. Il scan chaque nuit sans relâche les membres de la station afin de déterminer qui est l'infiltré."
            description = "Analyste"
          />
        </div>
      </Body>
    </div>
  )
};

export default App;