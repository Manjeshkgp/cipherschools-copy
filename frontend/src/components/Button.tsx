import { FC,ButtonHTMLAttributes,forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children:React.ReactNode
}

const Button = ({children,...rest}:ButtonProps,ref:any) => {
  return (<>
  <button ref={ref} {...rest} className='min-w-[7rem] w-max h-7 text-center text-gray-50 rounded-md bg-[#F3912E] hover:bg-[#F3912E70] active:bg-[#F3912E70]'>
    {children}
  </button>
  </>)
}

export default forwardRef(Button)