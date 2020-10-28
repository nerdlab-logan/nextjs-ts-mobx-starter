import React from 'react'
import { useLocalObservable, observer } from 'mobx-react'

import MainTemplate from '@template/main'

import CounterStore from '@/stores/counter.store'

const IndexPage = observer(() => {
  const counterStore = useLocalObservable(() => new CounterStore())

  return (
    <MainTemplate
      CountComponent={
        <div className="flex pt-8 justify-center">
          <div className="text-center">
            <h1 className="text-2xl">카운트</h1>
            <h2 className="text-lg pt-2">{counterStore.counter}</h2>
            <div className="flex">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
                onClick={counterStore.increase}
              >
                +
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
                onClick={counterStore.decrease}
              >
                -
              </button>
            </div>
          </div>
        </div>
      }
    />
  )
})
export default IndexPage
