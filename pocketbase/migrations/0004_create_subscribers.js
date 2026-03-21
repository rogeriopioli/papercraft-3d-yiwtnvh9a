migrate(
  (app) => {
    const collection = new Collection({
      name: 'subscribers',
      type: 'base',
      listRule: '',
      viewRule: '',
      createRule: '',
      updateRule: '',
      deleteRule: null,
      fields: [
        { name: 'email', type: 'email', required: true },
        { name: 'coupon_sent', type: 'bool' },
        { name: 'coupon_used', type: 'bool' },
        { name: 'created', type: 'autodate', onCreate: true, onUpdate: false },
        { name: 'updated', type: 'autodate', onCreate: true, onUpdate: true },
      ],
      indexes: ['CREATE UNIQUE INDEX idx_subscribers_email ON subscribers (email)'],
    })
    app.save(collection)
  },
  (app) => {
    const collection = app.findCollectionByNameOrId('subscribers')
    app.delete(collection)
  },
)
