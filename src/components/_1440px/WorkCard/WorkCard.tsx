import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './WorkCard.module.css';

interface Props {
  className?: string;
  classes?: {
    image?: string;
    root?: string;
  };
  text?: {
    projectTitle?: ReactNode;
    uIArtDrection?: ReactNode;
  };
}
/* @figmaId 416:1491 */
export const WorkCard: FC<Props> = memo(function WorkCard(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.image || ''} ${classes.image}`}></div>
      <div className={classes.headlineSubhead}>
        {props.text?.projectTitle != null ? (
          props.text?.projectTitle
        ) : (
          <div className={classes.projectTitle}>Project title</div>
        )}
        {props.text?.uIArtDrection != null ? (
          props.text?.uIArtDrection
        ) : (
          <div className={classes.uIArtDrection}>UI, Art drection</div>
        )}
      </div>
    </div>
  );
});
