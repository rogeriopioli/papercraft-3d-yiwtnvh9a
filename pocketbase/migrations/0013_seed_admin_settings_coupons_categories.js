migrate(
  (app) => {
    // 1. Seed Coupons
    const couponsCol = app.findCollectionByNameOrId('coupons')
    const coupons = [
      {
        code: 'BEMVINDO5',
        discount_type: 'percentage',
        value: 5,
        is_active: true,
        expires_at: '2026-03-23 00:00:00.000Z',
        usage_count: 5,
      },
      {
        code: 'NATAL50',
        discount_type: 'fixed',
        value: 50,
        is_active: false,
        expires_at: '',
        usage_count: 12,
      },
      {
        code: 'FRETEZERO',
        discount_type: 'fixed',
        value: 15,
        is_active: false,
        expires_at: '',
        usage_count: 2,
      },
    ]

    for (const c of coupons) {
      try {
        const existing = app.findFirstRecordByData('coupons', 'code', c.code)
        existing.load(c)
        app.save(existing)
      } catch {
        const record = new Record(couponsCol)
        record.load(c)
        app.save(record)
      }
    }

    // 2. Seed Categories
    const catCol = app.findCollectionByNameOrId('categories')
    const cats = ['Animais', 'Decoração', 'Máscaras', 'Personagens', 'Arquitetura']

    for (const name of cats) {
      try {
        app.findFirstRecordByData('categories', 'name', name)
      } catch {
        const record = new Record(catCol)
        record.load({ name })
        app.save(record)
      }
    }

    // 3. Seed Settings (Email Template)
    const settingsCol = app.findCollectionByNameOrId('settings')
    try {
      app.findFirstRecordByData('settings', 'key', 'welcome_email')
    } catch {
      const record = new Record(settingsCol)
      record.load({
        key: 'welcome_email',
        value: {
          subject: 'Bem-vindo ao PapercraftRP!',
          body: 'Olá {{customer_name}},\n\nObrigado por se juntar a nós! Aqui está seu cupom de boas-vindas: {{coupon_code}} ({{discount_percentage}} de descontos).\n\nAproveite e comece a montar seus modelos hoje mesmo!',
        },
      })
      app.save(record)
    }
  },
  (app) => {
    // Down migration is essentially a no-op to preserve user data
  },
)
