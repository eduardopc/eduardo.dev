import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`

export const ImageContent = styled.div`
  justify-content: center;
`

export const Image = styled.img`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    width: 16.5rem;
    height: 16.5rem;
    border-radius: 100%;
    margin-bottom: ${theme.spacings.xsmall};
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
