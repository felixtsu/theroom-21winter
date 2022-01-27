
namespace SpriteKind {
    export const li = SpriteKind.create()
    export const LSYwuqi = SpriteKind.create()
    export const Boss = SpriteKind.create()
    export const LSYboujian = SpriteKind.create()
    export const GUI = SpriteKind.create()
}

namespace shengyou_room{

export function main() {
    let 汉堡: Sprite = null
    let 鸡腿: Sprite = null
    let 面包: Sprite = null
    let LSY鬼: Sprite = null
    let LSYBoss: Sprite = null
    let LSY手雷: Sprite = null
    let LSY导弹: Sprite = null
    let LSY宝剑: Sprite = null
    let lsy勇士: Sprite = null
    tiles.setTilemap(tilemap`shengyou_level1`)
    game.splash("打败小怪和BOSS，就胜利。一定要小心！", "作者：黎X佑")
    lsy勇士 = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f f f f d d d d d e e f . . 
    . f d d d d f 4 4 4 e e f . . . 
    . f b b b b f 2 2 2 2 f 4 e . . 
    . f b b b b f 2 2 2 2 f d 4 . . 
    . . f c c f 4 5 5 4 4 f 4 4 . . 
    . . . f f f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
    info.setLife(100000)
    lsy勇士.setPosition(40, 99)
    controller.moveSprite(lsy勇士)
    scene.cameraFollowSprite(lsy勇士)
    LSY宝剑 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 1 d d d . . . . . . 
    . . . . . 1 d d b d d . . . . . 
    . . . . 1 d d d b d d d . . . . 
    . . . . 1 d d d b d d d . . . . 
    . . . . . 1 d d b d d . . . . . 
    . . . . . 1 d d b d d . . . . . 
    . . . . . 1 1 d b d d . . . . . 
    . . . . . . 1 d b d . . . . . . 
    . . . . . . 1 d d d . . . . . . 
    . . . . . . c e e e . . . . . . 
    . . . . . . c 2 5 2 . . . . . . 
    . . . . . . . c 2 . . . . . . . 
    . . . . . . . c 4 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.LSYboujian)
    tiles.placeOnRandomTile(LSY宝剑, sprites.castle.tileGrass1)
    for (let index = 0; index < 4; index++) {
        LSY导弹 = sprites.create(img`
        .........................
        ..............ffff.......
        .2..fffffffffffeefff.....
        222.fee7eeee7eeee7eff....
        .e..fe177771111e1111fff..
        .ee.f7177771777ee771eefff
        ..eef71711711117111177eef
        ....f71777777e1717777eeef
        ....fe1777711117177eeefff
        ....fee77777eeee1111fff..
        ....fffffffffffeee7ff....
        ..............feefff.....
        ..............ffff.......
        .........................
        .........................
        .........................
        `, SpriteKind.LSYwuqi)
        tiles.placeOnRandomTile(LSY导弹, sprites.castle.tilePath5)
    }
    for (let index = 0; index < 4; index++) {
        LSY手雷 = sprites.create(img`
        . . . . . . f f f . . . . . . . 
        . . . . . . f . f . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . 7 7 7 7 7 7 7 . . . . 
        . . . . . 7 e f e f e 7 . . . . 
        . . . . . 7 f f f f f 7 . . . . 
        . . . . . 7 e f e f e 7 . . . . 
        . . . . . 7 f f f f f 7 . . . . 
        . . . . . 7 e f e f e 7 . . . . 
        . . . . . 7 f f f f f 7 . . . . 
        . . . . . 7 e f e f e 7 . . . . 
        . . . . . 7 f f f f f 7 . . . . 
        . . . . . 7 7 7 7 7 7 7 . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.LSYwuqi)
        tiles.placeOnRandomTile(LSY手雷, sprites.swamp.swampTile2)
    }
    LSYBoss = sprites.create(img`
    .....222222222......
    .....2fff1fff2......
    .....2ff1f1ff2......
    .....2f1fff1f2......
    .....2f11111f2......
    ..fff2fffffff2ffff..
    ..fdd222222222fddf..
    ..fddff22222fffddf..
    ..ff2f2222222f2fff..
    ..2f2f2222222f2f2...
    ..22fff22222fff22...
    ..22fff22222fff22...
    ..222f2222222f222...
    ..222f2222222f222...
    ..222f2222222f222...
    ..fffffffffffffff...
    ..fffffffffffffff...
    ..ff22222222222ff...
    ....22222222222.....
    ....22222.22222.....
    ....2222...2222.....
    ....222.....222.....
    ....222.....222.....
    ....fff.....fff.....
    ...ffff.....ffff....
    `, SpriteKind.Boss)
    sprite_hp.setHp(LSYBoss, 18)
    LSYBoss.setPosition(119, 100)
    LSYBoss.follow(lsy勇士, 7)
    for (let index = 0; index < 1; index++) {
        LSY鬼 = sprites.create(img`
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . . . 2 f f f f f 2 . . . . 
        . . . . 2 f f f 1 f f f 2 . . . 
        . . . . 2 f f 1 f 1 f f 2 . . . 
        . . . . 2 f f f 1 f f f 2 . . . 
        . . . . 2 f f f f f f f 2 . . . 
        . . . . . 2 f f f f f 2 . . . . 
        . . . . . . 2 2 2 2 2 f . . . . 
        . . . . . 2 2 2 2 2 f 2 2 . . . 
        . . . . 2 2 2 2 2 f f 2 2 . . . 
        . . . 2 f 2 2 2 f f 2 2 2 . . . 
        f f f f f f f f f f f 2 2 . . . 
        . . f f f f f f f f 2 . . . . . 
        . . . . f . 2 2 f f 2 . . . . . 
        . . . . . . f f . f f . . . . . 
        . . . . . f f f . f f f . . . . 
        `, SpriteKind.GUI)
        sprite_hp.setHp(LSY鬼, 10)
        LSY鬼.follow(lsy勇士, 4)
        LSY鬼.setPosition(13, 102)
    }
    for (let index = 0; index < 4; index++) {
        面包 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . 4 4 4 4 4 4 . . . . . 
        . . . 4 4 4 4 4 5 4 4 4 4 . . . 
        . . 4 4 4 4 4 4 4 4 4 4 4 4 . . 
        . . 4 4 4 5 4 4 4 4 4 4 4 4 . . 
        . . 4 5 4 4 4 4 4 5 4 4 4 4 . . 
        . . 4 4 4 4 4 4 4 4 4 4 4 4 . . 
        . . 4 4 4 4 4 5 4 4 4 5 4 4 . . 
        . . 4 5 4 5 4 4 4 4 4 4 4 4 . . 
        . . 4 4 4 4 4 4 5 4 4 4 4 4 . . 
        . . . 4 4 4 5 4 4 4 4 4 4 . . . 
        . . . . 4 4 4 4 4 4 4 4 4 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
        tiles.placeOnRandomTile(面包, sprites.builtin.forestTiles3)
        鸡腿 = sprites.create(img`
        . . 2 2 b b b b b . . . . . . . 
        . 2 b 4 4 4 4 4 4 b . . . . . . 
        2 2 4 4 4 4 d d 4 4 b . . . . . 
        2 b 4 4 4 4 4 4 d 4 b . . . . . 
        2 b 4 4 4 4 4 4 4 d 4 b . . . . 
        2 b 4 4 4 4 4 4 4 4 4 b . . . . 
        2 b 4 4 4 4 4 4 4 4 4 e . . . . 
        2 2 b 4 4 4 4 4 4 4 b e . . . . 
        . 2 b b b 4 4 4 b b b e . . . . 
        . . e b b b b b b b e e . . . . 
        . . . e e b 4 4 b e e e b . . . 
        . . . . . e e e e e e b d b b . 
        . . . . . . . . . . . b 1 1 1 b 
        . . . . . . . . . . . c 1 d d b 
        . . . . . . . . . . . c 1 b c . 
        . . . . . . . . . . . . c c . . 
        `, SpriteKind.Food)
        tiles.placeOnRandomTile(鸡腿, sprites.builtin.forestTiles2)
        汉堡 = sprites.create(img`
        . . . . c c c b b b b b . . . . 
        . . c c b 4 4 4 4 4 4 b b b . . 
        . c c 4 4 4 4 4 5 4 4 4 4 b c . 
        . e 4 4 4 4 4 4 4 4 4 5 4 4 e . 
        e b 4 5 4 4 5 4 4 4 4 4 4 4 b c 
        e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e 
        e b b 4 4 4 4 4 4 4 4 4 4 4 b e 
        . e b 4 4 4 4 4 5 4 4 4 4 b e . 
        8 7 e e b 4 4 4 4 4 4 b e e 6 8 
        8 7 2 e e e e e e e e e e 2 7 8 
        e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e 
        e c 6 7 6 6 7 7 7 6 6 7 6 c c e 
        e b e 8 8 c c 8 8 c c c 8 e b e 
        e e b e c c e e e e e c e b e e 
        . e e b b 4 4 4 4 4 4 4 4 e e . 
        . . . c c c c c e e e e e . . . 
        `, SpriteKind.Food)
        tiles.placeOnRandomTile(汉堡, sprites.builtin.forestTiles4)
    }

 
    controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
        LSY导弹 = sprites.create(img`
        .........................
        ..............ffff.......
        .2..fffffffffff7efff.....
        222.fee7777eee77eeeff....
        .e..fe71777ee1117111fff..
        .ee.f77177777177777177fff
        ..eef7717111711171117eeef
        ....f7717777777171777eeef
        ....fee17777e1117111eefff
        ....feee777eeeee7777fff..
        ....fffffffffffee77ff....
        ..............feefff.....
        ..............ffff.......
        .........................
        .........................
        .........................
        `, SpriteKind.Player)
        tiles.placeOnRandomTile(LSY导弹, assets.tile`myTile9`)
        LSY导弹.sayText("3")
        pause(1000)
        LSY导弹.sayText("2")
        pause(1000)
        LSY导弹.sayText("1")
        pause(1000)
        LSY导弹.sayText("B o o M")
        pause(1000)
        LSY导弹.destroy()
        sprite_hp.changeHpOfSpriteBy(LSYBoss, -1)
        sprite_hp.changeHpOfSpriteBy(LSY鬼, -2)
        LSYBoss.sayText(sprite_hp.hpOfSprite(LSYBoss))
        LSY鬼.sayText(sprite_hp.hpOfSprite(LSY鬼))
        LSYBoss.x += -17
        LSY鬼.x += -19
    })
    sprites.onOverlap(SpriteKind.Player, SpriteKind.GUI, function (sprite, otherSprite) {
        info.changeLifeBy(-1)
        pause(1000)
    })
    sprites.onOverlap(SpriteKind.Player, SpriteKind.LSYwuqi, function (sprite, otherSprite) {
        otherSprite.destroy()
    })
    controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
        LSY手雷 = sprites.create(img`
        . . . . . . f f f . . . . . . . 
        . . . . . . f . f . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . 7 7 7 7 7 7 7 . . . . 
        . . . . . 7 e f e f e 7 . . . . 
        . . . . . 7 f f f f f 7 . . . . 
        . . . . . 7 e f e f e 7 . . . . 
        . . . . . 7 f f f f f 7 . . . . 
        . . . . . 7 e f e f e 7 . . . . 
        . . . . . 7 f f f f f 7 . . . . 
        . . . . . 7 e f e f e 7 . . . . 
        . . . . . 7 f f f f f 7 . . . . 
        . . . . . 7 7 7 7 7 7 7 . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.LSYwuqi)
        tiles.placeOnRandomTile(LSY手雷, sprites.builtin.forestTiles0)
        LSY手雷.sayText("3")
        pause(1000)
        LSY手雷.sayText("2")
        pause(1000)
        LSY手雷.sayText("1")
        pause(1000)
        LSY手雷.sayText("B o o M")
        pause(1000)
        LSY手雷.destroy()
        sprite_hp.changeHpOfSpriteBy(LSYBoss, -1)
        sprite_hp.changeHpOfSpriteBy(LSY鬼, -3)
        LSYBoss.sayText(sprite_hp.hpOfSprite(LSYBoss))
        LSY鬼.sayText(sprite_hp.hpOfSprite(LSY鬼))
        LSYBoss.x += 16
        LSY鬼.x += 18
    })
    info.onLifeZero(function () {
        gamejam.roomFinished(false)
        lsy勇士.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 1 1 . . . . . . 
        . . . . 1 . . . . 1 . 1 . . . . 
        . 1 . . . . . . . . . . . . . . 
        . . . . 1 . . . 1 . . . . . . . 
        . . . . . . . . . . 1 . . . . . 
        . . . . . . . 1 1 . 1 . . 1 . . 
        . . . . 1 1 1 1 . . 1 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . 1 . . . 
        . . . . 1 . . . . 1 . . . . . . 
        . . . . 1 . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    })
    sprites.onOverlap(SpriteKind.Player, SpriteKind.LSYboujian, function (sprite, otherSprite) {
        lsy勇士.setImage(img`
        ......ffff..............
        ....fff22fff.1ddd.......
        ...fff2222ff1ddbdd......
        ..fffeeeeee1dddbddd.....
        ..ffe2222221dddbddd.....
        ..fe2ffffff21ddbdd......
        ..ffffeeeeff1ddbdd......
        .ffefbf44fbf11dbdd......
        .fee41fddf14e1dbd.......
        ..ffffdddddee1ddd.......
        .fddddf444eefceee.......
        .fbbbbf2222f4c252.......
        .fbbbbf2222fd4c2........
        ..fccf45544f44c4........
        ...ffffffff.............
        .....ff..ff.............
        `)
        LSY宝剑.destroy()
    })
    sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
        otherSprite.destroy(effects.coolRadial, 100)
        info.changeLifeBy(3)
    })
    controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
        lsy勇士.setImage(img`
        ...........ff..........
        .........ff22ff........
        .......fff2222fff......
        ......fff222222fff.....
        ......fff222222fff.....
        ......feeeeeeeeeeff....
        .....ffe22222222eff....
        .....fffffeeeefffff....
        ....fdfefbf44fbfeff....
        ....fbfe41fddf14ef.....
        ....fbffe4dddd4efe.....
        ....fcfef22222f4e......
        .....ff4f44554f4c......
        ........ffffffd2c......
        .........ffffe252c.....
        ..............eeec.....
        ..............ddd1.....
        ..............dbd1.....
        .............ddbd11....
        .............ddbdd1....
        .............ddbdd1....
        ............dddbddd1...
        ............dddbddd1...
        .............ddbdd1....
        ..............ddd1.....
        .......................
        .......................
        `)
        pause(500)
        lsy勇士.setImage(img`
        ..........ffff...........
        ........fff22fff.........
        .......fff2222ff1ddd.....
        ......fffeeeeee1ddbdd....
        ......ffe222221dddbddd...
        ......fe2fffff1dddbddd...
        ......ffffeeeef1ddbdd....
        .....ffefbf44fb1ddbdd....
        .....fee41fddf111dbdd....
        ......ffffddddde1dbd.....
        .....fddddf444ee1ddd.....
        .....fbbbbf2222fceee.....
        .....fbbbbf2222fc252.....
        ......fccf45544f4c2......
        .......ffffffff..c4......
        .........ff..ff..........
        `)
        sprite_hp.changeHpOfSpriteBy(LSY鬼, -2)
        sprite_hp.changeHpOfSpriteBy(LSYBoss, -1)
        LSY鬼.sayText(sprite_hp.hpOfSprite(LSY鬼))
        LSYBoss.sayText(sprite_hp.hpOfSprite(LSYBoss))
        LSYBoss.y += 16
        LSY鬼.y += 18
        if (sprite_hp.hpOfSprite(LSYBoss) < 0) {
            LSYBoss.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . 1 . . . . . . 
            . . . . . 1 . . . . . . . 1 . . 
            . . . . . . . . . . . . . . . . 
            . . 1 . . . . 1 . . . . 1 . . . 
            . . . . 1 . . . . . . . . . . . 
            . . . . . . . . 1 . . 1 . . . . 
            . . . . . . 1 . . . . . . . . . 
            . . . 1 . . . . . . . . . . 1 . 
            . . . . . . . . 1 . . 1 . . . . 
            . 1 . . . . . . 1 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 1 . . . . . . . 
            . . . . . 1 . . . . . . . . . . 
            . . . . . . . . . . . . . 1 . . 
            . . . . . . . . . . . . . . . . 
            `)
            LSYBoss.destroy()
            info.changeScoreBy(2)
        }
        if (sprite_hp.hpOfSprite(LSY鬼) < 0) {
            LSY鬼.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . 1 . . . . 
            . . . . 1 . 1 . 1 . . . . . . . 
            . . . . 1 . . . . . . . . . . . 
            . . . . 1 . . . . . . . 1 . . . 
            . . . . 1 . . 1 . 1 1 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 1 . . . 1 . 1 . . . 1 1 . . 
            . . . . . . . . 1 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . 1 . . . . 1 . . . 1 . . 1 . . 
            . 1 . . . . . . . . . . . . . . 
            . . . . . . . . 1 . . . . . . . 
            . . . . . 1 . . . . . . . . . . 
            `)
            LSY鬼.destroy()
            info.changeScoreBy(1)
        }
        if (info.score() == 3) {
            gamejam.roomFinished(true)
        }
    })
    sprites.onOverlap(SpriteKind.Player, SpriteKind.Boss, function (sprite, otherSprite) {
        info.changeLifeBy(-2)
        pause(1000)
    })
    
  

}
}