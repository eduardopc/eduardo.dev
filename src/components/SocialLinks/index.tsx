import { ReactElement } from 'react'

import * as S from './styles'

type SocialMedia = {
  socialMedia: string
  icon: JSX.Element
  url: string
}

type TSocialMedias = {
  socialMedias: SocialMedia[]
}

const SocialLinks = ({ socialMedias }: TSocialMedias): ReactElement => {
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
