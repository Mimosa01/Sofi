'use client'

import ProfileIcon from "@/shared/ui/svg/ProfileIcon";
import Button from "@/shared/ui/atoms/Button";
import useStore from "@/components/modal/store/modalStore";

export default function ProfileButton () {
  const { toggleShow, setType } = useStore((state) => state)

  const handleClick = () => {
    setType('auth');
    toggleShow();
  }

  return (
    <Button onClick={handleClick} aria-label="Войти">
      <ProfileIcon />
      <span className='hidden md:inline'>Войти</span>
    </Button>
  )
}