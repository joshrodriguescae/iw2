function banco(){
const dados=[
    {
        id:1,
        login:"Ringo",
        Senha:"1234",
        email:"ringo@gmail.com"
      

     },
       

        
    {
      id:2,
      login:"Paul",
      Senha:"2222",
      email:"paul@gmail.com", 

    },
     

    {
      id:3,
      login:"Johe",
      Senha:"3333",
      email:"johe@gmail.com"

    }
              

 ]
 const ds = JSON.stringify(dados)
 
 localStorage.setItem("bd", ds)

 return ds
}
function converte(){
 const ds = JSON.parse(localStorage.getItem("bd"))
 localStorage.removeItem("bd")
 let t =  {
     id:4,
     login:"Sara",
     senha:"4444",
     email:"sara@gmail.com"
 }
 ds.push()

 const json = JSON.stringify(ds)
 localStorage.setItem("bd", json)

}          
             

         
              

    
           

     

























