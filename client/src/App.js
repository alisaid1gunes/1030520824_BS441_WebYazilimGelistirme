import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Container, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";
import Game from "./Game";
import Main from "./Main";

const theme = createTheme({
    typography: {
        fontFamily: "Montserrat",
    },
    // buttons, links and other components with text would automatically use the global font family
});
function App() {
    return (
        <div>
            <CssBaseline />
            <ThemeProvider theme={theme}>
                <Container
                    maxWidth={false}
                    style={{
                        padding: "0px",
                        backgroundColor: "#1192f3",
                       minWidth: "100vw", minHeight: "100vh",
                        color: "white",
                    }}
                >
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/game" element={<Game />} />
                    </Routes>
                </Container>
            </ThemeProvider>
        </div>
    );
}

export default App;
