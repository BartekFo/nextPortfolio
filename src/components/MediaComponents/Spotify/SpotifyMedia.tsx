import { FaSpotify } from 'react-icons/fa';
import MediaBox from '@components/MediaComponents/MediaBox';

const SpotifyMedia = () => {
  return (
    <a href="https://open.spotify.com/user/lubieplacki1106?si=50495b62d9734d41">
      <MediaBox colorName="spotify">
        <FaSpotify />
      </MediaBox>
    </a>
  );
};

export default SpotifyMedia;
