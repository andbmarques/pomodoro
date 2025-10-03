import { Button, Container, Flex, Heading, Text, Theme } from "@radix-ui/themes";
import { Clock } from "phosphor-react";
import { useCountdownTimer } from "use-countdown-timer";

import "./App.css"
import { useState } from "react";

function App() {

  const [focusTime, setFocusTime] = useState({ hours: 0, minutes: 2, seconds: 50 })
  const [intervalTime, setIntervalTime] = useState()

  const [actualTimer, setActualTimer] = useState("focus")

  const timeToMiliseconds = (timeObject) => {
    if (timeObject) {
      let totalTime = timeObject.seconds
      totalTime += timeObject.minutes * 60
      return totalTime
    }
  }

  const milisecondsToTime = (miliseconds) => {
    let formatedTime = miliseconds / 1000
    let minutes, seconds

    minutes = Math.floor(formatedTime / 60)
    seconds = formatedTime % 60

    let formatedMinutes = minutes.toString()
    let formatedSeconds = seconds.toString()

    if (minutes < 10) formatedMinutes = "0" + formatedMinutes
    if (seconds < 10) formatedSeconds = "0" + formatedSeconds

    return `${formatedMinutes}:${formatedSeconds}`
  }

  const { countdown: focusCountdown, start: focusStart, reset: focusReset, pause: focusPause, isRunning: isFocusRunning } = useCountdownTimer({
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
        <Container >
          <Flex direction="column" gap="2">
            <Flex gap="2" justify="center">
              <Button className="button" color="red" disabled={isFocusRunning} variant="soft" onClick={focusStart}>Start</Button>
              <Button className="button" color="red" disabled={!isFocusRunning} variant="soft" onClick={focusReset}>Reset</Button>
              <Button className="button" color="red" disabled={!isFocusRunning} variant="soft" onClick={focusPause}>Pause</Button>
            </Flex>
            <Flex justify="center" px="2">
              <Button style={{ width: "100%" }} color="red" variant="outline">Config</Button>
            </Flex>
          </Flex>
        </Container>
        <Container>

        </Container>
      </Flex>
    </Theme>
  );
}

export default App;
