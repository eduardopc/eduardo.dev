import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Divider = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.large} auto ${theme.spacings.medium};
    height: 0.1rem;
    background: rgba(181, 181, 181, 0.3);
    border: 0;

    ${media.greaterThan('medium')`
      display: flex;
      flex-direction: column;
      width: 1px;
      height: 100%;
      margin: ${theme.spacings.medium} auto;
      background: rgba(181, 181, 181, 0.3);
    `}
  `}
`
