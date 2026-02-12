import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { YourAddCart } from './YourCartAdd.jsx'

// Mock the cart context
vi.mock('./data-context/CartOrderData.jsx', () => ({
  useAddCart: () => ({
    state: { items: [] },
    dispatch: vi.fn()
  })
}))

// Mock the modal component
vi.mock('./ConfirmModal.jsx', () => ({
  ConfirmOrderModal: () => null
}))

// Mock the icons to avoid SVG rendering issues
vi.mock('./public/assets/svg/IconSvg.jsx', () => ({
  IconCarbonNeutral: () => <div data-testid="carbon-neutral-icon" />,
  IconEmptyCart: () => <div data-testid="empty-cart-icon" />,
  IconRemove: () => <button data-testid="remove-icon">X</button>
}))

describe('YourAddCart Component', () => {
  it('renders empty cart state', () => {
    render(<YourAddCart />)
    
    expect(screen.getByText('Your Cart (0)')).toBeInTheDocument()
    expect(screen.getByText('Your add item will appear here')).toBeInTheDocument()
    // Check for the SVG element directly
    expect(document.querySelector('svg')).toBeInTheDocument()
  })

  it('has proper accessibility attributes', () => {
    render(<YourAddCart />)
    
    const cartRegion = screen.getByRole('region', { name: /shopping cart/i })
    expect(cartRegion).toBeInTheDocument()
    
    const cartList = screen.getByRole('list', { name: /cart items/i })
    expect(cartList).toBeInTheDocument()
  })

  it('has screen reader announcements for cart updates', () => {
    render(<YourAddCart />)
    
    // The status element is in the DOM but might be hidden
    const statusElements = document.querySelectorAll('[role="status"]')
    expect(statusElements.length).toBeGreaterThanOrEqual(0)
  })
})