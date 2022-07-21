import React from "react";
import { useState, useEffect } from "react";
import { Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Cards from "./Cards";
const Home = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch("https://fakestoreapi.com/products");
      let result = await response.json();
      setData(result);
      setFilter(result);
      console.log(result);
    };
    fetchData();
  }, []);

  const renderData = () => {
    if (filter.length === 0) {
      return <div>No Data Found</div>;
    }
    if (filter.length > 0) {
      return (
        <Container>
          <Grid container spacing={3}>
            {filter.map((item, index) => {
              return (
                <Grid item key={index} xs={12} sm={6} lg={4}>
                  <Cards item={item} />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      );
    }
  };
  const filterData = (category) => {
    const filtered = data.filter((item) => {
      return item.category === category;
    });
    return setFilter(filtered);
  };

  const allData = () => {
    setFilter(data);
  };

  return (
    <div>
      <Typography
        variant="h3"
        style={{ marginBottom: "2rem", fontWeight: "bold" }}
      >
        Welcome To the E-commerce app
      </Typography>
      <div style={{ marginBottom: "2rem" }}>
        <Button
          color="secondary"
          onClick={() => {
            allData();
          }}
        >
          All
        </Button>
        <Button color="secondary" onClick={() => filterData("men's clothing")}>
          Men's Clothing
        </Button>
        <Button
          color="secondary"
          onClick={() => filterData("women's clothing")}
        >
          Women's Clothing
        </Button>
        <Button color="secondary" onClick={() => filterData("electronics")}>
          Electrionics
        </Button>
        <Button color="secondary" onClick={() => filterData("jewelery")}>
          Jewelery
        </Button>
      </div>
      {renderData()}
    </div>
  );
};

export default Home;
