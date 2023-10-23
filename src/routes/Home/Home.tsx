import Typography from "@mui/material/Typography";
import { Fragment } from "react";
import TwoItemGridCard from "../../components/TwoItemGridCard/TwoItemGridCard";

import profilePic from "../../assets/images/profilePic.jpg";

const Home = () => {
  return (
    <Fragment>
      <Typography variant="h3">About Me</Typography>
      <TwoItemGridCard
        leftItem={
          <img src={profilePic} alt={"Profile Picture"} loading="lazy" />
        }
        rightItem={null}
      />
    </Fragment>
  );
};

export default Home;
