import React from "react";
import { Typography } from "@mui/material";

const TitleListCategory = ({ title }) => {
  return (
    <Typography variant="h6" style={{ color: "#576574" }}>
      {title}
    </Typography>
  );
};

export default TitleListCategory;
