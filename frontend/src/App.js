import LinksList from "./components/LinksList";
import LinksModal from "./components/LinksModal";
import Navbar from "./components/Navbar";
import UserInfo from "./components/UserInfo";
import { ModalContextProvider } from "./context/ModalContext";

const App = () => {
  return (
    <>
      <ModalContextProvider>
        <Navbar />
        <LinksModal />
      </ModalContextProvider>
      <UserInfo />
      <LinksList />
    </>
  );
};

export default App;
