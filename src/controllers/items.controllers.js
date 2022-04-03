const axios = require('axios');
const responseBuilder = require('../utils/responseBuilder');

const getItems = async (req, res) => {
    try {
        const { q } = req.query;

        if (!q) {
            return res.status(400).json(responseBuilder(400, 'El parametro de busqueda es obligatorio'));
        };

        const query = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${q}&limit=4`);
        const { results, filters } = query.data;

        let categories = filters[0]?.values.map(value => value.name)

        let items = results?.map((result) => (
            {
                id: result.id,
                title: result.title,
                city: result.seller_address.city.name,
                price: {
                    currency: result.currency_id,
                    amount: result.price,
                },
                picture: result.thumbnail,
                condition: result.condition,
                free_shipping: result.shipping.free_shipping
            }
        ));

        res.json({
            author: {
                name: 'Franco',
                lastname: 'Ruiz'
            },
            categories,
            items
        });

    } catch (error) {
        console.log(error);
        res.status(500).json(responseBuilder(500, 'Hubo un fallo en el servidor'))
    }
}

const getItemById = async (req, res) => {
    try {
        const { id } = req.params;

        const query = await axios.get(`https://api.mercadolibre.com/items/${id}`);
        const descriptionQuery = await axios.get(`https://api.mercadolibre.com/items/${id}/description`);

        const { data } = query;
        const descriptionData = descriptionQuery.data; 

        let item =
        {
            id: data.id,
            title: data.title,
            price: {
                currency: data.currency_id,
                amount: data.price
            },
            picture: data.pictures[0]?.url,
            condition: data.condition,
            free_shipping: data.shipping.free_shipping,
            sold_quantity: data.sold_quantity,
            description: descriptionData.plain_text
        }

        res.json({
            author: {
                name: 'Franco',
                lastname: 'Ruiz'
            },
            item
        });

    } catch (error) {
        console.log(error);
        res.status(500).json(responseBuilder(500, 'Hubo un fallo en el servidor'))
    }
}

module.exports = { getItems, getItemById };