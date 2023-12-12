import React from 'react'
import useUser from '../features/auth/useUser'

const Owner = () => {

  const {data} = useUser()

  console.log(data)

  return (
    <div className='h-screen'>Owner</div>
  )
}

export default Owner