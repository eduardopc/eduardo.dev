import { ReactElement, useMemo } from 'react'
import { Medium, Linkedin, Github, Instagram } from '@styled-icons/fa-brands'

import Heading from 'components/Heading'
import SocialLinks from 'components/SocialLinks'
import { SIDEINFO } from 'languages'
import * as S from './styles'
import Skills from 'components/Skills'

const UserInfo = (): ReactElement => {
  const socialMedias = useMemo(() => {
    return [
      {
        socialMedia: 'medium',
        icon: <Medium title="Medium" size={24} />,
        url: 'https://medium.com/@pacheco.eduardo'
      },
      {
        socialMedia: 'linkedin',
        icon: <Linkedin title="LinkedIn" size={24} />,
        url: 'https://www.linkedin.com/in/eduardopachecoceleste/'
      },
      {
        socialMedia: 'github',
        icon: <Github title="Github" size={24} />,
        url: 'https://github.com/eduardopc'
      },
      {
        socialMedia: 'instagram',
        icon: <Instagram title="Medium" size={24} />,
        url: 'https://www.instagram.com/eduardo.pacheco/'
      }
    ]
  }, [])

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
      <SocialLinks socialMedias={socialMedias} />
      <Skills />
    </S.Wrapper>
  )
}

export default UserInfo
