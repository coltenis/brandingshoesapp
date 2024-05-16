import React, { useEffect, useState } from 'react'
import { Slider, Slide } from 'vtex.slider'
import { useProduct } from 'vtex.product-context'
import { useRuntime } from 'vtex.render-runtime'

import styles from './styles.css'
import { ArrowRenderProps, ImagesProduct } from './interface'

export const GalleryProduct: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [firstTwoImages, setFirstTwoImages] = useState<ImagesProduct[]>([])
  const [imagesSlider, setImagesSlider] = useState<ImagesProduct[]>([])
  const productContext = useProduct() ?? {}
  const { deviceInfo } = useRuntime()
  const { isMobile } = deviceInfo
  const imagesProduct = productContext.selectedItem?.images
  const perPage = 1

  useEffect(() => {
    if (!imagesProduct) {
      return
    }

    const firstTwo = imagesProduct.slice(0, 2)
    const rest = imagesProduct.slice(2)

    setFirstTwoImages(firstTwo)
    setImagesSlider(rest)
    handleChangeSlide(1)
  }, [imagesProduct])

  const handleChangeSlide = (imageIndex: number) => {
    setCurrentSlide(imageIndex)
  }

  const handleMouseEnter = (imageIndex: number) => {
    setCurrentSlide(imageIndex)
  }

  const isDotActive = (index: number): boolean => {
    return currentSlide === index
  }

  const isLeftOrientation = (orientation: string): boolean => {
    return orientation === 'left'
  }

  const arrowRender: React.FC<ArrowRenderProps> = ({
    orientation,
    onClick,
  }) => {
    return (
      <div
        className={`${styles['gallery-product__container--arrows']} ${
          isLeftOrientation(orientation)
            ? styles['gallery-product__arrow--left']
            : styles['gallery-product__arrow--right']
        }`}
        role="presentation"
        onClick={onClick}
      >
        {isLeftOrientation(orientation) ? (
          <svg
            fill="#000000"
            width="40px"
            height="40px"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M604.7 759.2l61.8-61.8L481.1 512l185.4-185.4-61.8-61.8L357.5 512z" />
          </svg>
        ) : (
          <svg
            fill="#000000"
            width="40px"
            height="40px"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M419.3 264.8l-61.8 61.8L542.9 512 357.5 697.4l61.8 61.8L666.5 512z" />
          </svg>
        )}
      </div>
    )
  }

  const arrowContainerRender = ({ children }: Element) => {
    return <>{children}</>
  }

  return (
    <>
      <div className={styles['gallery-product__container']}>
        {firstTwoImages?.map((image) => (
          <div style={{ width: '50%' }} key={image.imageId}>
            <img
              width="100%"
              height="auto"
              src={image.imageUrl}
              alt={image.imageLabel}
            />
          </div>
        ))}
      </div>
      <div className={styles['gallery-product__container--slider']}>
        <div className={styles['gallery-product__slider']}>
          <Slider
            loop
            easing="ease"
            duration={500}
            perPage={perPage}
            currentSlide={currentSlide}
            arrowRender={arrowRender}
            onChangeSlide={handleChangeSlide}
            arrowsContainerComponent={arrowContainerRender}
            threshold={50}
          >
            {imagesSlider?.map((image) => (
              <Slide
                sliderTransitionDuration={500}
                key={image.imageId}
                defaultWidth={280}
              >
                <picture>
                  <img src={image.imageUrl} alt={image.imageLabel} />
                </picture>
              </Slide>
            ))}
          </Slider>
        </div>
        {isMobile ? (
          <></>
        ) : (
          <div className={styles['gallery-product__container--dots']}>
            {imagesSlider?.map((image, index) => (
              <div
                onMouseEnter={() => handleMouseEnter(index + 1)}
                key={`dots ${image.imageId}`}
              >
                <img
                  className={`${styles['gallery-product__dots--image']} ${
                    isDotActive(index + 1)
                      ? styles['gallery-product__image--active']
                      : ''
                  }`}
                  src={image.imageUrl}
                  alt={image.imageLabel}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
