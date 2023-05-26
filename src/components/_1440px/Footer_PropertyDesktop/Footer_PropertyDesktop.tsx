import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Button_LevelPrimary } from '../Button_LevelPrimary/Button_LevelPrimary';
import { TextInputDesktop } from '../TextInputDesktop/TextInputDesktop';
import { BehanceIcon } from './BehanceIcon.js';
import { Ellipse73Icon } from './Ellipse73Icon.js';
import { FacebookIcon } from './FacebookIcon.js';
import classes from './Footer_PropertyDesktop.module.css';
import { NstagramIcon } from './NstagramIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    letSDiscussYourProject?: ReactNode;
  };
}
/* @figmaId 416:1294 */
export const Footer_PropertyDesktop: FC<Props> = memo(function Footer_PropertyDesktop(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.footerInfo}>
        <div className={classes.footerInfo2}>
          <div className={classes.contactInfo}>
            <div className={classes.footerMessage}>
              <div className={classes.frame42}>
                <div className={classes.frame59}>
                  <div className={classes.contact}>Contact</div>
                  <div className={classes.ellipse73}>
                    <Ellipse73Icon className={classes.icon} />
                  </div>
                </div>
                {props.text?.letSDiscussYourProject != null ? (
                  props.text?.letSDiscussYourProject
                ) : (
                  <div className={classes.letSDiscussYourProject}>
                    <p className={classes.labelWrapper}>
                      <span className={classes.label}>Let’s Discuss Your </span>
                      <span className={classes.label2}>Project</span>
                    </p>
                  </div>
                )}
              </div>
              <div className={classes.letSMakeSomethingNewDifferentA}>
                Let’s make something new, different and more meaningful or make thing more visual or conceptual
              </div>
            </div>
            <div className={classes.frame58}>
              <div className={classes.facebook}>
                <FacebookIcon className={classes.icon2} />
              </div>
              <div className={classes.nstagram}>
                <NstagramIcon className={classes.icon3} />
              </div>
              <div className={classes.behance}>
                <BehanceIcon className={classes.icon4} />
              </div>
            </div>
          </div>
          <div className={classes.textFields}>
            <div className={classes.textFields2}>
              <TextInputDesktop
                text={{
                  writeSomething: <div className={classes.writeSomething}>Name</div>,
                }}
              />
              <TextInputDesktop
                text={{
                  writeSomething: <div className={classes.writeSomething2}>Email</div>,
                }}
              />
              <TextInputDesktop
                text={{
                  writeSomething: (
                    <div className={classes.writeSomething3}>
                      <div className={classes.textBlock}>Type your message here</div>
                      <div className={classes.textBlock2}>
                        <p></p>
                      </div>
                      <div className={classes.textBlock3}>
                        <p></p>
                      </div>
                      <div className={classes.textBlock4}>
                        <p></p>
                      </div>
                      <div className={classes.textBlock5}>
                        <p></p>
                      </div>
                      <div className={classes.textBlock6}>
                        <p></p>
                      </div>
                      <div className={classes.textBlock7}>
                        <p></p>
                      </div>
                    </div>
                  ),
                }}
              />
            </div>
            <Button_LevelPrimary
              text={{
                text: <div className={classes.text}>Submit</div>,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
});
