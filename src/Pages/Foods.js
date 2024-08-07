import React from 'react'
import { useState } from 'react';
import FoodsItems from '../components/FoodsItems'
import Menu from '../components/Menu';

export default function Foods() {
  const [visibleSection, setVisibleSection] = useState('rice');

  const handleShowSection = (section) => {
    setVisibleSection(section);
  };
  return (
    <div className='row'>
      <div className='row d-flex justify-cotent-between'>
        <div className="col-4">
          <Menu handleShowSection={handleShowSection} />
        </div>
        <div className="col-8">
          <FoodsItems visibleSection={visibleSection} />
        </div>
      </div>
    </div>
  )
}
