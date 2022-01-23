import Heading from 'components/Heading'
import SocialLinks from 'components/SocialLinks'
import { SIDEINFO } from 'languages'
import { useEffect, useState } from 'react'
import * as S from './styles'

interface IGitHubUserInfo {
  image: 'string'
  alt: 'string'
}

const UserInfo = () => {
  const [userInfo, setUserInfo] = useState<IGitHubUserInfo>()

  useEffect(() => {
    fetch(`https://api.github.com/users/eduardopc`)
      .then((res) => res.json())
      .then((response) => {
        setUserInfo({ image: response.avatar_url, alt: response.login })
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <S.Wrapper>
      <S.ImageContent>
        <S.Image src={userInfo?.image} alt={userInfo?.alt} />
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
