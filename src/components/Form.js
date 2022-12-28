import React from 'react'

export default function Form({
  actionLink,
  inputName,
  inputTel,
  inputEmail,
  inputMes,
  submitValue,
}){
  return(
    <form className='my-4 w-[200px] flex flex-col m-auto space-y-2' action={actionLink}>
    {inputName && <input type='text' className='p-2 rounded-lg form-input drop-shadow transition-all ' placeHolder='Tên'/>}
    {inputTel && <input type='tel' className='p-2 rounded-lg form-input drop-shadow transition-all ' placeHolder='09xxxxxxxx'/>}
    {inputEmail && <input type='email' className='p-2 rounded-lg form-input drop-shadow transition-all ' placeHolder='Email'/>}
    {inputMes && <textarea type='text' className='h-20 p-2 rounded-lg resize-none form-textarea drop-shadow transition-all ' placeHolder='Tin nhắn'/>}
    {submitValue && <input type='submit' className='w-[40px] stablet:w-[60px] p-2 m-auto text-white bg-emerald-500 border border-solid rounded-lg form-input drop-shadow transition-all ' value={submitValue}/>}
    </form>
  )
}
