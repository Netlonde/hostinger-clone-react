import styled from "styled-components";

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 40px;
  height: 70px;
  background-color: #36344d;
  color: #fff;
  font-weight: 400;

  .navbar-menu{
    display: flex;
  }

  .navbar-responsiveList{
    background-color: transparent;
    border: none;
    display: none;
  }

  .navbar-listMenu,
  .navbar-icons{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    align-items: center;
  }

  .navbar-logo{
    height: 30px;
    cursor: pointer;
  }

  .navbar-logo img {
    height: 100%;
    color: white;
  }

  .navbar-flabBrazil{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: green;
  }

  .navbar-listMenuButton{
    font-size: 11px;
    font-weight: 700;
    margin-left: 5px;
    color: #fff;
    background-color: #fc5185;
    border: none;
    padding: 1px 6px 1px;
    border-radius: 20px;
  }

  .navbar-user,
  .navbar-bell{
    color: #ccc;
    cursor: pointer;
    transition: all ease 100ms;
  }

  .navbar-user:hover,
  .navbar-bell:hover{
    color: #fff;
  }

  .navbar-userButton{
    background-color: transparent;
    border: none;
  }

  @media (max-width: 1160px) {
    .navbar-listMenu a li span{
      font-size: 10px;
    }

    .navbar-listMenuButton{
      font-size: 10px;
    }
  }

  @media (max-width: 970px) {
    .navbar-menu{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: right;
    }

    .navbar-listMenu,
    .navbar-icons{
      display: none;
    }

    .navbar-responsiveList{
      display: flex;
    }
  }
`;

export default Nav;
