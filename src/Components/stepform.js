import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import '../form.css';

const steps = ['name + surname + title', 'description + join files', 'date + hour + duration', 'rooms', 'dispositions'];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const fileInputRef = useRef(null);
  const [joinLink, setJoinLink] = React.useState('');

  const isStepOptional = (step) => {
    return 'nhv';
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  return (
    <body className='body'>
      <Box sx={{ bgcolor: '', height: '1000px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box sx={{ width: '60%', height: '50%', bgcolor: 'white', padding: 2 }}>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              if (isStepOptional(index)) {
                labelProps.optional = <Typography variant="caption"></Typography>;
              }
              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>All steps completed - you&apos;re finished</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Box sx={{ flex: '1 1 auto' }} />
                <a href="/"><Button className="button" >❮ RETURN HOME</Button></a>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>

              {activeStep === 0 && (
                <React.Fragment>
                  <Typography sx={{ mt: 2 }}>Name + Surname :</Typography>
                  <TextField
                    placeholder="Add name of the author..."
                    variant="outlined"
                    fullWidth
                    margin="normal"
                  />
                  <Typography sx={{ mt: 2 }}>Title :</Typography>
                  <TextField
                    placeholder="Add a title..."
                    variant="outlined"
                    fullWidth
                    margin="normal"
                  />
                </React.Fragment>
              )}
              {activeStep === 1 && (
                <React.Fragment>
                  <Typography sx={{ mt: 2 }}>Description :</Typography>
                  <TextField
                    placeholder="Add a description..."
                    variant="outlined"
                    fullWidth
                    margin="normal"
                  />
                  <Typography sx={{ mt: 2 }}>Join files (optional) :</Typography>
                  <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={(event) => {
                      const selectedFiles = event.target.files;
                      console.log(selectedFiles);
                    }}
                  />
                  <Button sx={{ width: "100%", display: 'flex', alignItems: 'start' }}
                    variant="outlined"
                    onClick={() => {
                      fileInputRef.current.click();
                    }}
                  >
                    Add a file...
                  </Button>
                  <Typography sx={{ mt: 2 }}>Join link (optional) :</Typography>
                  <TextField
                    placeholder="Add a link..."
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={joinLink}
                    onChange={(event) => setJoinLink(event.target.value)}
                  />
                  {joinLink && (
                    <Typography variant="body1" sx={{ mt: 1 }}>
                      Join Link: <a href={joinLink}>{joinLink}</a>
                    </Typography>
                  )}
                </React.Fragment>
              )}
              {activeStep === 2 && (
                <React.Fragment>
                  <Typography sx={{ mt: 2 }}>date :</Typography>
                  <TextField
                    placeholder="Add a description..."
                    variant="outlined"
                    fullWidth
                    margin="normal"
                  />
                  <Typography sx={{ mt: 2 }}>hour :</Typography>
                  <div className='hour'>
                    <TextField
                      placeholder="00:00"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                    />
                    <Typography sx={{ mt: 2 }}>➡</Typography>
                    <TextField
                      placeholder="00.00"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                    />
                  </div>
                  <Typography sx={{ mt: 2 }}>duration :</Typography>
                  <TextField
                    placeholder="00:00"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                  />
                </React.Fragment>
              )}
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1, bgcolor: 'red', color: 'white' }}>
                  ❮
                </Button>
                <Button sx={{ bgcolor: 'green', color: 'white' }} onClick={handleNext}>
                  {activeStep === steps.length - 1 ? '☑ SAVE' : '❯'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Box>
      </Box>
    </body>
  );
}
