import type { QuestionType } from '../../AppTypes';

export const QuestionListItem = ({ question, answer }: QuestionType) => {
  return (
    <div className="space-y-4">
      <h2 className="text-white text-h3-mobile md:text-h3">{question}</h2>
      <p>{answer}</p>
    </div>
  );
};
