import { FC } from 'react';
import Link from 'next/link';
import { BsBoxArrowInUpRight } from 'react-icons/bs';

import {
  AboutInfo,
  AboutLink,
  TextWrapper,
} from '@components/HomeComponents/MessageBubble/MessageBubble.styled';

const MessageBubble: FC<{
  isHavingLink: boolean;
  messageText: string;
  // eslint-disable-next-line react/require-default-props
  linkDestination?: string;
  // eslint-disable-next-line react/require-default-props
  linkText?: string;
}> = (props) => {
  const { isHavingLink, messageText, linkDestination, linkText } = props;

  return (
    <TextWrapper>
      <AboutInfo>{messageText}</AboutInfo>
      {linkDestination && isHavingLink ? (
        <Link href={linkDestination} passHref>
          <AboutLink>
            {linkText} <BsBoxArrowInUpRight />
          </AboutLink>
        </Link>
      ) : (
        ''
      )}
    </TextWrapper>
  );
};

export default MessageBubble;
