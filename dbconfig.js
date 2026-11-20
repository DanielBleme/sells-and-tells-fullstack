const config ={
        server: 'localhost',
        authentication: {
            type: 'default',
            options: {
                userName: 'sa',
                password: 'consulta123'
            }
        },
        options:{
            encrypt: false,
            database: 'Produtos'
        },
        port: 65281
}

module.exports = config;