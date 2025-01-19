import { Accordion, AccordionSummary, AccordionDetails, AccordionGroup, Typography } from "@mui/joy";
import Tags from "./tags";
import "./experiences.css";

export default function Experiences() {
  return (
    <AccordionGroup className="experiences" variant="outlined" transition="0.2s ease">
      <Accordion className="experience" defaultExpanded>
        <TitleBar title="Microsoft - Software Engineer II" start="2020" end="Present" />
        <AccordionDetails>
          <p>
            Developed features for pro users of Power BI desktop and service. Lead developer for several projects including a new model view UX, adding
            1st-party support for creating calculation groups, and the client integration for creating Direct Lake semantic models.
          </p>
          <p>
            In an earlier role, I created and maintained features for the M365 e-commerce platform. Built internal scenario testing framework. Lead developer in
            a UX redesign effort. Led efforts to improve reliabiliy to 3 9s.
          </p>
          <Tags tags={["Angular", "React", "C#", ".NET", "Typescript", "Redux"]} />
        </AccordionDetails>
      </Accordion>
      <Accordion className="experience">
        <TitleBar title="Microsoft - Software Engineer Intern" start="2019" />
        <AccordionDetails>
          <p>Prototyped a pipeline for managing and assigning gig workloads. Investigated a bug in the Windows 11 out-of-box experience.</p>
          <Tags tags={["C#", "C++", "Azure"]} />
        </AccordionDetails>
      </Accordion>
      <Accordion className="experience">
        <TitleBar title="CARFAX - Software Engineer Intern" start="2018" />
        <AccordionDetails>
          <p>Learned agile practices. Built an internal tool for detecting deprecated config files.</p>
          <Tags tags={["Java"]} />
        </AccordionDetails>
      </Accordion>
    </AccordionGroup>
  );
}

function TitleBar({ title, start, end }: { title: string; start: string; end?: string }) {
  return (
    <AccordionSummary>
      <div className="title-bar">
        <Typography level="title-lg">{title}</Typography>
        <span>{end ? `${start} - ${end}` : start}</span>
      </div>
    </AccordionSummary>
  );
}
