import React from "react";
import PropTypes from "prop-types";

type YoutubeEmbedProps = {
  embedId: string;
};

const YoutubeEmbed = ({ embedId }: YoutubeEmbedProps) => (
  <div style={videoResponsive}>
    <iframe
      style={iframeStyle}
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${embedId}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  </div>
);

const videoResponsive = {
  overflow: "hidden",
  paddingBottom: "56.25%",
  position: "relative" as "relative",
  height: 0,
};

const iframeStyle = {
  left: 0,
  top: 0,
  height: "100%",
  width: "100%",
  position: "absolute" as "absolute",
};

export default YoutubeEmbed;
