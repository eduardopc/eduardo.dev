import { NOT_FOUND_STRINGS, TEXT_BUTTONS } from 'languages/strings/pt-BR'
import React from 'react'
import Link from 'next/link'

import * as S from './styles'
import Button from 'components/Button'

const PageNotFound = ({ hasLink = true }) => {
  return (
    <S.Wrapper>
      <S.ImageContent>
        <S.Image src="/img/404.png" alt="not found" role="image" />
      </S.ImageContent>
      <S.Container>
        <S.Title>{NOT_FOUND_STRINGS.title}</S.Title>
        <S.Description>{NOT_FOUND_STRINGS.description}</S.Description>

        {hasLink && (
          <Link href="/" passHref>
            <Button as="a">{TEXT_BUTTONS.backToHome}</Button>
          </Link>
        )}
      </S.Container>
    </S.Wrapper>
  )
}

export default PageNotFound
