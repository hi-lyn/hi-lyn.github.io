import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './BiLinkedin.module.css';
import { GroupIcon } from './GroupIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 5:294 */
export const BiLinkedin: FC<Props> = memo(function BiLinkedin(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.group}>
        <GroupIcon className={classes.icon} />
      </div>
    </div>
  );
});
