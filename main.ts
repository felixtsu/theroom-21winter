// gamejam.registerRoom('Flow Room', function () {
//     gamejam.drawNextRoom('朱古力', 'Flow Room')
//     flowroom.init()
// })
gamejam.registerRoom('肉和菜刀', function () {
    gamejam.drawNextRoom('Jason', '肉和菜刀')
    jason_room.main()
})
gamejam.registerRoom('怪兽守卫战', function () {
    gamejam.drawNextRoom('晟佑', '怪兽守卫战')
    shengyou_room.main()
})
gamejam.startGameJam()