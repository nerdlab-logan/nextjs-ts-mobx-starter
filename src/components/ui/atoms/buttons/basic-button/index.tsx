import React, { ButtonHTMLAttributes, MouseEventHandler } from 'react'
import tw from 'twin.macro'
import { Button } from './styled'

type ButtonType = 'primary' | 'danger'

interface BaseProps {
  type?: ButtonType
  onClick?: MouseEventHandler<HTMLElement>
}

export type Props = BaseProps & Omit<ButtonHTMLAttributes<any>, 'type' | 'onClick'>

const BasicButton: React.FC<Props> = ({ children, type, onClick, ...rest }) => {
  const getTypeStyle = () => {
    switch (type) {
      case 'primary':
        return tw`bg-blue-500 hover:bg-blue-700`
      case 'danger':
        return tw`bg-red-500 hover:bg-red-700`
      default:
        return tw`bg-blue-500 hover:bg-blue-700`
    }
  }

  return (
    <Button css={[getTypeStyle()]} onClick={onClick} {...rest}>
      {children}
    </Button>
  )
}

export default BasicButton
