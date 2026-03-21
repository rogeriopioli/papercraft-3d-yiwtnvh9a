migrate(
  (app) => {
    const orders = app.findCollectionByNameOrId('orders')

    if (!orders.fields.getByName('items')) {
      orders.fields.add(new JSONField({ name: 'items' }))
    }
    if (!orders.fields.getByName('order_number')) {
      orders.fields.add(new TextField({ name: 'order_number' }))
    }

    app.save(orders)

    const users = app.findCollectionByNameOrId('_pb_users_auth_')

    if (!users.fields.getByName('downloads_count')) {
      users.fields.add(new NumberField({ name: 'downloads_count' }))
    }
    if (!users.fields.getByName('downloads_limit')) {
      users.fields.add(new NumberField({ name: 'downloads_limit' }))
    }

    app.save(users)
  },
  (app) => {
    const orders = app.findCollectionByNameOrId('orders')
    orders.fields.removeByName('items')
    orders.fields.removeByName('order_number')
    app.save(orders)

    const users = app.findCollectionByNameOrId('_pb_users_auth_')
    users.fields.removeByName('downloads_count')
    users.fields.removeByName('downloads_limit')
    app.save(users)
  },
)
