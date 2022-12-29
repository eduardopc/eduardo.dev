import React from 'react'
import { useHome } from 'contexts/HomeContext'
import Link from 'next/link'

import * as S from './styles'

const HamburgerMenu = () => {
  const { menuIsOpen, openMenu } = useHome()

  return (
    <>
      <S.MenuLabel
        clicked={menuIsOpen}
        htmlFor="navi-toggle"
        onClick={openMenu}
      >
        <S.Icon clicked={menuIsOpen}>&nbsp;</S.Icon>
      </S.MenuLabel>
      <S.NavBackground clicked={menuIsOpen}>&nbsp;</S.NavBackground>

      <S.Navigation clicked={menuIsOpen}>
        <S.List>
          <Link href="/" passHref>
            <S.ItemLink onClick={openMenu}>Home</S.ItemLink>
          </Link>
          <Link href="/about" passHref>
            <S.ItemLink onClick={openMenu}>About</S.ItemLink>
          </Link>
        </S.List>
      </S.Navigation>
    </>
  )
}

export default HamburgerMenu
