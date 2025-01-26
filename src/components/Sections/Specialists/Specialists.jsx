import { Box, Typography } from "@mui/material";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import DrCard from "./DrCards";
import doctor1 from "../../../assets/doctors/ahmad-stevens.png";
import doctor2 from "../../../assets/doctors/ahmad.png";
import doctor3 from "../../../assets/doctors/ankur.png";
import doctor4 from "../../../assets/doctors/heena.png";
import doctor5 from "../../../assets/doctors/lesley.png";

export default function Specialists() {
  const specialists = [
    { img: doctor1, name: "Dr. Tomisaku Stevens", title: "Neurologist" },
    { img: doctor2, name: "Dr. Vineet Arora", title: "Medicine" },
    { img: doctor3, name: "Dr. Ankur Singh", title: "Cardiologist" },
    { img: doctor4, name: "Dr. Heena Malhotra", title: "Dentist" },
    { img: doctor5, name: "Dr. Lesley Hull", title: "Orthopedic" },
    { img: doctor1, name: "Dr. Aman Kumar", title: "Physician" },
    { img: doctor2, name: "Dr. Rana Pitir", title: "Gynecologist" },
    { img: doctor3, name: "Dr. Ravinder Gera", title: "Dermatologist" },
    { img: doctor4, name: "Dr. Sahithi Kilaru", title: "ENT Specialist" },
    { img: doctor5, name: "Dr. Hemant Sharma", title: "Oncologist" },
  ];
  return (
    <Box py={4}>
      <Typography variant="h2" textAlign="center" mb={3} px={2}>
        Our Medical Specialist
      </Typography>
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        loop={true}
        centeredSlides={true}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{ 767: { slidesPerView: 4 } }}
      >
        {specialists.map((data, index)=> (
          <SwiperSlide key={index}>
            <DrCard img={data.img} name={data.name} title={data.title}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
