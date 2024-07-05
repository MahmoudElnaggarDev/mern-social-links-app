import { motion } from "framer-motion";
import { useModalContext } from "../context/ModalContext";
import "../styles/links-modal.css";

const LinksModal = () => {
  const { isModalOpen, setIsModalOpen } = useModalContext();

  const items = [
    "whatsapp",
    "telegram",
    "facebook",
    "instagram",
    "youtube",
    "x-twitter",
    "linkedin",
    "tiktok",
    "pinterest",
    "snapchat",
    "reddit",
    "twitch",
    "discord",
    "skype",
    "quora",
    "dribbble",
    "slack",
    "yahoo",
    "steam",
  ];

  return (
    <>
      {isModalOpen && (
        <motion.div
          className="links-modal-shadow"
          initial={{ opacity: 0, scale: 0.1 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="links-modal">
            <div onClick={() => setIsModalOpen(false)}>
              <i class="fa-solid fa-xmark"></i>
            </div>

            <h1>Add Social Media Link</h1>

            <ul>
              {items.map((item) => (
                <li key={item}>
                  <i className={`fa-brands fa-${item}`}></i>
                  <h3>{item}</h3>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </>
  );
};
export default LinksModal;
