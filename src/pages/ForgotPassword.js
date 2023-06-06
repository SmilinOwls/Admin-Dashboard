import React from 'react'
import CustomInput from '../components/CustomInput'

function ForgotPassword() {
  return (
    <div className='py-5' style={{ background: "linear-gradient(#ffd333 30%, #fff 0%)" }}>
      <div className='w-25 my-5 bg-white rounded-3 px-3 py-5 mx-auto border border-infor'>
        <h3 className='text-center'>Forgot Password</h3>
        <p className='text-center'>Gain reset password via your registered email</p>
        <form action="">
          <CustomInput type="text" label="Email address" id="email" />
        </form>
        <button
          type="submit"
          className="border-0 px-3 py-2 rounded-1 text-white w-100"
          style={{ background: '#ffd333' }}
        >
          Send
        </button>
      </div>
    </div >
  )
}

export default ForgotPassword