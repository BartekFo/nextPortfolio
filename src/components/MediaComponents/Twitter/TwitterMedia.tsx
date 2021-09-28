import { FaTwitter } from 'react-icons/fa';
import MediaBox from '@components/MediaComponents/MediaBox';

const TwitterMedia = () => {
  return (
    <a href="https://twitter.com/Bartosz_For">
      <MediaBox colorName="twitter">
        <FaTwitter />
      </MediaBox>
    </a>
  );
};

export default TwitterMedia;
