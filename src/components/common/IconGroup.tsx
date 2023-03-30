import {
  AiFillBehanceSquare,
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from 'react-icons/ai';

interface IconGroupClassType {
  classNames?: string;
}

export default function IconGroup({ classNames }: IconGroupClassType) {
  const classes = `icon-style ${classNames}`;
  return (
    <>
      <a href="https://www.behance.net/zorgitgroup1" target={"_blank"}>
        <AiFillBehanceSquare className={classes} />
      </a>
      <a href="https://bd.linkedin.com/company/zorg-it-group" target={"_blank"}>
        <AiFillLinkedin className={classes} />
      </a>
      <a href="https://www.facebook.com/zorgitgroup" target={"_blank"}>
        <AiFillFacebook className={classes} />
      </a>
      <a href="https://www.instagram.com/zorgitgroup" target={"_blank"}>
        <AiFillInstagram className={classes} />
      </a>
      <a href="https://twitter.com/it_zorg?lang=en" target={"_blank"}>
        <AiFillTwitterSquare className={classes} />
      </a>
    </>
  );
}
