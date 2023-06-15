import React from 'react'
import { Link } from 'react-router-dom'
import CustomInput from '../components/CustomInput'

function Login() {
  return (
    <div className='py-5' style={{ background: "linear-gradient(#ffd333 30%, #fff 0%)" }}>
      <div className='w-25 my-5 bg-white rounded-3 px-3 py-5 mx-auto border border-infor'>
        <h3 className='text-center'>Sign in</h3>
        <p className='text-center'>Welcome to visit our hotel management system</p>
        <form action="">
          <CustomInput type="text" label="Email address" id="email" />
          <CustomInput type="password" label="Password" id="pass" />
        </form>
        <div className='mb-3 d-flex justify-content-between'>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="rememberme" style={{cursor: 'pointer'}}/>
            <label class="form-check-label" htmlFor="rememberme">
              Remember me
            </label>
          </div>
          <Link className='text-center' to="/forgot-password">Forgot Password?</Link>
        </div>
        <Link
          to="/api/admin"
          type="submit"
          className="border-0 px-3 py-2 rounded-1 text-white w-100 text-center text-decoration-none fs-5"
          style={{background: '#ffd333'}}
          >
          Login
        </Link>
      </div>
    </div >
  )
}

export default Login