type Props = {
  value: string;
  active: boolean;
};

const Word = ({ value, active }: Props) => {
  return (
    <span className={!active ? "words" : "words words-active"}>{value} </span>
  );
};

export default Word;
