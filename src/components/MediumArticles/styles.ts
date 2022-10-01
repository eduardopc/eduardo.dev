import styled, { css } from 'styled-components'

export const Wrapper = styled.article`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border-bottom: 3px solid ${theme.colors.secondary};
  `}
`

export const ImageBox = styled.div`
  height: 14rem;
  width: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    position: relative;
    margin: ${theme.spacings.xsmall};
  `}
`

export const Info = styled.div``

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    line-height: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.primary};
  `}
`
