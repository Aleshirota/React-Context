import Card from "../components/card/Card"
import { Flex } from "@chakra-ui/react"
import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"



function HomePage() {
   const context = useContext(GlobalContext) 
   const {usuarios} = context
   
    

    return (
    
        <Flex gap={"16px"} wrap={"wrap"}>
          {usuarios.map((usuario) => {
            return <Card usuario={usuario} key={usuario.id}/>
          })}
    
          </Flex>
        
    
      
    )
    
    }

export default HomePage