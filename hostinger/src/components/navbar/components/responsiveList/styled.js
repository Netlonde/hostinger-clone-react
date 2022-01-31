import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  width: 280px;
  padding: 1rem 0;
  color: #fff;
  background: #343a40;
  right: 0;
  bottom: 0;
  top: 0;
  transition: all ease-in-out 400ms;

  .responsivelist-closeButton{
    position: fixed;
    right: 1rem;
    border: none;
    background-color: transparent;
  }

  .responsivelist-listMenu{
    position: relative;
    margin-top: 24px;
  }

  .responsivelist-listMenu a{
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0.8rem 0 0.8rem 2rem;
  }

  .responsivelist-listMenu a:hover{
    background-color: #3f474e;
  }

  .responsivelist-listMenuButton{
    font-size: 11px;
    font-weight: 700;
    margin-left: 5px;
    color: #fff;
    background-color: #fc5185;
    border: none;
    padding: 1px 6px 1px;
    border-radius: 20px;
  }
`;


export default Container;
