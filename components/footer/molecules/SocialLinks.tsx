import TGIcon from '@/shared/ui/svg/TGIcon';
import YouTubeIcon from '@/shared/ui/svg/YouTubeIcon';
import LinkedInIcon from '@/shared/ui/svg/LinkedInIcon';
import IconLink from '../atoms/IconLink';

export default function SocialLinks() {
  return (
    <div className="flex gap-2.5 order-1 md:order-2">
      <IconLink href='#' label='Telegram'> 
        <TGIcon /> 
      </IconLink>
      <IconLink href='#' label='YouTube'> 
        <YouTubeIcon />
      </IconLink>
      <IconLink href='#' label='LinkedIn'> 
        <LinkedInIcon />
      </IconLink>
    </div>
  );
}
