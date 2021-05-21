import React, { useState } from "react";
import axios from "axios";
import MiseList from "./components/MiseList";
const App = () => {
  return <MiseList />;
};

// const App = () => {
//   const [data, setData] = useState(null);
//   const onClick = async () => {
//     try {
//       const API_KEY = "ebd473cf-b3d6-45e4-b70a-8ef936c889ef";
//       const response = await axios.get(
//         `http://api.airvisual.com/v2/city?city=Chilgok&state=Gyeongsangbuk-do&country=South%20Korea&key=${API_KEY}`
//       );
//       setData(response.data);
//     } catch (e) {
//       console.log(e);
//     }
//   };
//   return (
//     <div>
//       <div>
//         <button onClick={onClick}>불러오기</button>
//       </div>
//       {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} />}
//     </div>
//   );
// };

export default App;
