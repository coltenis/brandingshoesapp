import React from "react";

import { useProduct } from 'vtex.product-context';
import { useCssHandles } from "vtex.css-handles";


interface IAccents {
  [key: string]: string;
}

const CSS_HANDLES = [
  "product-specifications-container",
  "product-specifications-item",
  "product-specifications-name",
  "product-specifications-value"
] as const;

const CustomProductSpecifications = (): JSX.Element => {

  const { handles } = useCssHandles(CSS_HANDLES);

  const productContext = useProduct();
  const properties = productContext?.product?.properties;
  
  const normalizeProperty = (name: string) => {
    const accents: IAccents = {'á':'a','é':'e','í':'i','ó':'o','ú':'u','Á':'A','É':'E','Í':'I','Ó':'O','Ú':'U'};
    name = name.split("").map((letter) => accents[letter] || letter).join("").toString();	
    return name.split(" ").join("-").toLowerCase();
  }

  return (
    <div className={`${handles['product-specifications-container']}`}>
      {
        properties?.map((property) => {
          const propertyName = normalizeProperty(property.name);
          return (
            <div className={`${handles['product-specifications-item']} ${handles['product-specifications-item']}--${propertyName}`} key={propertyName}>
              <div className={`${handles['product-specifications-name']}`}>{property.name}</div>
              <div className={`${handles['product-specifications-value']}`}>{property.values[0]}</div>
            </div>  
          )
        })
      }
    </div>
  );

};

export default CustomProductSpecifications;