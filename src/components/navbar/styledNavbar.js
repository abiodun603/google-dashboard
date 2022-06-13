import styled from "styled-components";
import { COLORS, SIZES } from "../../assets/theme";

export const NavbarContainer = styled.div `
  height: 8vh;
  display: flex;
  padding: 0 1rem;
  justify-content: space-between;
  border-bottom: 1px solid ${COLORS.lightGray};

  .box__one{
    display: flex;
    align-items: center;
  }

  // logo design 
  .nav__logo--container {
    display: flex;
    align-items: center;

  }
  .navLogo{
    display : flex;
    align-items: center;

    img{
      width: 35px;
      margin-left: .8rem;
    }

    h2{
      color: ${COLORS.iconColor};
      font-weight: 300;
      margin-left: .8rem;
      font-size: ${SIZES.body1};
    }
  }

  // search__container
  .search__container {
    position: relative;
    width: 700px;
    height: 48px;
    background: ${COLORS.lightGray};
    border-radius: ${SIZES.base};
    margin-left: 4rem;

    .search__icon{
      position: absolute;
      left: 10px;
      top: 13px;
      font-size: 20px;
    }

    .search__icon-two{
      position: absolute;
      right: 10px;
      top: 13px;
      font-size: 20px;
    }
    
    input{
      width: 100%;
      height: 100%;
      outline: none;
      border: none;
      background: transparent;

      ::placeholder{
        padding-left: 3.5rem;
        font-size: ${SIZES.body3};
      }
    }
  }

  // ==== Circle Avater ======//
  .circle-avatar {
    width: 40px;
    height: 40px;
    background-color: black;
    border-radius: 50%;
    margin: 0 .6rem;

    .avatar-image{
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }


  // box-two style
  .box__two{
    display: flex;
    align-items: center;
  }

  .icon{
    font-size:  ${SIZES.body1};
    padding: 0 .6rem;
    color: ${COLORS.iconColor};
  }

`