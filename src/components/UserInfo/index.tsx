import Heading from 'components/Heading'
import SocialLinks from 'components/SocialLinks'
import { SIDEINFO } from 'languages'
import * as S from './styles'

const UserInfo = () => {
  return (
    <S.Wrapper>
      <S.ImageContent>
        <S.Image src="/img/me.jpeg" alt="my picture" role="image" />
      </S.ImageContent>
      <Heading size="medium">{SIDEINFO.name}</Heading>
      <S.Role>
        <Heading size="small" color="secondary">
          {SIDEINFO.role}
        </Heading>
      </S.Role>
      <S.Description>{SIDEINFO.description}</S.Description>
      <SocialLinks />
    </S.Wrapper>
  )
}

export default UserInfo
