/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {FC} from 'react';

import ChevronDown from '../assets/svg/chevron-down.svg';
import ZapFast from '../assets/svg/zap-fast.svg';

export const AdvancedOptionsComponent: FC = () => {
  return (
    <div className='AdvancedOptionsComponent'>
      <img className='AdvancedOptionsComponent__ImageLogo' src={ZapFast} alt='logo'/>
      <span className='AdvancedOptionsComponent__Text'>Advanced Options</span>
      <img className='AdvancedOptionsComponent__Chevron' src={ChevronDown} alt='chevron'/>
    </div>
  )
};
