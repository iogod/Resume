import React  from 'react'

const validation = (word) => {
   
    let error = false
   Object.values(word).map((b,key) => {
     
      
        let field = ""
        let ke = Object.keys(word)[key]
        if(b === ""  && ke !== "Organization"){
           field = ke + " cannot be empty"
           error = true
        
        }
      word[ke] = field
        return 
    })
error ?  error= true : word=error
  return word

  


   // wo === '' ? erros.push("Field") : console.log("OH NAW")

    
   
   

}

export default validation