const BaseJoi = require('joi');

const sanitizeHtml = require('sanitize-html');

const extension = (joi) => ({
    type: 'string',
    base: joi.string(),
    messages: {
        'string.escapeHTML': '{{#label}} must not include HTML!'
    },
    rules: {
        escapeHTML: {
            validate(value, helpers) {
                const clean = sanitizeHtml(value, {
                    allowedTags: [],
                    allowedAttributes: {},
                });
                if (clean !== value) return helpers.error('string.escapeHTML', { value });
                return clean;
            }
        }
    }
});

const Joi = BaseJoi.extend(extension);

// module.exports.warehouseSchema = Joi.object({
//     warehouse: Joi.object({
//         name: Joi.string().required().escapeHTML(),
//         location: Joi.string().required().escapeHTML(),
//         capacity: Joi.number().required().min(0),
//         inventory: Joi.array().items(Joi.string().escapeHTML()).required(),
//         description: Joi.string().required().escapeHTML()
//     }).required(),
//     deleteItems: Joi.array().items(Joi.string().escapeHTML())
// });
module.exports.warehouseSchema = Joi.object({
    warehouse: Joi.object({
        title: Joi.string().required().escapeHTML(),
        location: Joi.string().required().escapeHTML(),
        goodsStored: Joi.string().required().escapeHTML(),
        storageCapacity: Joi.number().required().min(0),
        type: Joi.string().required().escapeHTML(),
        price: Joi.number().required().min(0),
        description: Joi.string().required().escapeHTML(),
        availability: Joi.string().required(),
        image: Joi.string().uri().optional() // Now part of the 'warehouse' object
    }).required()
});



module.exports.itemSchema = Joi.object({
    item: Joi.object({
        name: Joi.string().required().escapeHTML(),
        quantity: Joi.number().required().min(0),
        description: Joi.string().required().escapeHTML()
    }).required()
});

// module.exports.productSchema = Joi.object({
//     product: Joi.object({
//         name: Joi.string().required().escapeHTML(),
//         description: Joi.string().required().escapeHTML(),
//         category: Joi.string().valid('Electronics', 'Clothing', 'Furniture', 'Books', 'Others').required().escapeHTML(),
//         price: Joi.number().required().min(1), // Price must be greater than 0
//         stock: Joi.number().integer().min(0).required(), // Stock can't be negative
//         images: Joi.array().items(Joi.object({
//             url: Joi.string().uri().required() // Ensure image URL is valid
//         })).optional(),
//     }).required()
// });


module.exports.productSchema = Joi.object({
    name: Joi.string().required().escapeHTML(), // Product name
    description: Joi.string().required().escapeHTML(), // Product description
    category: Joi.string().valid('Electronics', 'Clothing', 'Furniture', 'Books', 'Others', 'Vegetable', 'Grain', 'Poultry', 'Fruit', 'Spice', 'Dairy', 'Sweetener').required().escapeHTML(), // Valid category with the addition of the seed categories
    price: Joi.number().required().min(1), // Price must be greater than 0
    stock: Joi.number().integer().min(0).required(), // Stock can't be negative
    availability: Joi.boolean().required(), // Product availability (true or false)
    image: Joi.string().uri().required(), // Valid image URL
    type: Joi.string().valid('Vegetable', 'Grain', 'Poultry', 'Fruit', 'Spice', 'Dairy', 'Sweetener').required(), // Valid type (added from the seed data)
}).required();











// Schema for validating items in the cart
module.exports.cartItemSchema = Joi.object({
    item: Joi.object({
        productId: Joi.string().required(), // Assuming the product has an ID for the cart
        quantity: Joi.number().required().min(1), // Quantity must be at least 1
    }).required()
});