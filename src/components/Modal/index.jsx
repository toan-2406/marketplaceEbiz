import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Colors } from "../../styles/theme";
import { useMediaQuery } from "@mui/material";
export default function ModalMain(props) {
  const { setOpen, open, children, width } = props;
  const handleClose = () => setOpen(false);
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: "absolute",
              top: isMobile ? "50%" : "40%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: isMobile ? "100%" : width,
              background: "linear-gradient(45deg, #2e071a, #40163d)",
              border: "3px solid " + Colors.border,
              borderRadius: "8px",
              zIndex: "100",
            }}
          >
            <Box
              sx={{
                width: 10,
                height: 10,
                position: "absolute",
                top: 5,
                right: 15,
                color: Colors.white,
                fontSize: "20px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
              onClick={handleClose}
            >
              X
            </Box>
            {children}
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
