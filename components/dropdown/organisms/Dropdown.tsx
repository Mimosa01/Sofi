'use client'

import DropdownTrigger from "../molecules/DropdownTrigger";
import { ReactNode, useEffect, useRef, useState } from "react";
import DropdownMenu from "../atoms/DropdownMenu";

type Props = {
  children: ReactNode;
  label: string;
}

export default function Dropdown ({ children, label }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggle = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <DropdownTrigger onClick={toggle} isOpen={isOpen} label={label}/>
      <DropdownMenu isOpen={isOpen}>{ children }</DropdownMenu>
    </div>
  )
}