import React from 'react'
import { Helmet } from 'vtex.render-runtime'


interface IMeta {
  property: string
  name: string
  content: string
}

interface Props {
  metas: IMeta[]
}


function CustomMetasInjection({ metas }: Props) {

  const Meta = ({ property, name, content }: IMeta) => {

    const attributes = {
      ...(property && { property: property }),
      ...(name && { name: name }),
      ...(content && { content: content })
    };
    
    return (
      <>
        <Helmet>
          <meta {...attributes}/>
        </Helmet>
      </> 
    )
  
  }

  return (
    <>
      {
        (metas.length)
          ? metas.map((metaProps:IMeta) => (
            <Meta {...metaProps} />
          ))
          : <></>
      }
    </>
  )
}

export default CustomMetasInjection