const headerSchema = {
  title: 'Header',
  description: '',
  type: 'object',
  properties: {
    topBar: {
      title: 'Texto top bar',
      type: 'string',
    },
    megaMenu: {
      title: 'Menu',
      type: 'array',
      items: {
        type: 'object',
        properties: {
          __editorItemTitle: {
            type: 'string',
            title: 'Departamento',
          },
          highlightDeparment: {
            type: 'boolean',
            title: 'Resaltar departamento',
            default: false,
          },
          url: {
            type: 'string',
            title: 'URL',
          },
          categories: {
            type: 'array',
            title: 'Categorias',
            items: {
              type: 'object',
              properties: {
                __editorItemTitle: {
                  type: 'string',
                  title: 'Titulo Categoria',
                },
                url: {
                  type: 'string',
                  title: 'URL',
                },
                subCategories: {
                  type: 'array',
                  title: 'Sub-categorias',
                  items: {
                    type: 'object',
                    properties: {
                      __editorItemTitle: {
                        type: 'string',
                        title: 'Titulo sub Cateogria',
                      },
                      url: {
                        type: 'string',
                        title: 'URL',
                      },
                    },
                  },
                },
              },
            },
          },
          images: {
            type: 'array',
            title: 'Imagenes',
            items: {
              type: 'object',
              properties: {
                imageDesktop: {
                  title: 'Imagen',
                  default: '',
                  type: 'string',
                  widget: {
                    'ui:widget': 'image-uploader',
                  },
                },
                alt: {
                  title: 'Alt',
                  default: '',
                  type: 'string',
                },
                url: {
                  title: 'URL Imagen',
                  default: '',
                  type: 'string',
                },
              },
            },
          },
        },
      },
    },
  },
}

export default headerSchema
