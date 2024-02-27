/* eslint-disable react/prop-types */
import { Box, Dialog, DialogTitle } from "@mui/material";

export const ModalBase = (props) => {
    const { onClose, open, children, title } = props;

    const handleClose = () => {
        onClose();
      };
    
      return (
        <Dialog 
            onClose={handleClose} 
            open={open} >
            <DialogTitle>{title}</DialogTitle>
          
            <Box>{children}</Box>
        </Dialog>
      );
}