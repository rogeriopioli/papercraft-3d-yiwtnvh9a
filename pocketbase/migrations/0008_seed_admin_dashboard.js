migrate(
  (app) => {
    // 1. Create mock users to reach 4 total users (1 admin exists)
    const usersCol = app.findCollectionByNameOrId('_pb_users_auth_')
    const newUsers = ['user1@test.com', 'user2@test.com', 'user3@test.com']
    const userIds = []
    for (const email of newUsers) {
      try {
        const u = new Record(usersCol)
        u.setEmail(email)
        u.setPassword('securepassword123')
        u.setVerified(true)
        app.save(u)
        userIds.push(u.id)
      } catch (_) {}
    }

    // 2. Create Coupons
    const couponsCol = app.findCollectionByNameOrId('coupons')
    const couponsData = [
      { code: 'BEMVINDO5', discount_type: 'percentage', value: 5, usage_count: 5 },
      { code: 'NATAL50', discount_type: 'fixed', value: 50, usage_count: 12 },
      { code: 'FRETEZERO', discount_type: 'percentage', value: 100, usage_count: 2 },
    ]
    const couponIds = {}
    for (const c of couponsData) {
      const record = new Record(couponsCol)
      record.set('code', c.code)
      record.set('discount_type', c.discount_type)
      record.set('value', c.value)
      record.set('usage_count', c.usage_count)
      app.save(record)
      couponIds[c.code] = record.id
    }

    // 3. Create Orders for the chart (total 136.40 over last 7 days)
    const ordersCol = app.findCollectionByNameOrId('orders')
    const dailyAmounts = [
      { daysAgo: 6, amount: 15.0 },
      { daysAgo: 5, amount: 12.0 },
      { daysAgo: 4, amount: 45.4 }, // Peak
      { daysAgo: 3, amount: 20.0 },
      { daysAgo: 2, amount: 10.0 },
      { daysAgo: 1, amount: 14.0 },
      { daysAgo: 0, amount: 20.0 },
    ]

    const now = new Date()
    for (let i = 0; i < dailyAmounts.length; i++) {
      const data = dailyAmounts[i]
      const record = new Record(ordersCol)
      record.set('status', 'paid')
      record.set('total_amount', data.amount)
      if (userIds.length > 0) record.set('user', userIds[i % userIds.length])

      // Add coupon to some orders to simulate usage
      if (data.daysAgo === 4) record.set('coupon_used', couponIds['BEMVINDO5'])

      app.save(record)

      // Override created date to simulate historical data
      const pastDate = new Date(now)
      pastDate.setDate(now.getDate() - data.daysAgo)
      app
        .db()
        .newQuery('UPDATE orders SET created = {:d} WHERE id = {:id}')
        .bind({ d: pastDate.toISOString().replace('T', ' '), id: record.id })
        .execute()
    }
  },
  (app) => {
    try {
      app.db().newQuery('DELETE FROM orders').execute()
    } catch (_) {}
    try {
      app.db().newQuery('DELETE FROM coupons').execute()
    } catch (_) {}
  },
)
