// app/components/ShareButtons.tsx
'use client'; // Mark this as a Client Component

import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, FacebookIcon, TwitterIcon, LinkedinIcon } from 'react-share';

interface ShareButtonsProps {
  shareUrl: string;
}

export default function ShareButtons({ shareUrl }: ShareButtonsProps) {
  return (
    <div className="flex space-x-4">
      <FacebookShareButton url={shareUrl}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton url={shareUrl}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <LinkedinShareButton url={shareUrl}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
    </div>
  );
}