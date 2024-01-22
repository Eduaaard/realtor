import styled from "styled-components";

export const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  padding: 12px 0;
  font-size: calc(0.2vw + 11px);

  .headerLogo {
    margin: 0 32px 0 20px;
  }

  nav {
    display: flex;
    gap: 16px;
  }
  
  .clientSupport {
    display: flex;
    gap: 28px;
    margin: 0 calc(4.1vw + 0.2px) 0 104px;
  }

  .userAuth {
    display: flex;
    gap: 16px;
  }
`