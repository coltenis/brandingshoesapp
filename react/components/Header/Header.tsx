import React from 'react'

import headerSchema from './HeaderSchema'
import { HeaderProps } from './interface'
import { TopBar } from '../TopBar'
import { MegaMenu } from '../MegaMenu'
import '../../styles/styles.css'

export const Header = ({
  WhatsAppBtn,
  topBar,
  megaMenu,
  LogoDesktop,
  LogoMobile,
  MiniCart,
  Search,
  LoginMobile,
  LoginDesktop
}: HeaderProps) => {
  return (
    <>
      <TopBar text={topBar} />
      <MegaMenu
        options={megaMenu}
        LogoDesktop={LogoDesktop}
        LogoMobile={LogoMobile}
        MiniCart={MiniCart}
        Search={Search}
        LoginDesktop={LoginDesktop}
        LoginMobile={LoginMobile}
      />
      <WhatsAppBtn />
    </>
  )
}

Header.schema = headerSchema
