import React from 'react';
import { Box, Typography, Link } from '@mui/material';
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
            ml: { xs: 3 }, 
            width: { lg: "40%" },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center' 
          }} 
        >
            <Box>
          <Typography variant="body1" className="main-text-style" paragraph sx={{ textAlign: 'left' }}>
            I am an undergraduate Computer Science Student at{" "}
            <Link
              rel="noopener"
              target="_blank"
              href="https://www.tamu.edu/index.html"
              sx={{ 
                color: colors.textSecondary, 
                textDecoration: 'none', 
                '&:hover': { 
                  textDecoration: 'underline', 
                  color: colors.hoverColor 
                }
              }}
            >
              Texas A&M University
            </Link>
            .
          </Typography>
          <Typography variant="body1" className="main-text-style" paragraph sx={{ textAlign: 'left' }}>
            Currently, I'm interning as a{" "}
            <Link
              rel="noopener"
              target="_blank"
              href="https://www.mastercard.us/en-us/business/issuers/grow-your-business/open-banking-solutions.html"
              sx={{ 
                color: colors.textSecondary, 
                textDecoration: 'none', 
                '&:hover': { 
                  textDecoration: 'underline', 
                  color: colors.hoverColor 
                }
              }}
            >
              Software Engineer within Mastercard's Platform Engineering team
            </Link>
            . Additionally, I am actively involved in{" "}
            <Link
              rel="noopener"
              target="_blank"
              href="https://www.math.tamu.edu/directory/formalpg.php?user=daripa"
              sx={{ 
                color: colors.textSecondary, 
                textDecoration: 'none', 
                '&:hover': { 
                  textDecoration: 'underline', 
                  color: colors.hoverColor 
                }
              }}
            >
              undergraduate research
            </Link>
            , specifically focusing on modeling the effects of surfactant on
            polymer flooding in enhanced oil recovery.
          </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default MainAboutMe;
