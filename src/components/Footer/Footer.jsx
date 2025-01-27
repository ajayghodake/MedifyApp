import React from "react";
import { Box, Typography, Stack, Container, Grid } from "@mui/material";
import logo from "../../assets/logo/logo.png";
import facebook from "../../assets/icons/fb.png";
import youtube from "../../assets/icons/yt.png";
import twitter from "../../assets/icons/twitter.png";
import pinterest from "../../assets/icons/pinterest.png";
import Links from "./Links";

export default function Footer() {
  return (
    <Box bgcolor="primary.secondary" pb={3} pt={6}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4.5}>
            <Stack
              alignItems="flex-start"
              justifyContent="space-between"
              height={1}
            >
              <Box component="img" src={logo} alt="Medify" height={36} mb={2} />
              <Stack direction="row" spacing={1.5}>
                <Box component="img" src={facebook} height={36} />
                <Box component="img" src={twitter} height={36} />
                <Box component="img" src={youtube} height={36} />
                <Box component="img" src={pinterest} height={36} />
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} md={2.5}>
            <Stack spacing={2}>
              <Links>About Us</Links>
              <Links>Our Pricing</Links>
              <Links>Our Gallery</Links>
              <Links>Appointment</Links>
              <Links>Privacy Policy</Links>
            </Stack>
          </Grid>

          <Grid item xs={12} md={2.5}>
            <Stack spacing={2}>
              <Links>Orthology</Links>
              <Links>Neurology</Links>
              <Links>Dental Care</Links>
              <Links>Opthalmology</Links>
              <Links>Cardiology</Links>
            </Stack>
          </Grid>

          <Grid item xs={12} md={2.5}>
            <Stack spacing={2}>
              <Links>About Us</Links>
              <Links>Our Pricing</Links>
              <Links>Our Gallery</Links>
              <Links>Appointment</Links>
              <Links>Privacy Policy</Links>
            </Stack>
          </Grid>
        </Grid>
        <Typography
          fontWeight={300}
          color="#fff"
          fontSize={14}
          pt={3}
          mt={5}
          borderTop="1px solid rgba(255,255,255,0.1)"
        >
          Copyright ©2025 Mr. Ajay Ghodake All Rights Reserved
        </Typography>
      </Container>
    </Box>
  );
}
