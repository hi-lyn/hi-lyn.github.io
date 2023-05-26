import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Button_LevelPrimary } from '../Button_LevelPrimary/Button_LevelPrimary';
import { ImagePlaceholder_NameDesignPro } from '../ImagePlaceholder_NameDesignPro/ImagePlaceholder_NameDesignPro';
import { ImagePlaceholder_NameUXResearc } from '../ImagePlaceholder_NameUXResearc/ImagePlaceholder_NameUXResearc';
import { Skill } from '../Skill/Skill';
import { Ellipse73Icon } from './Ellipse73Icon.js';
import classes from './SkillsSection_PropertyDesktop.module.css';
import { VectorStrokeIcon2 } from './VectorStrokeIcon2.js';
import { VectorStrokeIcon3 } from './VectorStrokeIcon3.js';
import { VectorStrokeIcon4 } from './VectorStrokeIcon4.js';
import { VectorStrokeIcon } from './VectorStrokeIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    button?: ReactNode;
  };
}
/* @figmaId 416:1354 */
export const SkillsSection_PropertyDesktop: FC<Props> = memo(function SkillsSection_PropertyDesktop(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.contactInfo}>
        <div className={classes.footerMessage}>
          <div className={classes.frame42}>
            <div className={classes.frame53}>
              <div className={classes.hireMe}>Hire me</div>
              <div className={classes.ellipse73}>
                <Ellipse73Icon className={classes.icon5} />
              </div>
            </div>
            <div className={classes.whyHireMeForYourNextProject}>
              <p className={classes.labelWrapper}>
                <span className={classes.label}>Why Hire Me For Your Next </span>
                <span className={classes.label2}>Project?</span>
              </p>
            </div>
          </div>
          <div className={classes.iMSpecialistInUIUXDesignerMyPa}>
            I’m specialist in UI/UX Designer. My passion is designing &amp; solving problems through user experience and
            research.
          </div>
        </div>
        {props.swap?.button || (
          <Button_LevelPrimary
            text={{
              text: <div className={classes.text}>Hire Me</div>,
            }}
          />
        )}
      </div>
      <div className={classes.frame46}>
        <div className={classes.frame45}>
          <div className={classes.skill2}>
            <Skill />
          </div>
          <div className={classes.skill3}>
            <Skill
              swap={{
                imagePlaceholder: (
                  <ImagePlaceholder_NameUXResearc
                    className={classes.imagePlaceholder}
                    classes={{ vectorStroke: classes.vectorStroke }}
                    swap={{
                      vectorStroke: <VectorStrokeIcon className={classes.icon} />,
                      vectorStroke2: (
                        <div className={classes.vectorStroke}>
                          <VectorStrokeIcon2 className={classes.icon2} />
                        </div>
                      ),
                    }}
                  />
                ),
              }}
              text={{
                visualDesign: <div className={classes.visualDesign}>UX Research</div>,
                createUserInterfaceDesignWithU: (
                  <div className={classes.createUserInterfaceDesignWithU}>
                    Create digital user products with updated ideas
                  </div>
                ),
              }}
            />
          </div>
        </div>
        <div className={classes.skill4}>
          <Skill
            className={classes.skill}
            swap={{
              imagePlaceholder: (
                <ImagePlaceholder_NameDesignPro
                  className={classes.imagePlaceholder2}
                  swap={{
                    vectorStroke: <VectorStrokeIcon3 className={classes.icon3} />,
                    vectorStroke2: <VectorStrokeIcon4 className={classes.icon4} />,
                  }}
                />
              ),
            }}
            text={{
              visualDesign: <div className={classes.visualDesign2}>Design Prototype</div>,
              createUserInterfaceDesignWithU: (
                <div className={classes.createUserInterfaceDesignWithU2}>
                  Create advance design prototype with Figma apps.
                </div>
              ),
            }}
          />
        </div>
      </div>
    </div>
  );
});
