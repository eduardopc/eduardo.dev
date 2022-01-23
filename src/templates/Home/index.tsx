import Base from 'templates/Base'
import UserInfo from 'components/UserInfo'

import * as S from './styles'
import { Divider } from 'components/Divider'

const Home = () => (
  <Base>
    <S.Main>
      <UserInfo />
      <Divider />
    </S.Main>
  </Base>
)

export default Home
