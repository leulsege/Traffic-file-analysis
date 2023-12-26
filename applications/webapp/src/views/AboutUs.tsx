import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import LeulsegedPhoto from "../assets/leul-avater.jpg";
import YafetPhoto from "../assets/yafet-avater.jpg";
import HomeNavbar from "../components/HomeNavbar";

const AboutUs = () => {
  return (
    <>
      <HomeNavbar />
      <Container sx={{ marginTop: 4 }}>
        <Paper elevation={0} sx={{ padding: 2 }}>
          <Typography variant="h4" gutterBottom>
            About PSTS
          </Typography>
          <Typography variant="body1" paragraph>
            Public Service Transport Service (PSTS) was established by the
            council of ministers regulation No 298/2013 as a public enterprise
            and governed by the public enterprise proclamation No. 25/1992. The
            enterprise has its head office in Addis Ababa and was established
            with an authorized capital of 1,000,000,000 (One Billion Birr), of
            which 500,000,000 (Five Hundred Million) is paid up in cash and
            kind.
          </Typography>
          <Typography variant="body1" paragraph>
            To render effective transport service, PSTS opened four transport
            service coordinating branch offices located in the four corners of
            Addis Ababa, namely East, West, North, and South branch offices.
          </Typography>
          <Typography variant="body1" paragraph>
            PSTS has been exerting tremendous effort to meet its objectives,
            providing transport service to public service employees during
            office opening and closing hours, to city dwellers mainly outside of
            office opening and closing hours, and effectively engaging in other
            activities related to its objective.
          </Typography>

          <Typography variant="h4" gutterBottom sx={{ marginTop: 3 }}>
            Meet Our Developers
          </Typography>

          {/* <Paper elevation={0} sx={{ padding: 0 }}> */}
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} justifyContent="start">
              <Avatar
                alt="Leulseged Gebremedhin"
                src={LeulsegedPhoto}
                sx={{
                  width: 220,
                  height: 220,
                  margin: 2,
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">Leulseged Gebremedhin</Typography>
              <Typography variant="body2">
                Electrical and Computer Engineering <br /> Full Stack Developer
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Avatar
                alt="Yafet Zerihun"
                src={YafetPhoto}
                sx={{ width: 220, height: 220, margin: 2 }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container alignItems="flex-end">
                <Grid xs={12}>
                  <Typography variant="subtitle1">Yafet Zerihun</Typography>
                </Grid>
                <Grid xs={12}>
                  <Typography variant="body2">
                    Electrical and Computer Engineering <br /> Full Stack
                    Developer
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
        {/* </Paper> */}
      </Container>
    </>
  );
};

export default AboutUs;
