import {
  Button,
  Container,
  Flex,
  Heading,
  Text,
  Theme,
} from "@radix-ui/themes";
import { Clock } from "phosphor-react";
import { useCountdownTimer } from "use-countdown-timer";

import { timeToMiliseconds, milisecondsToTime } from "./utils/utils.jsx";
import "./App.css";

import { useEffect, useState } from "react";
import Menu from "./components/menu.jsx";

function App() {
  const [focusTime, setFocusTime] = useState({ minutes: 0, seconds: 5 });
  const [intervalTime, setIntervalTime] = useState({ minutes: 0, seconds: 10 });

  const [actualTimer, setActualTimer] = useState("focus");

  const {
    countdown: focusCountdown,
    start: focusStart,
    reset: focusReset,
    pause: focusPause,
    isRunning: isFocusRunning,
  } = useCountdownTimer({
    timer: 1000 * timeToMiliseconds(focusTime),
  });

  const {
    countdown: intervalCountdown,
    start: intervalStart,
    reset: intervalReset,
    pause: intervalPause,
    isRunning: isIntervalRunning,
  } = useCountdownTimer({
    timer: 1000 * timeToMiliseconds(intervalTime),
  });

  const changeTimer = () => {
    if (actualTimer == "focus" && focusCountdown == 0){
      setActualTimer("interval")
    } else if (actualTimer == "interval" && intervalCountdown == 0) {
      setActualTimer("focus")
    }
  }

  useEffect(() => {
    changeTimer()
  }, [focusCountdown, intervalCountdown])

  return (
    <Theme appearance={"dark"}>
      <Flex direction="column" p="8" gap="7" justify="center">
        <Container py="0">
          <Flex align="center" direction="column">
            <Text weight="bold" color={actualTimer === "focus" ? "tomato" : "blue"} size="9">
              {milisecondsToTime(
                actualTimer === "focus" ? focusCountdown : intervalCountdown
              )}
            </Text>
            <Text>
              {actualTimer === "focus" ? "Focus time!" : "Interval time!"}
            </Text>
          </Flex>
        </Container>
        <Menu
          focusTimer={{ isFocusRunning, focusStart, focusPause, focusReset }}
          intervalTimer={{ isIntervalRunning, intervalStart, intervalPause, intervalReset }}
          actualTimer={actualTimer}
        />
      </Flex>
    </Theme>
  );
}

export default App;
