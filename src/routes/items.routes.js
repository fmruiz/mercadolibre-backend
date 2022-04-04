const express = require('express');
const { getItems, getItemById } = require('../controllers/items.controllers');

const router = express.Router();

/** 
* @swagger
* components:
*   schemas:
*       Products:
*           type: object
*           properties:
*               author:
*                   type: object
*                   properties:
*                       name:
*                           type: string
*                       lastname:
*                           type: string
*                   example: {name: "Franco", lastname: "Ruiz"}
*               categories:
*                   type: array
*                   items:
*                       type: string
*                   example: ["celulares"]
*               items:
*                   type: array
*                   items:
*                       type: object
*                   example: [{id: "MLA123512", title: "iphone 11", city: "Tucuman", price: {currency_id: "ARS", price: 200000}, picture: "example.jpg", condition: "new", free_shipping: true}]
*   parameters:
*       search:
*           in: query
*           name: q
*           required: true
*           schema:
*               type: string
*/

/** 
* @swagger
* components:
*   schemas:
*       Item:
*           type: object
*           properties:
*               author:
*                   type: object
*                   properties:
*                       name:
*                           type: string
*                       lastname:
*                           type: string
*                   example: {name: "Franco", lastname: "Ruiz"}
*               items:
*                   type: object
*                   properties:
*                       type: object
*                   example: [{id: "MLA123512", title: "iphone 11", price: {currency_id: "ARS", price: 200000}, picture: "example.jpg", condition: "new", free_shipping: true, sold_quantity: 90, description: "description of product"}]
*   parameters:
*       id:
*           in: path
*           name: id
*           required: true
*           schema:
*               type: string
*/

/** 
* @swagger
* /api/items:
*   get:
*       summary: Get a search products
*       parameters:
*          - $ref: '#/components/parameters/search'
*       responses: 
*           200:
*               description: Consult Meli api to get products from their marketplace along with information about price, condition, etc.
*               content:
*                   application/json:
*                       schema:
*                           type: array
*                           items:
*                               $ref: '#/components/schemas/Products'
*/

router.get('', getItems)

/** 
* @swagger
* /api/items/{id}:
*   get:
*       summary: Get information about a product by ID
*       parameters:
*          - $ref: '#/components/parameters/id'
*       responses: 
*           200:
*               description: Consult Meli api to get information about a selected product by ID
*               content:
*                   application/json:
*                       schema:
*                           type: array
*                           items:
*                               $ref: '#/components/schemas/Item'
*/

router.get('/:id', getItemById)

module.exports = router;
