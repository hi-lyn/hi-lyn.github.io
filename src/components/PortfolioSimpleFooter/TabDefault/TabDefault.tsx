import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './TabDefault.module.css';

interface Props {
  className?: string;
  text?: {
    sobre?: ReactNode;
  };
}
/* @figmaId 5:272 */
export const TabDefault: FC<Props> = memo(function TabDefault(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      {props.text?.sobre != null ? props.text?.sobre : <div className={classes.sobre}>Sobre</div>}
    </div>
  );
});
