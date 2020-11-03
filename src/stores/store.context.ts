import React from 'react'
import CounterStore from '@/stores/counter/counter.store'

export const StoreContext = React.createContext({
  CounterStore: new CounterStore(),
})
