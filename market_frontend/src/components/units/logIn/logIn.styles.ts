import styled from "@emotion/styled";

export const OutWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 400px;
  padding: 20px;

  // 완성 후 삭제
  border: 1px solid gray;
  border-radius: 5%;
`;

export const Header = styled.div`
  padding-bottom: 70px;
  font-size: 50px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-weight: 500;
  text-align: center;

  // 완성 후 삭제
  /* background-color: red; */
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  // 완성 후 삭제
  /* background-color: blue; */
`;

export const MainInput = styled.input`
  margin-top: 20px;
  padding-left: 10px;
  height: 64px;
  border-radius: 16px;
`;

export const Error = styled.div`
  margin-top: 3px;
  padding-left: 10px;
  font-size: 7px;
  color: red;
`;

export const CheckboxWrapper = styled.div`
  margin: 15px 0px 30px;

  display: flex;
  flex-direction: row;
  justify-content: left;

  // 완성 후 삭제
  /* background-color: orange; */
`;

export const Checkbox = styled.input`
  margin-right: 10px;
`;

export const BoxName = styled.div``;

export const LogInButton = styled.button`
  margin-bottom: 40px;
  width: 100%;
  height: 64px;
  border-radius: 16px;
`;

export const Footer = styled.div`
  padding: 29px 50px 0px;

  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  // 완성 후 삭제
  /* background-color: green; */
`;

export const FooterInner = styled.div`
  border: none;
  cursor: pointer;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  // 완성 후 삭제
  /* background-color: purple; */
`;
