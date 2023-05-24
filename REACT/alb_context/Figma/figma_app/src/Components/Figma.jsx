import React, { useContext } from "react";
import App from "../App.css";
import { ThemeContext } from "../Contexts/ThemeContext";

const Figma = () => {
    const [theme, toggleTheme] = useContext(ThemeContext)
  return (
    <div>
      <div className="parent">
        <div className="one">
          <div>
            <img
              src="https://lh3.googleusercontent.com/a/AGNmyxYDwt9yfyJmUIBswijLB_cZIEFLGpP13KawYVUAxQ=s396-c-no"
              alt="img"
              width="60px"
              style={{ borderRadius: "50%" }}
            />
          </div>

          <div className="middle">
            <div>
              <i class="fa-regular fa-signal-bars">V</i>
            </div>
            <div>I</div>
            <div>S</div>
            <div>H</div>
            <div>A</div>
            <div>L</div>
          </div>

          <div>
            <button className="btn">+</button>
          </div>
        </div>
        <div className="two">

         <button style={{borderRadius:"50%"}}      
         onClick={()=>toggleTheme()}
         >Toggle</button>
          <div className="a">
            <div>Active Users</div>
            <div>for August 2020</div>
          </div>

          <div className="b">
            <div>
              <img
                src="data:image/jpeg;base64,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"
                alt="img"
                width="60px"
                style={{ borderRadius: "50%" }}
              />
            </div>
            <div className="c">
              <div>Nrupul Dev</div>
              <div>Banglore India</div>
            </div>
            </div>

          <div className="a">
            <div>Professional Level 15</div>
            <div>4723</div>
          </div>

          <div className="b">
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiUSvX9gzrD4Kl2DhcXIa2pgie_ic58UfQxw&usqp=CAU"
                alt="img"
                width="60px"
                style={{ borderRadius: "50%" }}
              />
            </div>
            <div className="c">
              <div>Sandhya </div>
              <div>Banglore India</div>
            </div>
            </div>

            <div className="a">
            <div>Professional Level 11</div>
            <div>2339</div>
          </div>



          <div className="b">
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBjItDDHjEGqlIoehvXEKbjmG3G9qZ1-whnQ&usqp=CAU"
                alt="img"
                width="60px"
                style={{ borderRadius: "50%" }}
              />
            </div>
            <div className="c">
              <div>Elon Mask</div>
              <div>California USA</div>
            </div>
            </div>

            <div className="a">
            <div>Professional Level 6</div>
            <div>1884</div>
          </div>



       
        </div>
      </div>
    </div>
  );
};

export default Figma;
