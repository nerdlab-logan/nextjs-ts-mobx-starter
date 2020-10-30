import tw, { styled } from 'twin.macro'
import BasicButton, { Props as BasicButtonProps } from '@ui/atoms/buttons/basic-button'

export const CounterCard = styled.div`
  ${tw`relative flex flex-col flex-shrink-0 max-w-xs`}
  ${tw`rounded-lg shadow-lg`}
  ${tw`bg-white`}
`

export const ResultArea = styled.div`
  ${tw`relative flex flex-col items-center w-40 py-6`}
`

export const ResultTitle = styled.h2`
  ${tw`text-2xl`}
`

export const ResultValue = styled.div`
  ${tw`pt-2`}
  ${tw`text-lg font-bold`}
`

export const ActionArea = styled.div`
  ${tw`flex py-4 justify-center border-t-2 border-orange-200`}
`

export const IncreaseButton = styled(BasicButton)<BasicButtonProps>`
  ${tw`w-16`}
`

export const DecreaseButton = styled(BasicButton)<BasicButtonProps>`
  ${tw`w-16 mr-2`}
`
