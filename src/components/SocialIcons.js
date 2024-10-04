import React from 'react';
import { Grid, IconButton, Tooltip, Typography } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import colors from '../colors';

const SocialIcons = () => {
    const iconStyles = {
        backgroundColor: 'white',
        color: 'black',
        '&:hover': {
            transform: 'translateY(-10%)',
            color: 'white'
        },
    };

    return (
        <Grid container direction="column" alignItems="center" spacing={2} sx={{ mt: '4rem', mb: '2rem' }} data-aos="fade-right">
            <Grid item container justifyContent="center" spacing={2}>
                <Grid item>
                    <Tooltip title="Email">
                        <IconButton
                            sx={[iconStyles, {
                                '&:hover': {
                                    backgroundColor: 'gray',
                                },
                            }]}
                            component="a"
                            href="mailto:carlosra0345@gmail.com"
                            target="_blank"
                            aria-label="Email"
                        >
                            <MailOutlineIcon sx={{ fontSize: 35}} />
                        </IconButton>
                    </Tooltip>
                </Grid>
                <Grid item>
                    <Tooltip title="GitHub">
                        <IconButton
                            sx={[iconStyles, {
                                '&:hover': {
                                    backgroundColor: 'black',
                                },
                            }]}
                            component="a"
                            href="https://github.com/carlosra0345"
                            target="_blank"
                            aria-label="GitHub"
                        >
                            <GitHubIcon sx={{ fontSize: 35}} />
                        </IconButton>
                    </Tooltip>
                </Grid>
                <Grid item>
                    <Tooltip title="LinkedIn">
                        <IconButton
                            sx={[iconStyles, {
                                '&:hover': {
                                    backgroundColor: '#0e76a8'
                                }
                            }]}
                            component="a"
                            href="https://www.linkedin.com/in/carlos-acosta02/"
                            target="_blank"
                            aria-label="LinkedIn"
                        >
                            <LinkedInIcon sx={{ fontSize: 35}} />
                        </IconButton>
                    </Tooltip>
                </Grid>
            </Grid>
            <Grid item>
                <Typography variant="body1" sx={{ color: colors.textPrimary }}>
                    carlosra0345@gmail.com
                </Typography>
            </Grid>
        </Grid>
    );
};

export default SocialIcons;
