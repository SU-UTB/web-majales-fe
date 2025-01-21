import { MAJALES_DATE } from "../../config/constants";
import { CheckerRectangle } from "../svg/elements/CheckerRectangle";
import { CheckerSquare } from "../svg/elements/CheckerSquare";
import { AsteriskSquare } from "../svg/elements/hero/AsteriskSquare";
import { DateRectangle } from "../svg/elements/hero/DateRectangle";
import { Triangle } from "../svg/elements/hero/Triangle";
import { MajalesHeadline } from "../svg/MajalesHeadline";
import { SectionContainer } from "./SectionContainer";

export const SectionHero = ({ dateRectColor, BottomLeftTriangle1: BLT1, BottomLeftTriangle2: BLT2, BottomRightTriangle1: BRT1, BottomRightSquare: BRS1, BottomRightSquareAsterisk: BRSa1, BottomRightTriangle2: BRT2, BottomRightTriangle3: BRT3 } : { dateRectColor: string, BottomLeftTriangle1: string, BottomLeftTriangle2: string, BottomRightTriangle1: string, BottomRightSquare: string, BottomRightSquareAsterisk:string, BottomRightTriangle2: string, BottomRightTriangle3: string }) => {
  return(
    <SectionContainer
      id="majales-headline"
      className="pt-10 pb-24 md:pt-20 md:pb-32 xl:py-24"
    >
      <div className="relative flex justify-center">
        <MajalesHeadline width={500} />
      </div>
      {/* BOTTOM LEFT */}
      <div className="absolute bottom-0 left-0 z-10">
        <div className="relative">
          <Triangle className="absolute bottom-24 md:bottom-48 left-0 md:left-0 h-12 md:h-24 -rotate-90" color={BLT1} />
          <CheckerSquare className="absolute bottom-12 md:bottom-24 left-0 md:left-0 h-12 md:h-24" />
          <DateRectangle className="absolute bottom-0 md:bottom-0 left-0 md:left-0 h-12 md:h-24 w-36 md:w-72 overflow-hidden" color={dateRectColor}>
            <h2 className="text-h2-reversed-mobile md:text-h2-reversed text-white">
              {MAJALES_DATE.toLocaleDateString('cs-CZ')}
            </h2>
          </DateRectangle>
          <Triangle className="absolute bottom-0 md:bottom-0 left-36 md:left-72 h-12 md:h-24 -rotate-90" color={BLT2} />
        </div>
      </div>
      {/* BOTTOM RIGHT */}
      <div className="absolute bottom-0 right-0 z-0">
        <div className="relative">
          <Triangle className="absolute -left-12 md:-left-24 h-12 md:h-24 -rotate-180" color={BRT1} />
          <CheckerRectangle className="h-12 md:h-24" />
          <AsteriskSquare className="absolute right-0 md:right-0 bottom-12 md:bottom-24 h-12 md:h-24" color={BRS1} asteriskColor={BRSa1} /> 
          <Triangle className="absolute right-12 md:right-24 bottom-12 md:bottom-24 h-12 md:h-24 -rotate-180" color={BRT2} />
          <Triangle className="absolute right-0 md:right-0 bottom-24 md:bottom-48 h-12 md:h-24 -rotate-180" color={BRT3} />
        </div>
      </div>
    </SectionContainer>
  );
};