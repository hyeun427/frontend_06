import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const InnerWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  cursor: pointer;
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
`;

export const User = styled.div`
  margin-right: 5px;
`;

export const SignUpButton = styled.button`
  background-color: #ffffff;
  border: none;
  cursor: pointer;
`;

export const Button = styled.button`
  margin: 5px;
  background-color: #ffffff;
  border: none;
  cursor: pointer;
`;
