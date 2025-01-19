import { Chip } from "@mui/joy";
import "./tags.css";

export default function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="tags-container">
      {...tags.map((t) => (
        <Chip variant="soft" size="sm" key={t}>
          {t}
        </Chip>
      ))}
    </div>
  );
}
