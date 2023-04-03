import { useEffect } from 'react';
import PaymentStyles from "./payments";
import SectionHeader from "../../../../components/SectionHeader/Index.sectionheader";
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { projectsActions } from '../../../../redux/projects/projects.actions';
import { useAppSelector, useAppDispatch } from '../../../../redux/store/store';
import { userObject } from '../../../../redux/auth/auth.selectors';
import { paymentSchedule } from '../../../../redux/projects/projects.selectors';

// Default export for Project Payments
export default function ProjectPayments(){
  const dispatch = useAppDispatch();
  const user: any = useAppSelector(userObject);
  const paymentsData: any = useAppSelector(paymentSchedule);
  // Fetch Priority Action data on load
  useEffect(() => {
    dispatch(projectsActions.projectsPaymentAction(user?.projectId));
  }, [dispatch, user?.projectId]);
  return (
    <PaymentStyles>
      <SectionHeader>
        <Typography variant="h4">Balance</Typography>
        <Link className="boxTitleLink" to="#">More Info</Link>
      </SectionHeader>
      <Box className="paymentProgressWrapper">
        <Box className="progressWrapper">
          {paymentsData.milestones.map((mileStone: any) => {
            return (
              <Box className={`progressDiv ${mileStone.status ? "active": ""}`} key={mileStone.label}>
                <TaskAltIcon></TaskAltIcon>
                <Box component="span">{mileStone.label}</Box>
              </Box>
            )
          })}
        </Box>
        <Box className="paymentMilestones">
          <Box className="cost">
            <Box component="strong">${paymentsData.runningTotal}</Box>
            <Box component="span">Job Running Total</Box>
          </Box>
          <Box className="cost">
            <Box component="strong">${paymentsData.RecevedTotal}</Box>
            <Box component="span">Payments Recieved</Box>
          </Box>
          <Box className="cost">
            <Box component="strong">${paymentsData.balanceAmount}</Box>
            <Box component="span">Balance</Box>
          </Box>
        </Box>
      </Box>
    </PaymentStyles>
  );
}
