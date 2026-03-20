import { createContext, useContext, useState, ReactNode, useEffect } from 'react'

interface AuthContextType {
  isAuthenticated: boolean
  login: (user: string, pass: string) => boolean
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('admin_auth') === 'true'
  })

  useEffect(() => {
    localStorage.setItem('admin_auth', String(isAuthenticated))
  }, [isAuthenticated])

  const login = (user: string, pass: string) => {
    if (user === 'admin' && pass === 'admin123') {
      setIsAuthenticated(true)
      return true
    }
    return false
  }

  const logout = () => setIsAuthenticated(false)

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default function useAuthStore() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuthStore must be used within an AuthProvider')
  }
  return context
}
