import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import colors from './colors'
import ResponsiveAppBar from './components/ResponsiveAppBar';
import SectionHeader from './components/SectionHeader';
import mastercard from './assets/mastercard.png'
import tamu from './assets/tamu.png'
import waves from './assets/waves.png'
import tamuSquare from './assets/tamu-square.png'
import securochat from './assets/securochat.png'
import Dropdown from './components/Dropdown';
import Card from './components/Card';
import AboutMe from './components/AboutMe'
import Hero from './components/Hero';

const pages = [
  {
    name: 'About',
    ref: "#About",
    type: 'link'
  },
  {
    name: 'Experience',
    ref: '#Experience',
    type: 'link'
  },
  {
    name: 'Projects',
    ref: '#Projects',
    type: 'link'
  },
  {
    name: 'Resume',
    ref: 'https://drive.google.com/file/d/15xwscvoens8GF2lfh9Vg-RX8jALxsU_0/view',
    type: 'resume'
  }
];

function App() {
  return (
    <div className="App" style={{ backgroundColor: colors.primary, minHeight: '100vh' }}>
      <ResponsiveAppBar items={pages} />

      <Hero />

      <SectionHeader sectionNumber={1} title={'About Me'} identifier='About' />
      <AboutMe />


      <SectionHeader sectionNumber={2} title={'Experience'} identifier='Experience' />
      <Dropdown
        imageSource={mastercard}
        imageHeight={50}
        experienceTitle="Mastercard"
        jobTitle="Software Engineer Intern"
        startDate="June 2024"
        endDate="August 2024"
        content="Spearhead full-stack development initiatives within Mastercard's dynamic platform engineering team. 
                  Leverage a robust tech stack including Golang, Node.js, React.js, Kubernetes, and AWS to architect
                  and implement our internal developer platform and deployment systems."
      />
      <Dropdown
        imageSource={tamu}
        imageHeight={63}
        experienceTitle="Texas A&M University"
        jobTitle="Student Research Technician"
        startDate="January 2023"
        endDate="Present"
        content="Currently working under the guidance of Dr. Prabir Daripa for my research regarding the modeling and simulation of methods 
        for enhanced oil recovery. Here I utilized and developed MATLAB programs to perform computation heavy simulations while also implementing a user-interface 
        to provide a more intuitive user experience. I also maintained documentation and performed isolated unit tests before integration into codebase."
      />

      <SectionHeader sectionNumber={3} title={'Featured Projects'} identifier='Projects' />
      <Card
          tileImage={securochat}
          tileAlt="Securochat project logo"
          tileTitle="Securochat"
          tileContent="An end-to-end encrypted real-time mobile chat application ensures secure communication between users, protecting their messages from unauthorized access. With advanced encryption protocols, this app provides a safe platform for sharing sensitive information, making it ideal for private conversations."
          link='https://github.com/aggie-coding-club/SecuroChat'
        />
        <Card 
          tileImage={tamuSquare}
          tileAlt="TAMU logo"
          tileTitle="Model of SP Flooding"
          tileContent="Surfactant-Polymer (SP) flooding is an enhanced oil recovery (EOR) technique that injects an aqueous phase with polymers and surfactants into oil reservoirs to optimize extraction. This project focuses on modeling the complex simulations of SP flooding to gain insights into its effectiveness and mechanisms."
          link='https://github.com/Daripa-Research-Group/Surfactant-Polymer-Flooding-Modeling'
        />


        <img
          src={waves}
          alt='footer waves'
          style={{
            width: '100%',    
            height: 'auto',   
            objectFit: 'cover'
          }}
        />
    </div>
  );
}

export default App;
