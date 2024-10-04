import { useState } from "react";
import { Box, Grid, Typography, IconButton } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import colors from "../colors";

/**
 * Renders dropdown
 * @param {Object} props 
 * @argument {string} imageSource
 * @argument {number} imageHeight
 * @argument {string} experienceTitle
 * @argument {string} jobTitle
 * @argument {string} startDate
 * @argument {string} endDate
 * @argument {string} content
 */
const Dropdown = (props) => {
    const [dropdownActive, setDropdownActive] = useState(false);

    return (
        <Box
            sx={{
                backgroundColor: colors.secondary,
                width: "95%",  
                maxWidth: "800px",  
                padding: { xs: "8px", sm: "12px", md: "16px" },  
                borderRadius: "38px",
                border: "3px solid #2e373e",
                margin: "5px auto", 
                boxSizing: "border-box",
                transition: "all 0.3s ease",  
            }}
        >
            <Grid container alignItems="center" spacing={1} flexWrap="nowrap">
                <Grid item>
                    <Box
                        component="img"
                        src={props.imageSource}
                        alt="Logo"
                        sx={{ 
                            width: { xs: 60, sm: 60, md: 75 }, 
                            height: props.imageHeight,
                            mt: 1
                        }}
                    />
                </Grid>
                <Grid item xs>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center", 
                            textAlign: 'left',
                        }}
                    >
                        <Typography 
                            variant="h5" 
                            sx={{ 
                                color: "white", 
                                margin: 0, 
                                fontSize: "1.3rem",
                                fontWeight: 400
                            }}
                        >
                            {props.experienceTitle}
                        </Typography>
                        <Typography 
                            variant="body1" 
                            sx={{ 
                                color: "white", 
                                margin: 0, 
                                fontSize: "0.9rem"
                            }}
                        >
                            {props.jobTitle}
                        </Typography>
                        <Typography 
                            variant="body2" 
                            sx={{ 
                                color: "white", 
                                margin: 0, 
                                fontSize: "0.85rem"
                            }}
                        >
                            {props.startDate} - {props.endDate}
                        </Typography>
                    </Box>
                </Grid>
                <Grid item>
                    <IconButton
                        onClick={() => setDropdownActive(!dropdownActive)}
                        sx={{ 
                            color: "white", 
                            fontSize: { xs: "45px", sm: "45px", md: "50px" }, 
                        }}
                    >
                        <ArrowDropDownIcon sx={{ fontSize: { xs: "45px", sm: "45px", md: "50px" } }} />
                    </IconButton>
                </Grid>
            </Grid>

            {dropdownActive && (
                <Box
                    sx={{
                        textAlign: "left",
                        marginTop: "24px",
                        marginLeft: 2,
                        color: "white",
                        transition: "all 0.3s ease",  
                    }}
                >
                    <Typography 
                        variant="body1" 
                        sx={{ 
                            fontSize: { xs: "1rem", sm: "1rem", md: "1rem" } 
                        }}
                    >
                        {props.content}
                    </Typography>
                </Box>
            )}
        </Box>
    );
};

export default Dropdown;
