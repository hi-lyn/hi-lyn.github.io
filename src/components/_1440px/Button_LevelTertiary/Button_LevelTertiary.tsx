import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Button_LevelTertiary.module.css';

interface Props {
  className?: string;
  text?: {
    text?: ReactNode;
  };
}
/* @figmaId 418:2657 */
export const Button_LevelTertiary: FC<Props> = memo(function Button_LevelTertiary(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      {props.text?.text != null ? props.text?.text : <div className={classes.text}>Projects</div>}
    </div>
  );
});
