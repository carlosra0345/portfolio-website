import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import colors from '../colors';

function ResponsiveAppBar(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleScrollToSection = (ref) => {
    const element = document.querySelector(ref);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    handleCloseNavMenu(); 
  };

  const handleExternalLink = (url) => {
    window.open(url, '_blank'); 
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: colors.primary, boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <AdbIcon sx={{ mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              CARLOS
            </Typography>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {props.items.map((page) => (
              <Button
                key={page.name}
                onClick={() => page.type === 'resume' ? handleExternalLink(page.ref) : handleScrollToSection(page.ref)}
                sx={{
                  my: 2,
                  color: colors.textPrimary,
                  backgroundColor: page.type === 'resume' ? colors.buttonPrimary : colors.primary,
                  '&:hover': {
                    color: page.type === 'resume' ? colors.textPrimary : colors.buttonPrimary,
                    textDecoration: 'underline',
                    textDecorationColor: page.type === 'resume' ? colors.buttonHover : colors.buttonPrimary,
                  },
                  display: 'block',
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1, justifyContent: 'flex-end' }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {props.items.map((page) => (
                <MenuItem key={page.name} onClick={() => page.type === 'resume' ? handleExternalLink(page.ref) : handleScrollToSection(page.ref)}>
                  <Typography sx={{ textAlign: 'center' }}>
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
