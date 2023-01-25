import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Divider,
  FormControlLabel,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Stack } from "@mui/system";
import style from "./security.module.css";
import PasswordChecklist from "react-password-checklist";

const Security = () => {
  //   const [isOn, setIsOn] = useState(false);

  //   const handleChange = (e) => {
  //     const val = e.target.checked;
  //     setIsOn(val);
  //   };
  //   const IOSSwitch = styled((props) => (
  //     <Switch
  //       focusVisibleClassName=".Mui-focusVisible"
  //       disableRipple
  //       {...props}
  //       checked={isOn}
  //       onChange={handleChange}
  //     />
  //   ))(({ theme }) => ({
  //     width: 44,
  //     height: 26,
  //     padding: 0,
  //     "& .MuiSwitch-switchBase": {
  //       padding: 0,
  //       margin: 2,
  //       transitionDuration: "300ms",
  //       "&.Mui-checked": {
  //         transform: "translateX(16px)",
  //         color: "#fff",
  //         "& + .MuiSwitch-track": {
  //           backgroundColor:
  //             theme.palette.mode === "dark" ? "#2ECA45" : "#1890ff",
  //           opacity: 1,
  //           border: 0,
  //         },
  //         "&.Mui-disabled + .MuiSwitch-track": {
  //           opacity: 0.5,
  //         },
  //       },
  //       "&.Mui-focusVisible .MuiSwitch-thumb": {
  //         color: "#33cf4d",
  //         border: "6px solid #fff",
  //       },
  //       "&.Mui-disabled .MuiSwitch-thumb": {
  //         color:
  //           theme.palette.mode === "light"
  //             ? theme.palette.grey[100]
  //             : theme.palette.grey[600],
  //       },
  //       "&.Mui-disabled + .MuiSwitch-track": {
  //         opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
  //       },
  //     },
  //     "& .MuiSwitch-thumb": {
  //       boxSizing: "border-box",
  //       width: 25,
  //       height: 22,
  //     },
  //     "& .MuiSwitch-track": {
  //       borderRadius: 26 / 2,
  //       backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
  //       opacity: 1,
  //       transition: theme.transitions.create(["background-color"], {
  //         duration: 500,
  //       }),
  //     },
  //   }));

  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
  });

  //   const IOSSwitch = withStyles((theme) => ({
  //     root: {
  //       width: 42,
  //       height: 26,
  //       padding: 0,
  //       margin: theme.spacing(1),
  //     },
  //     switchBase: {
  //       padding: 1,
  //       '&$checked': {
  //         transform: 'translateX(16px)',
  //         color: theme.palette.common.white,
  //         '& + $track': {
  //           backgroundColor: '#52d869',
  //           opacity: 1,
  //           border: 'none',
  //         },
  //       },
  //       '&$focusVisible $thumb': {
  //         color: '#52d869',
  //         border: '6px solid #fff',
  //       },
  //     },
  //     thumb: {
  //       width: 24,
  //       height: 24,
  //     },
  //     track: {
  //       borderRadius: 26 / 2,
  //       border: `1px solid ${theme.palette.grey[400]}`,
  //       backgroundColor: theme.palette.grey[50],
  //       opacity: 1,
  //       transition: theme.transitions.create(['background-color', 'border']),
  //     },
  //     checked: {},
  //     focusVisible: {},
  //   }))(({ classes, ...props }) => {
  //     return (
  //       <Switch
  //         focusVisibleClassName={classes.focusVisible}
  //         disableRipple
  //         classes={{
  //           root: classes.root,
  //           switchBase: classes.switchBase,
  //           thumb: classes.thumb,
  //           track: classes.track,
  //           checked: classes.checked,
  //         }}
  //         {...props}
  //       />
  //     );
  //   });

  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const [otpBox, setotpBox] = useState([
    {
      id: 0,
    },
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 0,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
  ]);
  return (
    <>
      <div className={style["main"]}>
        <Stack>
          {/* sx={{ marginLeft: "30px", marginTop: "30px" }} */}
          <Typography variant="h5">Security</Typography>
          <Typography variant="body1">
            Settings to help you keep your account safe & secure.
          </Typography>
        </Stack>

        <div style={{ marginTop: "20px" }}>
          <Accordion className={style["main_acco"]}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <div className={style["acco"]}>
                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: "17px",
                  }}
                >
                  Password
                </span>

                <span
                  style={{
                    color: "#646f79",
                    fontWeight: "400",
                  }}
                >
                  No Password change activity or alerts
                </span>
                <Divider
                  sx={{
                    borderColor: "#d7d4d4",
                    marginTop: "10px",
                    width: "1050px",
                  }}
                />
              </div>
            </AccordionSummary>

            <span className={style["left_box"]}>
              <AccordionDetails>
                <Typography>
                  <div>Enter OTP</div>
                  <div>To change Password, click on Generate OTP first.</div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "15px",
                    }}
                  >
                    {otpBox.map((data) => {
                      return (
                        <p>
                          <input className={style["otp_box"]} type="number" />
                        </p>
                      );
                    })}
                  </div>
                  <div style={{ color: "#00abff" }}>Generate OTP</div>
                  <div className={style["new_password"]}>
                    <div>New Password</div>
                    <TextField
                      sx={{
                        color: "#646f79",
                        width: "382px",
                        marginTop: "10px",
                      }}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="New Password"
                      variant="outlined"
                      size="small"
                      type="password"
                    ></TextField>
                  </div>
                  <div className={style["new_password"]}>
                    <div>Confirm Password</div>
                    <TextField
                      sx={{
                        color: "#646f79",
                        width: "382px",
                        marginTop: "10px",
                      }}
                      onChange={(e) => setPasswordAgain(e.target.value)}
                      placeholder="New Password"
                      variant="outlined"
                      size="small"
                      type="password"
                    ></TextField>
                  </div>
                  <div style={{ marginTop: "20px" }}>
                    <Button
                      style={{
                        backgroundColor: "#00abff",
                        color: "white",
                        height: "40px",
                        width: "200px",
                        borderRadius: "5px",
                      }}
                    >
                      Change Password
                    </Button>
                  </div>
                </Typography>
              </AccordionDetails>
            </span>
            <span className={style["right_box"]}>
              <div style={{ fontWeight: "400" }}>Follow the instruction</div>
              <div style={{ color: "#646f79", marginTop: "10px" }}>
                To create a new password, you have to meet all of the following
                requirements.
              </div>
              <li className={style["condition"]}>
                {/* <CheckCircleOutlineIcon /> */}
                <span></span>
                <PasswordChecklist
                  className={style["custom_passwd"]}
                  rules={["minLength", "specialChar", "number", "match"]}
                  minLength={8}
                  value={password}
                  valueAgain={passwordAgain}
                  onChange={(isValid) => {}}
                  messages={{
                    minLength: "Minimum 8 character",
                    specialChar: "At least one special character",
                    number: "At least one number",
                    match: "New and confirmed passwords must match.",
                  }}
                  
                  iconComponents={{
                    ValidIcon: (
                      <CheckCircleOutlineIcon style={{ color: "green" }} />
                    ),
                    InvalidIcon: <CheckCircleOutlineIcon />,
                  }}
                />
              </li>
            </span>
          </Accordion>
          <Accordion sx={{ marginTop: "20px" }}>
            <AccordionSummary
              expandIcon={
                <Switch
                  checked={state.checkedB}
                  onChange={handleChange}
                  color="primary"
                  name="checkedB"
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
              }
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <div className={style["acco"]}>
                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: "17px",
                  }}
                >
                  2-Step Verification
                </span>

                <span
                  style={{
                    color: "#646f79",
                    fontWeight: "400",
                  }}
                >
                  Setup or manage your 2-step authentication mode
                </span>
                <Divider
                  sx={{
                    borderColor: "#d7d4d4",
                    marginTop: "10px",
                    width: "1050px",
                  }}
                />
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default Security;
