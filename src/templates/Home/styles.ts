import styled, { css } from 'styled-components'

import { Container } from 'components/Container'
import media from 'styled-media-query'

export const Main = styled(Container)`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
      display: grid;
      grid-template-columns: 38rem 0.1rem 1fr;
      gap: ${theme.grid.gutter};
    `}
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
