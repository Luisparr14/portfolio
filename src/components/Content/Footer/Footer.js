import React from 'react';
import { SocialMedias } from './SocialMedias';
import GitHub from '../../../assets/logos/social medias/GitHub.png'
import Telegram from '../../../assets/logos/social medias/Telegram.png'
import Instagram from '../../../assets/logos/social medias/Instagram.png'
import LinkedIn from '../../../assets/logos/social medias/Linkedin.png'
const socialMediasData = [
  {
    id: 1,
    url: 'https://www.instagram.com/luisangel.237',
    title: 'Instagram',
    image: Instagram
  },
  {
    id: 2,
    url: 'https://t.me/luisangel_237',
    title: 'Telegram',
    image: Telegram
  },
  {
    id: 3,
    url: 'https://github.com/Luisparr14',
    title: 'GitHub',
    image: GitHub
  },
  {
    id: 4,
    url: 'https://www.linkedin.com/in/luisparr14/',
    title: 'LinkedIn',
    image: LinkedIn
  },
]

export const Footer = () => (
  <div className="footer">
    <div className="social-medias">
      {
        socialMediasData.map((social) => {
          return <SocialMedias
            key={social.id}
            image={social.image}
            title={social.title}
            url={social.url}
          />
        })
      }
    </div>
  </div>
);