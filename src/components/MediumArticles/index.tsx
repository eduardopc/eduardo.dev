import { IArticle } from 'templates/Home'

import * as S from './styles'

const MediumArticles = (mediumData: IArticle) => {
  return (
    <S.Wrapper>
      <S.ImageBox>
        <img src={mediumData.thumbnail} alt={mediumData.title} />
      </S.ImageBox>
      <S.Content>
        <S.Info>
          <S.Title>{mediumData.title}</S.Title>
        </S.Info>
      </S.Content>
    </S.Wrapper>
  )
}

export default MediumArticles
