import React from "react";

import { Button, ButtonText, Container, Nome, Title } from "./styles";

export default function App() {
  return (
    <Container>
      <Title cor="red">Title</Title>
      <Nome>Name</Nome>
      <Button onPress={() => alert("Tab")}>
        <ButtonText>Enter</ButtonText>
      </Button>
    </Container>
  );
}
