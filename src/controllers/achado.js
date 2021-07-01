const knex =require('../database')

module.exports={
    //CREATE
    async adicionarAchado(req,res,next){          
        try {
            const {descricao,colaborador_id,condominio_id,funcao}=req.body
            if(funcao== "Zelador"||funcao=="zelador"){
              console.log(req.body)
               await knex.raw('insert into achado(descricao, colaborador_id, condominio_id) values(?,?,?)',[descricao,colaborador_id,condominio_id])
               return res.status(201).send()
            }else{
               console.log(req.body +"Acesso negado")         
               return res.status(401).send("Voce nao tem permissao de cadastra achados e perdido, por gentileza procurar o zelador!")
            }   
            
        } catch (error) {
            next(error)
        }    
    },
    //READ ALL
    async buscarTodosAchados(req,res,next){       
     
        try {
            var sql='select achado.descricao as PecaEncontrada ,funcionario.nome as FuncionarioRegistrou,condominio.nome as Condominio from achado  inner join funcionario  on funcionario.id=achado.colaborador_id inner join condominio on condominio.id=achado.condominio_id;'
            const result = await knex.raw(sql)
            console.log(result)
            return res.json(result)
        } catch (error) {
            next(error)
            
        }      
      
     },
     //READ ID
    async buscarAchadoCondominio(req,res,next){  
      try {            
        const {id}=req.params
        const result = await knex.raw('select * from achado where id=?',[id])
        console.log(result)
      
        return res.json(result)

      } catch (error) {
          next(error)
      }
     },
     //UPDATE
    async atualizandoAchado(req,res,next){          
      try {     
        const {id}=req.params
        const {descricao,funcao}=req.body
        if(funcao== "Zelador"||funcao=="zelador"){
          console.log(req.body)
           await knex.raw('update achado set descricao=? where id = ?',[descricao,id])
           return res.send()
        
        }else{
         console.log(req.body +"Acesso negado")
          return res.status(401).send("Voce nao tem permissao de cadastra achados e perdido, por gentileza procurar o zelador!")
        }     

      } catch (error) {
          
          next(error)
      }    
    },
    //DELETE
    async deltarAchadoLista(req,res,next){          
        try {
            const {id}=req.params         
           console.log(req.body)
            await knex.raw('delete from achado where id=?',[id])
            return res.send()     
            
        } catch (error) {
            next(error)
        }      
    },

}