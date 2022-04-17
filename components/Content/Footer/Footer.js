import React from 'react';
import { SocialMedias } from './SocialMedias';
export const Footer = ({ data = [] }) => {
  return (
    <footer className="footer section">
      <div id="contact"></div>
      <h2 className="sub-title">Contacto</h2>
      <div className="social-medias">
        {
          data.map((social) => {
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
  )
};