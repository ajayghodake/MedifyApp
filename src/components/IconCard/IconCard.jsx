import React from "react";
import { Box, Typography, Stack } from "@mui/material";
// import shadows from "@mui/material/styles/shadows";
export default function IconCard({
  img,
  title,
  bgColor,
  active = false,
  shadow = false,
}) {
  return (
    <Stack
      alignItems="center"
      bgcolor={active ? "rgba(42,167,255,0.08)" : bgColor}
      p={{ xs: 2, sm: 3, md: 4 }}
      spacing={2}
      borderRadius={2}
      border={active ? "1px solid #2AA7FF" : 0}
      boxShadow={shadow ? "0 0 24px rgba(0,0,0,0.09)" : "none"}
    >
      <Box
        component="img"
        src={img}
        sx={{
          height: { xs: 35, sm: 40, md: 50, lg: 60 },
          width: { xs: 35, sm: 40, md: 50, lg: 60 },
        }}
      />
      <Typography
        color={active ? "primary.main" : "#ABB6C7"}
        fontSize={{ xs: 12, sm: 14, md: 18 }}
        fontWeight={active ? 600 : 400}
      >
        {title}
      </Typography>
    </Stack>
  );
}
