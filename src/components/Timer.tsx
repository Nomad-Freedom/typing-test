import React, { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { timeAtom } from "../store";

type Props = {
  start: boolean;
};
const Timer = ({ start }: Props) => {
  const [time, setTime] = useAtom(timeAtom);
  useEffect(() => {
    let interval: number | undefined;
    if (start) {
      interval = setInterval(() => {
        setTime((oldTime) => oldTime - 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [start]);

  return <div>Time left: {time}</div>;
};

export default Timer;
