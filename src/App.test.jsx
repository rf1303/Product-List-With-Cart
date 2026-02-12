import { vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App.jsx'

// Mock the data providers to avoid fetch issues
vi.mock('./data-context/JsonDataContext.jsx', () => ({
  JsonDataProvider: ({ children }) => children,
  useJsonData: () => ({
    dataProducts: []
  })
}))

vi.mock('./data-context/CartOrderData.jsx', () => ({
  AddCartProvider: ({ children }) => children,
  useAddCart: () => ({
    state: { items: [] },
    dispatch: vi.fn()
  })
}))

describe('App Component', () => {
  it('renders without crashing', () => {
    render(<App />)
  })

  it('has proper accessibility attributes', () => {
    render(<App />)
    
    const mainContent = screen.getByRole('main', { name: /product catalog and shopping cart/i })
    expect(mainContent).toBeInTheDocument()
    expect(mainContent).toHaveAttribute('id', 'main-content')
  })

  it('renders cart content div', () => {
    render(<App />)
    
    const cartContent = document.getElementById('cart-content')
    expect(cartContent).toBeInTheDocument()
  })
})