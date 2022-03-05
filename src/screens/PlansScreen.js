import React  from 'react';
import './PlansScreen.css'
function PlansScreen() {
  return <div className='plansScreen_plans'>
    <div className='plansScreen_info'>
        <h3>Premium</h3>
        <h3>4K + HDR</h3>
        <button>Subscribe</button>
        
    </div>
    <div className='plansScreen_info'>
    <h3>Basic</h3>
        <h3>720p</h3>
        <button>Subscribe</button>
    </div>
        
  </div>;
}

export default PlansScreen;
