'use client'

import ProfileIcon from "@/shared/ui/svg/ProfileIcon";
import Button from "@/shared/ui/atoms/Button";
import useModalStore from "@/components/modal/store/modalStore";
import { wixMadeforText } from "@/app/fonts";
import { logout } from "@/lib/api/logout";
import useAuthStore from "@/lib/store/useAthStore";

export default function ProfileButton () {
  const { toggleShow, setType } = useModalStore((state) => state);
  const { user, setUser } = useAuthStore((state) => state);

  const handleClick = () => {
    setType('auth');
    toggleShow();
  }

  async function handleLogout() {
  try {
    await logout();
    setUser(null);
  } catch (error) {
    console.error('Logout error:', error);
  }
}

  return (
    <Button onClick={user ? handleLogout : handleClick} aria-label="Войти" className="hover:text-primary-500 transition-colors duration-300">
      <ProfileIcon/>
      <span className={`hidden md:inline ${wixMadeforText.variable}`}>{ user ? 'Выйти' : 'Войти' }</span>
    </Button>
  )
}