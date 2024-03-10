import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface Accordion {
  title: string;
  description: string;
}
export default function AccordionUsage({ title, description }: Accordion) {
  return (
    <div>
      <Accordion
        sx={{
          width: '100%',
          height: 'auto',
          border: 'none',
          boxShadow: 'none',
          color: '#252525',
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            fontFamily: 'Quicksand',
            fontWeight: '700',
            fontSize: { md: '.95rem', xl: '1.125rem' },
            lineHeight: '27px',
          }}
        >
          {title}
        </AccordionSummary>
        <AccordionDetails
          sx={{
            fontFamily: 'Quicksand',
            fontSize: { md: '.85rem', xl: '1rem' },
            lineHeight: '24px',
          }}
        >
          {description}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
