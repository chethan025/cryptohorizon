import {
  AppBar,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Box,
} from "@material-ui/core";
import {
  createTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
import AuthModal from "./Authentication/AuthModal";
import UserSidebar from "./Authentication/UserSidebar";



const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
    type: "light",
  },
});

function Header() {
  
  const { currency, setCurrency, user } = CryptoState();

  const history = useHistory();

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar style={{ display:"flex", justifyContent: "space-between" }} >
          <Box
            component="img"
              onClick={() => history.push(`/`)}
              src="Frame.png"
              style={{
                height: 50,
                width: 50,
                maxwidth:250,
                maxheight:250,

              }
              }
          
            />
            <div style={{ display:"flex" }}>
            <Select
              variant="outlined"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currency}
              style={{ width: 85, height: 40, color: "black", border: "1px thin" , borderColor: "black"}}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>

            {user ? <UserSidebar /> : <AuthModal />}
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;
