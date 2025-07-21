import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #121212;
`;

export const Title = styled.Text`
  color: ${(props: { cor: any }) => props.cor};
  font-size: 25px;
`;

export const Nome = styled.Text`
  color: #fff;
  font-size: 20px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #ddd;
  padding: 5px;
  width: 90%;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  color: #000;
  font-size: 20px;
`;
