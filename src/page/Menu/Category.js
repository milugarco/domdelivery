import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Avatar,
  Box,
  Typography,
  Button,
} from "@mui/material";

const Category = ({ id, name, onClick }) => {
  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  return (
    <Box
      style={{ cursor: "pointer", width: 100 }}
      onClick={onClick}
      alignItems="center"
      ml={2}
    >
      <Box justifyContent="center" display="flex">
        <Avatar
          sx={{ bgcolor: stringToColor(name) }}
          style={{ height: 65, width: 65 }}
          alt={name}
          src="/broken-image.jpg"
        />
      </Box>
      <Typography
        sx={{ mt: 0.5 }}
        variant="body1"
        style={{
          fontSize: 12,
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        {name}
      </Typography>
    </Box>
  );
};

export default Category;
