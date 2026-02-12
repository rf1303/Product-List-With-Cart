import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Desserts } from './Desserts.jsx'

// Mock the context to provide test data
vi.mock('./data-context/JsonDataContext.jsx', () => ({
  useJsonData: () => ({
    dataProducts: [
      {
        id: 1,
        name: 'Vanilla Bean Crème Brûlée',
        category: 'Crème Brûlée',
        price: 7.50,
        image: {
          desktop: '/images/image-waffle-desktop.jpg',
          tablet: '/images/image-waffle-tablet.jpg',
          mobile: '/images/image-waffle-mobile.jpg'
        }
      }
    ]
  })
}))

// Mock the AddCartBtn component
vi.mock('./buttons.jsx', () => ({
  AddCartBtn: ({ dataProducts }) => <button data-testid={`add-btn-${dataProducts.id}`}>Add to Cart</button>
}))

describe('Desserts Component', () => {
  it('renders the desserts heading', () => {
    render(<Desserts />)
    
    const heading = screen.getByRole('heading', { name: /desserts/i })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveClass('text-rose-900', 'text-preset-1', 'font-bold')
  })

  it('renders dessert products with correct information', () => {
    render(<Desserts />)
    
    expect(screen.getByText('Vanilla Bean Crème Brûlée')).toBeInTheDocument()
    expect(screen.getByText('Crème Brûlée')).toBeInTheDocument()
    expect(screen.getByText('$7.50')).toBeInTheDocument()
  })

  it('has proper accessibility attributes', () => {
    render(<Desserts />)
    
    const productSection = screen.getByLabelText('Dessert products')
    expect(productSection).toBeInTheDocument()
  })

  it('renders product images with proper alt text', () => {
    render(<Desserts />)
    
    const image = screen.getByAltText('image of Vanilla Bean Crème Brûlée')
    expect(image).toBeInTheDocument()
    expect(image).toHaveClass('w-full', 'max-w-82.5', 'rounded-xl')
  })

  it('renders add to cart buttons', () => {
    render(<Desserts />)
    
    expect(screen.getByTestId('add-btn-1')).toBeInTheDocument()
  })
})