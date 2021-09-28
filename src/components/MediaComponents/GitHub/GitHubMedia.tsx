import { FaGithub } from 'react-icons/fa';
import MediaBox from '@components/MediaComponents/MediaBox';

const GitHubMedia = () => {
  return (
    <a href="https://github.com/BartekFo">
      <MediaBox colorName="gitHub">
        <FaGithub />
      </MediaBox>
    </a>
  );
};

export default GitHubMedia;
