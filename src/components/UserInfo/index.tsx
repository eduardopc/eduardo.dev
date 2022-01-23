import Heading from 'components/Heading'
import SocialLinks from 'components/SocialLinks'
import { SIDEINFO } from 'languages'
import * as S from './styles'

const UserInfo = () => {
  // const [mediumData, setMediumData] = useState([])
  // const [isLoading, setIsLoading] = useState(true)

  // useEffect(() => {
  //   fetch(
  //     `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@pacheco.eduardo`
  //   )
  //     .then((res) => res.json())
  //     .then((response) => {
  //       setMediumData(response.items)
  //       setIsLoading(false)
  //     })
  //     .catch((err) => console.log(err))
  // }, [])

  return (
    <S.Wrapper>
      {/* <Image /> */}
      <Heading size="medium">{SIDEINFO.name}</Heading>
      <S.Role>
        <Heading size="small" color="secondary">
          {SIDEINFO.role}
        </Heading>
      </S.Role>
      <S.Description>{SIDEINFO.description}</S.Description>
      <SocialLinks />
    </S.Wrapper>
  )
}

export default UserInfo
