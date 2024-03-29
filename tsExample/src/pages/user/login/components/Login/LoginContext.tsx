import { createContext } from 'react'

export type LoginContextProps = {
  tabUtil?: {
    addTab: (id: string) => void
    removeTab: (id: string) => void
  }
  updateActive?: (activeItem: Record<string, string> | string) => void
}

const LoginContext: React.Context<LoginContextProps> = createContext({})

export default LoginContext
