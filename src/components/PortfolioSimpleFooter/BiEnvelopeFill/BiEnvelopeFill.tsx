import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './BiEnvelopeFill.module.css';
import { GroupIcon } from './GroupIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 5:295 */
export const BiEnvelopeFill: FC<Props> = memo(function BiEnvelopeFill(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.group}>
        <GroupIcon className={classes.icon} />
      </div>
    </div>
  );
});
