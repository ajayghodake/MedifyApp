import React from "react";
import { Container, Box, Stack } from "@mui/material";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import HospitalSearch from "../components/HospitalSearch/HospitalSearch";
import HeroServices from "../components/HeroServices/HeroServices";
import OffersSwiper from "../components/Sections/OffersSwiper/OffersSwiper";
import Specilization from "../components/Sections/Spelizations/Specilization";
import Specialists from "../components/Sections/Specialists/Specialists";
import PatientCaring from "../components/Sections/PatientCaring/PatientCaring";
import Blogs from "../components/Sections/Blogs/Blogs";
import OurFamilies from "../components/Sections/OurFamilies/OurFamilies";
import FAQ from "../components/Sections/FAQ/FAQ";
export default function Home() {
  return (
    <div>
      <Box>
        <Box
          sx={{
            background:
              "linear-gradient(#E7F0FF , rgba(232, 241, 255, 0.47) 90%, #fff 10%)",
          }}
          mb={4}
        >
          <Navbar />
          <Container maxWidth="xl">
            <Hero />

            <Stack
              p={{ xs: 2.5, md: 8 }}
              mt={{ xs: -2, md: 0, lg: -6, xl: -10 }}
              position="relative"
              zIndex={99}
              bgcolor="#fff"
              borderRadius="15px"
              spacing={10}
              boxShadow="0 0 15px rgba(0, 0, 0, 0.1)"
            >
              <HospitalSearch />
              <HeroServices />
            </Stack>
          </Container>
        </Box>
        <OffersSwiper />
        <Specilization />
        <Specialists />
        <PatientCaring />
        <Blogs/>
        <OurFamilies/>
        <FAQ/>
      </Box>
    </div>
  );
}
