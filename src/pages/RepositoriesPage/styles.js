import styled from "styled-components";

export const Loading = styled.div`
display: flex;
align-itens: center;
justify-content: center;
min-height:100vh`

export const Container = styled.main`
  display: flex;
  min-height: 100vh;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column;
  }
`;
export const Sidebar = styled.aside`
  min-width: 20rem;
  overflow-y: hidden;
  background: ${(props) => props.theme.colors.background};
`;

export const Main = styled.section`
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
  padding: 40px;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    height: 100%;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: 40px 20px;
  }

  background: ${(props) => props.theme.colors.container};
`;
