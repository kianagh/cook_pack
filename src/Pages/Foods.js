import React from 'react'
import FoodsItems from '../components/FoodsItems'
import Menu from '../components/Menu'

export default function Foods() {
  return (
    <div className='row'>
      <div className='row d-flex justify-cotent-between'>
        <div className="col-4">
          <Menu />
        </div>
        <div className="col-8">
          <FoodsItems />
        </div>
      </div>
    </div>
  )
}
