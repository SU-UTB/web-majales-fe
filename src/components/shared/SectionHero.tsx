import { MAJALES_DATE } from "../../config/constants";
import { MAJALES_TIME } from "../../config/constants";
import { AsteriskSquare } from "../svg/elements/AsteriskSquare";
import { CheckerSquare } from "../svg/elements/CheckerSquare";
import { DateRectangle } from "../svg/elements/DateRectangle";
import { Triangle } from "../svg/elements/Triangle";
import { MajalesHeadline } from "../svg/MajalesHeadline";
import { SectionContainer } from "./SectionContainer";

type Props = {
  dateRectColor: string, 
  BottomLeftTriangle1: string, 
  BottomLeftTriangle2: string, 
  BottomRightTriangle1: string, 
  timeRectColor: string;
  BottomRightSquare: string, 
  BottomRightSquareAsterisk: string, 
  BottomRightTriangle2: string, 
  BottomRightTriangle3: string
};

export const SectionHero = ({ dateRectColor, BottomLeftTriangle1, BottomLeftTriangle2, BottomRightTriangle1, timeRectColor, BottomRightSquare, BottomRightSquareAsterisk, BottomRightTriangle2, BottomRightTriangle3 } : Props) => {
  return(
    <SectionContainer
      id="majales-headline"
      className="pt-10 pb-24 md:pt-20 md:pb-32 xl:py-24"
    >
      <div className="relative flex justify-center">
        <MajalesHeadline width={500} />
      </div>
      {/* BOTTOM RIGHT */}
      <div className="absolute bottom-0 right-0 z-0">
        <div className="relative">
          <Triangle className="absolute right-36 md:right-72 bottom-0 md:bottom-0 h-12 md:h-24 -rotate-180" color={BottomRightTriangle1} />
          <DateRectangle className="absolute bottom-0 md:bottom-0 right-0 md:right-0 h-12 md:h-24 w-36 md:w-72 overflow-hidden" color={timeRectColor}>
            <h2 className="text-h2-reversed-mobile md:text-h2-reversed text-white">
              {MAJALES_TIME}
            </h2>
          </DateRectangle>
          <AsteriskSquare className="absolute right-0 md:right-0 bottom-12 md:bottom-24 h-12 md:h-24" color={BottomRightSquare} asteriskColor={BottomRightSquareAsterisk} /> 
          <Triangle className="absolute right-12 md:right-24 bottom-12 md:bottom-24 h-12 md:h-24 -rotate-180" color={BottomRightTriangle2} />
          <Triangle className="absolute right-0 md:right-0 bottom-24 md:bottom-48 h-12 md:h-24 -rotate-180" color={BottomRightTriangle3} />
        </div>
      </div>
      {/* BOTTOM LEFT */}
      <div className="absolute bottom-0 left-0 z-0">
        <div className="relative">
          <Triangle className="absolute bottom-24 md:bottom-48 left-0 md:left-0 h-12 md:h-24 -rotate-90" color={BottomLeftTriangle1} />
          <CheckerSquare className="absolute bottom-12 md:bottom-24 left-0 md:left-0 h-12 md:h-24" color1="#000000" color2="#FFFFFF" />
          <DateRectangle className="absolute bottom-0 md:bottom-0 left-0 md:left-0 h-12 md:h-24 w-36 md:w-72 overflow-hidden" color={dateRectColor}>
            <h2 className="text-h2-reversed-mobile md:text-h2-reversed text-white">
              {MAJALES_DATE.toLocaleDateString('cs-CZ')}
            </h2>
          </DateRectangle>
          <Triangle className="absolute bottom-0 md:bottom-0 left-36 md:left-72 h-12 md:h-24 -rotate-90" color={BottomLeftTriangle2} />
        </div>
      </div>
    </SectionContainer>
  );
};