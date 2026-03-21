migrate(
  (app) => {
    const coupons = new Collection({
      name: 'coupons',
      type: 'base',
      listRule: "@request.auth.id != ''",
      viewRule: "@request.auth.id != ''",
      createRule: "@request.auth.id != ''",
      updateRule: "@request.auth.id != ''",
      deleteRule: "@request.auth.id != ''",
      fields: [
        { name: 'code', type: 'text', required: true },
        {
          name: 'discount_type',
          type: 'select',
          values: ['percentage', 'fixed'],
          maxSelect: 1,
          required: true,
        },
        { name: 'value', type: 'number', required: true },
        { name: 'usage_count', type: 'number', required: false },
        { name: 'created', type: 'autodate', onCreate: true, onUpdate: false },
        { name: 'updated', type: 'autodate', onCreate: true, onUpdate: true },
      ],
    })
    app.save(coupons)

    const orders = new Collection({
      name: 'orders',
      type: 'base',
      listRule: "@request.auth.id != ''",
      viewRule: "@request.auth.id != ''",
      createRule: "@request.auth.id != ''",
      updateRule: "@request.auth.id != ''",
      deleteRule: "@request.auth.id != ''",
      fields: [
        {
          name: 'status',
          type: 'select',
          values: ['pending', 'paid', 'cancelled'],
          maxSelect: 1,
          required: true,
        },
        { name: 'total_amount', type: 'number', required: true },
        { name: 'user', type: 'relation', collectionId: '_pb_users_auth_', maxSelect: 1 },
        { name: 'coupon_used', type: 'relation', collectionId: coupons.id, maxSelect: 1 },
        { name: 'created', type: 'autodate', onCreate: true, onUpdate: false },
        { name: 'updated', type: 'autodate', onCreate: true, onUpdate: true },
      ],
    })
    app.save(orders)

    const knowledgeBase = new Collection({
      name: 'knowledge_base',
      type: 'base',
      listRule: "@request.auth.id != ''",
      viewRule: "@request.auth.id != ''",
      createRule: "@request.auth.id != ''",
      updateRule: "@request.auth.id != ''",
      deleteRule: "@request.auth.id != ''",
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'content', type: 'editor' },
        { name: 'created', type: 'autodate', onCreate: true, onUpdate: false },
        { name: 'updated', type: 'autodate', onCreate: true, onUpdate: true },
      ],
    })
    app.save(knowledgeBase)
  },
  (app) => {
    try {
      app.delete(app.findCollectionByNameOrId('knowledge_base'))
    } catch (_) {}
    try {
      app.delete(app.findCollectionByNameOrId('orders'))
    } catch (_) {}
    try {
      app.delete(app.findCollectionByNameOrId('coupons'))
    } catch (_) {}
  },
)
