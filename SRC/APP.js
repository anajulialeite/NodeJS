const express = require('express')
const app = express()
const port = 3000

//criar rota padrão ou raiz
app.get('/', (rec, res) =>  {
    res.send('Curso de Node JS') //para trocar a frase Olá mundo para Hello Word basta digitar e depois apertar CTRL + C para parar o servidor e apertar a seta para cima pra mostrar os códigos que digitei e apertar enter novamente para autulizar o site.
})

//escutar a porta 3000
app.listen(port, () => {
    console.log(`servidor rodando no endereço http://localhost:${port}`)//basta abrir o link e digitar no terminal nodesrc/app.js
})
//toda vez que tiver usabdo o .js tem que deixar uma linha branca no final (isso é de prache)
