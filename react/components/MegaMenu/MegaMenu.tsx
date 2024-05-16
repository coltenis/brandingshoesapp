import React from 'react'
import { useRuntime } from 'vtex.render-runtime'

import { MegaMenuDesktop } from './MegaMenuDesktop'
import { MegaMenuMobile } from './MegaMenuMobile'
import { MegaMenuProps } from './interface'
import styles from './MegaMenu.css'

export const MegaMenu: React.FC<MegaMenuProps> = ({
  options,
  LogoDesktop,
  LogoMobile,
  MiniCart,
  Search,
  LoginMobile,
  LoginDesktop
}) => {
  const { deviceInfo } = useRuntime()
  const { isMobile } = deviceInfo

  return (
    <div className={styles['mega-menu__container']}>
      {isMobile ? (
        <MegaMenuMobile
          options={options}
          Logo={LogoMobile}
          MiniCart={MiniCart}
          Search={Search}
          LoginMobile={LoginMobile}
        />
      ) : (
        <MegaMenuDesktop
          options={options}
          Logo={LogoDesktop}
          MiniCart={MiniCart}
          Search={Search}
          LoginDesktop={LoginDesktop}
        />
      )}
    </div>
  )
}
