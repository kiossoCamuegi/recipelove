import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function DialogBox(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div> 
        <div onClick={handleClickOpen}>{props.btn}</div>
        <Dialog   open={open}   TransitionComponent={Transition}
         keepMounted  onClose={handleClose}  aria-describedby="alert-dialog-slide-description" >
          <DialogTitle>{"Quick & Easy Recipes With Gordon Ramsay"}</DialogTitle>
          <DialogContent> 
              <div className="video">
                <iframe height="380" src="https://www.youtube.com/embed/mhDJNfV7hjk?si=yHS9c-4dEkzgGd02" 
                title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div> 
          </DialogContent>
          <DialogActions>
             <button className="text-main btn col-lg-12 bg-black">Check More Awesome Recipes</button>
          </DialogActions>
        </Dialog>
      </div>
    );
}

export default DialogBox