import { MAJALES_DATE } from "../../config/constants";
import { ArrowLeft } from "../svg/elements/ArrowLeft";
import { DateRectangle } from "../svg/elements/DateRectangle";
import { Lightning } from "../svg/elements/Lightning";
import { SquareWithCircle } from "../svg/elements/SquareWithCircle";
import { Star } from "../svg/elements/Star";
import { Star45 } from "../svg/elements/Star45";
import { Triangle } from "../svg/elements/Triangle";
import { MajalesHeadline } from "../svg/MajalesHeadline";
import { Container } from "./Container";

type Props = {
  // LEFT SIDE
  dateRectColor: string,
  BottomLeftTriangleUpper: string,
  BottomLeftTriangleLower: string,
  BottomLeftSquareStarMain: string,
  BottomLeftSquareStarSec: string,
  BottomLeftSquareCircleMainLeft: string,
  BottomLeftSquareCircleMainRight: string,
  BottomLeftSquareCircleSecLeft: string,
  BottomLeftSquareCircleSecRight: string,

  // RIGHT SIDE
  // BOTTOM
  BottomRightTriangleLeft: string,
  timeRectColor: string,
  BottomRightLightning: string,
  BottomRightSquareCircleMainLeft: string,
  BottomRightSquareCircleMainRight: string,
  BottomRightSquareCircleSecLeft: string,
  BottomRightSquareCircleSecRight: string,
  BottomRightTriangleRight: string,

  // TOP
  TopRightTriangleUpper: string,
  TopRightSquareStar45Main: string,
  TopRightSquareStar45Sec: string,
  TopRightLeftArrowMain: string,
  TopRightLeftArrowSec: string,
};

export const SectionHero = ({
  // LEFT SIDE
  dateRectColor,
  BottomLeftTriangleUpper,
  BottomLeftTriangleLower,

  BottomLeftSquareStarMain,
  BottomLeftSquareStarSec,

  BottomLeftSquareCircleMainLeft,
  BottomLeftSquareCircleMainRight,
  BottomLeftSquareCircleSecLeft,
  BottomLeftSquareCircleSecRight,

  // RIGHT SIDE
  // BOTTOM
  BottomRightTriangleLeft,
  timeRectColor,
  BottomRightLightning,
  BottomRightSquareCircleMainLeft,
  BottomRightSquareCircleMainRight,
  BottomRightSquareCircleSecLeft,
  BottomRightSquareCircleSecRight,
  BottomRightTriangleRight,
  // TOP
  TopRightTriangleUpper,
  TopRightSquareStar45Main,
  TopRightSquareStar45Sec,
  TopRightLeftArrowMain,
  TopRightLeftArrowSec,
}: Props) => {
  return (
    <section
      id="landing"
      className="pt-12 pb-20 md:pb-32 xl:py-20 bg-no-repeat relative"
    >
      <Container>
        <div className="relative flex justify-center px-6">
          <MajalesHeadline width={700} />
        </div>
      </Container>

      {/* TOP RIGHT */}
      <div className="absolute top-0 right-0">
        <div className="relative">
          <ArrowLeft className="h-12 md:h-24" colorMain={TopRightLeftArrowMain} colorSecondary={TopRightLeftArrowSec} />
          <Star45 className="absolute top-12 md:top-24 h-12 md:h-24" colorMain={TopRightSquareStar45Main} colorSecondary={TopRightSquareStar45Sec} />
          <Triangle className="absolute top-24 md:top-48 h-12 md:h-24 rotate-90" colorMain={TopRightTriangleUpper} />
        </div>
      </div>
      {/* BOTTOM RIGHT */}
      <div className="absolute bottom-0 right-0">
        <div className="relative">
          <Triangle className="bottom-0 md:bottom-0 h-12 md:h-24 -rotate-90" colorMain={BottomRightTriangleRight} />
          <SquareWithCircle className="absolute right-12 md:right-24 bottom-0 md:bottom-0 h-12 md:h-24" colorBgLeft={BottomRightSquareCircleMainLeft} colorBgRight={BottomRightSquareCircleMainRight} colorCirLeft={BottomRightSquareCircleSecLeft} colorCirRight={BottomRightSquareCircleSecRight} />
          <Lightning className="absolute right-24 md:right-48 bottom-0 md:bottom-0 h-12 md:h-24" colorMain={BottomRightLightning} />
          <Triangle className="absolute right-36 md:right-72 bottom-0 md:bottom-0 h-12 md:h-24 rotate-180" colorMain={BottomRightTriangleLeft} />
          {/* <Triangle className="absolute right-36 md:right-72 bottom-0 md:bottom-0 h-12 md:h-24 rotate-180" colorMain='#FF785A' /> */}
          {/* <DateRectangle className="absolute bottom-0 md:bottom-0 right-0 md:right-0 h-12 md:h-24 w-36 md:w-72 overflow-hidden" color='#E7548A'>
            <h2 className="text-h2-reversed-mobile md:text-h2-reversed text-white">
              {MAJALES_TIME}
            </h2>
          </DateRectangle> */}
        </div>
      </div>
      {/* BOTTOM LEFT */}
      <div className="absolute bottom-0 left-0">
        <div className="relative">
          <Star className="absolute bottom-0 h-12 md:h-24" colorMain={BottomLeftSquareStarMain} colorSecondary={BottomLeftSquareStarSec} />
          {/* <CheckerSquare className="absolute bottom-0 h-12 md:h-24" color1='#000000' color2='#FFFFFF' /> */}
          <SquareWithCircle className="absolute bottom-12 md:bottom-24 h-12 md:h-24" colorBgLeft={BottomLeftSquareCircleMainLeft} colorBgRight={BottomLeftSquareCircleMainRight} colorCirLeft={BottomLeftSquareCircleSecLeft} colorCirRight={BottomLeftSquareCircleSecRight} />
          <Triangle className="absolute bottom-24 md:bottom-48 h-12 md:h-24 -rotate-90" colorMain={BottomLeftTriangleUpper} />
          {/* <CheckerTriangleTransparent className="absolute bottom-24 md:bottom-48 h-12 md:h-24" color='#FFFFFF' /> */}
          <DateRectangle className="absolute bottom-0 md:bottom-0 left-12 md:left-24 h-12 md:h-24 w-36 md:w-72 overflow-hidden" colorMain={dateRectColor}>
            <h2 className="text-3xl md:text-6xl font-medium text-white">
              {MAJALES_DATE.toLocaleDateString('cs-CZ')}
              {/* {MAJALES_DATE} */}
            </h2>
          </DateRectangle>
          <Triangle className="absolute bottom-0 md:bottom-0 left-48 md:left-96 h-12 md:h-24 -rotate-90" colorMain={BottomLeftTriangleLower} />
        </div>
      </div>
    </section>
  );
};