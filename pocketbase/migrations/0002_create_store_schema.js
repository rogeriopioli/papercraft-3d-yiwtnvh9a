migrate(
  (app) => {
    const categories = new Collection({
      name: 'categories',
      type: 'base',
      listRule: '',
      viewRule: '',
      createRule: '',
      updateRule: '',
      deleteRule: '',
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'created', type: 'autodate', onCreate: true, onUpdate: false },
        { name: 'updated', type: 'autodate', onCreate: true, onUpdate: true },
      ],
    })
    app.save(categories)

    const products = new Collection({
      name: 'products',
      type: 'base',
      listRule: '',
      viewRule: '',
      createRule: '',
      updateRule: '',
      deleteRule: '',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'price', type: 'number', required: true },
        { name: 'category', type: 'text', required: true },
        { name: 'difficulty', type: 'number', required: true },
        { name: 'images', type: 'json', required: true },
        { name: 'video', type: 'text' },
        { name: 'description', type: 'text', required: true },
        { name: 'specs', type: 'json', required: true },
        { name: 'rating', type: 'number' },
        { name: 'isNew', type: 'bool' },
        { name: 'isBestSeller', type: 'bool' },
        { name: 'tags', type: 'json' },
        { name: 'created', type: 'autodate', onCreate: true, onUpdate: false },
        { name: 'updated', type: 'autodate', onCreate: true, onUpdate: true },
      ],
    })
    app.save(products)
  },
  (app) => {
    try {
      app.delete(app.findCollectionByNameOrId('products'))
      app.delete(app.findCollectionByNameOrId('categories'))
    } catch (e) {
      console.log(e)
    }
  },
)
