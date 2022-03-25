import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button"; 
import Stack from "@mui/material/Stack";
import Dialog from "@mui/material/Dialog";
import { FormControl, FormControlLabel, InputAdornment, TextField } from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Controller, useForm } from "react-hook-form";
import { useTheme } from "@mui/material/styles";
import { RegisterOptions } from "react-hook-form/dist/types/validator";
import { TextFieldProps } from "@mui/material/TextField/TextField";
import { useWeb3Context } from "../hooks";
interface IPromptModal {
  rules?: Omit<RegisterOptions<any, any>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled">;
  children: React.ReactElement;
  content: React.ReactElement;
  title: string;
  onOk: (value: string) => void;
  placeholder?: string;
  fieldInput?: TextFieldProps;
  txtButtonConfirm?: string;
}
const PromptModal = ({
  title,
  content,
  children,
  onOk,
  placeholder,
  txtButtonConfirm,
  rules,
  fieldInput,
}: IPromptModal) => {
  const theme = useTheme();

  const [open, setOpen] = useState(false);

  const { address } = useWeb3Context();

  const ActionElement = React.cloneElement(children, {
    onClick: () => setOpen(true),
  });

  const { handleSubmit, control, register } = useForm({
    defaultValues: {
      address: "",
    },
  });
  const onSubmit = (data: any) => {
    onOk(data.address);
    setOpen(false);
  };

  return (
    <>
      {ActionElement}

      <Dialog open={open} onClose={() => setOpen(false)}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle>{title}</DialogTitle>
          <DialogContent>
            <Stack spacing={1}>
              <DialogContentText>{content}</DialogContentText>
              <Controller
                render={({ field, fieldState: { error } }) => {
                  return (
                    <FormControl variant="outlined" color="primary" fullWidth>
                      <TextField
                        sx={{
                          [theme.breakpoints.up("xs")]: {
                            width: "80%",
                          },
                          [theme.breakpoints.up("md")]: {
                            width: "400px",
                          },
                        }}
                        error={!!error}
                        {...{ ...field, ...fieldInput }}
                        placeholder={placeholder}
                        helperText={error ? error.message : null}
                      />
                    </FormControl>
                  );
                }}
                name="address"
                control={control}
                rules={rules}
              />
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>Cancel</Button>

            <Button type="submit" variant="contained" color="primary">
              {txtButtonConfirm}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
}
PromptModal.defaultProps = {
  placeholder: "...",
  rules: {
    required: "Address required",
  },
  fieldInput: {},
  txtButtonConfirm: "Confirm",
};

export default PromptModal;