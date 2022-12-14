import React from "react";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    card: {
        backgroundColor: theme.palette.cardBgColor,
        borderWidth: 2,
        borderRadius: 7,
        border: `1px solid ${theme.palette.cardBorderColor}`,
        display: "flex",
        flex: "0 0 30%",
        margin: "10px",
        padding: "10px"
    },
    title: {
        width: "100%",
        textAlign: "center"
    },
    image: {
        borderRadius: "50%",
        width: 150
    }
}));

export const CharacterCard = ({ item }) => {
    const classes = useStyles();

    return (
        <Grid container justifyContent="center" className={classes.card}>
            <img src={item.image} alt={item.name} className={classes.image} />
            <Typography className={classes.title}>{item.name}</Typography>
            <Grid container justifyContent="space-between">
                <p>Status: {item.status}</p>
                <p>Species: {item.species}</p>
            </Grid>
            <Grid container justifyContent="space-between">
                <p>Type: {item.type}</p>
                <p>Gender: {item.gender}</p>
            </Grid>
            <Grid container justifyContent="space-between">
                <p>Location: {item.location.name}</p>
            </Grid>
            <Grid container justifyContent="center">
                <p>Episodes</p>
            </Grid>
            <ul>
                {item.episode.map((episode) => (
                    <li key={episode.name}>{episode.name}</li>
                ))}
            </ul>
        </Grid>
    );
};
