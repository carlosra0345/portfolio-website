import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import colors from "../colors"; 

const Hero = () => {
  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById('About');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box 
      id="intro" 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: '30vh', 
        marginBottom: '50vh', 
        textAlign: 'center',
        color: colors.textPrimary 
      }}
    >
      <Box>
        <Typography 
          variant="h4" 
          sx={{ 
            fontSize: { xs: '7vw', sm: '6vw', md: '5vw' }, 
            lineHeight: 1.25,
            fontWeight: 400
          }}
        >
          Hi, my name is
        </Typography>
        <Typography 
          variant="h4" 
          sx={{ 
            display: 'block', 
            color: colors.textSecondary, 
            fontWeight: 400, 
            fontSize: { xs: '9vw', sm: '8vw', md: '7vw' } 
          }}
        >
          Carlos Acosta
        </Typography>
      </Box>
      <IconButton 
        onClick={handleScrollToAbout}
        sx={{ 
          color: colors.textPrimary,
          fontSize: { xs: '3vw', sm: '3vw' }, 
          '&:hover': { opacity: 0.8 }, 
          '&:active': { opacity: 0.6 } 
        }}
      >
        <KeyboardArrowDownIcon sx={{ fontSize: { xs: '12vw', sm: '10vw', md: '4vw' } }} />
      </IconButton>
    </Box>
  );
};

export default Hero;
