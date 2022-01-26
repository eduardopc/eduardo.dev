import { useMemo } from 'react'

import Heading from 'components/Heading'
import * as S from './styles'
import { SKILLS } from 'languages'

export type LineColors = 'primary' | 'secondary'

const tags = SKILLS.tags.sort()

const Skills = () => {
  return (
    <S.Wrapper>
      <S.DotsSection>{'. . .'}</S.DotsSection>
      <S.SkillsWrapper>
        <Heading size="small" lineBottom lineColor="secondary">
          {SKILLS.skills}
        </Heading>
        <S.TagsContainer>
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </S.TagsContainer>
      </S.SkillsWrapper>
    </S.Wrapper>
  )
}

export default Skills
