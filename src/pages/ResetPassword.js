import React from 'react'
import CustomInput from '../components/CustomInput'

function ResetPassword() {
  return (
    <div className='py-5' style={{ background: "linear-gradient(#ffd333 30%, #fff 0%)" }}>
      <div className='w-25 my-5 bg-white rounded-3 px-3 py-5 mx-auto border border-infor'>
        <h3 className='text-center'>Reset Password</h3>
        <p className='text-center'>Change to your new password</p>
        <form action="">
          <CustomInput type="password" label="New password" id="pass" />
          <CustomInput type="password" label="Confirm password" id="confirmpass" />
        </form>
        <button
          type="submit"
          className="border-0 px-3 py-2 rounded-1 text-white w-100"
          style={{background: '#ffd333'}}
          >
          Reset
        </button>
      </div>
      <div class="d-grid gap-2">
      </div>
    </div >
  )
}

export default ResetPassword