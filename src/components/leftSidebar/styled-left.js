import styled from "styled-components"
import { COLORS, SIZES } from "../../assets/theme"


export const LeftSidebarContainer = styled.div `
  width: 16rem;
  height: 100vh;
  // padding: 1rem ;


  .compose {
    margin: 1rem 0 0 .5rem;
    display: flex;
    align-items: center;
    // justify-content: center;
    width: 9rem;
    height: 50px;
    background: ${COLORS.kwhite};
    border-radius: 50px;
    box-shadow: 3px 3px 5px  #888888;


    h2{
      font-size: ${SIZES.h5};
      color: ${COLORS.iconColor};
      font-weight: 300;
    }
  }
`

export const SidebarListContainer = styled.div `
  margin-top: 1rem;
  .icon__title--container{
    padding: .5rem 1.5rem .5rem 2rem;
    width: 100%;
    display: flex;
    
    align-items: center;
    justify-content: space-between;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;

    &:hover{
      background: ${COLORS.lightGray};
    }

    .icon__title{
      display: flex;
      align-items: center;
   
       .icon{
         color: ${COLORS.iconColor};
         font-size:  ${SIZES.h3};
         margin-right:10px;
       }
   
       h3{
         font-weight: 400;
         font-size:  ${SIZES.body3};
         color: ${COLORS.iconColor};
       }
     }
   
     span{
       font-size: ${SIZES.font};
       color: ${COLORS.iconColor};
     }
  }

`

export const SidebarCenterContainer = styled.div `
  width:100%;
  height: 100vh;
  margin-left: 4rem;

  .icon{
    font-size:  ${SIZES.body3};
    padding: 0 .6rem;
    color: ${COLORS.iconColor};

    &:active{
      color: red;
    }
  }

  p{
    color: ${COLORS.iconColor};
    font-size: ${SIZES.font};

    &:active{
      color: red;
    }
  }

  .span{
    color: ${COLORS.iconColor};
    font-size: ${SIZES.radius};
  }

  .tab__panel--container{
    display: flex;
    grid-gap: 8rem;
    margin: 1rem  0;

    .tab__1{
      display: flex;
      align-items: center;
    }

    .tab__2{
      display: flex;
      align-items: center;


      .tab__2--social{
        display: flex;
        align-items: center;
        grid-gap: 10px;
      }
    }

    .tab__3{
      display: flex;
      align-items: center;
      
      .tab__3--promotions{
        display: flex;
        align-items: center;
        grid-gap: 10px;

      }
    }
  }
`