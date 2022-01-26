import * as S from './styles'

export type LineColors = 'primary' | 'secondary'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'primary' | 'secondary'
  lineLeft?: boolean
  lineBottom?: boolean
  size?: 'small' | 'medium' | 'huge'
  lineColor?: 'primary' | 'secondary'
  margin?: boolean
}

const Heading = ({
  children,
  color = 'primary',
  lineColor = 'primary',
  lineLeft = false,
  lineBottom = false,
  size = 'medium',
  margin = false
}: HeadingProps) => (
  <S.Wrapper
    color={color}
    lineLeft={lineLeft}
    lineBottom={lineBottom}
    size={size}
    lineColor={lineColor}
    margin={margin}
  >
    {children}
  </S.Wrapper>
)

export default Heading
