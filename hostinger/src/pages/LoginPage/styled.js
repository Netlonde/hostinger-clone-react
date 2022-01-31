import styled from "styled-components";


export const LoginStyled = styled.div`
  width: 525px;
  height: 469px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 1160px) {
    width: 435px;
    height: 469px;
  }

  @media (max-width: 490px) {
    width: 335px;
    height: 469px;
  }
`;

export const Background = styled.div`
  background-color: #202428;
  display: flex;
  align-items: center;
  justify-content: center;
`;
