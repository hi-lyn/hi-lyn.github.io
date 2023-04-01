import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { TabActive } from '../TabActive/TabActive';
import { TabDefault } from '../TabDefault/TabDefault';
import classes from './Header.module.css';

interface Props {
  className?: string;
}
/* @figmaId 5:274 */
export const Header: FC<Props> = memo(function Header(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.nav}>
        <TabActive
          text={{
            sobre: <div className={classes.sobre}>Home</div>,
          }}
        />
        <TabDefault
          text={{
            sobre: <div className={classes.sobre2}>About</div>,
          }}
        />
        <TabDefault
          text={{
            sobre: <div className={classes.sobre3}>Projects</div>,
          }}
        />
        <TabDefault
          text={{
            sobre: <div className={classes.sobre4}>Contacts</div>,
          }}
        />
      </div>
    </div>
  );
});
