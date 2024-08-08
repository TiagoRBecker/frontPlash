"use client";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "next-share";
export const Facebook = ({ url, title }) => {
  return (
    <FacebookShareButton url={url} hashtag={"#plashMagazine"} title={title}>
      <FacebookIcon size={42} round />
    </FacebookShareButton>
  );
};

export const Twitter = ({ url, title }) => {
  return (
    <TwitterShareButton url={url} hashtag={"#plashMagazine"} title={title}>
      <TwitterIcon size={42} round />
    </TwitterShareButton>
  );
};
export const Whatsapp = ({ url, title }) => {
  return (
    <WhatsappShareButton url={url} title={title} separator=":: ">
      <WhatsappIcon size={42} round />
    </WhatsappShareButton>
  );
};
