import React, { useState } from "react";
import "./faq.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
const CustomAcc = (props) => {
  const { id, title, info } = props.data;
  const [showInfo, setshowInfo] = useState(false);

  const handleClick = () => {
    setshowInfo(!showInfo);
    console.log(showInfo);
  };

  return (
    <section key={id} className="faq">
      <div className="title-button-container">
        {showInfo ? (
          <h2
            style={{
              fontWeight: 800,
            }}
          >
            {title}
          </h2>
        ) : (
          <h2
            className="title-button-container-heading"
            
          >
            {title}
          </h2>
        )}

        {showInfo ? (
          <ExpandLessIcon
            onClick={handleClick}
            style={{ color: "#f47c57", cursor: "pointer" }}
          />
        ) : (
          <ExpandMoreIcon
            onClick={handleClick}
            style={{ color: "#f47c57", cursor: "pointer" }}
          />
        )}
      </div>
      {showInfo && <p>{info}</p>}
    </section>
  );
};

export default CustomAcc;
