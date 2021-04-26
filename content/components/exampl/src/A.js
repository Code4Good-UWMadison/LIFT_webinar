import React,{useState,useEffect} from 'react';
import './App.css';
import Q from "./Q.js";

function A(props) {
  const [data,setData]=useState([]);
  const getData = () => {
      fetch('JSONData.json'
          ,{
            headers : {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
          }
      ).then(function(response){
          console.log(response)
          return response.json();
      }).then(function(myJson) {
          console.log(myJson);
          setData(myJson)
      });
  }

  useEffect(() => {
    getData()
  },[])

  var Aarr0 = []
  var Aarr1 = []
  var Aarr2 = []

  Aarr0.push(data.map((item)=><div>
                              {item.Answers[0]}<br />
                            </div>
  ))
  Aarr1.push(data.map((item)=><div>
                              {item.Answers[1]}<br />
                            </div>
  ))
  Aarr2.push(data.map((item)=><div>
                              {item.Answers[2]}<br />
                            </div>
  ))

  var index = props.i
  var aN = props.aN

  if(aN==0){
      return (
        <div className="A">
         {Aarr0[0][index]}
        </div>
      );
  } else if(aN==1){
      return (
        <div className="A">
         {Aarr1[0][index]}
        </div>
      );
  } else if(aN==2){
      return (
        <div className="A">
         {Aarr2[0][index]}
        </div>
      );
  }
}

export default A;
