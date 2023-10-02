import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { ArrowDownToLine_TypeFilled } from '../ArrowDownToLine_TypeFilled/ArrowDownToLine_TypeFilled';
import { Placeholder_TypeFilled } from '../Placeholder_TypeFilled/Placeholder_TypeFilled';
import classes from './Button_StateDefault.module.css';

interface Props {
  className?: string;
}
/* @figmaId 1:1954 */
export const Button_StateDefault: FC<Props> = memo(function Button_StateDefault(props = {}) {
  return (
    <button className={`${resets.storybrainResets} ${classes.root}`}>
      <ArrowDownToLine_TypeFilled />
      <div className={classes.container}>
        <div className={classes.label}>Download CV</div>
      </div>
    </button>
  );
});
