import type { QuestionType } from '../../AppTypes';

export const QuestionListItem = ({ question, answer }: QuestionType) => {
  return (
    <div className="space-y-4">
      <h3 className="text-orange text-h2">{question}</h3>
      <p>{answer}</p>
    </div>
  );
};
