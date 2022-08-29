import React from "react";
import { Box, Avatar, Typography, Card } from "@mui/material";
import { AddCircle as AddCircleIcon } from "@mui/icons-material";

const Product = ({ description, name, price, onClick }) => {
  return (
    <Card onClick={onClick} sx={{ m: 2 }} style={{ borderRadius: 10, cursor: "pointer" }}>
      <Box display="flex" justifyContent="space-between">
        <Avatar
          sx={{ m: 2 }}
          style={{ borderRadius: 0, height: 60, width: 60 }}
        ></Avatar>
        <div style={{ marginTop: 10 }}>
          <Typography variant="h6" style={{ fontWeight: "bold", fontSize: 18 }}>
            {name}
          </Typography>
          <Typography variant="h6" style={{ color: "#576574", fontSize: 12 }}>
            {description}
          </Typography>
          <Typography
            variant="h6"
            style={{
              color: "black",
              fontSize: 14,
              fontWeight: "bold",
            }}
          >
            R$ {parseFloat(price).toFixed(2)}
          </Typography>
        </div>
        <AddCircleIcon sx={{ m: 2 }} style={{ color: "#2ecc71" }} />
      </Box>
    </Card>
  );
};

export default Product;
