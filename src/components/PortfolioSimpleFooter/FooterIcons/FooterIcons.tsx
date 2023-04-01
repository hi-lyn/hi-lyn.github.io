import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { BiEnvelopeFill } from '../BiEnvelopeFill/BiEnvelopeFill';
import { BiLinkedin } from '../BiLinkedin/BiLinkedin';
import { PhInstagramLogoFill } from '../PhInstagramLogoFill/PhInstagramLogoFill';
import classes from './FooterIcons.module.css';

interface Props {
  className?: string;
}
/* @figmaId 5:302 */
export const FooterIcons: FC<Props> = memo(function FooterIcons(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.icons}>
        <PhInstagramLogoFill />
        <BiLinkedin />
        <BiEnvelopeFill />
      </div>
      <div className={classes.ntklyn2023}>ntklyn @2023</div>
    </div>
  );
});
