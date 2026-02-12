import { renderHook } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { JsonDataProvider, useJsonData } from './JsonDataContext.jsx'

// Mock the DataJson hook
vi.mock('./DataJson.jsx', () => ({
  useDataJson: () => ({ jsonData: [] })
}))

describe('JsonData Context', () => {
  it('throws error when used outside provider', () => {
    expect(() => {
      renderHook(() => useJsonData())
    }).toThrow('useJsonData debe usarse dentro de JsonDataProvider')
  })

  it('provides dataProducts when used inside provider', () => {
    const wrapper = ({ children }) => (
      <JsonDataProvider>{children}</JsonDataProvider>
    )

    const { result } = renderHook(() => useJsonData(), { wrapper })
    
    expect(result.current.dataProducts).toBeDefined()
    expect(Array.isArray(result.current.dataProducts)).toBe(true)
  })

  it('dataProducts should be accessible through context', () => {
    const wrapper = ({ children }) => (
      <JsonDataProvider>{children}</JsonDataProvider>
    )

    const { result } = renderHook(() => useJsonData(), { wrapper })
    
    expect(result.current.dataProducts).toBeDefined()
    expect(Array.isArray(result.current.dataProducts)).toBe(true)
  })
})