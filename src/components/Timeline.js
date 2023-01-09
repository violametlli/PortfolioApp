import React from "react";
import HorizontalTimeline from "react-horizontal-timeline";
import "./Timeline.css"

const EXAMPLE = [
  {
    data: "1999-07-08",
    status: "status",
    statusB: "I was born"
   
  },
  {
    data: "2003-03-09",
    status: "status",
    statusB: "You dont have to know :)"
    
  },
  {
    data: "2017-06-10",
    status: "status",
    statusB: "Finished high school"
  
  },
  {
    data: "2020-07-10",
    status: "status",
    statusB: "Got gradulated"
 
  },
  {
    data: "2020-09-10",
    status: "status",
    statusB: "Started working as Salesforce Dev"
  
  },
  {
    data: "2020-12-22",
    status: "status",
    statusB: "You don't have to know this either :)"
   
  },
  {
    data: "2021-06-01",
    status: "status",
    statusB: "Started working as BI Analyst "
  },
  {
    data: "2022-02-01",
    status: "status",
    statusB: "Developing react projects when i have time and will ;)"
    
  }

];
export default class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curIdx: 0,
      prevIdx: -1
    };
  }

  //state = { value: 0, previous: 0 };

  render() {
    const { curIdx, prevIdx } = this.state;
    const curStatus = EXAMPLE[curIdx].statusB;
    const prevStatus = prevIdx >= 0 ? EXAMPLE[prevIdx].statusB : "";

    return (
      <div>
        <div
          style={{
            width: "60%",
            height: "90px",
            margin: "0 auto",
            marginTop: "20px",
            fontSize: "13px"
          }}
        >
          <HorizontalTimeline
            styles={{
              foreground: "#FFC30B",
              outline: "#black"
              
            }}
            index={this.state.curIdx}
            indexClick={(index) => {
              const curIdx = this.state.curIdx;
              this.setState({ curIdx: index, prevIdx: curIdx });
            }}
            values={EXAMPLE.map((x) => x.data)}
          />
        </div>
        <div className="text-center">
          {/* Prevoius:-{prevStatus} - Current Select:-{curStatus} */}
          {curStatus}
        </div>
      </div>
    );
  }
}