import { ReactElement, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Medium, Linkedin, Github, Instagram } from '@styled-icons/fa-brands'

import Heading from 'components/Heading'
import SocialLinks from 'components/SocialLinks'
import { SIDEINFO } from 'languages'
import * as S from './styles'
import Skills from 'components/Skills'

const UserInfo = (): ReactElement => {
  const [showPersonalInfo, setShowPersonalInfo] = useState(false)
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

  const handleOnHover = () => {
    setTimeout(() => {
      setShowPersonalInfo((prevState) => !prevState)
    }, 500)
  }

  return (
    <S.Wrapper>
      <S.ImageContent>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{
            layout: {
              duration: 1,
              type: 'just'
            }
          }}
          layout
          onHoverStart={handleOnHover}
          onHoverEnd={handleOnHover}
        >
          <S.Image
            src="/img/me.jpeg"
            alt="my picture"
            role="image"
            shake={!showPersonalInfo}
          />
          <Heading size="medium">{SIDEINFO.name}</Heading>
        </motion.div>
      </S.ImageContent>

      {showPersonalInfo && (
        <motion.div
          initial={{ opacity: 0 }}
          transition={{
            delay: 1
          }}
          animate={{
            opacity: 1
          }}
        >
          <S.Role>
            <Heading size="small" color="secondary">
              {SIDEINFO.role}
            </Heading>
          </S.Role>
          <S.Description>{SIDEINFO.description}</S.Description>
        </motion.div>
      )}
      <SocialLinks socialMedias={socialMedias} />
      <Skills />
    </S.Wrapper>
  )
}

export default UserInfo
