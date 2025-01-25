import React, { useMemo } from 'react'
import { Box, Typography, Grid } from '@mui/material'
import IconCard from "../IconCard/IconCard";
import DoctorIcon from '../../assets/icons/Doctor.png'
import LabsIcon from '../../assets/icons/Drugstore.png'
import HospitalsIcon from '../../assets/icons/Hospital.png'
import MedicalStoreIcon from '../../assets/icons/Capsule.png'
import AmbulanceIcon from '../../assets/icons/Ambulance.png'



export default function HeroServices() {

  const serviceData = useMemo(() => [
    {img: DoctorIcon, title: 'Doctors'},
    {img: LabsIcon, title: 'Labs'},
    {img: HospitalsIcon, title: 'Hospitals', active: true},
    {img: MedicalStoreIcon, title: 'Medical Store '},
    {img: AmbulanceIcon, title: 'Ambulance'}
  ], [])


  return (
    <div>
      <Box>
        <Typography component="h4" fontSize={20} color='#102851' textAlign="center" mb={2}>You may be looking for</Typography>
        <Grid container columnSpacing={{xs: 1, md: 2}} justifyContent="center" rowSpacing={1}>
          {serviceData.map((service)=> (
            <Grid item key={service.title} xs={4} md={2.4} >
              <IconCard img={service.img} title={service.title} active={service.active || false} bgColor="#FAFBFE"/>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  )
}
