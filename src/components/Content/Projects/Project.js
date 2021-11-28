import React from 'react';
import { Button } from '../../Commons/Button';

export const Project = ({ image, title, uri, description, repo }) => (
  <React.Fragment>
    <div className="project">
      <h4 className="project-title">{title}</h4>
      <div className="img-container">
        <img alt={title} src={image} className="image-project" />
        <div className="overlay">
          <div className="overlay-content">
            <p>{description}</p>
            <div>
              {uri && <Button url={uri} text="View page" />}
              <Button url={repo} text="View repo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
)