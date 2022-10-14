input.onPinPressed(TouchPin.P0, function () {
    control.reset()
})
let paco = game.createSprite(0, 2)
let daniela = game.createSprite(randint(1, 4), randint(0, 4))
let patrick = game.createSprite(randint(1, 4), randint(0, 4))
let josé = game.createSprite(randint(1, 4), randint(0, 4))
paco.set(LedSpriteProperty.Brightness, 120)
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
        paco.change(LedSpriteProperty.X, 1)
        basic.pause(100)
    }
    if (paco.isTouching(daniela)) {
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.OnceInBackground)
        daniela.delete()
        for (let index = 0; index < 3; index++) {
            basic.showIcon(IconNames.Yes)
            basic.clearScreen()
        }
    }
    if (paco.isTouching(josé)) {
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
        josé.delete()
        for (let index = 0; index < 3; index++) {
            basic.showIcon(IconNames.Yes)
            basic.clearScreen()
        }
        game.addScore(1)
    }
    if (paco.isTouching(patrick)) {
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
        patrick.delete()
        for (let index = 0; index < 3; index++) {
            basic.showIcon(IconNames.Yes)
            basic.clearScreen()
        }
        game.addScore(1)
    }
})
