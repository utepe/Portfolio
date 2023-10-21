import { Grid } from "@mui/material";
import React from "react";

interface TwoItemGridCardProps {
  leftItem: React.ReactNode;
  rightItem: React.ReactNode;
}

const TwoItemGridCard = ({ leftItem, rightItem }: TwoItemGridCardProps) => {
  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      rowSpacing={1}
      columns={{ xs: 4, sm: 8, md: 12 }}
      sx={{ flexGrow: 1, paddingBottom: "10px" }}
    >
      <Grid item xs={4}>
        {leftItem}
      </Grid>
      <Grid item xs={4} sx={{ textAlign: "end" }}>
        {rightItem}
      </Grid>
    </Grid>
  );
};

export default TwoItemGridCard;
