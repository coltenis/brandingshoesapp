import React, { useEffect, useState } from 'react'
import {useProduct} from 'vtex.product-context'
//import style from "./style.css"

const GetTalla=()=>{
    const [dataEquivalencias, setDataEquivalencias] = useState([])
    const selectOptions =document.querySelectorAll('[name="product-summary-sku-selector"] > option')
    const dropdownOptionValue=document.querySelector('.vtex-dropdown__caption > div')||null
    const productContext=useProduct()
    const product =productContext?.product
    const marcaProduct=product?.brand
    const categoriasProducto=product?.categories
    const [newDataEquivalencias, setNewDataEquivalencias] = useState([])

    useEffect(() => {
        //console.log('Obtengo base de equivalencias')
        fetch(`/files/equivalencias-de-tallas.json`)
        .then(response => response.json())
        .then(data => {
            setDataEquivalencias(data)
        })
        .catch((error) => {
            console.error(error)
        })
    }, [!dataEquivalencias.length])
    
    useEffect(()=>{
        //console.log('base data equivalencias:',dataEquivalencias,' catPro: ',categoriasProducto,' marcaPro '+marcaProduct)
        let equivalenciaArray:any=[]
        dataEquivalencias?.map((equivalencia:any)=>{
            //console.log('valida equivalencia=> categoria: ',equivalencia.categoria,' marca: ',equivalencia.marca,' => ',categoriasProducto?.includes('/'+equivalencia.categoria+'/'),equivalencia.marca.includes(marcaProduct))
            if(categoriasProducto?.includes('/'+equivalencia.categoria+'/')&&equivalencia.marca.includes(marcaProduct)){
                const eUs=equivalencia.US
                const eCol=equivalencia.COL
                const eEur=equivalencia.EUR
                
                //console.log('array de equivalencias: ',eUs,eCol,eEur,eCm)
                let i=0
                equivalenciaArray.push('-')
                eEur?.map(()=>{
                    equivalenciaArray.push('USA:'+eUs[i]+' - EUR:'+eEur[i]+' - COL:'+eCol[i])
                    i++
                })
                setNewDataEquivalencias(equivalenciaArray)
            }
        })
    },[dataEquivalencias.length&&!newDataEquivalencias.length])

    const matchValue=(value:any)=>{
        console.log('match',value)
        let valuee=value.replace(',','.')
        let valueReturn=''
        let equivalenciaArray:any=''
        dataEquivalencias?.map((equivalencia:any)=>{
            //console.log('valida equivalencia=> categoria: ',equivalencia.categoria,' marca: ',equivalencia.marca,' => ',categoriasProducto?.includes('/'+equivalencia.categoria+'/'),equivalencia.marca.includes(marcaProduct))
            if(categoriasProducto?.includes('/'+equivalencia.categoria+'/')&&equivalencia.marca.includes(marcaProduct)){
                const eUs=equivalencia.US
                const eCol=equivalencia.COL
                const eEur=equivalencia.EUR
                let i=0
                eUs?.map((EUUS:any)=>{
                    console.log("matchValue",EUUS)
                    if(EUUS==valuee){
                        equivalenciaArray='USA:'+eUs[i]+' - EUR:'+eEur[i]+' - COL:'+eCol[i]
                        console.log('equivalenciaString',equivalenciaArray)
                    }else{
                        i++ 
                    }
                   
                })
                valueReturn=equivalenciaArray
            }
        })
        return valueReturn
    }
    
    useEffect(()=>{
        //console.log('new data equivalencias',newDataEquivalencias,productContext)
        let i=0
        const limit=newDataEquivalencias.length
        selectOptions?.forEach((option:any)=>{
            if(i>0&&i<=limit-1){
                option.textContent=newDataEquivalencias[i]
            }
            if(i>limit){
                option.textContent='USA:'+option.value
            }
            i=i+1
        })
        
        document.querySelector('select[name="product-summary-sku-selector"]')?.addEventListener('change',
        ()=>{
            setTimeout(()=>{
                let value=document?.querySelector('.vtex-dropdown__caption > div')?.textContent
                let optionValue=document.querySelector(`option[value="${value}"]`)?.textContent
                if(dropdownOptionValue!=undefined&& dropdownOptionValue!=null){
                    const optionValue2=matchValue(value)
                    if(optionValue2!='')
                    dropdownOptionValue.textContent=optionValue2
                    //dropdownOptionValue.innerHTML+=optionValue2
                }
                
            console.log('value2 ',value,optionValue)
        },1000)
    })
    },[newDataEquivalencias.length])

    
    
    return (
        <><style>{`
        .vtex-shelf-1-x-sliderContainer--shelf-variation-color .vtex-slider-0-x-sliderFrame{
            width: 200%!important;
            margin-left: 10px;
            justify-content: flex-start;
        }
        .vtex-shelf-1-x-slide--shelf-variation-color {
            justify-content: start;
            -webkit-box-pack: start;
        }
        .vtex-product-summary-2-x-containerNormal--variation-color-shelf {
            max-width: 150px!important;
        }
        @media  (max-width: 968px) {
            .vtex-shelf-1-x-sliderContainer--shelf-variation-color .vtex-slider-0-x-sliderFrame{
                width: 100vw!important;
                margin-left: 10px;
                justify-content: flex-start;
            }
            .vtex-shelf-1-x-sliderContainer--shelf-variation-color .vtex-slider-0-x-dotsContainer{
                display:none!important;
            }
            body > div.render-container.render-route-store-product > div > div.vtex-store__template.bg-base > div > div > div > div:nth-child(3) > div > div:nth-child(1) > div > section > div{
                padding-top:0px!important;
            }
        }
        .content-input input,
        .select[name="product-summary-sku-selector"]{
            appearance: none!important;
            -webkit-appearance: none;
            -moz-appearance: none;
        }
        body > div.render-container.render-route-store-product > div > div.vtex-store__template.bg-base > div > div > div > div:nth-child(4) > div > div:nth-child(1) > div > section > div{
            margin-top:-20px;
        }
        body > div.render-container.render-route-store-product > div > div.vtex-store__template.bg-base > div > div > div > div:nth-child(5) > div > div:nth-child(1) > div > section > div > div.pr0.items-stretch.vtex-flex-layout-0-x-stretchChildrenWidth.flex > div > div:nth-child(3) > div > div.vtex-shelf-1-x-shelfContentContainer.vtex-shelf-1-x-shelfContentContainer--shelf-variation-color.flex.justify-center > div > ul{
            display:none!important;
        }
        `}</style>
        {
           
        }</>
    )
}
export default GetTalla