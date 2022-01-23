import { FOOTER } from 'languages'
import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <S.Copyright>
      {FOOTER.content}
      <strong>{FOOTER.author}</strong>
      {FOOTER.copyright}
    </S.Copyright>
  </S.Wrapper>
)

export default Footer
