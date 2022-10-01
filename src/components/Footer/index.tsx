import { FOOTER } from 'languages'
import * as S from './styles'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <S.Wrapper>
      <S.Copyright>
        {FOOTER.content}
        <strong>{FOOTER.author}</strong>
        {FOOTER.copyright(currentYear)}
      </S.Copyright>
    </S.Wrapper>
  )
}

export default Footer
