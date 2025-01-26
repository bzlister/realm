import { readFile } from "fs/promises";
import path from "path";

export const dynamic = "force-static";

export async function GET() {
  const buffer = await readFile(path.resolve("public/BenListerResume.pdf"));

  // set the headers to tell the browser to download the file
  const headers = new Headers();
  headers.append("Content-Disposition", 'attachment; filename="BenListerResume.pdf"');
  headers.append("Content-Type", "application/pdf");

  return new Response(buffer, {
    headers,
  });
}
