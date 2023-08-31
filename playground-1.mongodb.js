

// Create a new database.
//CREATE DATABASE TEST
use("test");

// Create a new collection.
db.createCollection("cardapio");
db.cardapio.insert(
    {nome:"lasanha",preco:20.00,igredientes: "macarrao, presunto, queijo, carne"}
    {nome:"empadao",preco:20.00,igredientes: "frango, manteiga, trigo, tempero"}
    {nome:"canolli",preco:20.00,igredientes: "molho, presunto, queijo, massa"}
)
