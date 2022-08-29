import React from "react";
import {
  AppBar,
  Toolbar,
  Avatar,
  Box,
  Typography,
  Chip,
} from "@mui/material";

const MyToolbar = ({ name, address }) => {
  return (
    <AppBar style={{ backgroundColor: "white", height: 70 }} position="fixed">
      <Toolbar style={{ justifyContent: "space-between" }}>
        <Box display="flex" alignItems="center">
          <Avatar />
          <Box flex={1} sx={{ pt: 2 }} display="flex" flexDirection="column">
            <Typography
              style={{ color: "#2d3436" }}
              sx={{ fontWeight: "600", ml: 2 }}
              variant="h6"
            >
              {name}
            </Typography>
            <Typography
              style={{ color: "#576574", fontSize: 14 }}
              sx={{ ml: 2, mb: 2, mt: -1 }}
              variant="h6"
            >
              {address}
            </Typography>
          </Box>
        </Box>

        <Chip
          label="Aberto"
          size="small"
          sx={{ ml: 2 }}
          style={{
            color: "white",
            width: 65,
            backgroundColor: "#2ecc71",
          }}
        />
      </Toolbar>
    </AppBar>
  );
};

export default MyToolbar;
