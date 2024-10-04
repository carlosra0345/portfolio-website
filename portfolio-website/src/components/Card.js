import React from "react";
import { Box, Button, Typography } from "@mui/material";
import colors from "../colors";

/**
 * Renders card
 * @param {Object} props 
 * @argument {string} tileImage
 * @argument {string} tileAlt
 * @argument {string} tileTitle
 * @argument {string} tileContent
 * @argument {string} link
 */
const Card = (props) => {
  return (
    <Box
      sx={{
        backgroundColor: colors.secondary,
        borderRadius: '38px',
        border: "3px solid #2e373e",
        display: "flex",
        flexDirection: {
          xs: "column", 
          sm: "column", 
          md: "column", 
          lg: "row"    
        },
        justifyContent: "flex-start",
        alignItems: "center",
        width: { xs: "80%", sm: "55%" },
        padding: 3,
        gap: 2,
        textDecoration: "none",
        color: colors.white,
        margin: "auto",
        marginTop: '8px',
        marginBottom: '8px'
      }}
    >
      <img
        src={props.tileImage}
        alt={props.tileAlt}
        style={{
          width: '100%',     
          maxWidth: '250px',  
          height: 'auto',    
          objectFit: 'cover'
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          textAlign: "left",
          padding: 2,
          color: colors.textPrimary
        }}
      >
        <Typography variant="h5" sx={{ marginBottom: 1, fontWeight: 400 }}>
          {props.tileTitle}
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 2 }}>
          {props.tileContent}
        </Typography>
        <Button
          variant="contained"
          sx={{
            cursor: 'pointer',
            backgroundColor: colors.buttonPrimary, 
            color: colors.white,
            '&:hover': {
              backgroundColor: colors.buttonHover, 
            },
            marginTop: 1,
            alignSelf: 'center',
          }}
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </Button>
      </Box>
    </Box>
  );
};

export default Card;
