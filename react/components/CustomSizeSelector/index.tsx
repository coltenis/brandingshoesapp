import React, { useState, useEffect, useCallback } from "react";
import { useProduct } from 'vtex.product-context';
import { canUseDOM } from 'vtex.render-runtime';

import { getSizeEquivalencies } from '../../services/getSizeEquivalencies';
import { normalizeText } from "../../utils/normalizeText";
import { ICustomSizes } from "../../interfaces";


const CustomSizeSelector = (): JSX.Element => {

  const productContext = useProduct();
  const product = productContext?.product;
  const brand = product?.brand;
  const categories = product?.categories;

  const [customSizes, setCustomSizes] = useState<ICustomSizes[] | []>([]);
  const [isRenderedCustomSizes, setIsRenderedCustomSizes] = useState<boolean>(false);
  const optionSelectedEL = canUseDOM ? document.querySelector('.vtex-dropdown__caption div') : null;
  const selectOptions = canUseDOM ? document.querySelectorAll('select[name="product-summary-sku-selector"] > option') : null;

  const getSizeEquivalenciesAPI = useCallback(async()=> {
    setCustomSizes([]);
    const response = await getSizeEquivalencies();

    setCustomSizes(response);
  }, [])
  
  useEffect(() => {
    getSizeEquivalenciesAPI();
    setIsRenderedCustomSizes(false);
  }, [product?.productId]);

  const renderCustomSizesOnSKUSelectorOptions = () => {
    if (!isRenderedCustomSizes && customSizes.length && selectOptions?.length) {

      const customSizesFilteredByBrandAndCategory = 
        customSizes.filter((customSize) => 
          (brand && normalizeText(brand) === normalizeText(customSize.marca) 
          && categories && normalizeText(categories.join()).includes(normalizeText(customSize.categoria)))
        );

      if (!customSizesFilteredByBrandAndCategory.length) {
        setIsRenderedCustomSizes(true);

        return;
      }

      selectOptions?.forEach((option: any)=>{
        const { COL, EUR, US } = customSizesFilteredByBrandAndCategory[0];

        US.forEach((size, index) => {
          if (size === option.value.replace(',','.')) {
            option.innerText = `USA:${US[index]} - EUR:${EUR[index]} - COL:${COL[index]}`
          }
        })
      })

      setIsRenderedCustomSizes(true);
    }
  };

  useEffect(() => {
    renderCustomSizesOnSKUSelectorOptions();
  });

  const renderCustomSizeSelectedOnSKUSelector = () => {
    selectOptions?.forEach((option: any, index)=>{
      if (optionSelectedEL && option.selected) {
        optionSelectedEL.innerHTML = selectOptions[index].innerHTML;
      }
    })
  }

  useEffect(() => {
    renderCustomSizeSelectedOnSKUSelector();
  }, [optionSelectedEL?.innerHTML]);

  return (<></>);

};

export default CustomSizeSelector;