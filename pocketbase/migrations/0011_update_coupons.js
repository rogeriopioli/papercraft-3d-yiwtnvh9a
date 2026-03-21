migrate(
  (app) => {
    const col = app.findCollectionByNameOrId('coupons')

    if (!col.fields.getByName('is_active')) {
      col.fields.add(new BoolField({ name: 'is_active' }))
    }

    if (!col.fields.getByName('expires_at')) {
      col.fields.add(new DateField({ name: 'expires_at' }))
    }

    app.save(col)
  },
  (app) => {
    const col = app.findCollectionByNameOrId('coupons')
    col.fields.removeByName('is_active')
    col.fields.removeByName('expires_at')
    app.save(col)
  },
)
