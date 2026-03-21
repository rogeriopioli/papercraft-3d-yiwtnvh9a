import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import Index from './pages/Index'
import NotFound from './pages/NotFound'
import ProductDetails from './pages/ProductDetails'
import Terms from './pages/Terms'
import Checkout from './pages/Checkout'
import HowToAssemble from './pages/HowToAssemble'
import Support from './pages/Support'
import About from './pages/About'
import Wishlist from './pages/Wishlist'
import FAQ from './pages/FAQ'
import Admin from './pages/Admin'
import Layout from './components/Layout'
import { CartProvider } from './stores/useCartStore'
import { WishlistProvider } from './stores/useWishlistStore'
import { AuthProvider } from './stores/useAuthStore'
import { PBAuthProvider } from './hooks/use-auth'
import { ProductProvider } from './stores/useProductStore'
import { CategoryProvider } from './stores/useCategoryStore'

const App = () => (
  <PBAuthProvider>
    <AuthProvider>
      <CategoryProvider>
        <ProductProvider>
          <CartProvider>
            <WishlistProvider>
              <BrowserRouter future={{ v7_startTransition: false, v7_relativeSplatPath: false }}>
                <TooltipProvider>
                  <Toaster />
                  <Sonner />
                  <Routes>
                    <Route element={<Layout />}>
                      <Route path="/" element={<Index />} />
                      <Route path="/product/:id" element={<ProductDetails />} />
                      <Route path="/termos" element={<Terms />} />
                      <Route path="/como-montar" element={<HowToAssemble />} />
                      <Route path="/checkout" element={<Checkout />} />
                      <Route path="/suporte" element={<Support />} />
                      <Route path="/sobre" element={<About />} />
                      <Route path="/wishlist" element={<Wishlist />} />
                      <Route path="/faq" element={<FAQ />} />
                      <Route path="/admin" element={<Admin />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </TooltipProvider>
              </BrowserRouter>
            </WishlistProvider>
          </CartProvider>
        </ProductProvider>
      </CategoryProvider>
    </AuthProvider>
  </PBAuthProvider>
)

export default App
