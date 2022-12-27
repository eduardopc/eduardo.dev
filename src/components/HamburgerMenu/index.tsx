import Link from 'next/link'
import React, { useState } from 'react'

import * as S from './styles'

const HamburgerMenu = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick((prevState) => !prevState)

  return (
    <>
      <S.MenuLabel clicked={click} htmlFor="navi-toggle" onClick={handleClick}>
        <S.Icon clicked={click}>&nbsp;</S.Icon>
      </S.MenuLabel>
      <S.NavBackground clicked={click}>&nbsp;</S.NavBackground>

      <S.Navigation clicked={click}>
        <S.List>
          <Link href="/" passHref>
            <S.ItemLink onClick={handleClick}>Home</S.ItemLink>
          </Link>
          <Link href="/about" passHref>
            <S.ItemLink onClick={handleClick}>About</S.ItemLink>
          </Link>
        </S.List>
      </S.Navigation>
    </>
  )
}

export default HamburgerMenu
