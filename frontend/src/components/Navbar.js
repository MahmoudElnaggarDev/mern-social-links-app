import { useModalContext } from "../context/ModalContext";
import "../styles/navbar.css";

const Navbar = () => {
  const { setIsModalOpen } = useModalContext();

  return (
    <>
      <div className="blur-effect"></div>
      <header>
        <h1>Linkaty</h1>
        <button onClick={() => setIsModalOpen(true)}>
          <i class="fa-solid fa-plus"></i>Add
        </button>
      </header>
    </>
  );
};

export default Navbar;
