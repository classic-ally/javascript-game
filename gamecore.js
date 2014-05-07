var createGame = require('voxel-hello-world');
var perlin = require('voxel-perlin-terrain')
var chunkSize = 32
window.generator = perlin('foo', 0, 5)
var toolbar = require('toolbar')
var textures = require('painterly-textures')(__dirname);


var game = createGame({
    startingPosition: [0, 0, 0],
    generateChunks: false,
    chunkDistance: 2,
    chunkSize: chunkSize,
    texturePath: './textures/'
});

game.materials.load(['obsidian', 'dirt'], function (textures) { })

var mesh = new game.THREE.Mesh(
  new game.THREE.CubeGeometry(1, 3, 1), 
  game.materials.material
)

game.materials.paint(mesh, 'obsidian')





var container = document.body;
game.appendTo(container);

var createPlayer = require('voxel-player')(game);
var user = createPlayer('player.png')
user.yaw.position.set(0, 100, 0);
user.possess();

var currentMaterial = 1

var explode = require('voxel-debris')(game);
game.on('mousedown', function (pos) {
    if (erase) explode(pos)
    else game.createBlock(pos, 1)
});


game.voxels.on('missingChunk', function (p) {
    var voxels = generator(p, chunkSize)
    var chunk = {
        position: p,
        dims: [chunkSize, chunkSize, chunkSize],
        voxels: voxels
    }
    game.showChunk(chunk)
})