import { renderHook } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'
import { AddCartProvider, useAddCart } from '../data-context/CartOrderData.jsx'
import { cartReducer, initialState } from '../ButtonsCarts.jsx'

describe('Cart Context', () => {
  const wrapper = ({ children }) => (
    <AddCartProvider>{children}</AddCartProvider>
  )

  it('provides initial state', () => {
    const { result } = renderHook(() => useAddCart(), { wrapper })
    
    expect(result.current.state).toEqual(initialState)
    expect(typeof result.current.dispatch).toBe('function')
  })

  it('throws error when used outside provider', () => {
    expect(() => {
      renderHook(() => useAddCart())
    }).toThrow('useAddCart debe usarse dentro de AddCartProvider')
  })

  it('provides access to dispatch function', () => {
    const { result } = renderHook(() => useAddCart(), { wrapper })
    
    expect(result.current.dispatch).toBeDefined()
    expect(typeof result.current.dispatch).toBe('function')
  })
})

describe('Cart Reducer', () => {
  it('returns initial state for unknown action', () => {
    const newState = cartReducer(initialState, { type: 'UNKNOWN_ACTION' })
    expect(newState).toEqual(initialState)
  })

  it('handles ADD action correctly', () => {
    const newItem = { id: 1, name: 'Test Item', price: 5.00 }
    const newState = cartReducer(initialState, { 
      type: 'ADD', 
      payload: newItem 
    })
    
    expect(newState.items).toHaveLength(1)
    expect(newState.items[0]).toEqual({ ...newItem, quantity: 1 })
  })

  it('handles REMOVE action correctly', () => {
    const stateWithItems = {
      ...initialState,
      items: [{ id: 1, name: 'Test Item', price: 5.00, quantity: 2 }]
    }
    
    const newState = cartReducer(stateWithItems, { type: 'REMOVE', id: 1 })
    expect(newState.items).toHaveLength(0)
  })

  it('handles RESET action correctly', () => {
    const stateWithItems = {
      ...initialState,
      items: [{ id: 1, name: 'Test Item', price: 5.00, quantity: 2 }]
    }
    
    const newState = cartReducer(stateWithItems, { type: 'RESET' })
    expect(newState).toEqual(initialState)
  })
})