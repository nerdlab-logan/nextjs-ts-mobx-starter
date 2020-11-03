import React from 'react'
import { useLocalObservable, observer } from 'mobx-react'

import MainTemplate from '@template/main'
import SingleCounter from '@ui/organisms/counter/single-counter'

import CounterStore from '@/stores/counter/counter.store'

const IndexPage = observer(() => {
  const counterStore = useLocalObservable(() => new CounterStore())

  const handleIncreaseButtonClick = () => {
    counterStore.increase()
  }

  const handleDecreaseButtonClick = () => {
    counterStore.decrease()
  }

  return (
    <MainTemplate
      CountComponent={
        <SingleCounter
          count={counterStore.counter}
          onDecreaseButtonClick={handleDecreaseButtonClick}
          onIncreaseButtonClick={handleIncreaseButtonClick}
        />
      }
    />
  )
})
export default IndexPage
