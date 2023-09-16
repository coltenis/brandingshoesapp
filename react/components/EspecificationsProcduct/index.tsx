import React, { useEffect, useState } from 'react'
import { useProduct } from 'vtex.product-context'
import style from './style.css'

const SugesstedColors=()=>{
    const productContext=useProduct()
    const product =productContext?.product
    //console.log('product Data',product,productContext)
     const [modelo, setModelo]=useState('')
     const [color, setColor]=useState('')
     const [tipo, setTipo]=useState('')
     const [genero, setGenero]=useState('')
     const [materialCapellada, setMaterialCapellada]=useState('')
     const [materialSuela, setMaterialSuela]=useState('')
     const [tipoAjuste, setTipoAjuste]=useState('')
     const [garantia, setGarantia]=useState('')
     const [guiaTallas, setGuiaTallas]=useState('')
     const [cuidados, setCuidados]=useState('')
    const propiedades=product?.properties

    const [data, setData] = useState([])
    const [imageTallas, setImageTallas] = useState('')
    useEffect(() => {
        //console.log('Obtengo base de equivalencias')
        fetch(`/files/equivalencias-de-tallas.json`)
        .then(response => response.json())
        .then(data => {
            setData(data)
        })
        .catch((error) => {
            console.error(error)
        })
    }, [!data.length])
    document?.querySelector(style.searchBtn)?.addEventListener('click',()=>{document?.querySelector('.vtex-store-components-3-x-searchBarContainer')?.classList.add('vtex-store-components-3-x-searchBarContainer--showw')})
    useEffect(()=>{
        propiedades?.map((prop:any)=>{
            if(prop.name.includes('Modelo')){
                setModelo(prop.values[0])
            }
            if(prop.name.includes('Color Específico')){
                setColor(prop.values[0])
            }
            if(prop.name.includes('Tipo')){
                setTipo(prop.values[0])
            }
            if(prop.name.includes('Género')){
                setGenero(prop.values[0])
            }
            if(prop.name.includes('Capellada')){
                setMaterialCapellada(prop.values[0])
            }
            if(prop.name.includes('Suela')){
                setMaterialSuela(prop.values[0])
            }
            if(prop.name.includes('Ajuste')){
                setTipoAjuste(prop.values[0])
            }
            if(prop.name.includes('Garantía')){
                setGarantia(prop.values[0])
            }
            if(prop.name.includes('Guía de tallas')){
                setGuiaTallas(prop.values[0])
            }
            if(prop.name.includes('Cuidados')){
                setCuidados(prop.values[0])
            }
        })
    },[!modelo.length&&!color.length])
    useEffect(()=>{
        data?.map((equivalencia:any)=>{
            //console.log('valida equivalencia=> categoria: ',equivalencia.categoria,' marca: ',equivalencia.marca,' => ')
            if(product?.categories?.includes('/'+equivalencia.categoria+'/')&&product?.brand.includes(equivalencia.marca)){
                const image=equivalencia?.imageTallas
                setImageTallas(image)
                console.log('imageTallas',image,guiaTallas)
            }
        })
    },[!imageTallas.length&&data.length])

    const handleDescription=()=>{
        const descriptionElement=document.querySelector('.bscolombia-bs-apps-0-x-contentDescription')
        if(descriptionElement?.classList.contains('bscolombia-bs-apps-0-x-hidden')){
            descriptionElement?.classList.remove('bscolombia-bs-apps-0-x-hidden')
        }else{
            descriptionElement?.classList.add('bscolombia-bs-apps-0-x-hidden')
        }
    }

    const handleGuiaTallas=()=>{
        const descriptionElement=document.querySelector('.bscolombia-bs-apps-0-x-contentGuiaTallas')
        if(descriptionElement?.classList.contains('bscolombia-bs-apps-0-x-hidden')){
            descriptionElement?.classList.remove('bscolombia-bs-apps-0-x-hidden')
        }else{
            descriptionElement?.classList.add('bscolombia-bs-apps-0-x-hidden')
        }
    }

    const handleCuidados=()=>{
        const descriptionElement=document.querySelector('.bscolombia-bs-apps-0-x-contentCuidados')
        if(descriptionElement?.classList.contains('bscolombia-bs-apps-0-x-hidden')){
            descriptionElement?.classList.remove('bscolombia-bs-apps-0-x-hidden')
        }else{
            descriptionElement?.classList.add('bscolombia-bs-apps-0-x-hidden')
        }
    }
    return (
        <div className={style.descriptionContainer}>
            <div className={`${style.collapsible} ${style.headerCollapse}`} onClick={()=>handleDescription()}><div>Descripción</div><div>+</div> </div>
            <div className={`${style.contentDescription} ${style.divContent}`}>
                <p>{product?.description}</p>
                <table className={style.specificationTable}>
                    <tr className={style.specificationRow}>
                        <td className={style.specificationTitle}>Modelo</td>
                        <td className={style.specificationValue}>{modelo}</td>
                    </tr>
                    <tr className={style.specificationRow}>
                        <td className={style.specificationTitle}>Color</td>
                        <td className={style.specificationValue}>{color}</td>
                    </tr>
                    <tr className={style.specificationRow}>
                        <td className={style.specificationTitle}>Tipo</td>
                        <td className={style.specificationValue}>{tipo}</td>
                    </tr>
                    <tr className={style.specificationRow}>
                        <td className={style.specificationTitle}>Género</td>
                        <td className={style.specificationValue}>{genero}</td>
                    </tr>
                    <tr className={style.specificationRow}>
                        <td className={style.specificationTitle}>Material Capellada</td>
                        <td className={style.specificationValue}>{materialCapellada}</td>
                    </tr>
                    <tr className={style.specificationRow}>
                        <td className={style.specificationTitle}>Material de Suela</td>
                        <td className={style.specificationValue}>{materialSuela}</td>
                    </tr>
                    <tr className={style.specificationRow}>
                        <td className={style.specificationTitle}>Tipo de ajuste</td>
                        <td className={style.specificationValue}>{tipoAjuste}</td>
                    </tr>
                    <tr className={style.specificationRow}>
                        <td className={style.specificationTitle}>Garantía</td>
                        <td className={style.specificationValue}>{garantia}</td>
                    </tr>
                </table>
            </div>
            <div className={`${style.collapsible} ${style.headerCollapse}`} onClick={()=>handleGuiaTallas()} id='guiaTallasProducto'><div>Guía de tallas</div><div>+</div></div>
            <div className={`${style.contentGuiaTallas} ${style.divContent}`}>
                <img className={style.imgmiddle} src={imageTallas}/>
            </div>
            <div className={`${style.collapsible} ${style.headerCollapse} ${style.hidden}`} onClick={()=>handleCuidados()}><div>Cuidados</div><div>+</div></div>
            <div className={`${style.contentCuidados} ${style.divContent} ${style.hidden}`}>
                <p>{cuidados}</p>
            </div>
        </div>
    )
}

export default SugesstedColors