import { useMemo } from 'react'
import { KeyboardArrowRight } from '@styled-icons/material-outlined'

import Base from 'templates/Base'
import UserInfo from 'components/UserInfo'

import * as S from './styles'
import { Divider } from 'components/Divider'
import MediumArticles from 'components/MediumArticles'
import { MEDIUMARTICLES } from 'languages'
import Heading from 'components/Heading'

export interface IArticle {
  guid: 'string'
  thumbnail: 'string'
  link: 'string'
  title: 'string'
  pubDate: 'string'
  categories: ['string']
}

export type TArticles = {
  jsonData: IArticle[]
}

const Home = ({ jsonData }: TArticles) => {
  const articles = useMemo(
    () =>
      jsonData
        .filter((article: IArticle) => article.categories.length > 0)
        .slice(0, jsonData.length),
    [jsonData]
  )

  console.log(articles)

  return (
    <Base>
      <S.Main>
        <UserInfo />
        <Divider />
        <section>
          <Heading size="small" lineLeft lineColor="secondary" margin>
            {MEDIUMARTICLES.articles}
          </Heading>
          <S.Grid>
            {articles.map((item: IArticle) => (
              <S.Link key={item.title}>
                <a
                  href={item.link}
                  title={item.title}
                  target="_blank"
                  rel="noopenner, noreferrer"
                >
                  <MediumArticles key={item.title} {...item} />
                </a>
              </S.Link>
            ))}
            <S.ShowMore>
              <a
                href={MEDIUMARTICLES.uri}
                title={MEDIUMARTICLES.title}
                target="_blank"
                rel="noreferrer"
              >
                <p>Demais Artigos</p>
              </a>
              <KeyboardArrowRight size={35} />
            </S.ShowMore>
          </S.Grid>
        </section>
      </S.Main>
    </Base>
  )
}

export default Home
