import { Button, Container, Flex } from "@radix-ui/themes"

const Menu = ({ focusTimer }) => {
    return (
        <Container>
            <Flex direction="column" gap="2">
                <Flex gap="2" justify="center">
                    <Button className="button" color="red" disabled={focusTimer.isFocusRunning} variant="soft" onClick={focusTimer.focusStart}>Start</Button>
                    <Button className="button" color="red" disabled={!focusTimer.isFocusRunning} variant="soft" onClick={focusTimer.focusReset}>Reset</Button>
                    <Button className="button" color="red" disabled={!focusTimer.isFocusRunning} variant="soft" onClick={focusTimer.focusPause}>Pause</Button>
                </Flex>
                <Flex justify="center" px="2">
                    <Button style={{ width: "100%" }} color="red" variant="outline">Config</Button>
                </Flex>
            </Flex>
        </Container>
    )
}

export default Menu