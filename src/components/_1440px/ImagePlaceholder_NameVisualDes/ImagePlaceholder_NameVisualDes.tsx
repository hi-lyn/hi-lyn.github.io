import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './ImagePlaceholder_NameVisualDes.module.css';
import { VectorStrokeIcon2 } from './VectorStrokeIcon2.js';
import { VectorStrokeIcon } from './VectorStrokeIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 418:3545 */
export const ImagePlaceholder_NameVisualDes: FC<Props> = memo(function ImagePlaceholder_NameVisualDes(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.vectorStroke}>
        <VectorStrokeIcon className={classes.icon} />
      </div>
      <div className={classes.vectorStroke2}>
        <VectorStrokeIcon2 className={classes.icon2} />
      </div>
    </div>
  );
});
