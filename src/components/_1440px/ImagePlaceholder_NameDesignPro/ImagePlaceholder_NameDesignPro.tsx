import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './ImagePlaceholder_NameDesignPro.module.css';
import { VectorStrokeIcon2 } from './VectorStrokeIcon2.js';
import { VectorStrokeIcon } from './VectorStrokeIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    vectorStroke?: ReactNode;
    vectorStroke2?: ReactNode;
  };
}
/* @figmaId 418:3543 */
export const ImagePlaceholder_NameDesignPro: FC<Props> = memo(function ImagePlaceholder_NameDesignPro(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.vectorStroke}>
        {props.swap?.vectorStroke || <VectorStrokeIcon className={classes.icon} />}
      </div>
      <div className={classes.vectorStroke2}>
        {props.swap?.vectorStroke2 || <VectorStrokeIcon2 className={classes.icon2} />}
      </div>
    </div>
  );
});
