import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@radix-ui/themes/styles.css";
import { Container, Flex, Heading, Theme } from "@radix-ui/themes";
import "./settings.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Theme appearance="dark">
        <Container>
            <Flex direction="column" p='4'>
                <Heading className="header">Settings</Heading>
            </Flex>
        </Container>
    </Theme>
  </React.StrictMode>
);