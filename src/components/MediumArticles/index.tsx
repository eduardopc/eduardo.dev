import React, { useState, useEffect } from 'react'
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
  Col
} from 'reactstrap'
var moment = require('moment')

interface IArticle {
  guid: 'string'
  thumbnail: 'string'
  link: 'string'
  title: 'string'
  pubDate: 'string'
  categories: ['string']
}

const MediumArticles = () => {
  const [mediumData, setMediumData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@pacheco.eduardo`
    )
      .then((res) => res.json())
      .then((response) => {
        setMediumData(response.items)
        setIsLoading(false)
      })
      .catch((err) => console.log(err))
  }, [])

  const finalData = mediumData
    .filter((article: IArticle) => article.categories.length > 0)
    .slice(0, 2)

  return (
    <div id="blog" className="container mt-3">
      {isLoading && <p>Fetching data from Medium!</p>}

      <Row>
        {finalData.map((article: IArticle) => (
          <Col md="4" className="mb-3" key={article.guid}>
            <div>
              <Card>
                <CardImg top width="25%" src={article.thumbnail} alt="img" />
                <CardBody>
                  <CardTitle>
                    <a href={article.link}>{article.title}</a>
                  </CardTitle>
                  <CardSubtitle>
                    Published:{' '}
                    {moment(article.pubDate).format('dddd, MMMM Do YYYY')}
                  </CardSubtitle>
                </CardBody>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default MediumArticles
