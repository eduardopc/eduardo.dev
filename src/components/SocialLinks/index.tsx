import { Medium, Linkedin, Github, Instagram } from '@styled-icons/fa-brands'

import * as S from './styles'

type SocialMedia = {
  socialMedia: 'string'
  icon: JSX.Element
  url: 'string'
}

const socialMedias = [
  {
    socialMedia: 'medium',
    icon: <Medium title="medium" size={24} />,
    url: 'https://medium.com/@pacheco.eduardo'
  },
  {
    socialMedia: 'linkedin',
    icon: <Linkedin title="linkedin" size={24} />,
    url: 'https://www.linkedin.com/in/eduardopachecoceleste/'
  },
  {
    socialMedia: 'github',
    icon: <Github title="github" size={24} />,
    url: 'https://github.com/eduardopc'
  },
  {
    socialMedia: 'instagram',
    icon: <Instagram title="medium" size={24} />,
    url: 'https://www.instagram.com/eduardo.pacheco/'
  }
]

const SocialLinks = () => {
  return (
    <S.SocialLinks>
      {socialMedias.map((item) => (
        <S.Link key={item.socialMedia}>
          <a
            href={item.url}
            title={item.socialMedia}
            target="_blank"
            rel="noopenner, noreferrer"
          >
            {item.icon}
          </a>
        </S.Link>
      ))}
    </S.SocialLinks>
  )
}

export default SocialLinks
