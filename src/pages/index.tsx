import Home, { TArticles } from 'templates/Home'
import { getData } from './api/getUserInfo'

export default function Index(props: TArticles) {
  return <Home {...props} />
}

export async function getServerSideProps() {
  const response = await getData()

  const jsonData = response?.length ? response : []
  return {
    props: {
      jsonData
    }
  }
}
