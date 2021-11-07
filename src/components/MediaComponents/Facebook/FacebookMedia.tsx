import { FaFacebookF } from 'react-icons/fa';
import MediaBox from '@components/MediaComponents/MediaBox';

const FacebookMedia = () => {
  return (
    <a href="https://www.facebook.com/bartosz.formanowski/">
      <MediaBox
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        colorName="facebook"
      >
        <FaFacebookF />
      </MediaBox>
    </a>
  );
};

export default FacebookMedia;
