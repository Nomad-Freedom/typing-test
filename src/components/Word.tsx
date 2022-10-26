type Props = {
  value: string;
  active: boolean;
  correct: boolean | undefined;
};

const Word = ({ value, active, correct }: Props) => {
  if (correct === true) {
    return <span className="words words-correct">{value} </span>;
  }
  if (correct === false) {
    return <span className="words words-incorrect">{value} </span>;
  }
  return (
    <span className={!active ? "words" : "words words-active"}>{value} </span>
  );
};

export default Word;
