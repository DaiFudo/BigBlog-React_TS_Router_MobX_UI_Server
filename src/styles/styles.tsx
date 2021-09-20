import {
  Button,
  Box,
  styled,
  TextField,
  Container,
  CssBaseline,
  Avatar,
  FormControl,
} from "@material-ui/core";
import FavoriteBorderRoundedIcon from "@material-ui/icons/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";
import BackspaceIcon from "@material-ui/icons/Backspace";

import { Link } from "react-router-dom";
//Header - доаботать адаптив
export const StyledHeader = styled(Box)({
  width: "982px",
  height: "56px",
  display: "flex",
  justifyContent: "space-between",
  margin: "0 auto",
  alignItems: "baseline",
});
export const StyledLogo = styled(Box)({
  fontSize: "24px",
  color: "#79b6f2 ",
  fontFamily: "Oswald",
  fontWeight: "bold",
});
export const StyledWrapper = styled(Box)({
  fontSize: "16px",
  display: "flex",
  flexDirection: "row",
  color: "#000000",
  opacity: "30.0%",
});
export const LinkRout = styled(Link)({
  padding: "0 10px 0 0",
  textDecoration: "none",

  fontFamily: "Oswald",
});
export const MyButton = styled(Button)({
  marginTop: "10px",
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  color: "white",
  height: "48px",
  padding: "0 30px",
  display: "flex",
  margin: "0 auto",
});
//Banner - доработать адаптив
export const StyledBanner = styled(Box)({
  height: "170px",
  backgroundColor: "#79b6f2",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  boxShadow: "rgba(0, 0, 0, 0.3) 0px 4px 100px -15px inset",
});
export const StyledLogoBanner = styled(Box)({
  fontFamily: "Oswald",
  fontWeight: "bold",
  fontSize: "60px",
  color: "white",
  textShadow: "-1px 0 black, 0 2px black, 2px 0 black, 0 -1px black",
});
export const StyledTitleBanner = styled(Box)({
  fontFamily: "Oswald",
  fontWeight: "bold",
  fontSize: "23px",
  color: "white",
  textShadow: "-1px 0 black, 0 2px black, 2px 0 black, 0 -1px black",
});
/* export const StyledLogo = styled(Box)({
  fontSize: "24px",
  color: "#79b6f2 ",
  fontFamily: "Oswald",
  fontWeight: "bold",
}); */

// Feed - доработать адаптив
export const StyledFeed = styled(Box)({
  width: "55vw",
  minHeight: "70px",
  justifyContent: "space-between",
  margin: "0 auto",
});
export const StyledFeedToggle = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "baseline",
  padding: ".5em 1em",
  float: "right",
  paddingRight: "5px",
});
export const StyledRow = styled(Box)({
  display: "flex",
  justifyContent: "space-between",

  alignItems: "baseline",
  padding: ".5em 1em",
  flexDirection: "column",
  width: "825px",
});
export const StyledNavigation = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "baseline",
  padding: ".5em 1em",
});
export const StyledToggleLink = styled(Box)({
  margin: "0px 5px",
  "&:hover": {
    cursor: "pointer",
  },
  "&.active": {
    borderBottom: "1px solid #79b6f2",
  },
  "&:nth-child(2)": {
    borderBottom: "1px solid #79b6f2",
  },
});
export const StyledPost = styled(Box)({
  marginTop: "24px",
  width: "40vw",
  minHeight: "125px",
});
export const StyledAvatar = styled(Avatar)({
  float: "left",
  marginRight: "5px",
});
export const StyledInfo = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  paddingLeft: "5px",
});
export const StyledLike = styled(Button)({
  width: "65px",
  height: "35px",
  backgroundColor: "grey",
});
export const StyledTitle = styled(Box)({
  fontWeight: "bold",
  fontSize: "20px",
  marginBottom: "5px",
});
export const StyledDescription = styled(Box)({
  marginTop: "5px",
  paddingBottom: "5px",
  borderBottom: "1px solid #79b6f2",
});

export const StyledTags = styled(Box)({
  display: "block",
  position: "absolute",
  right: "24%",
  marginTop: "32px",
  padding: "5px 10px 10px",
  background: "#f3f3f3",
  borderRadius: "4px",
  width: "150px",
});
export const StyledTag = styled(Box)({
  color: "black",
  fontSize: "16px",
});
export const StyledPostContent = styled(Box)({});
//Pagination
export const Pagination = styled(Box)({
  width: "33vw",
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "row",
  listStyleType: "none",
});
export const StyledList = styled(Box)({
  "&:nth-child(1)": {
    backgroundColor: "#79b6f2",
  },
});
export const StyledAttribyteA = styled(Box)({
  position: "relative",
  float: "left",
  padding: ".5rem .75rem",
  marginLeft: "-1px",

  textDecoration: "none",
  border: "1px solid #ddd",
  "&:hover": {
    cursor: "pointer",
  },

  "&.active": {
    backgroundColor: "#79b6f2",
  },
});

//Footer
export const StyledFooter = styled(Box)({
  width: "99%",
  height: "58px",
  margin: " 0 auto",
  position: "absolute",
  display: "flex",
  backgroundColor: "#f3f3f3",
  alignItems: "center",
  justifyContent: "center",
});

// Login/Regestration

// Other styles

export const StyledFormApplication = styled(Box)({
  display: "flex",
  flexDirection: "column",
});
export const StyledFormApplicationFeed = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "70%",
});

export const StyledBox = styled(Box)({
  textTransform: "uppercase",
  paddingTop: "50px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  fontSize: "2rem",
  padding: "10px",
  width: "400px",
  height: "350px",
});

export const InputStyle = styled(TextField)({
  marginBottom: "1rem",
  fontSize: "2rem",
  border: "2px solid grey",
  borderRadius: "10px",
  padding: "10px",
  backgroundColor: "white",
  width: "350px",
  display: "flex",
  margin: "0 auto",
});
export const StyledFormControl = styled(FormControl)({
  display: "flex",
  margin: "0 0",
  width: "70%",
});

export const InputTitle = styled(TextField)({ marginTop: "10px" });
export const InputDescr = styled(TextField)({ marginTop: "10px" });
export const InputTags = styled(TextField)({
  marginTop: "10px",
});
export const StyleContainer = styled(Container)({});
export const StyleCssBaseline = styled(CssBaseline)({});

//icons

export const Like = styled(FavoriteBorderRoundedIcon)({
  width: "30px",
  height: "30px",
  paddingLeft: "10px",
});
export const DisLike = styled(FavoriteRoundedIcon)({
  width: "30px",
  height: "30px",
  paddingLeft: "10px",
});
export const Trash = styled(BackspaceIcon)({
  width: "30px",
  height: "30px",
  paddingLeft: "10px",
});
