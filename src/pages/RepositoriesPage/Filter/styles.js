import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.2rem;
  margin: 1rem auto;
  padding-right: 2rem;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-columns: auto auto;
    gap: 0.8rem;
    padding-right: 0 1rem;
  }
`;

export const Selector = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme.colors.container};
  color: ${(props) => props.color || props.theme.colors.text};
  width: 100%;
  min-height: 2rem;
  border: none;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  transition: background 0.3s, transform 0.3s;
  padding: 0 1rem;

  &:hover,
  &.selected {
   background: ${(props) => props.color || props.theme.colors.white};
  color: ${(props) =>
    props.color ? props.theme.colors.white : props.theme.colors.black};
  transform: translateX(5px) scale(1.02)
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
  border-radius: 20px;

   &:hover,
   &.selected {
   transform: translateX(0) scale(1.02)
   }
  }

`;

export const Cleaner = styled.button`
background: transparent;
  color: ${(props) => props.theme.colors.text};
  border: none;
  text-align: left;
  padding: 10px;

  &:hover {
    color: rgba(1, 177, 247, 0.5);
  }
  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    text-align: center;
    padding: 0 1rem;
  }
`;
