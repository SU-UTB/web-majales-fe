import { questions } from '../../data/questions';
import { SectionContainer } from '../shared/SectionContainer';
import { QuestionListItem } from './QuestionListItem';

export const QuestionListSection = () => {
  return (
    <SectionContainer id="otazky-a-odpovedi">
      <h1 className="text-h2-reversed text-blue">Nejčastěji se nás ptáte</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-16">
        {questions.map((question) => (
          <QuestionListItem key={question.question} {...question} />
        ))}
      </div>
    </SectionContainer>
  );
};
