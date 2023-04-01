import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './ProjectNfo.module.css';

interface Props {
  className?: string;
  classes?: {
    frame3350?: string;
  };
  text?: {
    text?: ReactNode;
    text2?: ReactNode;
    text3?: ReactNode;
  };
}
/* @figmaId 2:2 */
export const ProjectNfo: FC<Props> = memo(function ProjectNfo(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={`${props.classes?.frame3350 || ''} ${classes.frame3350}`}>
        {props.text?.text != null ? (
          props.text?.text
        ) : (
          <div className={classes.text}>
            <a href='https://beincom.org/' target='_blank' rel='noreferrer' className={classes.textBlock}>
              Beincom (BIC)
            </a>
          </div>
        )}
        {props.text?.text2 != null ? (
          props.text?.text2
        ) : (
          <div className={classes.text2}>
            Beincom is a social community network powered by blockchain. It is a place for those who value meaningful
            engagement and long to build their community. No forced ads, no data control; you are responsible for your
            digital footprints
          </div>
        )}
        <div className={classes.botaoSecudario}>
          {props.text?.text3 != null ? props.text?.text3 : <div className={classes.text3}>View Project</div>}
        </div>
      </div>
    </div>
  );
});
