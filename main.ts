controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.stopAllSounds()
    music.play(music.stringPlayable("C5 A B G A F G E ", 120), music.PlaybackMode.LoopingInBackground)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    music.stopAllSounds()
    music.play(music.stringPlayable("E B C5 A B G A F ", 120), music.PlaybackMode.LoopingInBackground)
})
game.splash("hello how are you i am under the water please help me press a or b to play melodies")
scene.setBackgroundImage(assets.image`background`)
let man = sprites.create(assets.image`myImage`, SpriteKind.Player)
controller.moveSprite(man)
