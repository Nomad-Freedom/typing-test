import { useAtomValue } from "jotai";
import { getWordsPerMinute } from "../lib/wordStats";
import { timeAtom } from "../store";

type Props = {
  correctWords: boolean[];
};
const Wpm = ({ correctWords }: Props) => {
  const timeElapse = useAtomValue(timeAtom);
  const speed = getWordsPerMinute(timeElapse, correctWords);
  const content = !!speed ? speed?.toFixed(0) : "?";
  return <div>WPM: {content}</div>;
};

export default Wpm;
