import DropdownSpecializations from '@/components/dropdown/widgets/DropdownSpecializations';
import Logo from '@/shared/ui/atoms/Logo';
import Link from 'next/link';
import ProfileButton from '../molecules/ProfileButton';
import { Suspense } from 'react';
import AdsButton from '@/components/advertisingCard/moleculs/AdsButton';
import BackButton from '../molecules/BackButton';

export default function Header () {  
  return (
    <div className='fixed z-100 top-10.5 md:top-4.5 left-1/2 -translate-x-1/2 flex gap-2.5'>
      <BackButton />
      <header className='flex items-center gap-5 w-fit py-[10px] md:py-[16px] px-[20px] rounded-[18px] bg-white/80 shadow-header backdrop-blur-sm'>
        <Link href="/">
          <Logo isMain />
        </Link>
        
        <Suspense>
          <DropdownSpecializations />
        </Suspense>

        <ProfileButton />
      </header>
      <AdsButton />
    </div>
  )
}