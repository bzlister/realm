"use client";

import { useState } from "react";
import { Modal, ModalDialog, DialogTitle, DialogContent, Button } from "@mui/joy";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import CodeOutlined from "@mui/icons-material/CodeOutlined";
import Link from "next/link";
import ServiceCard from "./service-card";
import TutoringDetails from "./tutoring-details";
import FreelancingDetails from "./freelancing-details";
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
        <ModalDialog className="popup" variant="soft">
          <DialogTitle>{dialog === "tutoring" ? "Need help studying for your technical interview?" : "Let's build it together."}</DialogTitle>
          <DialogContent>
            {dialog === "tutoring" ? (
              <TutoringDetails>
                <Link href="/contact">
                  <Button variant="soft" sx={{ marginTop: "15px" }}>
                    Contact me
                  </Button>
                </Link>
              </TutoringDetails>
            ) : (
              <FreelancingDetails>
                <Link href="/contact">
                  <Button variant="soft" sx={{ marginTop: "15px" }}>
                    Contact me
                  </Button>
                </Link>
              </FreelancingDetails>
            )}
          </DialogContent>
        </ModalDialog>
      </Modal>
    </div>
  );
}
