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
import tamuSquare from './assets/tamu-square.png'
import securochat from './assets/securochat.png'
import Dropdown from './components/Dropdown';
import Card from './components/Card';
import AboutMe from './components/AboutMe'
import Hero from './components/Hero';
import SocialIcons from './components/SocialIcons'

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
        content="During my internship at Mastercard, I contributed to enhancing security compliance and improving
        the developer experience within the Finicity Platform Engineering team. My work involved the integration of automated
        security scans into CI/CD pipelines for over 300 internal projects. I collaborated on various development initiatives using
        Node, PostgreSQL, and React. Additionally, my intern team and I were able to secure first place in the Mastercard Global Innovation
        Challenge, a company-wide hackathon that brought together over 500 interns from 41 offices worldwide to develop impactful solutions."
      />
      <Dropdown
        imageSource={tamu}
        imageHeight={63}
        experienceTitle="Texas A&M University"
        jobTitle="Student Research Technician"
        startDate="January 2023"
        endDate="Present"
        content="As a student researcher under Dr. Daripa, I am focused on the modeling and simulating surfactant-polymer flooding in 
        enhanced oil recovery. My research involves performing computationally intesive simulations, which provide valuable insights into the effectiveness 
        of surfactant-polymer interactions in the oil recovery process."
      />

      <SectionHeader sectionNumber={3} title={'Featured Projects'} identifier='Projects' />
      <Card
          tileImage={securochat}
          tileAlt="Securochat project logo"
          tileTitle="Securochat"
          tileContent="Securochat is an end-to-end encrypted chat application that ensures secure communication using RSA encryption.
          As a full-stack developer, I led an 8-person team through the system design process, specializing in backend security with REST APIs and JSON
          Web Tokens for secure access to server resources."
          link='https://github.com/aggie-coding-club/SecuroChat'
        />
        <Card 
          tileImage={tamuSquare}
          tileAlt="TAMU logo"
          tileTitle="Modeling of SP Flooding"
          tileContent="Surfactant-Polymer (SP) flooding is an enhanced oil recovery (EOR) technique that injects an aqueous phase with polymers and surfactants into oil reservoirs to optimize extraction. This project focuses on modeling the complex simulations of SP flooding to gain insights into its effectiveness and mechanisms."
          link='https://github.com/Daripa-Research-Group/Surfactant-Polymer-Flooding-Modeling'
        />

        <SocialIcons />
    </div>
  );
}

export default App;
