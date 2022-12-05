import { useState, useEffect } from "react";
import React from "react";
import {ChakraProvider } from "@chakra-ui/react";
import { Router } from "./routes/Router"
import axios from "axios";
import { GlobalContext } from "./contexts/GlobalContext";



function App() {

  const[usuarios, setUsuarios] = useState ([])
  const [idSelected, setIdSelected] = useState("")

  const pegarUsuarios = () =>{
      axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
          headers: {Authorization: "alexandre-shirota-ammal"}
      })
      .then((resposta) =>{
         
          setUsuarios(resposta.data)
         

      })
      .catch((error) =>{
console.log(error)
      })
  }

  console.log(usuarios)
  
  useEffect(()=>{
      pegarUsuarios()
  },[])
 
  const context = {
    usuarios,
    setUsuarios,
    setIdSelected,
    idSelected
  
  }

  return (
    
     <div>

<GlobalContext.Provider value={context}>
<ChakraProvider>
  
<Router/>

</ChakraProvider>
</GlobalContext.Provider>



     </div>
    
      
  );
}

export default App;
