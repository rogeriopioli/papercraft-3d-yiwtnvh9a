import { Link } from 'react-router-dom'
import { Heart, ChevronRight } from 'lucide-react'
import useWishlistStore from '@/stores/useWishlistStore'
import useProductStore from '@/stores/useProductStore'
import ProductCard from '@/components/ProductCard'

export default function Wishlist() {
  const { items } = useWishlistStore()
  const { products } = useProductStore()

  const wishlistProducts = products.filter((p) => items.includes(p.id))

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <nav className="flex items-center text-sm font-bold text-slate-400 mb-8">
        <Link to="/" className="hover:text-primary transition-colors">
          Home
        </Link>
        <ChevronRight className="w-4 h-4 mx-2" />
        <span className="text-primary">Lista de Desejos</span>
      </nav>

      <div className="flex items-center gap-3 mb-8">
        <Heart className="w-8 h-8 text-red-500 fill-current" />
        <h1 className="text-3xl md:text-4xl font-heading font-black text-slate-900">
          Sua Lista de Desejos
        </h1>
      </div>

      {wishlistProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlistProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-slate-50 rounded-3xl border border-slate-100 mt-8">
          <Heart className="w-16 h-16 text-slate-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Sua lista está vazia</h2>
          <p className="text-slate-500 mb-6 font-medium">
            Explore nossos modelos e adicione seus favoritos aqui.
          </p>
          <Link
            to="/"
            className="inline-block bg-primary text-white font-bold px-8 py-3 rounded-xl hover:bg-primary/90 transition-colors shadow-sm"
          >
            Explorar Catálogo
          </Link>
        </div>
      )}
    </div>
  )
}
