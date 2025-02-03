import { useSwiper } from "swiper/react";
import nextBtn from "../../../assets/icons/next.png";
import prevBtn from "../../../assets/icons/prev.png";
import { Box } from "@mui/material";

function SliderPrevBtn() {
  const swiper = useSwiper();
  return (
    <Box
      component="img"
      src={prevBtn}
      onClick={() => swiper.slidePrev()}
      height={48}
      width={48}
      position="absolute"
      left={0}
      top={0}
      sx={{cursor: 'pointer'}}
      zIndex={999}
      bgcolor='#fff'
    ></Box>
  );
};

function SliderNextBtn() {
    const swiper = useSwiper();
    return (
        <Box
        component='img'
        src={nextBtn}
        onClick={() => swiper.slideNext()}
        height={48}
        width={48}
        position='absolute'
        right={0}
        top={0}
        sx={{ cursor: 'pointer' }}
        zIndex={999}
        bgcolor='#fff'
    ></Box>
    );
}

export {SliderNextBtn, SliderPrevBtn}


