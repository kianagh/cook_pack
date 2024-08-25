import React from 'react'
import { useState } from 'react';
import FoodsItems from '../components/FoodsItems'
import Menu from '../components/Menu';
import '../components/menu.css'
export default function Foods() {
  const [visibleSection, setVisibleSection] = useState('rice');

  const handleShowSection = (section) => {
    setVisibleSection(section);
  };
  return (
    <div className=' p-0 '>
      <div className='row '>
        <div className="col-4 rightToggle px-0 m-0">
          <Menu handleShowSection={handleShowSection} className="px-0"/>
        </div>
        <div className="col-8 visible pt-2">
          <FoodsItems visibleSection={visibleSection} className="px-0" />
        </div>
      </div>
    </div>
  )
}
