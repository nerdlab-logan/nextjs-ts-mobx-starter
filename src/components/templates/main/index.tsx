import React from 'react'
import * as S from './styled'

import FullScreenLayout from '@layout/full-screen'

interface Props {
  CountComponent: React.ReactElement
}

const MainTemplate = ({ CountComponent }: Props) => {
  return (
    <FullScreenLayout>
      <S.TemplateWrapper>
        <S.CountArea>{CountComponent}</S.CountArea>
      </S.TemplateWrapper>
    </FullScreenLayout>
  )
}

export default MainTemplate
