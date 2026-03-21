import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
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
import AdminLayout from './pages/admin/AdminLayout'
import Dashboard from './pages/admin/Dashboard'
import {
  AdminProducts,
  AdminOrders,
  AdminUsers,
  AdminCoupons,
  AdminCategories,
  AdminEmails,
  AdminKB,
  AdminChat,
} from './pages/admin/Views'
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
                    {/* Public Routes with Global Layout */}
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
                    </Route>

                    {/* Admin Routes with Dedicated Layout */}
                    <Route path="/admin" element={<AdminLayout />}>
                      <Route index element={<Navigate to="dashboard" replace />} />
                      <Route path="dashboard" element={<Dashboard />} />
                      <Route path="produtos" element={<AdminProducts />} />
                      <Route path="pedidos" element={<AdminOrders />} />
                      <Route path="usuarios" element={<AdminUsers />} />
                      <Route path="cupons" element={<AdminCoupons />} />
                      <Route path="categorias" element={<AdminCategories />} />
                      <Route path="emails" element={<AdminEmails />} />
                      <Route path="kb" element={<AdminKB />} />
                      <Route path="chat" element={<AdminChat />} />
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
