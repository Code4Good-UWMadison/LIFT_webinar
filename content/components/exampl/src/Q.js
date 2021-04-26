import React,{useState,useEffect} from 'react';
import './App.css';

function Q(props) {
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

  var Qarr = []

  Qarr.push(data.map((item)=><div>
                              {item.Question}<br />
                            </div>
  ))

  var index = props.i

  return (
    <div className="Q">
     {Qarr[0][index]}
    </div>
  );
}

export default Q;
