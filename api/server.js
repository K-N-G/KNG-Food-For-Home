'use strict';

const fs = require('fs');
var path = require('path');
const Hapi = require('hapi');
const Good = require('good');
const Boom = require('boom');

const DATA_FILE = path.join(__dirname, './data.json');

const server = new Hapi.Server();
server.connection({port:9000});

server.register([{
    register: Good,
    options: {
        reporters: {
            console: [{
                module: 'good-squeeze',
                name: 'Squeeze',
                args: [{
                    error: '*',
                    log: '*'
                }]
            }, {
                module: 'good-console'
            }, 'stdout']
        }
    }
}], (err) => {
    if (err) {
        throw err;
    }

    // Starting the server
    server.start((err) => {
        if (err) {
            throw err;
        }
        console.log('Server running at:', server.info.uri);
    });
});

server.route([
    {
        method: 'GET',
        path: '/api/mastermenu',
        handler: function(request, reply) {
            fs.readFile(DATA_FILE, function(err, data) {
                if(err) {
                    throw err;
                }

                reply(JSON.parse(data));
            })
        }
    },
    {
        method: 'POST',
        path: '/api/mastermenu',
        handler: function(request, reply) {
            fs.readFile(DATA_FILE, function(err, data) {
                if(err) {
                    throw err;
                }

                let foods = JSON.parse(data);
                let newFood = {
                    id: foods.length+1,
                    name: request.payload.name,
                    price: request.payload.price,
                    isCooked: request.payload.isCooked,
                    weight: request.payload.weight                
                };
                foods.push(newFood);
                fs.writeFile(DATA_FILE,JSON.stringify(foods,null,4),function (err) {
                    if(err){
                        throw err;
                    }
                    reply(foods);    
                });                
            });
        }
    },
    {
        method: 'DELETE',
        path: '/api/mastermenu',
        handler: function(request, reply) {
            fs.readFile(DATA_FILE, function(err, data) {
                if(err) {
                    throw err;
                }

                let foods = JSON.parse(data);
                let deleteFood;
                foods = foods.filter((food,index) => {
                   if(food.id === parseInt(request.params.id)){
                       deleteFood = food;
                       return false;
                   } else{
                       return true;
                   }
                });
                if(!deleteFood){
                    reply(Boom.notFound('Food does not exist'));
                }else{
                    fs.writeFile(DATA_FILE,JSON.stringify(foods,null,4),function (err) {
                        if(err){
                            throw err;
                        }
                        reply(foods);
                    }); 
                }
            });
        }
    }
]);