import Image from "next/image";
import "./image-frame.css";

export default function ImageFrame({ src, alt, width, height }: { src?: string; alt: string; width: number; height: number }) {
  return (
    <div className="image-frame">
      {src ? <Image src={src} alt={alt} width={width} height={height} /> : <div className="filler" style={{ width, height }}></div>}
    </div>
  );
}
