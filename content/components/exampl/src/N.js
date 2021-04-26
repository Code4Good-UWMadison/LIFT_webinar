import React,{useState,useEffect} from 'react';
import './App.css';
import Q from "./Q.js";

function N(props) {
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

  var Narr = []

  Narr.push(data.map((item)=><div>
                              {item.Navigate}<br />
                            </div>
  ))

  var index = props.i

  return (
    <div className="N">
     {Narr[0][index]}
    </div>
  );
}

export default N;
