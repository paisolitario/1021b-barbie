USE ("mypet");

db.createCollection("dono");

db.dono.insertOne(
    {_id:1, 
    nome:"tere",
    idade:28,
    animal:
        [
            {id},
            {id:2,nome:"pimenta"},
            {id:3,nome:"arroz"}
        ]
    }
)
