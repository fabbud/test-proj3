import React from 'react';
import {
  EmailShareButton,
  EmailIcon,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinIcon,
} from 'react-share';

const ShareButtons = () => {
  const pageUrl = String(window.location);
  const mainText = 'Check this out: ';
  const emailSubject = 'Productized';
  const facebookHashtag = '#productized';
  const twitterAccount = 'productizedconf';
  const twitterHashtag = [
    'productmanagement',
    'designthinking',
    'productdesign',
    'productized',
  ];
  const twitterText = `Check this out: ${pageUrl}`;

  return (
    <div className="share-section">
      <div className="share-label">Click to share:</div>
      <div>
        <EmailShareButton url={pageUrl} subject={emailSubject} body={mainText}>
          <EmailIcon className="share-icon" round size={30} />
        </EmailShareButton>

        <WhatsappShareButton url={pageUrl} title={mainText}>
          <WhatsappIcon className="share-icon" round size={30} />
        </WhatsappShareButton>

        <FacebookShareButton
          url={pageUrl}
          quote={mainText}
          hashtag={facebookHashtag}
        >
          <FacebookIcon className="share-icon" round size={30} />
        </FacebookShareButton>

        <TwitterShareButton
          url={pageUrl}
          title={twitterText}
          via={twitterAccount}
          hashtags={twitterHashtag}
        >
          <TwitterIcon className="share-icon" round size={30} />
        </TwitterShareButton>

        <a
          href={`http://www.linkedin.com/shareArticle?mini=true&url=${pageUrl}`}
        >
          <LinkedinIcon className="share-icon" round size={30} />
        </a>
      </div>
    </div>
  );
};

export default ShareButtons;
