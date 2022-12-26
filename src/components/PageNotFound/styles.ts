import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    text-align: center;
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

export const ImageContent = styled.div`
  justify-content: center;
`

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.huge};

    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.xlarge};
    `}
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.light};
    margin-top: ${theme.spacings.small};
    margin-bottom: ${theme.spacings.large};

    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.small};
    `}
  `}
`

export const Container = styled.div`
  ${media.greaterThan('medium')`
      margin-top: -48px;
  `}
`
