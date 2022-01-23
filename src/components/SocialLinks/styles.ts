import styled, { css } from 'styled-components'

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
