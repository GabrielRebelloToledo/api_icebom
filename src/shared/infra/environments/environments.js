import 'dotenv/config';  // Carregar as variáveis do arquivo .env
// Importando o TypeORM
import { DataSource } from 'typeorm';
import fb from 'node-firebird';

import fs from 'fs';
import https from 'https';

import CapturaComposicaoService from '../../../modules/buscaComposicao/services/captura-composicao.js'


const AppDataSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true, //rodar criação de tabela automatica
    logging: false,
    timezone: 'Z',
    entities: ["src/entities/*{.js,.ts}"],
    migrations: ["src/migrations/*{.js,.ts}"], // Caminho para suas migrations
    cli: {
        migrationsDir: "src/migrations" // Diretório onde as migrations serão criadas
    }
});



/**
 * Firebird (node-firebird)
 */
const firebirdOptions = {
    host: process.env.RO_DB_HOST,             // ex: '127.0.0.1'
    port: Number(process.env.RO_DB_PORT) || 3050,
    database: process.env.RO_DB_PATH,         // caminho completo do .FDB
    user: process.env.RO_DB_USER,             // ex: 'SYSDBA'
    password: process.env.RO_DB_PASSWORD,
    lowercase_keys: false,
    role: null,
    pageSize: 4096,
    charset: 'UTF8',                          // ajuste se seu banco estiver em ISO8859_1 / WIN1252
    dialect: 3,
};

export function queryFirebird(query, params = []) {
    return new Promise((resolve, reject) => {
        fb.attach(firebirdOptions, (err, db) => {
            if (err) {
                return reject(err);
            }

            db.query(query, params, (err2, result) => {
                db.detach(); // SEMPRE liberar

                if (err2) {
                    return reject(err2);
                }

                resolve(result);
            });
        });
    });
}

/**
 * Inicializar Firebird (equivalente ao "initialize" do TypeORM)
 */
export function initializeFirebird() {

    return new Promise((resolve, reject) => {
        fb.attach(firebirdOptions, (err, db) => {
            if (err) {
                console.error('❌ Erro ao conectar no Firebird (read-only):', err);
                console.warn('➡️ Seguindo sem Firebird...');
                return resolve(false); // NUNCA reject
            }
            // Teste simples de query
            db.query('SELECT 1 FROM RDB$DATABASE', (err2) => {
                db.detach();

                if (err2) {
                    console.error('Firebird conectado, mas falhou ao executar query de teste:', err2);
                    return reject(err2);
                }

                console.log('Conexão Firebird (read-only) estabelecida com sucesso!');
                resolve(true);
            });
        });
    });
}


// Função para inicializar o banco de dados
export const initializeDatabase = async () => {
    try {
        await AppDataSource.initialize();
        console.log('Conexão estabelecida com sucesso!');

        // Firebird (node-firebird)
        await initializeFirebird();
    } catch (err) {
        console.error('Erro na conexão:', err);
        process.exit(1);
    }
};


const options = {
    key: fs.readFileSync('cantina.pem'),  // Rota para o arquivo PEM combinado (chave privada e certificado)
    cert: fs.readFileSync('cantina.pem'), // Rota para o arquivo PEM combinado (chave privada e certificado)
};

// Função para iniciar o servidor
export const startServer = (app) => {
    const port = process.env.PORT || 3000;

    console.log(process.env.SERVER)

    if (process.env.SERVER == "HTTP") {
        app.listen(port, () => {
            console.log(`Servidor rodando HTTP na porta ${port}`);
        });

    } else {
        const server = https.createServer(options, app);
        // Ouvir
        server.listen(port, () => {
            console.log(`Servidor rodando HTTPS na porta ${port}`);
        });

    }

};

export default AppDataSource;
