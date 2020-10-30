import tw, { styled } from 'twin.macro'

export const RootWrapper = styled.div`
  ${tw`relative w-full h-screen bg-gray-300`}
  ${tw`overflow-hidden`}
`

export const MainContainer = styled.div`
  ${tw`w-full h-full flex flex-col`}
`
