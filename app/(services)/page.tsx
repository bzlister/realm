"use client";

import { useState } from "react";
import { Modal } from "@mui/joy";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import CodeOutlined from "@mui/icons-material/CodeOutlined";
import ServiceCard from "./service-card";
import TutoringDialog from "./tutoring-dialog";
import FreelancingDialog from "./freelancing-dialog";
import "./page.css";

export default function Services() {
  const [dialog, setDialog] = useState<null | "tutoring" | "freelancing">(null);

  return (
    <div>
      <div className="services-container">
        <ServiceCard Icon={SchoolOutlinedIcon} title="Tutoring" onClick={() => setDialog("tutoring")} />
        <ServiceCard Icon={CodeOutlined} title="Freelancing" onClick={() => setDialog("freelancing")} />
      </div>
      <Modal aria-label="Service popup" aria-description="Click to see details in a popup dialog" open={!!dialog} onClose={() => setDialog(null)}>
        {dialog === "tutoring" ? <TutoringDialog /> : <FreelancingDialog />}
      </Modal>
    </div>
  );
}
