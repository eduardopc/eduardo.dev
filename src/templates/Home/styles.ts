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
