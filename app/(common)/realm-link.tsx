import { Link } from "@mui/joy";

export default function RealmLink({ linkText, url }: { linkText: string; url: string }) {
  return (
    <Link target="_blank" rel="noopener noreferrer" color="neutral" href={url}>
      {linkText}
    </Link>
  );
}
