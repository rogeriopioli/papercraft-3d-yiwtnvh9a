migrate(
  (app) => {
    const collection = new Collection({
      name: 'support_messages',
      type: 'base',
      listRule: 'id = @request.auth.id',
      viewRule: 'id = @request.auth.id',
      createRule: '',
      updateRule: 'id = @request.auth.id',
      deleteRule: 'id = @request.auth.id',
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'email', type: 'email', required: true },
        { name: 'subject', type: 'text', required: true },
        { name: 'message', type: 'text', required: true },
        { name: 'created', type: 'autodate', onCreate: true, onUpdate: false },
        { name: 'updated', type: 'autodate', onCreate: true, onUpdate: true },
      ],
    })
    app.save(collection)
  },
  (app) => {
    const collection = app.findCollectionByNameOrId('support_messages')
    app.delete(collection)
  },
)
