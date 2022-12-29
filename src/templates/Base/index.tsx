import { Container } from 'components/Container'
import Footer from 'components/Footer'
import { useHome } from 'contexts/HomeContext'

import * as S from './styles'

export type BaseTemplateProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => {
  const { menuIsOpen } = useHome()

  return (
    <S.Wrapper isOpen={menuIsOpen}>
      <S.Content>{children}</S.Content>
      <S.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </S.SectionFooter>
    </S.Wrapper>
  )
}

export default Base
