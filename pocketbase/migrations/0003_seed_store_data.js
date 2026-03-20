migrate(
  (app) => {
    // 1. Seed Admin User
    const users = app.findCollectionByNameOrId('_pb_users_auth_')
    let admin
    try {
      admin = app.findAuthRecordByEmail('_pb_users_auth_', 'rogeriopioli@hotmail.com')
    } catch (e) {
      admin = new Record(users)
      admin.setEmail('rogeriopioli@hotmail.com')
      admin.setPassword('securepassword123')
      admin.setVerified(true)
      app.save(admin)
    }

    // 2. Seed Categories
    const categoriesCol = app.findCollectionByNameOrId('categories')
    const cats = ['Animais', 'Decoração', 'Máscaras', 'Personagens', 'Arquitetura']
    for (const name of cats) {
      const record = new Record(categoriesCol)
      record.set('name', name)
      app.save(record)
    }

    // 3. Seed Products
    const productsCol = app.findCollectionByNameOrId('products')
    const productsData = [
      {
        title: 'Troféu Cabeça de Cervo Lowpoly',
        price: 45.9,
        category: 'Animais',
        difficulty: 3,
        images: [''],
        video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        description:
          'Um impressionante troféu de parede em formato de cervo. Perfeito para decoração de salas modernas e escritórios. O arquivo PDF contém todas as peças numeradas e instruções detalhadas passo a passo.',
        specs: { sheets: 12, time: '4-6 horas', dimensions: '45 x 30 x 25 cm' },
        rating: 4.8,
        isBestSeller: true,
        tags: ['Geométrico', 'Minimalista', 'DIY'],
      },
      {
        title: 'Raposa Geométrica de Mesa',
        price: 32.5,
        category: 'Animais',
        difficulty: 2,
        images: [''],
        video:
          'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        description:
          'Uma raposa sentada minimalista. Ótima para iniciantes no mundo do papercraft. Fica linda na mesa do escritório ou na estante da sala.',
        specs: { sheets: 5, time: '2-3 horas', dimensions: '20 x 15 x 18 cm' },
        rating: 4.9,
        isNew: false,
        isBestSeller: false,
        tags: ['Minimalista', 'Para Presente'],
      },
      {
        title: 'Vaso Abstrato Azul',
        price: 28.0,
        category: 'Decoração',
        difficulty: 2,
        images: [''],
        description:
          'Um vaso decorativo moderno para flores secas (não usar com água!). Design elegante com torção geométrica.',
        specs: { sheets: 4, time: '1-2 horas', dimensions: '25 x 10 x 10 cm' },
        rating: 4.5,
        isNew: true,
        isBestSeller: false,
        tags: ['Minimalista', 'DIY'],
      },
      {
        title: 'Dragão Guardião Azul',
        price: 89.9,
        category: 'Personagens',
        difficulty: 5,
        images: [''],
        description:
          'Desafio supremo! Um dragão gigante com detalhes impressionantes. Requer paciência e precisão.',
        specs: { sheets: 35, time: '15+ horas', dimensions: '60 x 40 x 50 cm' },
        rating: 4.9,
        isNew: false,
        isBestSeller: false,
        tags: ['Geométrico'],
      },
      {
        title: 'Luminária Cidade Flutuante',
        price: 65.0,
        category: 'Arquitetura',
        difficulty: 4,
        images: [''],
        description:
          'Diorama de uma cidade em miniatura projetado para ser usado com luzes LED internas, criando um efeito noturno incrível.',
        specs: { sheets: 22, time: '8-10 horas', dimensions: '30 x 30 x 20 cm' },
        rating: 4.6,
        isNew: true,
        isBestSeller: true,
        tags: ['Para Presente', 'DIY'],
      },
    ]

    for (const p of productsData) {
      const record = new Record(productsCol)
      record.set('title', p.title)
      record.set('price', p.price)
      record.set('category', p.category)
      record.set('difficulty', p.difficulty)
      record.set('images', p.images)
      record.set('video', p.video || '')
      record.set('description', p.description)
      record.set('specs', p.specs)
      record.set('rating', p.rating)
      record.set('isNew', p.isNew || false)
      record.set('isBestSeller', p.isBestSeller || false)
      record.set('tags', p.tags || [])
      app.save(record)
    }
  },
  (app) => {
    try {
      app.db().newQuery('DELETE FROM products').execute()
      app.db().newQuery('DELETE FROM categories').execute()
    } catch (e) {
      console.log(e)
    }
  },
)
