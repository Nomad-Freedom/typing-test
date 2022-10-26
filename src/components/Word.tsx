type Props = {
  value: string;
  active: boolean;
};

const Word = ({ value, active }: Props) => {
  if (active) {
    return <span className="words words-active">{value} </span>;
  }
  return <span className="words">{value} </span>;
};

export default Word;
