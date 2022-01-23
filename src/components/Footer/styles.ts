import styled, { css } from 'styled-components'

import * as HeadingStyles from 'components/Heading/styles'

export const Wrapper = styled.footer`
  ${HeadingStyles.Wrapper} {
    text-transform: uppercase;
  }
`

export const Copyright = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.small};
    margin-bottom: ${theme.spacings.medium};
    text-align: center;

    strong {
      color: ${theme.colors.secondary};
    }
  `}
`
