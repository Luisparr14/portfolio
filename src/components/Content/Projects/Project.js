import React from 'react';
import { Button } from '../../Commons/Button';

export const Project = ({ image, title, uri, description, repo, typeProject }) => (
  <React.Fragment>
    <div className={`project-${typeProject}`}>
      <h4 className="project-title">{title}</h4>
      <div className="img-container">
        <img alt={title} src={image} className="image-project" />
        <div className="overlay">
          <div className="overlay-content">
            <p>{description}</p>
            <footer>
              {uri && <Button url={uri} text="View page" />}
              <Button url={repo} text="View repo" />
            </footer>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
)