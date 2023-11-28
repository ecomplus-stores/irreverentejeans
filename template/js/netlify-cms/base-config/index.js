import getSections from "@ecomplus/storefront-template/template/js/netlify-cms/base-config/sections"
import getSettings from "@ecomplus/storefront-template/template/js/netlify-cms/base-config/collections/settings"
import getLayout from "@ecomplus/storefront-template/template/js/netlify-cms/base-config/collections/layout"
import getPages from "@ecomplus/storefront-template/template/js/netlify-cms/base-config/collections/pages"
import getBlogPosts from "@ecomplus/storefront-template/template/js/netlify-cms/base-config/collections/blog-posts"
import getExtraPages from "@ecomplus/storefront-template/template/js/netlify-cms/base-config/collections/extra-pages"
import getWidgets from "@ecomplus/storefront-template/template/js/netlify-cms/base-config/collections/widgets"

export default options => {
  options.sections = getSections(options).concat([
    {
        label: "Grid de Avaliações",
        name: "review-carousel",
        widget: "object",
        icon: "https://api.iconify.design/bi:grid.svg",
        fields: [
            {
                label: "Avaliações",
                name: "reviews",
                widget: "list",
                fields: [
                    {
                        label: "Imagem",
                        name: "img",
                        widget: "image",
                        required: false
                    },
                    {
                        label: "Nome",
                        required: false,
                        name: "nome",
                        widget: "string"
                    },
                    {
                        label: "Cidade",
                        required: false,
                        name: "cidade",
                        widget: "string"
                    },
                    {
                        label: "Texto de avaliação",
                        required: false,
                        name: "texto",
                        widget: "string"
                    }
                ]
            },
            {
                label: "Avaliações autoplay",
                name: "autoplay",
                hint: 'Troca automática de avaliações, defina 0 para desabilitar autoplay',
                min: 0,
                step: 1000,
                default: 9000,
                widget: 'number'
            },
            {
                name: "title",
                label: "Título da estante de depoimentos",
                widget: 'string'
            }
        ]
    },
    {
        label: 'Carrossel de Categorias',
        name: 'categories-carousel',
        widget: 'object',
        icon: 'https://api.iconify.design/mdi:copyright.svg',
        fields: [
            {
                label: 'Selecione categorias',
                required: true,
                name: 'category_ids',
                widget: 'select',
                multiple: true,
                options: [{
                  resource: 'categories',
                  label: 'Categoria: '
                }].reduce((options, shelf) => {
                  state.routes.forEach(({ _id, resource, name, path }) => {
                    if (resource === shelf.resource) {
                      options.push({
                        label: shelf.label + name,
                        value: `${_id}`
                      })
                    }
                  })
                  return options
                }, [])
              },
          {
            label: 'Carousel autoplay',
            required: false,
            name: 'autoplay',
            hint: 'Exibição de cada página em milisegundos, 0 desativa o autoplay',
            min: 0,
            step: 1000,
            widget: 'number'
          },
          {
            name: 'title',
            widget: 'string',
            required: false,
            label: 'Nome do carousel de categorias'
          }
        ]
    },
    {
        label: 'Lista de filtros',
        name: 'filter-list',
        widget: 'object',
        icon: 'https://api.iconify.design/mdi:copyright.svg',
        fields: [
            {
                label: 'Lista de filtros',
                name: 'filters',
                widget: 'list',
                fields: [
                    {
                        label: 'Opção do filtro',
                        name: 'filter_option',
                        widget: 'string'
                    },
                    {
                        label: 'Grade do filtro',
                        name: 'filter_grid',
                        widget: 'string'
                    }
                ]
            },
          {
            name: 'title',
            widget: 'string',
            required: false,
            label: 'Nome do carousel de categorias'
          }
        ]
    },
  ])

  return {
    backend: {
      name: "git-gateway",
      branch: "master",
      commit_messages: {
        create: "Create {{collection}} “{{slug}}”",
        update: "Update {{collection}} “{{slug}}”",
        delete: "Delete {{collection}} “{{slug}}”",
        uploadMedia: "Upload “{{path}}”",
        deleteMedia: "[skip ci] Delete “{{path}}”",
        openAuthoring: "{{message}}"
      }
    },
    logo_url: "https://ecom.nyc3.digitaloceanspaces.com/storefront/cms.png",
    locale: "pt",
    load_config_file: Boolean(window.CMS_LOAD_CONFIG_FILE),
    media_folder: `${options.baseDir}template/public/img/uploads`,
    public_folder: "/img/uploads",
    slug: {
      encoding: "ascii",
      clean_accents: true,
      sanitize_replacement: "-"
    },
    collections: [
      getSettings(options),
      getLayout(options),
      getPages(options),
      getBlogPosts(options),
      getExtraPages(options),
      getWidgets(options)
    ]
  }
}