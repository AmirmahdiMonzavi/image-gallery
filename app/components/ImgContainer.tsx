import Image from "next/image";
import Link from "next/link";

import type { Photo } from "../models/Images";

const ImgContainer = ({ photo }: { photo: Photo }) => {
  const withHeightRatio = photo.height / photo.width;
  const galleryHeight = Math.ceil(250 * withHeightRatio);
  const photoSpans = Math.ceil(galleryHeight / 10) + 1;

  return (
    <div
      className="w-[250px] justify-self-center"
      style={{ gridRow: `span ${photoSpans}` }}
    >
      <Link
        href={photo.url}
        target="_blank"
        className="grid place-content-center"
      >
        <div className="rounded-xl overflow-hidden group">
          <Image
            src={photo.src.large}
            alt={photo.alt}
            width={250}
            height={galleryHeight}
            className="group-hover:opacity-75 "
            sizes="250px"
            placeholder="blur"
            blurDataURL={photo.blurredDataUrl}
          />
        </div>
      </Link>
    </div>
  );
};

export default ImgContainer;
