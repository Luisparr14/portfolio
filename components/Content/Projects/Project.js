import Image from 'next/image';
import React from 'react';
import { Button } from '../../Commons/Button';

export const Project = ({ image, title, uri, description, repo, typeProject }) => (
  <>
    <div className={`project-${typeProject}`}>    
      <h4 className="project-title">{title}</h4>
      <div className="img-container">
        {typeProject === 'desktop' ? (
          <Image src={image} alt={title} className="image-project" style={{zIndex: 0}} width={600} height={400} objectFit="contain" />
        ): (
          <Image src={image} alt={title} className="image-project" style={{zIndex: 0}} width={400} height={700} objectFit="contain" />
        )}
        <div className="overlay">
          <div className="overlay-content">
            <p>{description}</p>
            <footer className={`buttons-${typeProject}`}>
              {uri && <Button url={uri} text="View page" />}
              {repo && <Button url={repo} text="View repo" />}
            </footer>
          </div>
        </div>
      </div>
    </div>
  </>
)