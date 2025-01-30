import React from 'react'
import { Box, Container, Stack, Typography } from "@mui/material";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import tickIcon from '../assets/icons/tick.png';
import SideOffer from '../assets/offers/cta.png';
import HospitalSearch from '../components/HospitalSearch/HospitalSearch';
import HospitalCard from '../components/HospitalCard/HospitalCard';
import BookingModal from '../components/BookingModal/BookingModal';

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [state, setState] = useState(searchParams.get("state"));
  const [city, setCity] = useState(searchParams.get("city"));
  const [hospitals, setHospitals] = useState([]);

  const [modalOpen, setModalOpen] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({});
  const [showBookingSuccess, setShowBookingSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  
  const slotsAvailable = {
    morning: ["11:30 am"],
    afternoon: ["12:00 PM, 12:30 PM, 1:30 PM, 2:00 PM, 2:30 PM", "3:30 PM"],
    evening: ["6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM"],
  };


  console.log("State", state);
  console.log("city", city);
  console.log("Hospitals" ,hospitals);

  useEffect(() => {
    const getHospitals = async () => {
      setHospitals([]);
      setIsLoading(true);
      try{ 
        const res = await axios.get(`https://meddata-backend.onrender.com/data?state=${state}&city=${city}`);
        setHospitals(res.data);
        setIsLoading(false);
      } catch(error) {
        setError(error);
        setIsLoading(false);
      }     
    }
    
    if(state && city) {
      getHospitals();
    }
  }, [state, city]);

  useEffect(() => {
    setState(searchParams.get("state"));
    setCity(searchParams.get("city"));
  }, [searchParams]);

  const handleBookingModal = (details) => {
    setBookingDetails(details);
    setModalOpen(true);
  };

  return (
    <Box>
      <Navbar />
      <Box sx={{ background:"linear-gradient(#EFF5FE, rgba(241,247,255, 0.5))", width: "100%", pl:0}}>
        <Box sx={{ position: "relative", background: "linear-gradient(90deg, #2AA7FF, #0C8CE5)", borderBottomLeftRadius: "1rem", borderBottomRightRadius: "1rem"}}>
          <Container maxWidth="xl" sx={{ background: "#fff", p:3, borderRadius: 2, transform: "translateY(50px)", mb: "50px",  boxShadow: "0 0 10px rgba(0,0,0,0.1)", }}>
            <HospitalSearch/>
          </Container>
        </Box>

        <Container maxWidth="xl" sx={{ pt: 8, pb: 10, px: {xs: 0, md:4} }}>
           {hospitals.length > 0 && (
            <Box sx={{mb: 3}}>
              <Typography component="h1"fontSize={24} lineHeight={1.1} mb={2} fontWeight={200}>
                {`${hospitals.length} Medical Centers available in `}
                <span style={{ textTransform: "capitalize"}}>
                  {city.toLocaleLowerCase()}
                </span>
              </Typography>
              <Stack direction="row" spacing={2}>
                <img src={tickIcon} alt="tick Icon" height={24} width={24} />
                <Typography color="#787887" lineHeight={1.4}>
                Book appointments with minimum wait-time & verified doctor
                details
                </Typography>
              </Stack>
            </Box>
           )}

           <Stack alignItems="flex-start" direction={{md : "row"}}>
            <Stack  mb={{xs: 4, md: 0}} spacing={3} width={{xs: 1, md: "calc(100% - 384px)"}} mr="24px">
              {hospitals.map((hospital) => (
                <HospitalCard key={hospital["Hospital Name"]} details={hospital} slotsAvailable={slotsAvailable} handleBookingModal={handleBookingModal}/>
              ))}

              {isLoading && (
                <Typography variant='h3' p={3} borderRadius={2}>
                  Loading...
                </Typography>
              )}

              {!state && (
                <Typography variant='h3' p={3} borderRadius={2}>
                Please select a state and city to view hospitals
              </Typography>
              )}

            </Stack>

            <img src={SideOffer} alt="Offer Info" width={360} height="auto" />
           </Stack>
        </Container>

        <BookingModal open={modalOpen} setOpen={setModalOpen} bookingDetails={bookingDetails} setShowBookingSuccess={setShowBookingSuccess} />
      </Box>
    </Box>
  )
};
