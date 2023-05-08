/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {FC} from 'react';

export const ProTipComponent: FC = () => {
  return (
    <div className='ProTipComponent'>
      <div className='ProTipComponent__Badge'>Pro Tip</div>
      <div className='ProTipComponent__Text'>
        Make sure to be specific in your prompt. The more detail you give, the better the results will be!
      </div>
      <div className='ProTipComponent__Command'>Hit enter to submit your prompt</div>
    </div>
  );
};
