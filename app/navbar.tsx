"use client";

import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  return (
    <div>
      <button onClick={() => router.push("/")}>Home</button>
      <button onClick={() => router.push("/freelancing")}>Freelancing</button>
      <button onClick={() => router.push("/tutoring")}>Tutoring</button>
      <button onClick={() => router.push("/contact")}>Contact</button>
    </div>
  );
}
