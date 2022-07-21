import React from "react";
import { Card, Typography, CardContent, CardActionArea } from "@mui/material";

// import makeStyles from "@mui/styles";

const Cards = ({ item }) => {
  return (
    <Card style={{ height: "67vh" }}>
      <CardActionArea>
        <CardContent>
          {/* <CardMedia
          component="img"
          image={item.image}
          sx={{
              height: 350,
              width: 300,
              objectFit: "cover",
              objectPosition: "center center",
            }}
        /> */}
          <img
            src={item.image}
            alt={item.title}
            height="200"
            width="180"
            style={{ margin: "auto" }}
          />

          <Typography
            variant="p"
            component="h1"
            style={{ fontSize: "1rem", fontStyle: "bold" }}
          >
            {item.title}
          </Typography>
          <Typography variant="p">
            {item.description.slice(0, 150) + "........."}
          </Typography>
          <Typography
            variant="h5"
            style={{ marginTop: "1rem", fontFamily: "cursive" }}
          >
            {item.price}$
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Cards;
