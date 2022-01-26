import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
  `}
`

export const DotsSection = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.xxlarge};
    text-align: center;
    letter-spacing: 10px;
    margin-bottom: ${theme.spacings.small};
  `}
`

export const SkillsWrapper = styled.div`
  ${({ theme }) => css`
    text-align: left;
  `}
`

export const TagsContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: wrap;
    gap: 8px;

    span {
      background-color: ${theme.colors.secondary};
      color: ${theme.colors.mainBg};
      padding: 2px 12px;
      border-radius: 4px;
      border: 1px solid ${theme.colors.secondary};
      font-weight: 600;
      font-size: 14px;
    }
  `}
`

// export const Tags = styled.span`
//   ${({ theme }) => css`
//     display: flex;
//     width: 30%;
//     align-items: center;
//     margin: 7px 0;
//     margin-right: 10px;
//     padding: 0 10px;
//     padding-right: 5px;
//     border: 1px solid ${theme.colors.secondary};
//     border-radius: 5px;
//     background-color: ${theme.colors.secondary};
//     white-space: nowrap;
//     color: ${theme.colors.mainBg};
//   `}
// `
