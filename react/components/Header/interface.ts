export interface HeaderProps {
  topBar: string
  megaMenu: MegaMenu[]
  LogoDesktop: React.FC
  LogoMobile: React.FC
  Search: React.FC
  MiniCart: React.FC
  WhatsAppBtn: React.FC
  LoginMobile: React.FC
  LoginDesktop: React.FC
}

export interface MegaMenu {
  __editorItemTitle: string
  url: string
  highlightDeparment: boolean
  categories: Category[]
  images: Image[]
}

export interface Category {
  __editorItemTitle: string
  url: string
  subCategories: SubCategory[]
}

export interface Image {
  imageDesktop: string
  alt: string
  url: string
}

export interface SubCategory {
  __editorItemTitle: string
  url: string
}
