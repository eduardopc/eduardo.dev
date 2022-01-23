import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Divider = styled.div`
  ${({ theme }) => css`
    width: 1px;
    height: 90vh;
    margin: ${theme.spacings.xxlarge} auto ${theme.spacings.medium};
    background: rgba(181, 181, 181, 0.3);
    border: 0;
  `}
`
