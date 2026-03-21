migrate(
  (app) => {
    const users = app.findCollectionByNameOrId('_pb_users_auth_')
    try {
      const existing = app.findAuthRecordByEmail('_pb_users_auth_', 'rogeriopioli@hotmail.com')
      if (existing) return
    } catch (_) {}

    const record = new Record(users)
    record.setEmail('rogeriopioli@hotmail.com')
    record.setPassword('securepassword123')
    record.setVerified(true)
    app.save(record)
  },
  (app) => {
    try {
      const record = app.findAuthRecordByEmail('_pb_users_auth_', 'rogeriopioli@hotmail.com')
      app.delete(record)
    } catch (_) {}
  },
)
