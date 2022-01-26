import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  // para deixar o footer sempre na parte de baixo da tela
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
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
    background-color: ${theme.colors.white};
    clip-path: polygon(0 5%, 100% 0%, 100% 100%, 0 100%);
  `}
`
