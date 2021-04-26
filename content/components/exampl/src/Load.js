import React,{useState,useEffect} from 'react';
import './App.css';

function Load(props) {
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
  var Qarr = []
  var Narr = []
  {/*arr.push(data.map((item)=><div>
                              <p id="id">{item.ID}</p>
                              <p id="q">{item.Question}</p>
                              <p id="n">{item.Navigate}</p>
                            </div>
  ))*/}

  IDarr.push(data.map((item)=><div>
                              {item.ID}
                            </div>
  ))
  Qarr.push(data.map((item)=><div>
                              {item.Question}<br />
                            </div>
  ))
  Narr.push(data.map((item)=><div>
                              {item.Navigate}<br />
                            </div>
  ))

  var index = props.i

  return (
    <div className="Load">
     {/*{data && data.length>0 && data.map((item)=><p>{item.ID},</p>)}*/}
     {IDarr[0][index]}
     {Qarr[0][index]}
     {Narr[0][index]}
    </div>
  );
}

export default Load;
