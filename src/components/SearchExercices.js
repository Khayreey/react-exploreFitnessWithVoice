import React, { useEffect, useState } from "react";
import { Stack, Box, Button, TextField, Typography } from "@mui/material";
import { exGetOptions, fetchData } from "../utils/fetchData";
import Categories from "./Categories";
const SearchExercices = (props) => {
  const [search, setSearch] = useState("");
  //const [searchedExercices , setSearchedExercices] = useState([])
  const [bodyParts, setBodyParts] = useState([]);
  useEffect(() => {
    const fetchExCategories = async () => {
      const categoriesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exGetOptions
      );
      setBodyParts(["all", ...categoriesData]);
    };
    fetchExCategories();
  }, []);
  const searchHandler = () => {
    props.searchHandler(search, setSearch);
  };
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      width="100%"
      sx={{ position: "relative" }}
    >
      <Typography
        fontWeight={900}
        sx={{ fontSize: { lg: "48px", sm: "32px", xs: "24px" } }}
        color="#131429"
        textAlign="center"
      >
        Effective Exercices You <br /> Should Explore
      </Typography>
      <Box
        position="relative"
        mb="72px"
        style={{ width: "85%", marginTop: "1rem" }}
      >
        <TextField
          sx={{
            label: {
              color: props.searchError ? "red" : "#131429",
              fontSize: { lg: "20px", sm: "16px" },
            },
            input: {
              backgroundColor: "#fff",
              fontWeight: "700",
              fontSize: "24px",
              color: "#131429",
            },
            width: "100%",
          }}
          variant="filled"
          label={
            props.searchError
              ? "How Search for Empty Exercise ?"
              : "Search Exercices..."
          }
          height="70px"
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
          onFocus={() => {
            props.setSearchError(false);
          }}
        />
        <Button
          onClick={searchHandler}
          className="search-btn"
          sx={{
            bgcolor: "#131429",
            color: "#fff",
            textTransform: "none",
            width: { lg: "173px", xs: "80px" },
            height: "100%",
            position: "absolute",
            right: "0px",
            fontSize: { lg: "28px", xs: "20px" },
          }}
        >
          Search
        </Button>
      </Box>
      <Categories
        setExercices={props.setExercices}
        data={bodyParts}
        bodyPart={props.bodyPart}
        setBodyPart={props.setBodyPart}
      ></Categories>
    </Stack>
  );
};

export default SearchExercices;
