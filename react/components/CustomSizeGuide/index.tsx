import React, { useState, useEffect, useCallback } from "react";

import { useProduct } from 'vtex.product-context';
import { useDevice } from 'vtex.device-detector';
import { useCssHandles } from "vtex.css-handles";

import { getSizeEquivalencies } from '../../services/getSizeEquivalencies';
import { normalizeText } from "../../utils/normalizeText";
import { ICustomSizes } from "../../interfaces";


const CSS_HANDLES = [
  "size-guide-container",
  "size-guide-image"
] as const;

const CustomSizeGuide = (): JSX.Element => {

  const { handles } = useCssHandles(CSS_HANDLES);
  const { isMobile } = useDevice()
  const productContext = useProduct();
  const product = productContext?.product;
  const brand = product?.brand;
  const categories = product?.categories;

  const [customSizes, setCustomSizes] = useState<ICustomSizes[] | []>([]);
  const [srcImage, setSrcImage] = useState<string>("");

  const getSizeEquivalenciesAPI = useCallback(async()=> {
    setCustomSizes([]);
    const response = await getSizeEquivalencies();
    setCustomSizes(response);
  }, []);
  
  useEffect(() => {
    getSizeEquivalenciesAPI();
  }, [product?.productId]);

  const getSrcImage = () => {

    const customSizesFilteredByBrandAndCategory = 
    customSizes.filter((customSize) => 
      (brand && normalizeText(brand) === normalizeText(customSize.marca) 
      && categories && normalizeText(categories.join()).includes(normalizeText(customSize.categoria)))
    );

    if (!customSizesFilteredByBrandAndCategory.length) {
      return;
    }

    const customSize = customSizesFilteredByBrandAndCategory[0];

    if (isMobile) {
      setSrcImage(customSize.imageTallasMobile);
      return;
    }
    
    setSrcImage(customSize.imageTallas);
  };

  useEffect(() => {
    getSrcImage();
  });

  return (
    <div className={`${handles['size-guide-container']}`}>
      {
        srcImage 
          ? <img className={`${handles['size-guide-image']}`} src={srcImage} alt="Guía de Tallas" /> 
          : <></>
      }
    </div>
  );

};

export default CustomSizeGuide;