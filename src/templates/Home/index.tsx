import Base from 'templates/Base'
import UserInfo from 'components/UserInfo'

import * as S from './styles'
import { Divider } from 'components/Divider'
import MediumArticles from 'components/MediumArticles'

const Home = () => (
  <Base>
    <S.Main>
      <UserInfo />
      <Divider />
      <MediumArticles />
    </S.Main>
  </Base>
)

export default Home
