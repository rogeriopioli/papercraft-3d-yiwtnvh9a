migrate(
  (app) => {
    const usersCol = app.findCollectionByNameOrId('_pb_users_auth_')
    const ordersCol = app.findCollectionByNameOrId('orders')

    const ensureUser = (email, name, count, limit) => {
      let rec
      try {
        rec = app.findAuthRecordByEmail('_pb_users_auth_', email)
      } catch (_) {
        rec = new Record(usersCol)
        rec.setEmail(email)
        rec.setPassword('securepassword123')
        rec.setVerified(true)
      }
      rec.set('name', name)
      rec.set('downloads_count', count)
      rec.set('downloads_limit', limit)
      app.save(rec)
      return rec
    }

    const rogerio = ensureUser('rogeriopioli@hotmail.com', 'rogerio', 0, 3)
    const joao = ensureUser('joao@exemplo.com', 'João Criativo', 0, 3)
    ensureUser('maria@exemplo.com', 'Maria Paper', 1, 3)
    ensureUser('carlos@exemplo.com', 'Carlos Geometria', 0, 3)

    const addOrder = (num, date, user, total, items) => {
      const ord = new Record(ordersCol)
      ord.set('order_number', num)
      ord.set('created', date)
      ord.set('status', 'paid')
      ord.set('user', user.id)
      ord.set('total_amount', total)
      ord.set('items', items)
      app.save(ord)
    }

    addOrder('ORD-4068', '2026-03-20 10:00:00.000Z', rogerio, 48.9, [
      { name: 'Raposa Geométrica de Mesa', quantity: 1 },
      { name: 'Troféu Cabeça de Cervo Lowpoly', quantity: 1 },
    ])

    addOrder('ORD-3025', '2026-03-17 14:30:00.000Z', rogerio, 55.0, [
      { name: 'Máscara Cyberpunk Oni', quantity: 1 },
    ])

    addOrder('ORD-8432', '2026-03-13 09:15:00.000Z', joao, 32.5, [
      { name: 'Raposa Geométrica de Mesa', quantity: 1 },
    ])
  },
  (app) => {
    // Pass
  },
)
