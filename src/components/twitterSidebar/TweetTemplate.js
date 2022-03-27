import { FcAreaChart } from "react-icons/fc";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
export const TweetTemplate = ({ tweet }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "rgb(17 24 39)",
    border: "2px solid #000",
    boxShadow: 24,
    color: "white",
    p: 4,
  };
  return (
    <div className="bg-gray-900 m-3 rounded-md p-5 flex flex-col justify-left">
      <div className="flex justify-start items-center mb-4">
        <span className="mr-2">
          <FcAreaChart size={20} color={"yellow"} />
        </span>
        <span className="text-sm text-slate-500">
          Sentiment score: {tweet[1].toFixed(3)}
        </span>
      </div>

      <div className="text-lg text-left">
        {tweet[0].length > 100 ? (
          <span>
            {tweet[0].substring(0, 140)}{" "}
            <span
              onClick={handleOpen}
              className="text-cyan-600 cursor-pointer text-sm"
            >
              ..Read More
            </span>
          </span>
        ) : (
          tweet[0]
        )}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="max-h-96 overflow-scroll">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Tweet
          </Typography>
          <Typography
            id="modal-modal-title"
            variant="h9"
            component="h2"
            color="gray"
          >
            Sentiment Score: {tweet[0]}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {tweet.text}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
