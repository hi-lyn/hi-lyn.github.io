import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Button_LevelSecondary } from '../Button_LevelSecondary/Button_LevelSecondary';
import { Logo } from '../Logo/Logo';
import classes from './Navigation_DiviceDesktop.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 416:1485 */
export const Navigation_DiviceDesktop: FC<Props> = memo(function Navigation_DiviceDesktop(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.frame39}>
        <Logo />
        <div className={classes.navNavMenu}>
          <div className={classes.about}>About</div>
          <div className={classes.work}>Work</div>
          <div className={classes.contact}>Contact</div>
        </div>
        <Button_LevelSecondary
          text={{
            text: <div className={classes.text}>Dowload CV</div>,
          }}
        />
      </div>
    </div>
  );
});
