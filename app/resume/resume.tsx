"use client";

import { Button } from "@mui/joy";
import DownloadIcon from "@mui/icons-material/Download";
import { useState } from "react";
import { sendMail } from "../(actions)/send-mail";
import { Log } from "../(common)/logger";

export default function Resume() {
  const [cachedPdfBlob, setCachedPdfBlob] = useState<Blob>();

  return (
    <Button
      variant="plain"
      size="lg"
      startDecorator={<DownloadIcon />}
      onClick={async () => {
        let pdfBlob: Blob | null = null;
        if (!cachedPdfBlob) {
          try {
            const response = await fetch(`${window.location.origin}/resume`);
            if (response.ok) {
              pdfBlob = await response.blob();
              setCachedPdfBlob(pdfBlob);
            }
          } catch (error: any) {
            Log(`Error fetching resume:\r\n${error}`, true);
          }
        } else {
          pdfBlob = cachedPdfBlob;
        }

        if (pdfBlob) {
          // Create an object URL for the PDF Blob
          const url = URL.createObjectURL(pdfBlob);

          // Create a hidden anchor element to trigger the download
          const a = document.createElement("a");
          a.href = url;
          a.download = "BenListerResume.pdf"; // Specify the file name
          document.body.appendChild(a); // Append the anchor element to the DOM
          a.click(); // Trigger the download
          document.body.removeChild(a); // Clean up by removing the anchor element
          URL.revokeObjectURL(url); // Revoke the object URL
        }
      }}
    >
      Resume
    </Button>
  );
}
