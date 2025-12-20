import type { QuestionType } from '../../AppTypes';

export const QuestionListItem = ({ question, answer }: QuestionType) => {
  return (
    <div className="relative z-10">
      <h2 className="text-orange text-xl md:text-2xl font-medium">{question}</h2>
      <p className="text-violet text-xl md:text-2xl font-normal">{answer}</p>
    </div>
  );
};
