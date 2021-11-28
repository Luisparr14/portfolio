export const SocialMedias = ({ title, image, url }) => (
  <a href={url} target="_blank" rel="noreferrer noopener">
    <img alt={title} src={image} className="icon-social-media" />
  </a>
)