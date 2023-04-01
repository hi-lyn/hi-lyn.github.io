import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './TabActive.module.css';

interface Props {
  className?: string;
  text?: {
    sobre?: ReactNode;
  };
}
/* @figmaId 5:269 */
export const TabActive: FC<Props> = memo(function TabActive(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      {props.text?.sobre != null ? props.text?.sobre : <div className={classes.sobre}>Sobre</div>}
      <div className={classes.rectangle11}></div>
    </div>
  );
});
