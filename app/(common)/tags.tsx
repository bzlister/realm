import { Chip } from "@mui/joy";
import "./tags.css";

export default function Tags({ tags }: { tags: string[] }) {
  return <div>{...tags.map((t) => <Chip variant="soft">{t}</Chip>)}</div>;
}
