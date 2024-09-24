import Image from 'next/image';

export const ImageWithShadow = ({
  src,
  alt,
  width,
  height,
  className = ''
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}) => {
  return (
    <div className="pt-8 pr-8 m-auto">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`inline-block shadow-[2rem_-2rem_0_0_#ffe9e9b8] ${className}`}
      />
    </div>
  );
};
