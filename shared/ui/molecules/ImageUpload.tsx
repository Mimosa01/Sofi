"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import CloudIcon from "../svg/CloudIcon";

type Props = {
  onChange?: (file: File | null) => void;
  className?: string;
  error?: string;
};

export default function ImageUpload({
  onChange,
  className,
  error
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) return;

    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    onChange?.(file);
  };

  return (
    <button
      type="button"
      onClick={() => inputRef.current?.click()}
      className={`
        relative flex items-center justify-center min-w-13 h-13 rounded-xl overflow-hidden
        border border-dashed border-neutral-400 transition-all duration-300 text-neutral-400
        hover:border-secondary-400 hover:text-secondary-400
        ${error && 'my-auto'}
        ${className}
      `}
    >
      {previewUrl ? (
        <Image
          src={previewUrl}
          alt="Preview"
          fill
          className="object-cover"
        />
      ) : (
        <CloudIcon />
      )}
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
    </button>
  );
}
