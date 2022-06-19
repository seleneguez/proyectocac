const productos =[
    {id:1, name:'producto Nro1'},
    {id:1, name:'producto Nro1'},
    {id:1, name:'producto Nro1'},
]
 const all=()=>{
     return productos;
 }
  
 const find= (id) =>{
     return productos.find (producto => producto.id == id)
 }

module.exports ={
    all,
    find
}