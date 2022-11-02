import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { guideStatemnets } from "../../constants/constants";

const SpeechlyGuide = () => {
  const guideComponents = guideStatemnets.map((statement) => (
    <>
      <Typography align="left" variant="overline" key={statement}>
        {statement}
      </Typography>
      <Divider />
    </>
  ));
  return (
    <Accordion
      sx={{
        backgroundColor: "primary.main",
      }}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography align="center" sx={{ width: "100%", flexShrink: 0 }}>
          Guide to create transactions using your voice
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        {guideComponents}
        <Typography align="center" variant="overline">
          you can do much more than that feel free to experiment!
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default SpeechlyGuide;
