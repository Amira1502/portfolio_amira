import React from 'react';
import Link from 'next/link';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
        Hi all, <br />
           I'm Amira
        </SectionTitle>
        <SectionText>
        A passionate Full Stack Web Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks.        </SectionText>
        <Link href="https://docs.google.com/document/d/1-f_sXh1083f8bVzeOT0UUb61zG7M0xj_/edit?usp=sharing&ouid=116965491241867474436&rtpof=true&sd=true"> 
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
        <Button>See my Resume</Button>
        </a>
        </Link>
      </LeftSection>
    </Section>
  </>
);

export default Hero;