import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './LogosSection_PropertyDesktop.module.css';

interface Props {
  className?: string;
  classes?: {
    image210?: string;
    image212?: string;
    image2102?: string;
    image214?: string;
    image211?: string;
    image213?: string;
    root?: string;
  };
}
/* @figmaId 416:1441 */
export const LogosSection_PropertyDesktop: FC<Props> = memo(function LogosSection_PropertyDesktop(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.logos}>
        <div className={classes.frame43}>
          <div className={`${props.classes?.image210 || ''} ${classes.image210}`}></div>
          <div className={`${props.classes?.image212 || ''} ${classes.image212}`}></div>
        </div>
        <div className={classes.frame44}>
          <div className={`${props.classes?.image2102 || ''} ${classes.image2102}`}></div>
          <div className={`${props.classes?.image214 || ''} ${classes.image214}`}></div>
        </div>
        <div className={`${props.classes?.image211 || ''} ${classes.image211}`}></div>
        <div className={`${props.classes?.image213 || ''} ${classes.image213}`}></div>
      </div>
    </div>
  );
});
