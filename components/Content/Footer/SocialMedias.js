import Image from "next/image";

export const SocialMedias = ({ title, image, url }) => (
  <a href={url} target="_blank" rel="noreferrer noopener">
    {/* <img alt={title} src={image} className="icon-social-media" /> */}
    <Image src={image} alt={title} className="icon-social-media" width={45} height={45}/>
  </a>
)