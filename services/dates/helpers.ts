import {
  addDays,
  setHours,
  setMinutes,
  setSeconds,
  setMilliseconds,
  differenceInMilliseconds,
} from "date-fns";

export function timeLeftInDay() {
  const now = new Date();
  const tomorrowMidnight = setHours(
    setMinutes(setSeconds(setMilliseconds(addDays(now, 1), 0), 0), 0),
    0
  );

  return differenceInMilliseconds(tomorrowMidnight, now);
}
