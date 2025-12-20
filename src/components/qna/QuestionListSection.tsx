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
    <SectionContainer id="otazky-a-odpovedi" bgColor='beige'>
      <h1 className="text-3xl md:text-5xl font-medium text-violet pr-4">Nejčastěji se nás ptáte</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-2 md:py-8 text-white">
        {questions.map((question) => (
          <QuestionListItem key={question.question} {...question} />
        ))}
      </div>
    </SectionContainer>
  );
};
