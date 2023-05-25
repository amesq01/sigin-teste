import { useState } from 'react'

import './App.css'
import { Settings, Boxes } from 'lucide-react'

function App() {

  return (
    <div className='container'>
      <div className="content">
        <div className="left">

        </div>
        <div className="right">
          <div className='icon' >

            <Settings color='gray' size={16} />

          </div>

          <form  >
            <div className="logo">
              <Boxes />
              <span>Sign in</span>
            </div>

            <input type="email" placeholder='Email Address*' />
            <input type="password" placeholder='Password*' />
            <small>Forgot password</small>
            <button>Sign in</button>

            <p>Don't have an account? <a> Sign Up</a> </p>

          </form>
        </div>
      </div>
    </div>
  )
}

export default App
