var textures = "http://commondatastorage.googleapis.com/voxeltextures/"
var createGame = require('voxel-hello-world');


var game = require('voxel-hello-world')({
    materials: [
    ['grass', 'dirt', 'grass_dirt'],
    'obsidian',
    'brick',
    'grass',
    'plank',
    'whitewool'
    ],
    texturePath: 'textures/',
});

window.generator = perlin('foo', 0, 5)
var chunkSize = 32

var container = document.body;
game.appendTo(container);

var createPlayer = require('voxel-player')(game);

var user = createPlayer('player.png')
user.possess();
user.yaw.position.set(0, 100, 0);

