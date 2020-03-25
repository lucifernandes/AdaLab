const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
/**
 * Rota:/blablabla
 * Recurso: o q fica dps da barra
 */

 /**
  * Métodos HTTP:
  * GET: Buscar uam info do back-end
  * POST: Criar uma info no back-end
  * PUT: Alterar uma info no back-end
  * DELETE: Deletar uma info no back-end
  */

  /**
   * Tipos de parâmetros
   * 
   * Query: parâmetros nomeados enviados na rota após "?" (filtros, paginação)
   * Route: parâmetros utilizados para identificar recursos
   * Request body: corpo da requisição, utilizado para criar ou alterar recursos
   */

   /**
    * 
    */


app.listen(3333);
