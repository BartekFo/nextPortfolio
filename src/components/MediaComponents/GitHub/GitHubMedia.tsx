import { FaGithub } from 'react-icons/fa';
import MediaBox from '@components/MediaComponents/MediaBox';

const GitHubMedia = () => {
  return (
    <a href="https://github.com/BartekFo">
      <MediaBox
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        colorName="gitHub"
      >
        <FaGithub />
      </MediaBox>
    </a>
  );
};

export default GitHubMedia;
