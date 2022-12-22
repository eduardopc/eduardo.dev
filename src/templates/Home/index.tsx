import Base from 'templates/Base'
import UserInfo from 'components/UserInfo'

import * as S from './styles'

const Home = () => {
  return (
    <Base>
      <S.Main>
        <UserInfo />
      </S.Main>
    </Base>
  )
}

export default Home
