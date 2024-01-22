import styled from "styled-components";

export const StyledHeader = styled.div`

.container{
    display: flex;
    justify-content: center;
    align-items: center;

    padding-right: 64px;
    line-height: 50px;




    /* gap: 60px; */

    .menu-main{
        margin-left: 1%;
        margin-right: 2%
    }
    .main-menu, .second-menu{
        background-color: #fff;
    }
    #for-anim:hover{
        border-bottom: 2px solid black;
    }



    .log-in{
        margin-right: 20px;
        margin-left: 30px;
        padding: 0;
        border: none;
        background-color: transparent;
        cursor: pointer;

    }
    .sign-up{
        justify-content: center;
        align-items: center;
        border: none;
        color:white;
        background-color: black;
        padding: 10px 16.8px 10px 17px;
        border-radius: 40px;
        cursor: pointer;

    }
}




`