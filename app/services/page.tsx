"use client";

import { useState } from "react";
import { Modal, ModalClose, ModalDialog, DialogTitle, DialogContent } from "@mui/joy";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import CodeOutlined from "@mui/icons-material/CodeOutlined";
import ServiceCard from "./service-card";
import "./page.css";

export default function Services() {
  const [dialog, setDialog] = useState<null | "tutoring" | "freelancing">(null);

  return (
    <div>
      <div className="services-container">
        <ServiceCard
          Icon={SchoolOutlinedIcon}
          title="Tutoring"
          description="Private/group instruction in computer science and software development. In-person or virtual."
          onClick={() => setDialog("tutoring")}
        />
        <ServiceCard Icon={CodeOutlined} title="Freelancing" description="I can help develop your app or website." onClick={() => setDialog("freelancing")} />
      </div>
      <Modal aria-labelledby="Service popup" aria-describedby="Additional details for service" open={!!open} onClose={() => setDialog(null)}>
        <ModalDialog className="popup" variant="soft">
          <ModalClose sx={{ m: 1 }} />
          <DialogTitle>{dialog}</DialogTitle>
          <DialogContent>Lorem ipsum</DialogContent>
        </ModalDialog>
      </Modal>
    </div>
  );
}
