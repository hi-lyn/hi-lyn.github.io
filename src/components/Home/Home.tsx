import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { BiEnvelopeFill } from './BiEnvelopeFill/BiEnvelopeFill';
import { BiLinkedin } from './BiLinkedin/BiLinkedin';
import { Button_StateDefault } from './Button_StateDefault/Button_StateDefault';
import { GroupIcon2 } from './GroupIcon2.js';
import { GroupIcon } from './GroupIcon.js';
import classes from './Home.module.css';
import { ProjectCard_StateDefault } from './ProjectCard_StateDefault/ProjectCard_StateDefault';

interface Props {
  className?: string;
}
/* @figmaId 21:1541 */
export const Home: FC<Props> = memo(function Home(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.modernAndCreativePortfolioPres}></div>
      <div className={classes.intro}>
        <div className={classes.frame3355}>
          <div className={classes.pexelsArtemBeliaikin1832323Rem5}></div>
          <div className={classes._2YearsInUIUXDesigner1YearsInGr}>
            <div className={classes.textBlock}>2+ years in UI/UX Designer &amp; </div>
            <div className={classes.textBlock2}>1+ years in Graphic Designer</div>
          </div>
        </div>
        <div className={classes.content}>
          <div className={classes.title}>Hello, my name is Linh</div>
          <div className={classes.subheadline}>
            <div className={classes.text}>
              A designer who loves to make an impact. I&#39;m a self-thought designer, who is passionate about design
              and loves to create solutions for complex problems through user-centric design.{' '}
            </div>
          </div>
        </div>
        <Button_StateDefault />
        <div className={classes.footerIcons}>
          <div className={classes.cONTACT}>CONTACT:</div>
          <div className={classes.icons}>
            <div className={classes.frame3367}>
              <BiLinkedin
                className={classes.biLinkedin}
                classes={{ group: classes.group }}
                swap={{
                  group: (
                    <div className={classes.group}>
                      <GroupIcon className={classes.icon} />
                    </div>
                  ),
                }}
              />
              <div className={classes.linkedinComInNtklyn95}>
                <a
                  href='https://www.linkedin.com/in/ntklyn95/'
                  target='_blank'
                  rel='noreferrer'
                  className={classes.textBlock3}
                >
                  linkedin.com/in/ntklyn95
                </a>
              </div>
            </div>
            <div className={classes.frame3368}>
              <BiEnvelopeFill
                className={classes.biEnvelopeFill}
                classes={{ group: classes.group2 }}
                swap={{
                  group: (
                    <div className={classes.group2}>
                      <GroupIcon2 className={classes.icon2} />
                    </div>
                  ),
                }}
              />
              <div className={classes.ntklyn95GmailCom}>
                <a href='https://mail.google.com/' target='_blank' rel='noreferrer' className={classes.textBlock4}>
                  ntklyn95@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.frame3362}>
        <ProjectCard_StateDefault
          classes={{ pexelsArtemBeliaikin1832323Rem: classes.pexelsArtemBeliaikin1832323Rem }}
          text={{
            buildCommunity: <div className={classes.buildCommunity}>BIC Community</div>,
          }}
        />
        <ProjectCard_StateDefault
          classes={{ pexelsArtemBeliaikin1832323Rem: classes.pexelsArtemBeliaikin1832323Rem2 }}
          text={{
            buildCommunity: <div className={classes.buildCommunity2}>BIC Chat</div>,
          }}
        />
        <ProjectCard_StateDefault
          classes={{ pexelsArtemBeliaikin1832323Rem: classes.pexelsArtemBeliaikin1832323Rem3 }}
          text={{
            buildCommunity: <div className={classes.buildCommunity3}>Grove HR</div>,
          }}
        />
        <ProjectCard_StateDefault
          classes={{ pexelsArtemBeliaikin1832323Rem: classes.pexelsArtemBeliaikin1832323Rem4 }}
          text={{
            buildCommunity: <div className={classes.buildCommunity4}>Travelner</div>,
            webMobile: <div className={classes.webMobile}>Mobile</div>,
          }}
        />
      </div>
    </div>
  );
});
