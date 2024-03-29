import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { Remove } from "../App/Store/CartSlice";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs() {
  const shoppingbag = useSelector((state) => state.basket.cart);

  const totalprice = useSelector((state) => state.basket.totalprice);

  const params = useParams();
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(params);
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
    navigate("/");
  };

  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle
          className="text-blue-900"
          sx={{ m: 0, p: 2 }}
          id="customized-dialog-title"
        >
          Your Items
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
            {shoppingbag.length > 0 ? (
              shoppingbag.map((item) => (
                <>
                  <div className="grid grid-cols-2 mb-12 gap-12">
                    <div className="">
                      <div className="h-[10vh] w-[60%]">
                        <img
                          className="w-full h-full object-cover"
                          src={item.img}
                          alt={item.name}
                        ></img>
                      </div>
                      <div>
                        <h1 className="mt-4 font-bold text-sm  text-blue-900">
                          {item.name}
                        </h1>
                      </div>
                    </div>
                    <div className="text-xs ">
                      <span className=" ">Selected Size : {item.size}</span>

                      <br />

                      <span className="">Selected Color : {item.size}</span>
                      <br />

                      <span className="">Amount : {item.amount}</span>
                      <br />

                      <span className="">Single Item Price : {item.price}</span>
                      <br />
                      <br />

                      <button
                        onClick={() => dispatch(Remove(item.id))}
                        className="border bg-blue-900 text-white rounded-lg px-4 py-1"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </>
              ))
            ) : (
              <div>
                <h1 className="font-bold text-blue-900 font-sans mb-12">
                  Your Basket is empty
                </h1>
                <p>
                  Go to the Home page select the category and choose what you
                  want and add the items{" "}
                </p>

                <div className=" justify-center  flex py-12">
                  <FaShoppingCart className="text-8xl text-blue-900" />
                </div>
              </div>
            )}
            <p className="text-blue-900 text-lg">Total Price : {totalprice}</p>
          </Typography>
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
}
