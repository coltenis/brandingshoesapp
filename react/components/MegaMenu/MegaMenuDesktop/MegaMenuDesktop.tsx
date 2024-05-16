import React, { useState } from 'react'

import { MegaMenuDesktopProps } from '../interface'
import styles from '../MegaMenu.css'

export const MegaMenuDesktop: React.FC<MegaMenuDesktopProps> = ({
  options,
  Logo,
  Search,
  MiniCart,
  LoginDesktop
}) => {
  const [activeDepartment, setActiveDepartment] = useState<string | null>(null)

  return (
    <>
      
      <div className={styles['mega-menu__col--left']}>
        <Logo />
      </div>
      <nav className={styles['mega-menu__col--center']}>
        <ul
          className={`${styles['mega-menu__options']} ${styles['mega-menu__options--department']}`}
        >
          {options?.map((option) => (
            <li
              className={styles['mega-menu__container--departments']}
              key={option.__editorItemTitle}
              onMouseEnter={() => setActiveDepartment(option.__editorItemTitle)}
              onMouseLeave={() => setActiveDepartment(null)}
            >
              {option.url !== '' ? (
                <a
                  className={`${styles['mega-menu__department--title']} ${
                    option.highlightDeparment
                      ? styles['mega-menu__department-title--highlight']
                      : ''
                  }`}
                  href={option.url}
                >
                  {option.__editorItemTitle}
                </a>
              ) : (
                <span
                  className={`${styles['mega-menu__department--title']} ${
                    option.highlightDeparment
                      ? styles['mega-menu__department-title--highlight']
                      : ''
                  }`}
                >
                  {option.__editorItemTitle}
                </span>
              )}
              <div
                className={`${styles['mega-menu__options--categories']} ${
                  activeDepartment === option.__editorItemTitle
                    ? styles['mega-menu__categories--active']
                    : ''
                }`}
              >
                {option.categories?.map((category) => (
                  <ul
                    key={category.__editorItemTitle}
                    className={`${styles['mega-menu__options']}`}
                  >
                    <li className={styles['mega-menu__category']}>
                      {category.url !== '' ? (
                        <a href={category.url}>{category.__editorItemTitle}</a>
                      ) : (
                        <span>{category.__editorItemTitle}</span>
                      )}
                    </li>
                    {category?.subCategories?.map((subCategory) => (
                      <li
                        key={subCategory.__editorItemTitle}
                        className={styles['mega-menu__sub-category']}
                      >
                        {subCategory.url !== '' ? (
                          <a href={subCategory.url}>
                            {subCategory.__editorItemTitle}
                          </a>
                        ) : (
                          <span>{subCategory.__editorItemTitle}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                ))}
                <div className={styles['mega-menu__images']}>
                  {option.images?.map((image, index) => (
                    <picture key={`image ${index}`}>
                      {image.url !== '' ? (
                        <a href={image.url}>
                          <img
                            src={image.imageDesktop}
                            alt={image.alt}
                            loading="lazy"
                            width={250}
                          />
                        </a>
                      ) : (
                        <img
                          src={image.imageDesktop}
                          alt={image.alt}
                          loading="lazy"
                          width={250}
                        />
                      )}
                    </picture>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles['mega-menu__col--right']}>
        <Search />
        <LoginDesktop />
        <MiniCart />
      </div>
    </>
  )
}
