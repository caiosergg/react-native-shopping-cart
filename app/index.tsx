import React from "react";
import styled from "styled-components/native";

export default function App() {
  return (
    <Container>
      <Title>Title</Title>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: red;
`;

const Title = styled.Text`
  color: #fff;
  font-size: 25px;
`;
