import styled, { css } from 'styled-components'

export const Main = styled.main`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    max-width: ${theme.grid.homeContainer};
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: calc(${theme.grid.gutter} / 2);
    padding-right: calc(${theme.grid.gutter} / 2);
  `}
`

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
    grid-gap: ${theme.spacings.medium};
    margin: ${theme.spacings.small} 0;
  `}
`

export const Link = styled.li`
  ${({ theme }) => css`
    display: block;
    > a {
      color: ${theme.colors.secondary};
      text-decoration: none;
    }
  `}
`

export const ShowMore = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: 'center';
    align-itens: 'center';
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    margin: auto;

    > svg {
      margin-top: -5px;
      color: ${theme.colors.secondary};
    }

    > a {
      text-decoration: none;
      color: ${theme.colors.secondary} !important;
    }
  `}
`
