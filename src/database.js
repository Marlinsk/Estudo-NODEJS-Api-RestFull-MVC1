require('dotenv').config();

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL_ADDRESS, { useUnifiedTopology: true })
        .then(res => console.log(`Conexão bem-sucedida ${res}`))
        .catch(err => console.log(`Erro na conexão do banco de dados ${err}`));

