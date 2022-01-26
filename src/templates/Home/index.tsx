import { useEffect, useState } from 'react'
import { KeyboardArrowRight } from '@styled-icons/material-outlined'

import Base from 'templates/Base'
import UserInfo from 'components/UserInfo'

import * as S from './styles'
import { Divider } from 'components/Divider'
import MediumArticles from 'components/MediumArticles'
import { MEDIUMARTICLES } from 'languages'

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

const Home = ({ jsonData }: any) => {
  const [mediumData, setMediumData] = useState([])

  useEffect(() => {
    if (jsonData.length) {
      setMediumData(
        jsonData
          .filter((article: IArticle) => article.categories.length > 0)
          .slice(0, jsonData.length)
      )
    }
  }, [jsonData])

  return (
    <Base>
      <S.Main>
        <UserInfo />
        <Divider />
        <section>
          <S.Grid>
            {mediumData.map((item: IArticle) => (
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
