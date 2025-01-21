import { questions } from '../../data/questions';
import { SectionContainer } from '../shared/SectionContainer';
import { ArrowSquare } from '../svg/elements/ArrowSquare';
import { CheckerRectanglePortrait } from '../svg/elements/CheckerRectanglePortrait';
import { CheckerSquare } from '../svg/elements/CheckerSquare';
import { HalfTransparentRedTriangle2X } from '../svg/elements/HalfTransparentRedTriangle2X';
import { SquareWithCircle } from '../svg/elements/SquareWithCircle';
import { Triangle } from '../svg/elements/Triangle';
import { QuestionListItem } from './QuestionListItem';

export const QuestionListSection = () => {
  return (
    <SectionContainer id="otazky-a-odpovedi" bgColor='lightpink'>
      <h1 className="text-h2-reversed text-white">Nejčastěji se nás ptáte</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-16 text-white">
        {questions.map((question) => (
          <QuestionListItem key={question.question} {...question} />
        ))}
      </div>
      {/* TOP RIGHT */}
      <div className="absolute top-0 right-0 z-10">
        <div className="relative">
          <HalfTransparentRedTriangle2X className="absolute top-0 md:top-0 right-0 md:right-0 h-24 md:h-48 -rotate-90" color='#FFE2DE' />
        </div>
      </div>

      {/* BOTTOM RIGHT */}
      <div className="absolute bottom-0 right-0 z-10">
        <div className="relative">
          <ArrowSquare className="absolute bottom-0 md:bottom-0 right-0 md:right-0 h-12 md:h-24 rotate-90" color='#FFE2DE' />
          <SquareWithCircle className="absolute bottom-0 md:bottom-0 right-12 md:right-24 h-12 md:h-24" colorBg='#E7548A' colorLeftHalf='#F49183' colorRightHalf='#FFFFFF' />
          <CheckerSquare className="absolute bottom-0 md:bottom-0 right-24 md:right-48 h-12 md:h-24" color1='#FFE2DE' color2='#FF785A' />
          <Triangle  className="absolute bottom-0 md:bottom-0 right-36 md:right-72 h-12 md:h-24 rotate-180" color='#FFE2DE' />
        </div>
      </div>
    </SectionContainer>
  );
};
