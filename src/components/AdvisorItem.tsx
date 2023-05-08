/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {FC} from 'react';

export interface AdvisorItemProps {
  item: {
    text: string;
    iconUri: string;
  }
}

export const AdvisorItem: FC<AdvisorItemProps> = ({item}) => {
  return (
    <div className='AdvisorItem'>
      <img className='AdvisorItem__Image' src={item.iconUri} alt='logo'/>
      <span className='AdvisorComponent__Header'>{item.text}</span>
    </div>
  );
};
