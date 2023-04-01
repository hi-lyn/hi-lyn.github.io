import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './ButtonPrimary.module.css';

interface Props {
  className?: string;
}
/* @figmaId 5:263 */
export const ButtonPrimary: FC<Props> = memo(function ButtonPrimary(props = {}) {
  return (
    <button className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.text}>Projects</div>
    </button>
  );
});
