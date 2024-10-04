import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import colors from '../colors';

/**
 * Renders section header
 * @param {Object} props - object containing prop arguments
 * @argument {number} sectionNumber 
 * @argument {string} title
 * @argument {string} identifier
 */
function SectionHeader(props) {
    return (
<Box
  sx={{
    display: 'flex',
    flexDirection: 'row', // always stay in a row
    borderBottom: '2px solid',
    borderColor: '#6B696925',
    width: { xs: '90%', md: '65%' }, // responsive width
    margin: '0 auto',
    marginBottom: 5,
    marginTop: 5
  }}
  id={props.identifier}
>
  <Typography
    sx={{
      color: colors.textSecondary,
      fontSize: { xs: '1.5rem', sm: '2rem', md: '2rem' }, // responsive font sizes
    }}
  >
    0{props.sectionNumber}.
  </Typography>
  <Typography
    sx={{
      color: colors.textPrimary,
      ml: 1,
      fontSize: { xs: '1.5rem', sm: '2rem', md: '2rem' }, // responsive font sizes
    }}
  >
    {props.title}
  </Typography>
</Box>


    );
}

export default SectionHeader;

