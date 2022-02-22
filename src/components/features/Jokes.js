import React, { useEffect, useState } from "react";
import axios from "axios";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";

const Jokes = () => {
  const [jokes, setjokes] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10"
      )
      .then((response) => {
        console.log(response.data.jokes);
        setjokes(response.data.jokes);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        backgroundColor: "rgba(255,255,25)",
      }}
    >
      {jokes.map((joke, i) => {
        return (
          <Card
            sx={{
              maxWidth: 220,
              border: "1px solid black",
              margin: "20px",
              backgroundColor: "lightblue",
            }}
            key={joke + i}
          >
            <CardContent>Category:{joke.category}</CardContent>
            <Typography
              sx={{ fontSize: 14, borderBottom: "2px solid red" }}
              color="text.secondary"
              gutterBottom
            >
              Joke of the Day
            </Typography>
            <CardActions>{joke.joke}</CardActions>
          </Card>
        );
      })}
    </div>
  );
};

export default Jokes;
