import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import colors from '../colors';

/**
 * Renders section header
 * @param {Object} props - object containing prop arguments
 * @argument {number} sectionNumber 
 * @argument {string} title
 */
function SectionHeader(props) {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', borderBottom: '2px solid', borderColor: '#6B696925', width: '55%'}}>
            <Typography variant='h4' sx={{ color: colors.textSecondary }}>0{props.sectionNumber}.</Typography>
            <Typography variant='h4' sx={{ color: colors.textPrimary, ml: 1 }}>{props.title}</Typography>
        </Box>
    );
}

export default SectionHeader;

