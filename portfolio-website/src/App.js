import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import colors from './colors'
import ResponsiveAppBar from './components/ResponsiveAppBar';
import SectionHeader from './components/SectionHeader';

const pages = [
  {
    name: 'About',
    ref: "#About"
  },
  {
    name: 'Experience',
    ref: '#Experience'
  },
  {
    name: 'Projects',
    ref: '#Projects'
  },
  {
    name: 'Resume',
    ref: 'https://drive.google.com/file/d/15xwscvoens8GF2lfh9Vg-RX8jALxsU_0/view'
  }
];

function App() {
  return (
    <div className="App" style={{ backgroundColor: colors.primary }}>
      <ResponsiveAppBar items={pages} />
      <SectionHeader sectionNumber={2} title={'Work Experience'} />
    </div>
  );
}

export default App;
