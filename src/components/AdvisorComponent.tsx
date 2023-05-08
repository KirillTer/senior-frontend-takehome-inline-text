/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {FC} from 'react';
import {AdvisorItem} from './AdvisorItem'

interface ListOption {
  text: string;
  iconUri: string;
}

export interface AdvisorComponentProps {
  listOptions: ListOption[]
}

export const AdvisorComponent: FC<AdvisorComponentProps> = ({listOptions}) => {

  return (
    <div className='AdvisorComponent'>
      {listOptions.length > 0 && <div className='AdvisorComponent__Header'>Type anything or...</div>}
      {listOptions.length > 0 && listOptions.map(item => (
        <AdvisorItem key={item.text} item={item}/>
      ))}
    </div>
  );
};
