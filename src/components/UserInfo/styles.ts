import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`

export const ImageContent = styled.div`
  justify-content: center;
`

type ImageProps = {
  shake: boolean
}

export const Image = styled.img<ImageProps>`
  ${({ theme, shake }) => css`
    background-color: ${theme.colors.primary};
    width: 16.5rem;
    height: 16.5rem;
    border-radius: 100%;
    margin-bottom: ${theme.spacings.xsmall};

    ${media.greaterThan('medium')`
    animation: ${
      shake && 'shake 4s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite'
    }`}

    ${media.lessThan('medium')`
      margin-top: ${theme.spacings.medium};
      width: 14.5rem;
      height: 14.5rem;
    `}

    @keyframes shake {
      10%,
      90% {
        transform: translate3d(-1px, 0, 0);
      }

      20%,
      80% {
        transform: translate3d(2px, 0, 0);
      }

      30%,
      50%,
      70% {
        transform: translate3d(-4px, 0, 0);
      }

      40%,
      60% {
        transform: translate3d(4px, 0, 0);
      }
    }
  `}
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
