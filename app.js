
import express from 'express';
import helmet from 'helmet';
import { initializeDatabase, startServer } from './src/shared/infra/environments/environments.js';  // Importa funções de server.js

// Rotas iniciais

import userSessions from './src/modules/user/routes/sessions.routes.js';
import flowroutes  from './src/modules/flow/routes/flow.routes.js';
import processroutes  from './src/modules/process/routes/process.routes.js';
import productsRoutes from './src/modules/products/routes/products.routes.js';
import uploadRoutes from './src/modules/files/routes/files.routes.js';
import stepform from './src/modules/forms/routes/forms.routes.js';
import processActivityRoutes from './src/modules/process-activity/routes/process-activity.routes.js';
import statusRoutes from './src/modules/status/routes/status.routes.js';



import corsConfig from './src/config/cors.config.js';
import cors from 'cors';



const app = express();

app.use(cors(corsConfig));
app.use(express.json());

app.get('/online', (req, res) => {
    res.send('Olá, Mundo!');
});

app.use(express.static("public/browser"));

app.use(
    helmet({
        contentSecurityPolicy: false, // Desativa CSP
        frameguard: {
            action: 'deny', // Bloqueia frames de qualquer origem
        },
    })
);

app.use('/sessions', userSessions);
app.use('/flow', flowroutes);
app.use('/process', processroutes);
app.use('/products', productsRoutes);
app.use('/upload',uploadRoutes);
app.use('/stepform',stepform);
app.use('/activity',processActivityRoutes);
app.use('/status',statusRoutes);
// Inicializar o banco de dados
initializeDatabase();
// Iniciar o servidor
startServer(app);
