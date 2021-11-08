import { FaTwitter } from 'react-icons/fa';
import MediaBox from '@components/MediaComponents/MediaBox';

const TwitterMedia = () => {
  return (
    <a href="https://twitter.com/Bartosz_For">
      <MediaBox
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        colorName="twitter"
      >
        <FaTwitter />
      </MediaBox>
    </a>
  );
};

export default TwitterMedia;
