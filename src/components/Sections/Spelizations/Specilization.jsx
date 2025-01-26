import React, {useMemo } from "react";
import { Box, Container, Typography, Grid, Button} from "@mui/material";
import IconCard from "../../IconCard/IconCard";
import Dentistry from "../../../assets/icons/Drugstore.png";
import PrimaryCare from "../../../assets/icons/primary-care.png";
import Cardiology from "../../../assets/icons/cardiology.png";
import MriResonance from "../../../assets/icons/mri.png";
import BloodTest from "../../../assets/icons/blood-test.png";
import Piscologist from "../../../assets/icons/piscologist.png";
import Laboratory from "../../../assets/icons/Drugstore.png";
import Xray from "../../../assets/icons/X-Ray.png";

export default function Specilization() {

    const specilizationData = useMemo(() => [
        {img: Dentistry, title: 'Dentistry'},
        {img: PrimaryCare, title: 'Primary Care'},
        {img: Cardiology, title: 'Cardiology'},
        {img: MriResonance, title: 'MRI Resonance'},
        {img: BloodTest, title: 'Blood Test'},
        {img: Piscologist, title: 'Piscologist'},
        {img: Laboratory, title: 'Laboratory'},
        {img: Xray, title: 'X-Ray'},
    ], []);

  return (
    <Box py={6} sx={{ background: "linear-gradient(#E7F0FF, #E8F1FF)" }}>
      <Container sx={{ textAlign: "center" }}>
        <Typography variant="h2" color="#102851" mb={4}>
          Find by specialisation
        </Typography>
        <Grid container spacing={{ xs: 1, md: 3 }} mb={5} justifyContent={'center'}>
            {
                specilizationData.map((specilization)=>(
                    <Grid item key={specilization.title} xs={4} md={3}>
                        <IconCard img={specilization.img} title={specilization.title} bgColor="#FAFBFE" shadow={true}/>
                    </Grid>
                ))
            }
        </Grid>
        <Button variant="contained" size="large" disableElevation>View more</Button>
      </Container>
    </Box>
  );
}
