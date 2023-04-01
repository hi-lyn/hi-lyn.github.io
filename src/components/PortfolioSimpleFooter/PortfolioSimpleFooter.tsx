import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { ButtonPrimary } from './ButtonPrimary/ButtonPrimary';
import { ButtonSecondary } from './ButtonSecondary/ButtonSecondary';
import { FooterIcons } from './FooterIcons/FooterIcons';
import { Header } from './Header/Header';
import classes from './PortfolioSimpleFooter.module.css';
import { ProjectNfo } from './ProjectNfo/ProjectNfo';
import { YellowBgIcon } from './YellowBgIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 1:23 */
export const PortfolioSimpleFooter: FC<Props> = memo(function PortfolioSimpleFooter(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.image}>
        <div className={classes.yellowBg}>
          <YellowBgIcon className={classes.icon} />
        </div>
        <div className={classes.beauty_1674868241050}></div>
      </div>
      <Header />
      <div className={classes.projects}>
        <div className={classes.frame3351}>
          <div className={classes.text8}>Projects</div>
          <div className={classes.rectangle19}></div>
        </div>
        <div className={classes.project1}>
          <ProjectNfo />
          <div className={classes.frame3353}>
            <div className={classes.image5}></div>
            <div className={classes.image9}></div>
            <div className={classes.bICAPP1}></div>
          </div>
        </div>
        <div className={classes.project2}>
          <div className={classes.frame3352}>
            <div className={classes.image6}></div>
            <div className={classes.image7}></div>
          </div>
          <ProjectNfo
            classes={{ frame3350: classes.frame3350 }}
            text={{
              text: (
                <div className={classes.text}>
                  <a href='https://www.grovehr.com/' target='_blank' rel='noreferrer' className={classes.textBlock}>
                    Grove HR
                  </a>
                </div>
              ),
              text2: (
                <div className={classes.text2}>
                  <div className={classes.textBlock2}>
                    Grove HR is a human resource management system that helps companies win the hearts and minds of
                    their employees. A workforce that is more agile, mobile and social.
                  </div>
                  <div className={classes.textBlock3}>
                    <p className={classes.labelWrapper}>
                      <span className={classes.label}>Download app: </span>
                      <a
                        className={classes.label2}
                        href='https://play.google.com/store/apps/details?id=com.groveone&hl=en_US'
                        target='_blank'
                        rel='noreferrer'
                      >
                        Android
                      </a>
                      <span className={classes.label3}> </span>
                      <span className={classes.label4}>|</span>
                      <span className={classes.label5}> </span>
                      <a
                        className={classes.label6}
                        href='https://apps.apple.com/us/app/grovehr/id1485823775?l=vi'
                        target='_blank'
                        rel='noreferrer'
                      >
                        iOs
                      </a>
                    </p>
                  </div>
                </div>
              ),
              text3: <div className={classes.text3}>View Project</div>,
            }}
          />
        </div>
        <div className={classes.project3}>
          <ProjectNfo
            classes={{ frame3350: classes.frame33502 }}
            text={{
              text: (
                <div className={classes.text4}>
                  <a
                    href='https://www.travelner.com/vi-vn'
                    target='_blank'
                    rel='noreferrer'
                    className={classes.textBlock4}
                  >
                    Travelner
                  </a>
                </div>
              ),
              text2: (
                <div className={classes.text5}>
                  <div className={classes.textBlock5}>
                    Finding good deals for your next trip? Look no further because Travelner app has everything you
                    need! From flight tickets, hotels, to tours and transportation, you can plan your whole trip down to
                    every detail just with our app.
                  </div>
                  <div className={classes.textBlock6}>
                    <p className={classes.labelWrapper2}>
                      <span className={classes.label7}>Download app: </span>
                      <a
                        className={classes.label8}
                        href='https://play.google.com/store/apps/details?id=com.travelner'
                        target='_blank'
                        rel='noreferrer'
                      >
                        Android
                      </a>
                      <span className={classes.label9}> </span>
                      <span className={classes.label10}>|</span>
                      <span className={classes.label11}> </span>
                      <a
                        className={classes.label12}
                        href='https://apps.apple.com/vn/app/travelner-top-travel-deals/id1575197501?l=vi'
                        target='_blank'
                        rel='noreferrer'
                      >
                        iOs
                      </a>
                    </p>
                  </div>
                </div>
              ),
              text3: <div className={classes.text6}>View Project</div>,
            }}
          />
          <div className={classes.image2}></div>
        </div>
      </div>
      <div className={classes.intro}>
        <div className={classes.uIUXDesigner}>UI/UX Designer</div>
        <div className={classes.content}>
          <div className={classes.title}>Hello, my name is Linh Nguyen</div>
          <div className={classes.subheadline}>
            <div className={classes.text9}>
              A designer who loves to make an impact. I&#39;m a self-thought designer, who is passionate about design
              and loves to create solutions for complex problems through user-centric design.{' '}
            </div>
          </div>
          <div className={classes.buttons}>
            <ButtonPrimary />
            <ButtonSecondary
              className={classes.buttonSecondary}
              text={{
                text: (
                  <div className={classes.text7}>
                    <a
                      href='https://www.linkedin.com/in/ntklyn95/'
                      target='_blank'
                      rel='noreferrer'
                      className={classes.textBlock7}
                    >
                      LinkedIn
                    </a>
                  </div>
                ),
              }}
            />
          </div>
        </div>
      </div>
      <FooterIcons />
    </div>
  );
});
