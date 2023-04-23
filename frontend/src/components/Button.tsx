import { FC,ButtonHTMLAttributes } from 'react'

interface ButtonProps {
  children:React.ReactNode,
  rest?:ButtonHTMLAttributes<HTMLButtonElement>
}

const Button: FC<ButtonProps> = ({children,rest}) => {
  return (<>
  <button {...rest} className='min-w-[7rem] w-max h-7 text-center text-gray-50 rounded-md bg-[#F3912E] hover:bg-[#F3912E70] active:bg-[#F3912E70]'>
    {children}
  </button>
  </>)
}

export default Button