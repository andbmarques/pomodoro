import { Button, Container, Flex } from "@radix-ui/themes";

const Menu = ({ focusTimer, intervalTimer, actualTimer }) => {
  return (
    <Container>
      <Flex direction="column" gap="2">
        <Flex gap="2" justify="center">
          <Button
            className="button"
            color="red"
            disabled={focusTimer.isFocusRunning || intervalTimer.isIntervalRunning}
            variant="soft"
            onClick={actualTimer === "focus" ? focusTimer.focusStart : intervalTimer.intervalStart}
          >
            Start
          </Button>
          <Button
            className="button"
            color="red"
            disabled={!focusTimer.isFocusRunning && !intervalTimer.isIntervalRunning}
            variant="soft"
            onClick={actualTimer === "focus" ? focusTimer.focusReset : intervalTimer.intervalReset}
          >
            Reset
          </Button>
          <Button
            className="button"
            color="red"
            disabled={!focusTimer.isFocusRunning && !intervalTimer.isIntervalRunning}
            variant="soft"
            onClick={actualTimer === "focus" ? focusTimer.focusPause : intervalTimer.intervalPause}
          >
            Pause
          </Button>
        </Flex>
        <Flex justify="center" px="2">
          <Button style={{ width: "100%" }} color="red" variant="outline">
            Config
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Menu;
