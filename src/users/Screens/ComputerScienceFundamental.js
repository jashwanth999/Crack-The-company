import React, { useState } from "react";
import { StyleRoot } from "radium";
import { useNavigate } from "react-router-dom";
import LeftDrawer from "../Helpers/LeftDrawer";
import { homeData, truncate } from "../Helpers/helpersData";
import RightDiv from "../Components/RightDiv";
import { homeTools } from "../Helpers/EdtiorTools";
import LeftDiv from "../Components/LeftDiv";
import { Typography } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import LeftDiv2 from "../Components/LeftDiv2";
export default function ComputerScienceFundamentals() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const data = [
    {
      name: "title",
      value: "Computer Science fundamentals",
    },
    {
      name: "description",
      value:
        "Computer science is the study of computers and computing as well as their theoretical and practical applications. Computer science applies the principles of mathematics, engineering, and logic to a plethora of functions, including algorithm formulation, software and hardware development, and artificial intelligence.",
    },
  ];

  const subjects = [
    {
      subjectName: "OOPS Concept",
      subTopic: "Class-and-Objects",
    },
    {
      subjectName: "Operating Systems",
      subTopic: "Introduction",
    },
    {
      subjectName: "DBMS",
      subTopic: "Class-and-Objects",
    },
    {
      subjectName: "Computer Network",
      subTopic: "Class-and-Objects",
    },
  ];

  return (
    <StyleRoot>
      <div className="App" style={rootDiv}>
        <div className="leftDiv" style={leftDiv}>
          <LeftDiv2
            navigate={navigate}
            truncate={truncate}
            title={"Quick Links"}
            list={homeData}
          />
        </div>
        <div className="rightDiv" style={rightDiv}>
          <RightDiv
            problemData={data}
            loading={loading}
            tools={homeTools}
            screen="cs-fundamentals"
          />

          <div style={{ textAlign: "left", margin: 10, marginTop: 0 }}>
            {subjects.map((val, index) => (
              <Typography
                onClick={() => {
                  navigate(
                    `${val.subjectName.replace(/ /g, "-")}/${val.subTopic}`
                  );

                  document.title = val.subjectName;
                }}
                key={index}
                style={subjectText}
              >
                <FiberManualRecordIcon style={{ fontSize: 12, padding: 2 }} />
                {val.subjectName}
              </Typography>
            ))}
          </div>
        </div>
      </div>

      <LeftDrawer
        component={
          <LeftDiv2
            navigate={navigate}
            truncate={truncate}
            title={"Quick Links"}
            list={homeData}
          />
        }
      />
    </StyleRoot>
  );
}
const rootDiv = {
  display: "flex",
  flexDirection: "row",
  flex: 1,
};
const leftDiv = {
  display: "flex",
  flex: 0.25,
  backgroundColor: "#212F3C",
  height: "100vh",
  flexDirection: "column",
  textAlign: "left",
  overflowY: "scroll",
  "@media (max-width: 600px)": {
    display: "none",
  },
};
const rightDiv = {
  display: "flex",
  flex: 1,
  backgroundColor: "white",
  height: "100vh",

  flexDirection: "column",
  overflowY: "scroll",
  "@media (max-width: 600px)": {},
};

const subjectText = {
  fontWeight: "bold",
  fontSize: 15,
  color: "#58D68D",
  padding: 5,
  alignItems: "center",
  display: "flex",
  cursor: "pointer",
};
