import React,{useState,useEffect} from 'react';
import './App.css';

function ID(props) {
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

  var IDarr = []


  IDarr.push(data.map((item)=><div>
                              {item.ID}
                            </div>
  ))

  var index = props.i

  return (
    <div className="Load">
     {IDarr[0][index]}
    </div>
  );
}

export default ID;
