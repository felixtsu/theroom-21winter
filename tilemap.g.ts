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

    //% fixedInstance jres blockIdentity=images._tile
    export const jason_tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const jason_tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const jason_tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const jason_tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const jason_tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const jason_tile5 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "shengyou_level1":
            case "shengyou_level1":return tiles.createTilemap(hex`1000100002020202020303030202020202020202020c0c0c03030303030c0c0c0c0c0c02020c0303030303030303030101010c02020e01020202020202020101010b0e02020e0102040208020402010101010e02020e0102020205020202010101010e02020e0102020202020202010101010e02020e0101010101010107070707070708020707070707070707070606060606080806060606060606060606060607070505060606060606060606060a07070f0202070707070707070707070701010f02020c0101010b0b0b0101010101010c02020c0101010d0d0d0b01090901010c02020c0c0f0f0d0d0d0f0f09090f0c0c0202020202020202020202020202020202`, img`
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
`, [myTiles.transparency16,sprites.castle.tileGrass1,myTiles.shengyou_tile1,myTiles.shengyou_tile2,myTiles.shengyou_tile3,myTiles.shengyou_tile7,sprites.castle.tilePath5,sprites.swamp.swampTile2,myTiles.shengyou_tile6,sprites.builtin.forestTiles0,sprites.swamp.swampTile1,sprites.castle.tileGrass3,sprites.builtin.forestTiles3,myTiles.shengyou_tile11,sprites.builtin.forestTiles2,sprites.builtin.forestTiles4], TileScale.Sixteen);
            case "jason_level1":
            case "jason_level1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000002030101010101010101010101010000010101010101010101010101010100000101010101010101010101010101000001010101010101010101010101010000010101010101010101010101010100000101010101010101010101010101000001010101010101010101010101010000010101010101010101010101010100000101010101010101010101010101000001010101010101010101010101010000010101010101010101010101010100000101010101010101010101010101000000000000000000000000000000000000000000000000000000000000000000`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.jason_tile1,myTiles.jason_tile3,myTiles.jason_tile5], TileScale.Sixteen);
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
            case "myjason_tile2":
            case "jason_tile4":return jason_tile4;
            case "myTile":
            case "jason_tile1":return jason_tile1;
            case "myjason_tile0":
            case "jason_tile2":return jason_tile2;
            case "myjason_tile1":
            case "jason_tile3":return jason_tile3;
            case "myjason_tile4":
            case "jason_tile6":return jason_tile6;
            case "myjason_tile3":
            case "jason_tile5":return jason_tile5;
        }
        return null;
    })

}
// 自动生成的代码。请勿编辑。
