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

/**
 * Renders nav bar
 * @param {Object} props - object containing prop arguments
 * @argument {Array<Object>} items - list containing header items
 */
function ResponsiveAppBar(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{backgroundColor: colors.primary, boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo aligned to the left */}
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

          {/* Pages aligned to the right */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {props.items.map((page) => (
              <a
                href={page.ref}
                target={page.name === 'Resume' ? '_blank' : '_self'}
                rel={page.name === 'Resume' ? 'noopener noreferrer' : undefined}
                style={{ textDecoration: 'none' }} // Prevent the default link underline
              >
                <Button
                  key={page.name}
                  onClick={handleCloseNavMenu} // Optionally keep this to handle any menu closing
                  sx={{
                    my: 2,
                    color: colors.textPrimary,
                    '&:hover': {
                      color: colors.buttonPrimary,
                      textDecoration: 'underline',
                      textDecorationColor: colors.buttonPrimary
                    },
                    display: 'block'
                  }}
                >
                  {page.name}
                </Button>
              </a>
            ))}
          </Box>

          {/* Menu for smaller screens */}
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
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center' }}>
                    <a href={page.ref} target={page.name === 'Resume' ? '_blank' : '_self'} rel={page.name === 'Resume' ? 'noopener noreferrer' : undefined} style={{ color: 'inherit', textDecoration: 'none' }}>
                      {page.name}
                    </a>
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
