import Header from "./components/Header";
import Map from "./components/Map";
import SidBar from "./components/SidBar";
import { GlobalStyle } from "./style/global";
import { UserStorage } from "./UserContexte";

function App() {
  return (
    <>
      <UserStorage>
        <GlobalStyle />
        <Header />
        <div className="dashboard">
          <SidBar />
          <Map />
        </div>
      </UserStorage>
    </>
  );
}

export default App;
