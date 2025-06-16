import DropdownSpecializations from '@/components/dropdown/widgets/DropdownSpecializations';
import Logo from '@/shared/ui/atoms/Logo';
import Link from 'next/link';
import ProfileButton from '../molecules/ProfileButton';

export default function Header () {  
  return (
    <header className='fixed z-100 top-10.5 md:top-4.5 left-1/2 -translate-x-1/2 flex items-center gap-5 w-fit py-[10px] md:py-[16px] px-[20px] rounded-[18px] bg-white/80 shadow-header backdrop-blur-sm'>
      <Link href="/">
        <Logo isMain />
      </Link>
      
      <DropdownSpecializations />

      <ProfileButton />
    </header>
  )
}