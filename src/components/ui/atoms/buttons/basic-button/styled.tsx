import tw, { styled } from 'twin.macro'

export const Button = styled.button`
  min-width: 2rem;
  text-overflow: ellipsis;
  ${tw`flex-initial h-8 px-2 rounded`}
  ${tw`text-white font-bold overflow-hidden whitespace-no-wrap`}
`
