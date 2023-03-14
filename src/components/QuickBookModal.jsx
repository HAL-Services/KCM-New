import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import QuickBookForm from "./QuickBookForm";
import { motion } from "framer-motion";
import { titleAnim } from "../animation";
import { FaWhatsapp } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "95%",
  maxWidth: "400px",
  bgcolor: "var(--new-color-dark)",
  borderRadius: "1rem",
  boxShadow: "24",
  p: 4,
};

export default function QuickBookModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button
        variants={titleAnim}
        component={motion.div}
        onClick={handleOpen}
        style={{
          //   fontSize: "var(--h2-font-size)",
          //   outline: "none",
          backgroundColor: "#25D366",
          padding: ".6rem",
          marginRight: ".5rem",
          color: "var(--default-color)",
          //   borderRadius: "2rem",
          //   padding: "0.5rem 1rem",
          //   boxShadow: "0px 8px 20px -4px #25D366",
        }}
        whileHover={{ scale: 1.05 }}
      >
        Quick Book
        <FaWhatsapp
          style={{ marginLeft: ".5rem", fontWeight: "var(--font-bold)" }}
        />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <span className="quote_close" onClick={() => setOpen(false)}>
            <IoCloseSharp
              className="quote_close_icon"
              style={{ color: "var(--new-color-blue)", fontSize: "2rem" }}
            />
          </span>
          <QuickBookForm />
        </Box>
      </Modal>
    </>
  );
}
