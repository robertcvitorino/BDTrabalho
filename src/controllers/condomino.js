const knex =require('../database')

module.exports={

    //CREATE
    async adicionarCondominio(req,res,next){          
      try {
          const {nome,CNPJ,endereco}=req.body    
            console.log(req.body)
             await knex.raw('insert into condominio(nome,CNPJ,endereco) values(?,?,?)',[nome,CNPJ,endereco])
             return res.status(201).send() 
          
      } catch (error) {
          next(error)
      }    
  },
   //READ ALL
   async buscarTodosCondominios(req,res,next){       
     
      try {
          var sql='select * from condominio'
          const result = await knex.raw(sql)
          console.log(result)
          return res.json(result)
      } catch (error) {
          next(error)
          
      }
    
    
   },//READ ID
   async buscarCondominio(req,res,next){  
     try {            
       const {id}=req.params
       const result = await knex.raw('select * from condominio where id=?',[id])
       console.log(result)
     
       return res.json(result)

     } catch (error) {
         next(error)
     }
    },
    //UPDATE
    async atualizandoCondominio(req,res,next){          
      try {
        
          console.log(req.body)

          const {id}=req.params

          const {nome}=req.body

           await knex.raw('update condominio set nome=? where id = ?',[nome,id])
           return res.send()        
       

      } catch (error) {
          
          next(error)
      }    
    },
   //DELETE
   async deltarCondominio(req,res,next){          
      try {
         const {id}=req.params         
         console.log(req.body)
         await knex.raw('delete from condominio where id=?',[id])
         return res.send()     
         
      } catch (error) {
         next(error)
      }      
   },
    

}