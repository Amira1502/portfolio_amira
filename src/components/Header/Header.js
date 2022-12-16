import Link from 'next/link';
import React from 'react';
import { AiFillGithub,  AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';
import { FaTelegram } from "react-icons/fa";
import { DiTerminal } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:'black', fontSize:'18px'}}>
        <DiTerminal/><span>Portfolio</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>        
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/Amira1502" target="_blank">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/amira-nasri-135582112/" target="_blank" >
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://t.me/amiranasri" target="_blank">
          <FaTelegram size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.instagram.com/amiranasri88/" target="_blank">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
      </Div3>
    </Container>
);

export default Header;