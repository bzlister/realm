import Image from "next/image";
import "./profile-image.css";

export default function ProfileImage() {
  return (
    <div className="profile-image">
      <Image src="/images/profile_circle.png" alt="Personal photo" width={300} height={300} />
    </div>
  );
}
