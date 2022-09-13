import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import QuickBookForm from "./QuickBookForm";
import { motion } from "framer-motion";
import { titleAnim } from "../animation";
import { FaWhatsapp } from "react-icons/fa";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "black",
  borderRadius: "2.5rem",
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
          fontSize: "var(--h2-font-size)",
          outline: "none",
          margin: "2rem 1rem",
          backgroundColor: "#25D366",
          color: "var(--default-color)",
          borderRadius: "2rem",
          padding: "0.5rem 1rem",
          boxShadow: "0px 8px 20px -4px #25D366",
        }}
        whileHover={{ rotate: -1, scale: 1.05 }}
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
          <QuickBookForm />
        </Box>
      </Modal>
    </>
  );
}
