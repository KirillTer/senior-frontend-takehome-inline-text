/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {FC} from 'react';

import { useCont } from "../hooks/ContextHook";
import { useThottle } from '../hooks/ThottleHook'

import HelpIcon from '../assets/svg/Help icon.svg';
import ComposeLogo from '../assets/svg/logo_compose.png';

export const InputComponent: FC = () => {
  const { inputValue, setInputValue } = useCont();

  const search = (value: string) => {
    console.log(value);
    setInputValue(value)
  };

  const thottledSearch = useThottle(search, 200);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    thottledSearch(e.target.value);
  };

  return <div className='InputComponent'>
    <img className='InputComponent__ImageLogo' src={ComposeLogo} alt='logo'/>
    <span className='InputComponent__Text'>Write a<input className='InputComponent__Input' value={inputValue} onChange={handleChange}/></span>
    <img className='InputComponent__ImageHelp' src={HelpIcon} alt='help'/>
  </div>;
};
