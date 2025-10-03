import { Button, Container, Flex, Heading, Text, Theme } from "@radix-ui/themes";
import { Clock } from "phosphor-react";
import { useCountdownTimer } from "use-countdown-timer";

import { timeToMiliseconds, milisecondsToTime } from "./utils/utils.jsx"
import "./App.css"

import { useState } from "react";
import Menu from "./components/menu.jsx";

function App() {

  const [focusTime, setFocusTime] = useState({ minutes: 5, seconds: 0 })
  const [intervalTime, setIntervalTime] = useState({ minutes: 2, seconds: 30 })

  const [actualTimer, setActualTimer] = useState("focus")

  const { countdown: focusCountdown, start: focusStart, reset: focusReset, pause: focusPause, isRunning: isFocusRunning } = useCountdownTimer({
    timer: 1000 * timeToMiliseconds(focusTime)
  })

  const { countdown: intervalCountdown, start: intervalStart, reset: intervalReset, pause: intervalPause, isRunning: isIntervalRunning } = useCountdownTimer({
    timer: 1000 * timeToMiliseconds(focusTime)
  })

  return (
    <Theme appearance={"dark"} >
      <Flex direction="column" p="8" gap="7" justify="center">
        <Container py="0">
          <Flex align="center" direction="column">
            <Text weight="bold" color="tomato" size="9">{milisecondsToTime(focusCountdown)}</Text>
            <Text>{actualTimer === "focus" ? "Focus time!" : "Interval time!"}</Text>
          </Flex>
        </Container>
        <Menu focusTimer={{isFocusRunning, focusStart, focusPause, focusReset}} />
      </Flex>
    </Theme>
  );
}

export default App;
