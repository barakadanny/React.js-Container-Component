import CurrentUserLoader from "./components/container/CurrentUserLoader";
import { UserInfo } from "./components/user-info";

function App() {
  return (
    <>
      <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader>
    </>
  );
}

export default App;
