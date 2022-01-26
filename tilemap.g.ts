// 自动生成的代码。请勿编辑。
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const shengyou_tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const shengyou_tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const shengyou_tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const shengyou_tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const shengyou_tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const shengyou_tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const shengyou_tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const shengyou_tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const shengyou_tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const shengyou_tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const shengyou_tile11 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "级别1":
            case "级别1":return tiles.createTilemap(hex`1000100002020202020303030202020202020202020c0c0c03030303030c0c0c0c0c0c02020c0303030303030303030101010c02020101020202020202020101010b0b02020b0102040208020402010101010102020101020202050202020101010101020201010202020202020201010101010202010101010101010107070707070708020707070707070707070606060606080806060606060606060606060607070505060606060606060606060a0707010202070707070707070707070701010102020c0101010b0b0b0101010101010c02020c0101010d0d0d0b01090901010c02020c0c01010d0d0d01010909010c0c0202020202020202020202020202020202`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . 2 2 2 2 2 . . . . . . 2 
2 . . . 2 2 2 2 2 2 2 . . . . 2 
2 . . . 2 2 2 2 2 2 . . . . . 2 
2 . . . 2 2 2 2 2 2 . . . . . 2 
2 . . . 2 2 2 2 2 2 . . . . . 2 
2 . . . 2 2 2 2 2 2 . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tileGrass1,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile7,sprites.castle.tilePath5,sprites.swamp.swampTile2,myTiles.tile6,sprites.builtin.forestTiles0,sprites.swamp.swampTile1,sprites.castle.tileGrass3,sprites.builtin.forestTiles3,myTiles.tile11], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile2":
            case "tile4":return shengyou_tile4;
            case "myTile":
            case "tile1":return shengyou_tile1;
            case "myTile0":
            case "tile2":return shengyou_tile2;
            case "myTile1":
            case "tile3":return shengyou_tile3;
            case "myTile3":
            case "tile5":return shengyou_tile5;
            case "myTile4":
            case "tile6":return shengyou_tile6;
            case "myTile5":
            case "tile7":return shengyou_tile7;
            case "myTile6":
            case "tile8":return shengyou_tile8;
            case "myTile8":
            case "tile10":return shengyou_tile10;
            case "myTile7":
            case "tile9":return shengyou_tile9;
            case "myTile9":
            case "tile11":return shengyou_tile11;
        }
        return null;
    })

}
// 自动生成的代码。请勿编辑。
