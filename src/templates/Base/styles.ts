import styled, { css } from 'styled-components'

type TWrapper = {
  isOpen: boolean
}

export const Wrapper = styled.div<TWrapper>`
  // para deixar o footer sempre na parte de baixo da tela
  ${({ isOpen }) => css`
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
    overflow: ${isOpen ? 'hidden' : 'initial'};
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
    flex: 1 0 auto; // para deixar o conteúdo da página proximo ao menu mesmo com o justify-content acima
  `}
`

export const SectionFooter = styled.section`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
  `}
`
