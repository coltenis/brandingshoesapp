import React, { useState } from 'react'
import { Drawer, DrawerHeader, DrawerCloseButton } from 'vtex.store-drawer'
import { Icon } from 'vtex.store-icons'

import { MegaMenuMobileProps } from '../interface'
import styles from '../MegaMenu.css'

type ExpandedItemsState = {
  departments: {
    [key: string]: boolean
  }
  categories: {
    [key: string]: boolean
  }
}

export const MegaMenuMobile: React.FC<MegaMenuMobileProps> = ({
  options,
  Logo,
  Search,
  MiniCart,
  LoginMobile,
}) => {
  const [expandedItems, setExpandedItems] = useState<ExpandedItemsState>({
    departments: {},
    categories: {},
  })

  const handleClickOption = (department: string) => {
    setExpandedItems((prevState) => ({
      ...prevState,
      departments: {
        ...prevState.departments,
        [department]: !prevState.departments[department],
      },
    }))
  }

  const handleClickCategory = (
    department: string,
    category: string,
    event: React.MouseEvent
  ) => {
    event.stopPropagation()
    setExpandedItems((prevState) => ({
      ...prevState,
      categories: {
        ...prevState.categories,
        [`${department}_${category}`]: !prevState.categories[
          `${department}_${category}`
        ],
      },
    }))
  }

  const isDepartmentActive = (value: string): boolean => {
    return expandedItems.departments[value]
  }

  const isCategoryActive = (value: string): boolean => {
    return expandedItems.categories[value]
  }

  return (
    <>
      <Drawer
        header={
          <DrawerHeader>
            <Logo />
            <div className={styles['mega-menu__col--right']}>
              <Search />
              <MiniCart />
              <DrawerCloseButton />
            </div>
          </DrawerHeader>
        }
      >
        <ul className={`${styles['mega-menu__options']}`}>
          <li>
            <a className={styles['mega-menu__department--title']} href="/">
              INICIO
            </a>
          </li>
          {options.map((option) => (
            <li
              role="presentation"
              onClick={() => handleClickOption(option.__editorItemTitle)}
              key={option.__editorItemTitle}
            >
              <span
                className={`${styles['mega-menu__department--title']} ${
                  option.highlightDeparment
                    ? styles['mega-menu__department-title--highlight']
                    : ''
                }`}
              >
                {option.__editorItemTitle}
                {isDepartmentActive(option.__editorItemTitle) ? (
                  <Icon id="nav-minus" size={8} />
                ) : (
                  <Icon id="nav-plus" size={8} />
                )}
              </span>
              <ul
                className={`${styles['mega-menu__options']} ${
                  styles['mega-menu__options--category']
                } ${
                  isDepartmentActive(option.__editorItemTitle)
                    ? styles['mega-menu__category--active']
                    : ''
                }`}
              >
                {option.categories.map((category) => (
                  <li
                    role="presentation"
                    className={styles['mega-menu__category']}
                    onClick={(event) =>
                      handleClickCategory(
                        option.__editorItemTitle,
                        category.__editorItemTitle,
                        event
                      )
                    }
                    key={category.__editorItemTitle}
                  >
                    <div className={styles['mega-menu__options--container']}>
                      <span>{category.__editorItemTitle}</span>
                      {isCategoryActive(
                        `${option.__editorItemTitle}_${category.__editorItemTitle}`
                      ) ? (
                        <Icon id="nav-minus" size={8} />
                      ) : (
                        <Icon id="nav-plus" size={8} />
                      )}
                    </div>
                    <ul
                      className={`${styles['mega-menu__options']} ${
                        styles['mega-menu__options--sub-category']
                      } ${
                        isCategoryActive(
                          `${option.__editorItemTitle}_${category.__editorItemTitle}`
                        )
                          ? styles['mega-menu__sub-category--active']
                          : ''
                      }`}
                    >
                      {category.subCategories.map((subCategory) => (
                        <li
                          key={subCategory.__editorItemTitle}
                          className={styles['mega-menu__sub-category']}
                        >
                          <a href={subCategory.url}>
                            {subCategory.__editorItemTitle}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </li>
          ))}
          <li>
            <LoginMobile />
          </li>
          <li>
            <span className={styles['mega-menu__department--title']}>
              ¿NECESITAS AYUDA?
            </span>
          </li>
          <li>
            <a
              className={styles['mega-menu__department--title']}
              href="tel:+573162204136"
            >
              3162204136
            </a>
          </li>
          <li>
            <a
              className={styles['mega-menu__department--title']}
              href="mailto:serviclientebscom@coltenis.com"
            >
              serviclientebscom@coltenis.com
            </a>
          </li>
        </ul>
      </Drawer>
      <div>
        <Logo />
      </div>
      <div className={styles['mega-menu__col--right']}>
        <Search />
        <MiniCart />
      </div>
    </>
  )
}
