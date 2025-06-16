'use client'

import ProfileIcon from "@/shared/ui/svg/ProfileIcon";
import useStore from "@/lib/store/modalStore";
import Button from "@/shared/ui/atoms/Button";

export default function ProfileButton () {
  const { toggleShow } = useStore((state) => state)

  return (
    <Button onClick={toggleShow}>
      <ProfileIcon />
      <span className='hidden md:inline'>Войти</span>
    </Button>
  )
}