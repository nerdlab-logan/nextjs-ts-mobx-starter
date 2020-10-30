import React from 'react'
import { observer } from 'mobx-react'
import * as S from './styled'

import CounterCard from '@ui/molecules/cards/counter-card'

interface Props {
  count: number
  onIncreaseButtonClick: () => void
  onDecreaseButtonClick: () => void
}

const SingleCounter = observer(({ count, onDecreaseButtonClick, onIncreaseButtonClick }: Props) => {
  return (
    <S.Container>
      <CounterCard
        count={count}
        onIncreaseButtonClick={onIncreaseButtonClick}
        onDecreaseButtonClick={onDecreaseButtonClick}
      />
    </S.Container>
  )
})

export default SingleCounter
