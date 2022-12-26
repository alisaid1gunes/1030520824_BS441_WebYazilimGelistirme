import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        minWidth: "100vw",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid item xs={12} md={12} lg={12}>
          <h1>Stone Game</h1>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid item xs={12} md={12} lg={12}>
          <Button
            sx={{
              width: "20vw",
              height: "10vh",
              backgroundColor: "#ffffff",
            }}
            onClick={() =>
              navigate("/game", {
                state: {
                  mode: 0,
                },
              })
            }
          >
            Normal Mode
          </Button>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Button
            sx={{
              width: "20vw",
              height: "10vh",
              backgroundColor: "#ffffff",
              mt: 5,
            }}
            onClick={() =>
              navigate("/game", {
                state: {
                  mode: 1,
                },
              })
            }
          >
            Hard Mode
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
export default Main;
