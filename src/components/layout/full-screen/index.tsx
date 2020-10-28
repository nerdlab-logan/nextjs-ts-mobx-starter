import React from 'react'
import * as S from './styled'

const FullScreenLayout: React.FC = ({ children }) => {
  return (
    <S.RootWrapper>
      <S.MainContainer>{children}</S.MainContainer>
    </S.RootWrapper>
  )
}

export default FullScreenLayout
