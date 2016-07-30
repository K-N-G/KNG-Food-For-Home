'use strict';

const fs = require('fs');
var path = require('path');
const Hapi = require('hapi');
const Good = require('good');
const Boom = require('boom');

const DATA_FOOD = path.join(__dirname, './food-data.json');
const DATA_USER = path.join(__dirname, './user-data.json');

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
            fs.readFile(DATA_FOOD, function(err, data) {
                if(err) {
                    throw err;
                }

                reply(JSON.parse(data));
            })
        }
    },
    {
        method: 'GET',
        path: '/api/mastermenu/{id}',
        handler: function(request, reply) {
            fs.readFile(DATA_FOOD, function(err, data) {
                if(err) {
                    throw err;
                }

                let foods = JSON.parse(data);
                let findFood = {};
                foods.forEach((food) => {
                    if(food.id === parseInt(request.params.id)) {
                        findFood = food;
                    }
                });

                reply(findFood);
            })
        }
    },
    {
        method: 'PUT',
        path: '/api/mastermenu',
        handler: function(request, reply) {
            fs.readFile(DATA_FOOD, function(err, data) {
                if(err) {
                    throw err;
                }

                let foods = JSON.parse(data);
                let editFood = {
                    id: request.payload.id,
                    name: request.payload.name,
                    content: request.payload.content,
                    price: parseFloat(request.payload.price),
                    isCooked: false,
                    weight: parseFloat(request.payload.weight)
                };
                                
                editFood.id = parseInt(editFood.id);

                foods = foods.filter((food) => {
                    return food.id !== editFood.id;
                });

                foods.push(editFood);

                fs.writeFile(DATA_FOOD, JSON.stringify(foods, null, 4), function(err) {
                    if(err) {
                        throw err;
                    }
                    reply(editFood);
                })
            })
        }
    },
    {
        method: 'POST',
        path: '/api/mastermenu',
        handler: function(request, reply) {
            fs.readFile(DATA_FOOD, function(err, data) {
                if(err) {
                    throw err;
                }

                let foods = JSON.parse(data);
                let newFood = {
                    id: Date.now(),
                    name: request.payload.name,
                    content: request.payload.content,
                    price: parseFloat(request.payload.price),
                    isCooked: false,
                    weight: parseFloat(request.payload.weight)
                };
                foods.push(newFood);
                fs.writeFile(DATA_FOOD,JSON.stringify(foods,null,4),function (err) {
                    if(err){
                        throw err;
                    }
                    reply(newFood);    
                });                
            });
        }
    },
    {
        method: 'DELETE',
        path: '/api/mastermenu',
        handler: function(request, reply) {
            fs.readFile(DATA_FOOD, function(err, data) {
                if(err) {
                    throw err;
                }

                let foods = JSON.parse(data);

                let deleteFood = parseInt(request.payload.id);

                foods = foods.filter((food) => {
                    return food.id !== deleteFood;
                });


                fs.writeFile(DATA_FOOD, JSON.stringify(foods, null, 4), function(err) {
                    if(err) {
                        throw err;
                    }
                    reply(deleteFood);
                })
            })
        }
    },
    {
        method: 'POST',
        path: '/api/users',
        handler: function(request, reply) {
            fs.readFile(DATA_USER, function(err, data) {
                if(err) {
                    throw err;
                }

                let users = JSON.parse(data);
                let newUser = {
                    id: Date.now(),
                    username: request.payload.username,
                    password: request.payload.password,
                    confirmPassword: request.payload.confirmPassword,
                    isChef: false,
                    isAdmin: false
                };
                users.push(newUser);

                fs.writeFile(DATA_USER, JSON.stringify(users, null, 4), function(err) {
                    if(err) {
                        throw err;
                    }
                    reply(newUser);
                })
            })
        }
    },
    {
        method: 'POST',
        path: '/api/users/Token',
        handler: function(request, reply) {
            fs.readFile(DATA_USER, function(err, data) {
                if(err) {
                    throw err;
                }

                let users = JSON.parse(data);
                let currentUser = request.payload;

                users.forEach((user) => {
                    if(currentUser.username === user.username && currentUser.password === user.password) {
                        reply(user);
                    }
                })
            })
        }
    },
    {
        method: 'GET',
        path: '/api/users/{id}',
        handler: function(request, reply) {
            fs.readFile(DATA_USER, function(err, data) {
                if(err) {
                    throw err;
                }

                let users = JSON.parse(data);
                let userToFind = {};
                users.forEach((user) => {
                    if(user.id === parseInt(request.params.id)) {
                        userToFind = user;
                    }
                });

                reply(userToFind);
            })
        }
    }
]);