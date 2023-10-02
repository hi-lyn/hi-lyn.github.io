import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './ProjectCard_StateDefault.module.css';

interface Props {
  className?: string;
  classes?: {
    pexelsArtemBeliaikin1832323Rem?: string;
  };
  text?: {
    buildCommunity?: ReactNode;
    webMobile?: ReactNode;
  };
}
/* @figmaId 1:266 */
export const ProjectCard_StateDefault: FC<Props> = memo(function ProjectCard_StateDefault(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.frame3366}>
        <div
          className={`${props.classes?.pexelsArtemBeliaikin1832323Rem || ''} ${classes.pexelsArtemBeliaikin1832323Rem}`}
        ></div>
      </div>
      <div className={classes.frame3356}>
        <div className={classes.pROJECT}>PROJECT</div>
        {props.text?.buildCommunity != null ? (
          props.text?.buildCommunity
        ) : (
          <div className={classes.buildCommunity}>Build community</div>
        )}
      </div>
      <div className={classes.frame3357}>
        <div className={classes.fLATFORM}>FLATFORM</div>
        {props.text?.webMobile != null ? props.text?.webMobile : <div className={classes.webMobile}>Web, Mobile</div>}
      </div>
    </div>
  );
});
