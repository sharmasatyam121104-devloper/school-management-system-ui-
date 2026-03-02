"use client";

import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  url?: string;
};

const DocumentPreview = ({ title, url }: Props) => {
  if (!url) {
    return (
      <div className="border rounded-xl p-4 text-center text-gray-400">
        {title} not uploaded
      </div>
    );
  }

  return (
    <div className="border rounded-xl p-4 space-y-2">
      <p className="font-medium text-sm">{title}</p>

      {/* CLICK IMAGE → DOWNLOAD */}
      <Link
        href={url}
        download
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <Image
          src={url}
          alt={title}
          width={400}
          height={300}
          unoptimized
          className="h-40 w-full object-contain rounded cursor-pointer hover:opacity-80 transition"
        />
      </Link>

      <p className="text-xs text-center text-gray-500">
        Click image to download
      </p>
    </div>
  );
};

export default DocumentPreview;
