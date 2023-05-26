import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { KlynIcon } from './KlynIcon.js';
import classes from './Logo.module.css';

interface Props {
  className?: string;
}
/* @figmaId 416:1255 */
export const Logo: FC<Props> = memo(function Logo(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.kLyn}>
        <KlynIcon className={classes.icon} />
      </div>
    </div>
  );
});
