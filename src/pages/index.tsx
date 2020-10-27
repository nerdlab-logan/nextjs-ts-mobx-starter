import React from 'react'
import { useLocalObservable, observer } from 'mobx-react'

import CounterStore from '@/stores/counter.store'

const IndexPage = observer(() => {
  const counterStore = useLocalObservable(() => new CounterStore())

  return (
    <>
      <div className="md:flex bg-white rounded-lg p-24 justify-center">
        <div className="text-center md:text-left">
          <h2 className="text-lg">Logan Lee</h2>
          <div className="text-purple-500">JavaScript developer</div>
          <div className="text-gray-600">email: logan@nerdlab.xyz</div>
        </div>
      </div>

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
    </>
  )
})
export default IndexPage
