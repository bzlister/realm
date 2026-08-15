import { Accordion, AccordionSummary, AccordionDetails, AccordionGroup, Typography } from "@mui/joy";
import Tags from "./tags";
import "./experiences.css";
import RealmLink from "./realm-link";

export default function Experiences() {
  return (
    <AccordionGroup className="experiences" variant="outlined" transition="0.2s ease">
      <Accordion className="experience" defaultExpanded>
        <TitleBar title="Microsoft - Software Engineer II" start="2020" end="Present" />
        <AccordionDetails>
          <p>
            At Microsoft, I build AI and data modeling experiences for Fabric — including core functionality for the{" "}
            <RealmLink linkText="Power BI Modeling MCP server" url="https://github.com/microsoft/powerbi-modeling-mcp" />, backend services for the{" "}
            <RealmLink linkText="web modeling Copilot" url="https://learn.microsoft.com/en-us/power-bi/transform-model/copilot-web-modeling" />, and{" "}
            <RealmLink linkText="Direct Lake creator experiences" url="https://learn.microsoft.com/en-us/fabric/fundamentals/direct-lake-web-modeling" /> for
            pro developers.
          </p>
          <p>
            Earlier, I worked on the Microsoft 365 e-commerce platform: checkout for trial-to-paid conversions, an internal scenario-testing framework, AliPay
            payment support, and a cross-team reliability effort that took checkout from ~97% to 99.9%.
          </p>
          <Tags tags={["C#", ".NET", "MCP", "TypeScript", "Angular", "React"]} />
        </AccordionDetails>
      </Accordion>
      <Accordion className="experience">
        <TitleBar title="Microsoft - Software Engineer Intern" start="2019" />
        <AccordionDetails>
          <p>Prototyped a pipeline for managing and assigning gig workloads. Investigated a bug in the Windows 11 out-of-box experience.</p>
          <Tags tags={["C#", "C++", "Azure Functions"]} />
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
