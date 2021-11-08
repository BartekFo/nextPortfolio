import { FaLinkedinIn } from 'react-icons/fa';
import MediaBox from '@components/MediaComponents/MediaBox';

const LinkedInMedia = () => {
  return (
    <a href="https://www.linkedin.com/in/bartosz-f%C3%B3rmanowski-363943200/">
      <MediaBox
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        colorName="linkedIn"
      >
        <FaLinkedinIn />
      </MediaBox>
    </a>
  );
};

export default LinkedInMedia;
