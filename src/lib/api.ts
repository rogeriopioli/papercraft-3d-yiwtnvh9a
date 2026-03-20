import { Product, Category } from '@/data/products'

const MOCK_DELAY = 600

let categoriesDB: Category[] = [
  { id: 'c1', name: 'Animais' },
  { id: 'c2', name: 'Decoração' },
  { id: 'c3', name: 'Máscaras' },
  { id: 'c4', name: 'Personagens' },
  { id: 'c5', name: 'Arquitetura' },
]

let productsDB: Product[] = [
  {
    id: 'p1',
    title: 'Troféu Cabeça de Cervo Lowpoly',
    price: 45.9,
    categoryId: 'c1',
    category: 'Animais',
    difficulty: 3,
    images: [
      'https://img.usecurling.com/p/800/800?q=lowpoly+deer+head+papercraft&color=orange',
      'https://img.usecurling.com/p/800/800?q=papercraft+deer+wall+art&color=white',
    ],
    video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    description:
      'Um impressionante troféu de parede em formato de cervo. Perfeito para decoração de salas modernas e escritórios. O arquivo PDF contém todas as peças numeradas e instruções detalhadas passo a passo.',
    specs: { sheets: 12, time: '4-6 horas', dimensions: '45 x 30 x 25 cm' },
    rating: 4.8,
    isBestSeller: true,
    tags: ['Geométrico', 'Minimalista', 'DIY'],
  },
  {
    id: 'p2',
    title: 'Raposa Geométrica de Mesa',
    price: 32.5,
    categoryId: 'c1',
    category: 'Animais',
    difficulty: 2,
    images: [
      'https://img.usecurling.com/p/800/800?q=lowpoly+fox+papercraft&color=orange',
      'https://img.usecurling.com/p/800/800?q=origami+fox+3d&color=orange',
    ],
    video: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    description:
      'Uma raposa sentada minimalista. Ótima para iniciantes no mundo do papercraft. Fica linda na mesa do escritório ou na estante da sala.',
    specs: { sheets: 5, time: '2-3 horas', dimensions: '20 x 15 x 18 cm' },
    rating: 4.9,
    tags: ['Minimalista', 'Para Presente'],
  },
  {
    id: 'p3',
    title: 'Máscara Cyberpunk Oni',
    price: 55.0,
    categoryId: 'c3',
    category: 'Máscaras',
    difficulty: 4,
    images: [
      'https://img.usecurling.com/p/800/800?q=cyberpunk+oni+mask+papercraft&color=red',
      'https://img.usecurling.com/p/800/800?q=lowpoly+samurai+mask&color=black',
    ],
    description:
      'Máscara vestível estilo Cyberpunk Oni. Excelente para festas a fantasia, Halloween ou cosplay. Estrutura reforçada.',
    specs: { sheets: 18, time: '6-8 horas', dimensions: '35 x 28 x 20 cm' },
    rating: 4.7,
    isNew: true,
    tags: ['Geométrico'],
  },
  {
    id: 'p4',
    title: 'Vaso Abstrato Torcido',
    price: 28.0,
    categoryId: 'c2',
    category: 'Decoração',
    difficulty: 2,
    images: ['https://img.usecurling.com/p/800/800?q=twisted+geometric+vase+paper&color=white'],
    description:
      'Um vaso decorativo moderno para flores secas (não usar com água!). Design elegante com torção geométrica.',
    specs: { sheets: 4, time: '1-2 horas', dimensions: '25 x 10 x 10 cm' },
    rating: 4.5,
    tags: ['Minimalista', 'DIY'],
  },
  {
    id: 'p5',
    title: 'Dragão Guardião Articulado',
    price: 89.9,
    categoryId: 'c4',
    category: 'Personagens',
    difficulty: 5,
    images: [
      'https://img.usecurling.com/p/800/800?q=lowpoly+dragon+papercraft&color=green',
      'https://img.usecurling.com/p/800/800?q=paper+dragon+sculpture&color=green',
    ],
    description:
      'Desafio supremo! Um dragão gigante com detalhes impressionantes. Requer paciência e precisão.',
    specs: { sheets: 35, time: '15+ horas', dimensions: '60 x 40 x 50 cm' },
    rating: 4.9,
    tags: ['Geométrico'],
  },
  {
    id: 'p6',
    title: 'Luminária Cidade Flutuante',
    price: 65.0,
    categoryId: 'c5',
    category: 'Arquitetura',
    difficulty: 4,
    images: ['https://img.usecurling.com/p/800/800?q=papercraft+city+lamp+diorama&color=cyan'],
    description:
      'Diorama de uma cidade em miniatura projetado para ser usado com luzes LED internas, criando um efeito noturno incrível.',
    specs: { sheets: 22, time: '8-10 horas', dimensions: '30 x 30 x 20 cm' },
    rating: 4.6,
    isNew: true,
    tags: ['Para Presente', 'DIY'],
  },
  {
    id: 'p7',
    title: 'Cacto Geométrico que Não Morre',
    price: 19.9,
    categoryId: 'c2',
    category: 'Decoração',
    difficulty: 1,
    images: ['https://img.usecurling.com/p/800/800?q=papercraft+cactus+geometric&color=green'],
    description:
      'O cacto perfeito para quem esquece de regar as plantas. Rápido e fácil de montar.',
    specs: { sheets: 3, time: '1 hora', dimensions: '15 x 8 x 8 cm' },
    rating: 4.4,
    tags: ['Minimalista'],
  },
  {
    id: 'p8',
    title: 'Máscara Gato Egípcio',
    price: 38.0,
    categoryId: 'c3',
    category: 'Máscaras',
    difficulty: 3,
    images: ['https://img.usecurling.com/p/800/800?q=egyptian+cat+mask+lowpoly&color=black'],
    description:
      'Máscara elegante inspirada em gatos egípcios. Design sofisticado com linhas afiadas.',
    specs: { sheets: 10, time: '3-5 horas', dimensions: '30 x 25 x 20 cm' },
    rating: 4.8,
    isBestSeller: true,
    tags: ['Geométrico'],
  },
]

// Mocking Skip Cloud / PocketBase SDK since no backend URL is available
export const pbMock = {
  collection: (name: string) => ({
    getFullList: async () => {
      return new Promise<any[]>((resolve) => {
        setTimeout(() => {
          if (name === 'categories') resolve([...categoriesDB])
          if (name === 'products') resolve([...productsDB])
        }, MOCK_DELAY)
      })
    },
    getOne: async (id: string) => {
      return new Promise<any>((resolve, reject) => {
        setTimeout(() => {
          if (name === 'products') {
            const p = productsDB.find((x) => x.id === id)
            if (p) resolve({ ...p })
            else reject(new Error('Not found'))
          }
        }, MOCK_DELAY)
      })
    },
    create: async (data: any) => {
      return new Promise<any>((resolve) => {
        setTimeout(() => {
          const newItem = { ...data, id: `${name.charAt(0)}${Date.now()}` }
          if (name === 'categories') categoriesDB = [...categoriesDB, newItem]
          if (name === 'products') productsDB = [newItem, ...productsDB]
          resolve(newItem)
        }, MOCK_DELAY)
      })
    },
    update: async (id: string, data: any) => {
      return new Promise<any>((resolve) => {
        setTimeout(() => {
          if (name === 'categories') {
            categoriesDB = categoriesDB.map((c) => (c.id === id ? { ...c, ...data } : c))
            resolve(categoriesDB.find((c) => c.id === id))
          }
          if (name === 'products') {
            productsDB = productsDB.map((p) => (p.id === id ? { ...p, ...data } : p))
            resolve(productsDB.find((p) => p.id === id))
          }
        }, MOCK_DELAY)
      })
    },
    delete: async (id: string) => {
      return new Promise<boolean>((resolve) => {
        setTimeout(() => {
          if (name === 'categories') categoriesDB = categoriesDB.filter((c) => c.id !== id)
          if (name === 'products') productsDB = productsDB.filter((p) => p.id !== id)
          resolve(true)
        }, MOCK_DELAY)
      })
    },
  }),
}

export const uploadMedia = async (file: File): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const reader = new FileReader()
      reader.onload = (e) => resolve(e.target?.result as string)
      reader.readAsDataURL(file)
    }, 800)
  })
}
