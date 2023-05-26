import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Button_LevelPrimary } from '../Button_LevelPrimary/Button_LevelPrimary';
import { WorkCard } from '../WorkCard/WorkCard';
import { Ellipse73Icon } from './Ellipse73Icon.js';
import classes from './LatestWorkSection_PropertyDesk.module.css';

interface Props {
  className?: string;
  classes?: {
    image?: string;
    image2?: string;
    image3?: string;
    image4?: string;
    root?: string;
  };
  swap?: {
    button?: ReactNode;
  };
}
/* @figmaId 416:1267 */
export const LatestWorkSection_PropertyDesk: FC<Props> = memo(function LatestWorkSection_PropertyDesk(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.workCards}>
        <div className={classes.stripe1}>
          <div className={classes.contactInfo}>
            <div className={classes.frame42}>
              <div className={classes.frame54}>
                <div className={classes.portfolio}>Portfolio</div>
                <div className={classes.ellipse73}>
                  <Ellipse73Icon className={classes.icon} />
                </div>
              </div>
              <div className={classes.myCreativeWorksLatestProject}>
                <p className={classes.labelWrapper}>
                  <span className={classes.label}>My Creative Works Latest </span>
                  <span className={classes.label2}>Project?</span>
                </p>
              </div>
            </div>
            <div className={classes.frame47}>
              <div className={classes.iMSpecialistInUIUXDesignerMyPa}>
                I’m specialist in UI/UX Designer. My passion is designing &amp; solving problems through user experience
                and research.
              </div>
              {props.swap?.button || (
                <Button_LevelPrimary
                  text={{
                    text: <div className={classes.text}>Show More</div>,
                  }}
                />
              )}
            </div>
          </div>
          <WorkCard
            className={classes.workCard}
            classes={{ image: `${props.classes?.image || ''} ${classes.image}` }}
            text={{
              projectTitle: <div className={classes.projectTitle}>Grove HR</div>,
              uIArtDrection: <div className={classes.uIArtDrection}>UX Engineer</div>,
            }}
          />
        </div>
        <div className={classes.stripe3}>
          <WorkCard
            className={classes.workCard2}
            classes={{ image: `${props.classes?.image2 || ''} ${classes.image2}` }}
            text={{
              projectTitle: <div className={classes.projectTitle2}>Beincom Group (BIC Grorup)</div>,
              uIArtDrection: <div className={classes.uIArtDrection2}>UI/UX Designer, UX Engineer, Art drection</div>,
            }}
          />
          <WorkCard
            className={classes.workCard3}
            classes={{ image: `${props.classes?.image3 || ''} ${classes.image3}` }}
            text={{
              projectTitle: <div className={classes.projectTitle3}>Beincom Chat (BIC Chat)</div>,
              uIArtDrection: <div className={classes.uIArtDrection3}>UI/UX Designer, UX Engineer, Art drection</div>,
            }}
          />
          <WorkCard
            className={classes.workCard4}
            classes={{ image: `${props.classes?.image4 || ''} ${classes.image4}` }}
            text={{
              projectTitle: <div className={classes.projectTitle4}>Travelner</div>,
              uIArtDrection: <div className={classes.uIArtDrection4}>UI/UX Designer</div>,
            }}
          />
        </div>
      </div>
    </div>
  );
});
