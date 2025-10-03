import {
  Button,
  Container,
  Flex,
  Heading,
  Switch,
  Text,
  Theme,
} from "@radix-ui/themes";
import { Bed, Coffee } from "phosphor-react";
import { useCountdownTimer } from "use-countdown-timer";

import { timeToMiliseconds, milisecondsToTime } from "./utils/utils.jsx";
import "./App.css";

import { useEffect, useRef, useState } from "react";
import Menu from "./components/menu.jsx";

function App() {
  const [focusTime, setFocusTime] = useState({ minutes: 0, seconds: 4 });
  const [intervalTime, setIntervalTime] = useState({ minutes: 0, seconds: 10 });

  const [actualTimer, setActualTimer] = useState("focus");
  const [actualTimerBool, setActualTimerBool] = useState(false);

  const audioRef = useRef(null);

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
    if (actualTimer == "focus" && focusCountdown == 0) {
      setActualTimer("interval");
      audioRef.current.play();
      setActualTimerBool(true)
    } else if (actualTimer == "interval" && intervalCountdown == 0) {
      setActualTimer("focus");
      audioRef.current.play();
      setActualTimerBool(false)
    }
  };

  const handleTimerChange = () => {
    if (actualTimer === "focus") {
      setActualTimer("interval");
      setActualTimerBool(true)
    } else if (actualTimer === "interval") {
      setActualTimer("focus");
      setActualTimerBool(false)
    }
  };

  useEffect(() => {
    changeTimer();
  }, [focusCountdown, intervalCountdown]);

  return (
    <Theme appearance={"dark"}>
      <audio ref={audioRef} src="/doorbell.mp3" />
      <Flex direction="column" p="6" gap="7" justify="center">
        <Container py="0">
          <Flex align="center" direction="column" gap="2">
            <Flex gap="3">
              <Coffee />
              <Switch
                disabled={isFocusRunning || isIntervalRunning}
                color={actualTimer !== "focus" ? "blue" : "red"}
                onCheckedChange={handleTimerChange}
                checked={actualTimerBool}
              />
              <Bed />
            </Flex>
            <Text
              weight="bold"
              color={actualTimer === "focus" ? "tomato" : "blue"}
              size="9"
            >
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
          intervalTimer={{
            isIntervalRunning,
            intervalStart,
            intervalPause,
            intervalReset,
          }}
          actualTimer={actualTimer}
        />
      </Flex>
    </Theme>
  );
}

export default App;
