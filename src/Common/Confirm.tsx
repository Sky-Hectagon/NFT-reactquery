import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function ConfirmModal({
  title,
  onOk,
  content,
  children,
}: {
  children: React.ReactElement;
  content: React.ReactElement;
  title: string;
  onOk: () => void;
}) {
  const [open, setOpen] = useState(false);
  const handleConfirm = async () => {
    setOpen(false);
    await onOk();
  };
  const ActionElement = React.cloneElement(children, {
    onClick: () => setOpen(true),
  });
  return (
    <>
      {ActionElement}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          {content && <DialogContentText id="alert-dialog-description">{content}</DialogContentText>}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="contained" color="primary" onClick={handleConfirm}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
