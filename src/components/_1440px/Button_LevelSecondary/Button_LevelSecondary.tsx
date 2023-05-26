import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Button_LevelSecondary.module.css';

interface Props {
  className?: string;
  text?: {
    text?: ReactNode;
  };
}
/* @figmaId 418:2557 */
export const Button_LevelSecondary: FC<Props> = memo(function Button_LevelSecondary(props = {}) {
  return (
    <button className={`${resets.storybrainResets} ${classes.root}`}>
      {props.text?.text != null ? props.text?.text : <div className={classes.text}>Projects</div>}
    </button>
  );
});
