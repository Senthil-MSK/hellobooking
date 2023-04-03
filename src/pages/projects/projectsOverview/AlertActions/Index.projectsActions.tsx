import { useState } from 'react';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CustomButton from '../../../../components/Button/Index.button';
import {ReactComponent as SignIcon} from '../../../../assets/images/icons/signIcon.svg';
import {ReactComponent as DownloadIcon} from '../../../../assets/images/icons/downloadIcon.svg';
import {ReactComponent as ViewIcon} from '../../../../assets/images/icons/viewIcon.svg';
import { styled } from '@mui/material/styles';
import Link from '@mui/material/Link';
// Styles for transitions of button and on hover
const StyledButton = styled(Box)`
  ${({ theme }) => `
  background-color: ${theme.palette.common.white};
  transition: ${theme.transitions.create(['background'], {
    duration: "1s",
  })};
  a.MuiTypography-root, a.MuiTypography-root svg {
    color: ${theme.palette.primary.dark};
  }
  a.MuiButtonBase-root > span, .actionBtns{
    opacity: 0;
    @media(max-width: 1200px){
      opacity: 1;
    }
    transition: ${theme.transitions.create(['opacity'], {
      duration: "1s",
    })};
  }
  @media(min-width: 1200px){
    &:hover {
      background-color: ${theme.palette.grey[100]};
      .MuiTypography-root{
        opacity: 1;
      }
    }
  }
  `}
`;
// Default export for PriorityActions
export default function ProjectsActions(props: any) {
  const [expanded, setExpanded] = useState(false);
  const [rowToggle, setShowRowToggle] = useState("0");
  // Toggle row for mobile
  const handleRowToggle = (showRow: string) => {
    if(rowToggle === showRow){
      setShowRowToggle("0")
    }else {
      setShowRowToggle(showRow)
    }
    
  }
  // Toggle accordion
  const handleChange = () => {
    setExpanded(!expanded)
  };
  return (
    <Box className='AcccordionWrapper'>
      <Accordion expanded={expanded} onChange={handleChange}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <WarningAmberIcon />
          <Typography variant="body2">High priority actions required in order to to avoid delays and schedule changes</Typography>
        </AccordionSummary>
        <AccordionDetails className='AccordionDetailsWrap'>
          <Box className="priorityHead">
            <Box className="col col3">Title</Box>
            <Box className="col col3">Due Date</Box>
            <Box className="col col3">Action</Box>
            <Box className="col col3 actions"></Box>
          </Box>
          {props.projectsActionItems.map((action: any) => {
              return <StyledButton className="priorityBody" key={action.url}>
                <Box className="col col3 col-title">{action.title}</Box>
                <Box className="col col3 error col-dueDate">{action.dueDate}</Box>
                <Box className="col col3 col-action"><CustomButton onClick={() => handleRowToggle("1")} type="button" variant="text" className={`arrowBtn ${rowToggle === "1" ? "active" : ""}`}>{action.action} <KeyboardArrowDownIcon /></CustomButton></Box>
                <Box className={`col col3 actions ${rowToggle === "1" ? "active" : ""}`}>
                  {action.digitalSignRequired && !action.docuemntSigned && <Link
                    underline="none"
                    className="actionBtns"
                    href={action.url}
                    target="_blank"
                  >
                    <SignIcon></SignIcon>
                  </Link>}
                  {action.uploadRequired && <Link
                    underline="none"
                    className="actionBtns"
                    href={"/documents"}
                  >
                    <DownloadIcon className="uploadIcon"></DownloadIcon>
                  </Link>}
                  {action.url && <Link
                    underline="none"
                    className="actionBtns"
                    href={action.url}
                    target="_blank"
                  >
                    <ViewIcon></ViewIcon>
                  </Link>}
                  {action.url && <Link
                    underline="none"
                    className="actionBtns"
                    download={action.url}
                    target="_blank"
                  >
                    <DownloadIcon></DownloadIcon>
                  </Link>}
                </Box>
              </StyledButton>
          })}
          
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
