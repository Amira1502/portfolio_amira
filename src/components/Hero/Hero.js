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
        A passionate Full Stack Web Developer 🚀 Enthusiastic about blockchain and web3 industry, having an experience of building Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks.        </SectionText>
        <Link href="https://drive.google.com/file/d/1iC-3k6FYDfy3QN_VgPb8crGQ1aN68lu-/view?usp=sharing"> 
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
        <Button>See my Resume</Button>
        </a>
        </Link>
      </LeftSection>
    </Section>
  </>
);

export default Hero;