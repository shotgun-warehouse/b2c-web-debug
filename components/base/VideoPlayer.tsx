import React, { MouseEventHandler } from 'react';
import ReactPlayer from 'react-player';
import { ButtonWithIcon } from 'components/base/Button';
import { Volume2, VolumeX } from 'react-feather';

interface MuteButtonProps {
  muted: boolean;
  toggleMute: MouseEventHandler;
}
export const MuteButton = ({ muted, toggleMute }: MuteButtonProps) => (
  <ButtonWithIcon
    rightIcon={muted ? Volume2 : VolumeX}
    color="white"
    onClick={toggleMute}
    style={{ position: 'absolute', right: 16, bottom: 64 }}
    iconSize={3}
  />
);

interface VideoPlayerProps {
  url: string | null;
  poster: string | null;
  playing?: boolean;
  style?: Object;
  muted?: boolean;
}
const VideoPlayer = ({
  style,
  url,
  poster,
  playing,
  muted = true,
}: VideoPlayerProps) => (
  <ReactPlayer
    style={style}
    url={url || undefined}
    playing={playing}
    loop
    muted={muted}
    width="100%"
    height="100%"
    config={{
      file: {
        attributes: {
          poster,
        },
      },
    }}
  />
);

export default VideoPlayer;
