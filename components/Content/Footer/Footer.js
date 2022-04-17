import React from 'react';
import { SocialMedias } from './SocialMedias';
const socialMediasData = [
  {
    id: 1,
    url: 'https://www.instagram.com/luisangel.237',
    title: 'Instagram',
    image: '/logos/social medias/Instagram.png',
  },
  {
    id: 2,
    url: 'https://t.me/luisangel_237',
    title: 'Telegram',
    image: '/logos/social medias/Telegram.png',
  },
  {
    id: 3,
    url: 'https://github.com/Luisparr14',
    title: 'GitHub',
    image: '/logos/social medias/GitHub.png',
  },
  {
    id: 4,
    url: 'https://www.linkedin.com/in/luisparr14/',
    title: 'LinkedIn',
    image: '/logos/social medias/Linkedin.png',
  },
]

export const Footer = () => (
  <footer className="footer section">
    <h2 id="contact" className="sub-title">Contacto</h2>
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
  </footer>
);