import { MegaMenu } from '../Header/interface'

export interface MegaMenuProps {
  options: MegaMenu[]
  LogoDesktop: React.FC
  LogoMobile: React.FC
  MiniCart: React.FC
  Search: React.FC
  LoginMobile: React.FC
  LoginDesktop: React.FC
}

export interface MegaMenuDesktopProps {
  options: MegaMenu[]
  Logo: React.FC
  MiniCart: React.FC
  Search: React.FC
  LoginDesktop: React.FC
}

export interface MegaMenuMobileProps {
  options: MegaMenu[]
  Logo: React.FC
  MiniCart: React.FC
  Search: React.FC
  LoginMobile: React.FC
}
