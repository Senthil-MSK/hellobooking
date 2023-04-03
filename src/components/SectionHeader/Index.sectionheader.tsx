import Box from "@mui/material/Box";
import SectionHeaderStyles from "./sectionHeader";
// ----- Export for Section Headers -----
export default function SectionHeader(props: any) {
  return (
    <SectionHeaderStyles>
      <Box className="boxTitle">
        {props.children}
      </Box>
    </SectionHeaderStyles>
  )
}
