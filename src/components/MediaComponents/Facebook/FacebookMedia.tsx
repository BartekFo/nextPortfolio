import { FaFacebookF } from 'react-icons/fa';
import MediaBox from '@components/MediaComponents/MediaBox';

const FacebookMedia = () => {
  return (
    <a href="https://www.facebook.com/bartosz.formanowski/">
      <MediaBox colorName="facebook">
        <FaFacebookF />
      </MediaBox>
    </a>
  );
};

export default FacebookMedia;
