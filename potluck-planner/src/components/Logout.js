import React from 'react'

export default function Logout() {

  const onClick = () => {
    window.localStorage.removeItem('token')
    // window.Location('/login')
  }

  return (
    <button onClick={ onClick }>
      Logout
    </button>
  )
}
