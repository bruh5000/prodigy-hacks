//Unlocks all equipment//
PIXI.game.prodigy.player.backpack.data.outfit=[]
x = PIXI.game.state.states.Boot._gameData.outfit
for (i in x) {
    PIXI.game.prodigy.player.backpack.data.outfit[i] = {"ID": x[i].ID, "N": 1}
}
PIXI.game.prodigy.player.backpack.data.hat=[]
x = PIXI.game.state.states.Boot._gameData.hat
for (i in x) {
    PIXI.game.prodigy.player.backpack.data.hat[i] = {"ID": x[i].ID, "N": 1}
}
PIXI.game.prodigy.player.backpack.data.boots=[]
x = PIXI.game.state.states.Boot._gameData.boots
for (i in x) {
    PIXI.game.prodigy.player.backpack.data.boots[i] = {"ID": x[i].ID, "N": 1}
}
//for bookmarklet//
javascript:(function()%7B%2F%2FUnlocks%20all%20equipment.%0APIXI.game.prodigy.player.backpack.data.outfit%3D%5B%5D%0Ax%20%3D%20PIXI.game.state.states.Boot._gameData.outfit%0Afor%20(i%20in%20x)%20%7B%0A%20%20%20%20PIXI.game.prodigy.player.backpack.data.outfit%5Bi%5D%20%3D%20%7B%22ID%22%3A%20x%5Bi%5D.ID%2C%20%22N%22%3A%201%7D%0A%7D%0APIXI.game.prodigy.player.backpack.data.hat%3D%5B%5D%0Ax%20%3D%20PIXI.game.state.states.Boot._gameData.hat%0Afor%20(i%20in%20x)%20%7B%0A%20%20%20%20PIXI.game.prodigy.player.backpack.data.hat%5Bi%5D%20%3D%20%7B%22ID%22%3A%20x%5Bi%5D.ID%2C%20%22N%22%3A%201%7D%0A%7D%0APIXI.game.prodigy.player.backpack.data.boots%3D%5B%5D%0Ax%20%3D%20PIXI.game.state.states.Boot._gameData.boots%0Afor%20(i%20in%20x)%20%7B%0A%20%20%20%20PIXI.game.prodigy.player.backpack.data.boots%5Bi%5D%20%3D%20%7B%22ID%22%3A%20x%5Bi%5D.ID%2C%20%22N%22%3A%201%7D%0A%7D%7D)()%3B
