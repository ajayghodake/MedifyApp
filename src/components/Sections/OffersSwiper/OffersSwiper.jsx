import { Box, Container } from "@mui/material";
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
// import styles from "./OfferSwiper.module.css";
import OfferImg1 from "../../../assets/offers/offer1.png";
import OfferImg2 from "../../../assets/offers/offer2.png";

export default function OffersSwiper() {
  return (
    <Box py={6}>
      <Container maxWidth="xl">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            767: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <Box component={"img"} src={OfferImg1} />
          </SwiperSlide>
          <SwiperSlide>
            <Box component={"img"} src={OfferImg2} />
          </SwiperSlide>
          <SwiperSlide>
            <Box component={"img"} src={OfferImg1} />
          </SwiperSlide>
          <SwiperSlide>
            <Box component={"img"} src={OfferImg2} />
          </SwiperSlide>
          <SwiperSlide>
            <Box component={"img"} src={OfferImg1} />
          </SwiperSlide>
          <SwiperSlide>
            <Box component={"img"} src={OfferImg2} />
          </SwiperSlide>
        </Swiper>
      </Container>
    </Box>
  );
}

