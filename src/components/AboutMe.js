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
              variant="body1"
              paragraph
              sx={{
                textAlign: 'left',
                marginTop: 3
              }}
            >
              I am an undergraduate student at {' '}
              <Link
                rel="noopener"
                target="_blank"
                href="https://engineering.tamu.edu/cse/index.html"
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
              {' '}currently pursuing a B.S in Computer Science. I am heavily involved on campus
              as a student researcher, focusing on computational mathematics and the applications
              of machine learning for cryptocurrency evaluation. In addition to my research, I am
              a Software Engineer Intern at {' '}
              <Link
                rel="noopener"
                target="_blank"
                href="https://www.finicity.com/"
                sx={{
                  color: colors.textSecondary,
                  textDecoration: 'none',
                  '&:hover': {
                    textDecoration: 'underline',
                    color: colors.hoverColor
                  }
                }}
              >
                Mastercard
              </Link>
              {' '} and also serve as an Events and Marketing Officer for the {' '}
              <Link
                rel="noopener"
                target="_blank"
                href="https://aggiecodingclub.com"
                sx={{
                  color: colors.textSecondary,
                  textDecoration: 'none',
                  '&:hover': {
                    textDecoration: 'underline',
                    color: colors.hoverColor
                  }
                }}
              >
                Aggie Coding Club
              </Link>
              . 
              <br/> <br/> 
              Outside of work, I enjoy experimenting with new technologies and working on personal projects. 
              Currently, I am creating a cryptocurrency evaluation system that leverages machine learning to analyze 
              key features and assess the validity of various cryptocurrencies.
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default MainAboutMe;
