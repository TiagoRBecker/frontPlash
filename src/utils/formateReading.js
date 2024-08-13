import { readingTime } from "reading-time-estimator";
export   const reading = (text) => {
    const read = readingTime(text, 170, "pt-br");
    return read.minutes;
  };