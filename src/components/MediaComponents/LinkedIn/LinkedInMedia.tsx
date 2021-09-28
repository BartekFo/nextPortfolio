import { FaLinkedinIn } from 'react-icons/fa';
import MediaBox from '@components/MediaComponents/MediaBox';

const LinkedInMedia = () => {
  return (
    <a href="https://www.linkedin.com/in/bartosz-f%C3%B3rmanowski-363943200/">
      <MediaBox colorName="linkedIn">
        <FaLinkedinIn />
      </MediaBox>
    </a>
  );
};

export default LinkedInMedia;
