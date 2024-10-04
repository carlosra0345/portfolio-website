import React from 'react';
import { Box, Typography } from '@mui/material';
import portrait from "../assets/portrait.png";
import colors from '../colors';

const MainAboutMe = () => {
  return (
    <div id="about">
      <Box
        display="flex"
        flexDirection={{ xs: 'column', sm: 'row' }}
        alignItems="center"
        justifyContent="center"
        sx={{ gap: { xs: 3, sm: 3, md: 6, lg: 10 } }}
      >
        <Box
          flexShrink={0}
          display="flex"
          justifyContent="center"
        >
          <img
            src={portrait}
            alt="Personal headshot of Carlos Acosta"
            style={{ maxWidth: '250px', height: 'auto' }}
          />
        </Box>
        <Box
          sx={{
            color: colors.textPrimary,
            px: { xs: 2, sm: 0 },
            width: { lg: "50%" },
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'flex-start', sm: 'flex-start' }, 
          }}
        >
          <Box>
            <Typography
              variant="h5"
              sx={{ 
                textAlign: { xs: 'left', sm: 'left' },
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem', 
                fontWeight: 400 
              }}
            >
              🎓 CS Undergrad & Researcher
            </Typography>

            <Typography
              variant="h5"
              sx={{ 
                textAlign: { xs: 'left', sm: 'left' }, 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem', 
                fontWeight: 400 
              }}
            >
              💻 SWE Intern
            </Typography>

            <Typography
              variant="h5"
              sx={{ 
                textAlign: { xs: 'left', sm: 'left' }, 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem', 
                fontWeight: 400 
              }}
            >
              🌍 Exchange Student
            </Typography>

            <Typography 
              variant="body1" 
              paragraph 
              sx={{ 
                textAlign: 'left',
                marginTop: 3
              }}
            >
              Currently, I'm interning as a Software Engineer within Mastercard's Platform Engineering team. Additionally, I am actively involved in undergraduate research, specifically focusing on modeling the effects of surfactant on polymer flooding in enhanced oil recovery.
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default MainAboutMe;
