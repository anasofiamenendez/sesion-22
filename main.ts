let paco = game.createSprite(0, 2)
basic.forever(function () {
    while (input.buttonIsPressed(Button.AB)) {
        paco.change(LedSpriteProperty.Y, 1)
        basic.pause(100)
    }
    while (input.logoIsPressed()) {
        paco.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
    while (input.buttonIsPressed(Button.A)) {
        paco.change(LedSpriteProperty.X, -1)
        basic.pause(100)
    }
    while (input.buttonIsPressed(Button.B)) {
        paco.change(LedSpriteProperty.X, -1)
        basic.pause(100)
    }
})
