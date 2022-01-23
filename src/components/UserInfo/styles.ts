import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as HeadingStyles from 'components/Heading/styles'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`

export const Role = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xsmall};
    text-align: center;
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    line-height: ${theme.spacings.xsmall};
    font-size: ${theme.spacings.xsmall};
    margin-top: ${theme.spacings.medium};
    text-align: center;
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.medium};
  `}
`

export const Block = styled.div``

export const SocialLinks = styled.ul`
  ${({ theme }) => css`
    display: flex;
    margin-top: ${theme.spacings.large};
    justify-content: space-around;
    margin-right: ${theme.spacings.medium};
  `}
`

export const Link = styled.li`
  ${({ theme }) => css`
    display: block;
    > a {
      padding: ${theme.spacings.xxsmall};
      color: ${theme.colors.secondary};
    }

    svg {
      width: 2.4rem;
      height: 2.4rem;
    }
  `}
`
