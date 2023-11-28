namespace SpriteKind {
    export const Intangible = SpriteKind.create()
    export const Icon = SpriteKind.create()
    export const Shipment = SpriteKind.create()
    export const Intangible_Box = SpriteKind.create()
}
/**
 * P&M1
 */
/**
 * Up1
 */
/**
 * up2
 */
/**
 * P&M2
 */
/**
 * Up3
 */
/**
 * P&M3
 */
function updown2 () {
    if (timeline_location == 3) {
        sprites.destroy(textSprite)
        sprites.destroy(textSprite2)
        sprites.destroy(textSprite3)
        sprites.destroy(shopSprite_shipmentsPerSecond)
        sprites.destroy(shopSprite_shipmentMultiplier)
        sprites.destroy(shopSprite_setValue)
        sprites.destroy(shopSprite_valueMultiplier)
        if (selector_timeline_three == 4) {
            shopSprite_shipmentsPerSecond = sprites.create(img`
                . . . . . . . . . . . . . 7 7 
                . . . . . . . . . . 7 7 7 6 6 
                . . . . . . . . . 7 6 6 6 . . 
                . . . . . . 7 7 7 6 . . . . . 
                . . . . . d d 6 9 9 . d . . . 
                . . 7 9 9 9 d b 9 9 d d d . . 
                . 7 d d d 9 3 3 3 3 3 3 d d . 
                7 7 7 7 d 7 3 3 3 3 3 7 7 7 7 
                7 6 6 6 d 6 3 3 3 3 6 6 6 6 7 
                7 6 6 6 6 6 3 3 3 3 3 2 2 6 7 
                7 6 6 6 6 6 3 3 6 3 3 3 2 6 7 
                7 6 6 6 6 6 3 6 6 6 3 3 3 6 7 
                7 6 6 6 6 6 6 6 6 6 6 3 3 3 7 
                7 6 6 6 6 6 6 6 6 6 6 6 3 3 3 
                7 9 9 9 9 9 9 9 9 9 9 9 9 3 3 
                `, SpriteKind.Icon)
            textSprite = textsprite.create("Shipments/second")
            textSprite2 = textsprite.create("x" + shipments_per_second2, 0, 3)
            textSprite3 = textsprite.create("$" + shipments_per_second2 * (100 * cost_multiplier2))
            textSprite2.setPosition(82, 40)
        } else {
            shopSprite_shipmentsPerSecond = sprites.create(img`
                . . . . . . . . . . . . . 7 7 
                . . . . . . . . . . 7 7 7 6 6 
                . . . . . . . . . 7 6 6 6 . . 
                . . . . . . 7 7 7 6 . . . . . 
                . . . . . d d 6 9 9 . d . . . 
                . . 7 9 9 9 d b 9 9 d d d . . 
                . 7 d d d 9 b d d d d d d d . 
                7 7 7 7 d 7 7 7 d 7 7 7 7 7 7 
                7 6 6 6 d 6 6 6 d 6 6 6 6 6 7 
                7 6 6 6 6 6 6 6 d 6 6 2 2 6 7 
                7 6 6 6 6 6 6 6 6 6 6 2 2 6 7 
                7 6 6 6 6 6 6 6 6 6 6 6 6 6 7 
                7 6 6 6 6 6 6 6 6 6 6 6 6 6 7 
                7 6 6 6 6 6 6 6 6 6 6 6 6 6 7 
                7 9 9 9 9 9 9 9 9 9 9 9 9 9 7 
                `, SpriteKind.Icon)
        }
        shopSprite_shipmentsPerSecond.setPosition(90, 45)
        if (selector_timeline_three == 3) {
            shopSprite_shipmentMultiplier = sprites.create(img`
                . . . 4 4 . 4 4 4 . 4 4 . . . 
                . 4 . 4 5 4 4 5 4 4 5 4 . 4 . 
                . . 4 4 5 5 5 5 5 5 5 4 4 . . 
                4 4 4 5 5 5 5 5 5 5 5 5 4 4 4 
                4 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
                . 4 5 5 5 5 4 4 4 5 5 5 5 4 . 
                4 4 5 5 5 4 3 3 3 3 3 3 5 4 4 
                4 5 5 5 5 4 3 3 3 3 3 5 5 5 4 
                4 4 5 5 5 4 3 3 3 3 5 5 5 4 4 
                . 4 5 5 5 5 3 3 3 3 3 5 5 4 . 
                4 5 5 5 5 5 3 3 5 3 3 3 5 5 4 
                4 4 4 7 5 5 3 5 5 5 3 3 3 4 4 
                . . 4 4 7 7 7 7 7 7 7 3 3 3 . 
                . 4 . 4 7 4 4 7 4 4 7 4 3 3 3 
                . . . 4 4 . 4 4 4 . 4 4 . 3 3 
                `, SpriteKind.Icon)
            textSprite = textsprite.create("Shipments multiplier")
            textSprite2 = textsprite.create("x" + production_multiplier2, 0, 3)
            textSprite3 = textsprite.create("$" + production_multiplier2 * (100 * cost_multiplier2))
            textSprite2.setPosition(62, 50)
        } else {
            shopSprite_shipmentMultiplier = sprites.create(img`
                . . . 4 4 . 4 4 4 . 4 4 . . . 
                . 4 . 4 5 4 4 5 4 4 5 4 . 4 . 
                . . 4 4 5 5 5 5 5 5 5 4 4 . . 
                4 4 4 5 5 5 5 5 5 5 5 5 4 4 4 
                4 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
                . 4 5 5 5 5 4 4 4 5 5 5 5 4 . 
                4 4 5 5 5 4 7 7 7 4 5 5 5 4 4 
                4 5 5 5 5 4 . . . 4 5 5 5 5 4 
                4 4 5 5 5 4 . . . 4 5 5 5 4 4 
                . 4 5 5 5 5 4 4 4 5 5 5 5 4 . 
                4 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
                4 4 4 7 5 5 5 5 5 5 5 7 4 4 4 
                . . 4 4 7 7 7 7 7 7 7 4 4 . . 
                . 4 . 4 7 4 4 7 4 4 7 4 . 4 . 
                . . . 4 4 . 4 4 4 . 4 4 . . . 
                `, SpriteKind.Icon)
        }
        shopSprite_shipmentMultiplier.setPosition(70, 55)
        if (selector_timeline_three == 2) {
            shopSprite_setValue = sprites.create(img`
                . . . . 4 4 4 4 4 4 4 . . . . 
                . . 4 4 2 2 5 5 5 5 5 4 4 . . 
                . 4 2 2 5 5 5 5 5 5 5 5 5 4 . 
                . 4 2 5 8 8 8 8 8 8 8 5 5 4 . 
                4 2 5 8 2 5 5 b 5 5 5 8 5 5 4 
                4 5 5 8 5 5 c c c 5 5 8 5 5 4 
                4 5 5 8 5 5 3 3 3 3 3 3 5 5 4 
                4 5 5 8 5 5 3 3 3 3 3 8 5 5 4 
                4 5 5 8 5 5 3 3 3 3 5 8 5 5 4 
                4 5 5 8 7 5 3 3 3 3 3 8 5 5 4 
                4 5 5 8 7 7 3 3 7 3 3 3 5 5 4 
                . 4 5 5 8 8 3 8 8 8 3 3 3 4 . 
                . 8 5 5 5 5 5 5 5 5 5 3 3 3 . 
                . . 8 8 5 5 5 5 5 5 5 8 3 3 3 
                . . . . 8 8 8 8 8 8 8 . . 3 3 
                `, SpriteKind.Icon)
            textSprite = textsprite.create("Shipment value")
            textSprite2 = textsprite.create("x" + shipment_value2, 0, 3)
            textSprite3 = textsprite.create("$" + shipment_value2 * (100 * cost_multiplier2))
            textSprite2.setPosition(82, 60)
        } else {
            shopSprite_setValue = sprites.create(img`
                . . . . 4 4 4 4 4 4 4 . . . . 
                . . 4 4 2 2 5 5 5 5 5 4 4 . . 
                . 4 2 2 5 5 5 5 5 5 5 5 5 4 . 
                . 4 2 5 8 8 8 8 8 8 8 5 5 4 . 
                4 2 5 8 2 5 5 b 5 5 5 8 5 5 4 
                4 5 5 8 5 5 c c c 5 5 8 5 5 4 
                4 5 5 8 5 5 c b 5 5 5 8 5 5 4 
                4 5 5 8 5 5 5 c c 5 5 8 5 5 4 
                4 5 5 8 5 5 5 b c 5 5 8 5 5 4 
                4 5 5 8 7 5 c c c 5 7 8 5 5 4 
                4 5 5 8 7 7 7 b 7 7 7 8 5 5 4 
                . 4 5 5 8 8 8 8 8 8 8 5 5 4 . 
                . 8 5 5 5 5 5 5 5 5 5 5 5 8 . 
                . . 8 8 5 5 5 5 5 5 5 8 8 . . 
                . . . . 8 8 8 8 8 8 8 . . . . 
                `, SpriteKind.Icon)
        }
        shopSprite_setValue.setPosition(90, 65)
        if (selector_timeline_three == 1) {
            shopSprite_valueMultiplier = sprites.create(img`
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . 8 8 8 8 8 8 8 . . . . 
                . . 8 8 2 2 2 2 2 2 2 8 8 . . 
                . 8 2 2 4 9 9 9 9 9 4 2 2 8 . 
                8 4 4 4 9 4 3 3 3 3 3 3 4 4 8 
                8 7 4 4 4 4 3 3 3 3 3 4 4 7 8 
                6 8 4 4 4 7 3 3 3 3 4 4 4 8 6 
                8 6 8 8 4 4 3 3 3 3 3 8 8 6 8 
                6 8 6 6 8 8 3 3 8 3 3 3 6 8 6 
                8 6 8 8 6 6 3 6 6 6 3 3 3 6 8 
                . 8 6 6 8 8 8 8 8 8 8 3 3 3 . 
                . . 8 8 6 6 6 6 6 6 6 8 3 3 3 
                . . . . 8 8 8 8 8 8 8 . . 3 3 
                `, SpriteKind.Icon)
            textSprite = textsprite.create("Value multiplier")
            textSprite2 = textsprite.create("x" + shipment_value_multiplier2, 0, 3)
            textSprite3 = textsprite.create("$" + shipment_value_multiplier2 * (100 * cost_multiplier2))
            textSprite2.setPosition(62, 70)
        } else {
            shopSprite_valueMultiplier = sprites.create(img`
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . 8 8 8 8 8 8 8 . . . . 
                . . 8 8 2 2 2 2 2 2 2 8 8 . . 
                . 8 2 2 4 9 9 9 9 9 4 2 2 8 . 
                8 4 4 4 9 4 4 4 4 4 9 4 4 4 8 
                8 7 4 4 4 4 4 4 4 4 4 4 4 7 8 
                6 8 4 4 4 7 7 7 7 7 4 4 4 8 6 
                8 6 8 8 4 4 4 4 4 4 4 8 8 6 8 
                6 8 6 6 8 8 8 8 8 8 8 6 6 8 6 
                8 6 8 8 6 6 6 6 6 6 6 8 8 6 8 
                . 8 6 6 8 8 8 8 8 8 8 6 6 8 . 
                . . 8 8 6 6 6 6 6 6 6 8 8 . . 
                . . . . 8 8 8 8 8 8 8 . . . . 
                `, SpriteKind.Icon)
        }
        shopSprite_valueMultiplier.setPosition(70, 75)
        textSprite.setPosition(80, 95)
        textSprite3.setPosition(80, 105)
    }
}
function production_and_math3 () {
    timeline_location = 6
    scene.setBackgroundImage(img`
        dddddddddddddddddddddddddddddddddddddddddddddddddddddd1111111111111111111111111111111115dddddddd5ddddddddddddddddddddddddddddddddddd5ddddddddddddd5ddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111111111111111111111111111111551111115ddddddddddddddddddddddddddddddddddd5ddddddddddddd5ddddddddd1111
        dd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111111111111111111111111111151111151111111dddddddddddddddddddddddddddd5ddddddddddddd5ddddd11111111
        dd111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111111111111111111111111511115111111111111ddddddddddddddddddddddd5ddddddddddddd5d111111111111
        dd111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1111111111111111155115111111111111ddddddddddddddddddddddd5dddddddddddd151111111111111
        dd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1111111111515111111111111ddddddddddddddddddddddd5dddddddd1111151111111111111
        dd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11155111111111111ddddddddddddddddddddddd5dddd11551111151111111111111
        dd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111111111ddddddddddddddddddddddd5d1111511551115111111111dddd
        1d111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1151111511111511511111dddddddd
        d1111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11111151111511111151511ddddddddddd
        dd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111111115111511111111ddddddddddddddd
        dd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11111111511511111ddddddddddddddddddd
        d1111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11111111515111dddddddddddddddddddddd
        1d111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1111111155dddddddddddddddddddddddddd
        dd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111111dddddddddddddddddddddddddddddd
        dd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        1d111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        d1111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        d1111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        1d111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        1d111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        d1111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dd111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1dd
        dd115dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1dd
        dd11ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1dd
        dd11ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1dd
        dd11ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1ddddd1dd
        dd11ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1ddddd1dd
        dd115dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1ddddd1dd
        dd111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1ddddd1dd
        dd111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1dddd11dd
        dd111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1ddd1d1dd
        dd111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1dd1dd1dd
        dd111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1d1ddd1dd
        dd111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11dddd1dd
        dd111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11dddd1dd
        dd111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1d1ddd1dd
        dd111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1dd1dd1dd
        dd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dd
        dd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dd
        dd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111155555ddd551111111111111111111111111111111111111111111111111dd
        dd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111555ddddddddddddddd511111111111111111111111111111111111111111111dd
        dd111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1dd
        dd111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1dd
        dd111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1dd
        dd111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1dd
        dd111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1dd
        dd111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1dd
        dd111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1dd
        dd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11dd
        dd111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111dd
        dd111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111dd
        dd111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111dd
        dd111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111dd
        dd111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111dd
        dd111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111dd
        dd111111111111111111111111111111111111111111111111115555dddddddddddddd5111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dd
        dd111111111111111111111111111111111111111111111111111111111555555551111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dd
        dd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dd
        dd11111111111111111111111555dddddddd11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111115dd5511111111111dd
        dd111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111dd
        dd111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd511dd
        dd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11dd
        dd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11dd
        dd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11dd
        dd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11dd
        dd111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111dd
        dd111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111dd
        dd111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111dd
        dd111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111dd
        dd111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111dd
        dd111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111dd
        dd111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111dd
        dd111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111dd
        dd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dd
        dd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dd
        dd1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111555dd511111111111111111111111111111111dd
        dd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111555ddddddddddddddddd5111111111111111111111111dd
        dd1115ddddddddddddddddddd2ddddd2ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111dd
        dd111dddddddddddddddddddd2dddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111dd
        dd111dddddddddddddddddddd2ddd2ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111dd
        dd111dddddddddddddddddddd2dd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111dd
        dd1115ddddddddddddddddddd2d2ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111dd
        dd1111ddddddddddddddddddd22dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111dd
        dd1111ddddddddddddddddddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11dd
        dd1111ddddddddddddddddddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11dd
        dd1111dddddddddd2dddddddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddd2ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11dd
        dd1111dddddddddd22ddddddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddd2ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11dd
        dd1111dddddddddd2d2dddddd2ddddddddddddddddddddddddddddddddddddddddddddddddddddd22dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd511dd
        dd1111dddddddddd2dd2ddddd2dddddddddddddddddddddddddddddddddddddddddddddddddddd2d2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111dd
        dd1111dddddddddd2ddd2dddd2ddddddddddddddddddddddddddddddddddddddddddddddddddd2dd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111dd
        dd1111dddddddddd2dddd2ddd2dddddddddddddddddddddddddddddddddddddddddddddddddd2ddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111dd
        dd1111dddd5111112111112122111111111111111111111111111111111111111111111111121111211111111111111111111111111111111111111111111111111111111111111111111111111111dd
        dd111111111111112111111212111111111111111111111111111111111111111111111111211111211111111111111111111111111111111111111111111111111111111111111111111111111111dd
        dd111111111111112111122122111111111111111111111111111111111111111111111111111111211111111111111111111111111111111111111111111111111111111111111111111111111111dd
        dd1111111111111121112111121111111111111111111dddddd511111111111111111111111111112111111211111121111111111111111111111111111111111111111111155dd511111111111111dd
        dd1111dddddddddd2dd2ddddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddd22ddddd2ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111dd
        dd1111dddddddddd2d2dddddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddd2d2dddd2ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111dd
        dd1111dddddddddd22ddddddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddd2dd22dd2ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111dd
        dd1111dddddddddd22ddddddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddd2dddd2d2ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111dd
        dd1111dddddddddd2d2dddddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddd2ddddd22ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111dd
        dd1111dddddddddd2dd2ddddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddd2dddddd2ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd511dd
        dd1111dddddddddd2ddd2dddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddd2ddddd22ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd551dd
        dd1111dddddddddd2dddd2ddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddd2dddd2d2ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1dd
        dd1111dddddddddd2ddddd2dd2dddddddddddddddddddddddddddddddddddddddddddddddddddddd2dd22dd2ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1dd
        dd1111dddddddddd2dddddd2d2dddddddddddddddddddddddddddddddddddddddddddddddddddddd2d2dddd2ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1dd
        dd1111dddddddddd2ddddddd22dddddddddddddddddddddddddddddddddddddddddddddddddddddd22ddddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd51dd
        dd1111dddddddddd2ddddddd22dddddddddddddddddddddddddddddddddddddddddddddddddddddd2dddddd2ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111dd
        dd1111dddddddddd2dddddd2d2dddddddddddddddddddddddddddddddddddddddddddddddddddddd22ddddd2ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111dd
        dd1111dddddddddd2ddddd2dd2dddddddddddddddddddddddddddddddddddddddddddddddddddddd2d2dddd2ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111dd
        dd1111111111111121111211121111111111111111111111111155dddddddd511111111111111111211211121111111111111111111111111111111111111111111111111111111111111111111111dd
        dd111111111111112111211112111111111111111111111111111155ddd111111111111111111111211121121111111111111111111111111111111111111111111111111111111111111111111111dd
        dd111111111111112112111112111111111111111111111111111111111111111111111111111111211121121111111111111111111111111111111111111111111111111111111111111111111111dd
        dd111111111111112121111112111111111111111111111111111111111111111111111111111111211112121111111111111111111111111111111111111111111111111111111111111111111111dd
        dddddddddddddddd2dddddddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddd2ddddd22dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddd2dddddddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddd2dddddd2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        `)
    invisibleSprite1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Intangible)
    invisibleSprite1.setPosition(160, 120)
    invisibleSprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Intangible)
    invisibleSprite2.setPosition(160, 120)
    invisibleSprite3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Intangible)
    invisibleSprite3.setPosition(160, 120)
    textSprite = textsprite.create("Shipments/second: " + shipments_per_second3)
    textSprite.setPosition(75, 53)
    textSprite2 = textsprite.create("Shipment value:  " + shipment_value3)
    textSprite2.setPosition(75, 71)
    textSprite3 = textsprite.create("Production X:    " + production_multiplier3)
    textSprite3.setPosition(75, 89)
    textSprite4 = textsprite.create("Value X:         " + shipment_value_multiplier3)
    textSprite4.setPosition(75, 107)
    leftSprite = sprites.create(img`
        d d d d d d d d d d d d d d d 
        d 5 5 5 5 5 5 5 5 5 5 5 5 5 d 
        d 5 5 5 5 5 5 5 5 5 5 5 5 5 d 
        d 5 5 5 5 5 5 5 5 5 5 5 5 5 d 
        d 5 5 5 5 3 5 5 5 5 5 5 5 5 d 
        d 5 5 5 3 3 5 5 5 5 5 5 5 5 d 
        d 5 5 3 3 3 3 3 3 3 3 3 3 5 d 
        d 5 3 3 3 3 3 3 3 3 3 3 3 5 d 
        d 5 5 3 3 3 3 3 3 3 3 3 3 5 d 
        d 5 5 5 3 3 5 5 5 5 5 5 5 5 d 
        d 5 5 5 5 3 5 5 5 5 5 5 5 5 d 
        d 5 5 5 5 5 5 5 5 5 5 5 5 5 d 
        d 9 5 5 5 5 5 5 5 5 5 5 5 9 d 
        d 9 9 9 9 9 9 9 9 9 9 9 9 9 d 
        d d d d d d d d d d d d d d d 
        `, SpriteKind.Icon)
    leftSprite.setPosition(8, 113)
    rightSprite = sprites.create(img`
        d d d d d d d d d d d d d d d 
        d 5 5 5 5 5 5 5 5 5 5 5 5 5 d 
        d 5 5 5 5 5 5 5 5 5 5 5 5 5 d 
        d 5 5 5 5 5 5 5 5 5 5 5 5 5 d 
        d 5 5 5 5 5 5 5 5 3 5 5 5 5 d 
        d 5 5 5 5 5 5 5 5 3 3 5 5 5 d 
        d 5 3 3 3 3 3 3 3 3 3 3 5 5 d 
        d 5 3 3 3 3 3 3 3 3 3 3 3 5 d 
        d 5 3 3 3 3 3 3 3 3 3 3 5 5 d 
        d 5 5 5 5 5 5 5 5 3 3 5 5 5 d 
        d 5 5 5 5 5 5 5 5 3 5 5 5 5 d 
        d 5 5 5 5 5 5 5 5 5 5 5 5 5 d 
        d 9 5 5 5 5 5 5 5 5 5 5 5 9 d 
        d 9 9 9 9 9 9 9 9 9 9 9 9 9 d 
        d d d d d d d d d d d d d d d 
        `, SpriteKind.Icon)
    rightSprite.setPosition(152, 113)
    conveyorSprite = sprites.create(img`
        ....fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff....
        ..ffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaff..
        .faa88dddddddb88888b88888b88888b88888b88888b88dddddddb88888b88888b88888b88888b88888b88dddddddb88888b88888b88888b88888b88888b88ddddddd88aaf.
        .fa88d3331333d88888b88888b88888b88888b88888b8d3331333d88888b88888b88888b88888b88888b8d3331333d88888b88888b88888b88888b88888b8d3331333d88af.
        fa88d3ccc1ccc3d8888b88888b88888b88888b88888bd3ccc1ccc3d8888b88888b88888b88888b88888bd3ccc1ccc3d8888b88888b88888b88888b88888bd3ccc1ccc3d88af
        fa8d3cccc1cccc3d888b88888b88888b88888b88888d3cccc1cccc3d888b88888b88888b88888b88888d3cccc1cccc3d888b88888b88888b88888b88888d3cccc1cccc3d8af
        fa8d3cccc1cccc3ddddddddddddddddddddddddddddd3cccc1cccc3ddddddddddddddddddddddddddddd3cccc1cccc3ddddddddddddddddddddddddddddd3cccc1cccc3d8af
        fa8d3cccdddccc3d888dd8888dd8888dd8888dd8888d3cccdddccc3d888dd8888dd8888dd8888dd8888d3cccdddccc3d888dd8888dd8888dd8888dd8888d3cccdddccc3d8af
        fa8d3cccdcdccc3d88dbbd88dbbd88dbbd88dbbd88dd3cccdcdccc3d88dbbd88dbbd88dbbd88dbbd88dd3cccdcdccc3d88dbbd88dbbd88dbbd88dbbd88dd3cccdcdccc3d8af
        fa8d3cccdddccc3dddb88bddb88bddb88bddb88bddbd3cccdddccc3dddb88bddb88bddb88bddb88bddbd3cccdddccc3dddb88bddb88bddb88bddb88bddbd3cccdddccc3d8af
        fa8d3ccccccccc3ddddddddddddddddddddddddddddd3ccccccccc3ddddddddddddddddddddddddddddd3ccccccccc3ddddddddddddddddddddddddddddd3ccccccccc3d8af
        fa8d3ccccccccc3dbbbbbbbbbbbbbbbbbbbbbbbbbbbd3ccccccccc3dbbbbbbbbbbbbbbbbbbbbbbbbbbbd3ccccccccc3dbbbbbbbbbbbbbbbbbbbbbbbbbbbd3ccccccccc3d8af
        fa88d3ccccccc3db888b88888b88888b88888b88888bd3ccccccc3db888b88888b88888b88888b88888bd3ccccccc3db888b88888b88888b88888b88888bd3ccccccc3d88af
        .fa88d3333333db8888b88888b88888b88888b88888bbd3333333db8888b88888b88888b88888b88888b8d3333333db8888b88888b88888b88888b88888b8d3333333d88af.
        .faa88dddddddb88888b88888b88888b88888b88888b88dddddddb88888b88888b88888b88888b88888b88dddddddb88888b88888b88888b88888b88888b88ddddddd88aaf.
        ..ffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaff..
        ....fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff....
        `, SpriteKind.Intangible)
    conveyorSprite.setPosition(80, 35)
    conveyorSprite.z = -1e+160
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (timeline_location == 2 && selector_timeline_two != 4) {
        selector_timeline_two += 1
        updown()
    } else if (timeline_location == 3 && selector_timeline_three != 4 && line_2_purchased == 1) {
        selector_timeline_three += 1
        updown2()
    } else if (timeline_location == 5 && selector_timeline_five != 4 && line_3_purchased == 1) {
        selector_timeline_five += 1
        updown3()
    }
})
function upgrades () {
    timeline_location = 2
    scene.setBackgroundImage(img`
        5555b5555dccccd5555555555dcceeeeeecccccccccccccccccccccccccccccccccccccccccccccceecccccccccccccccccccccccccccccccceeccccceccccccccccd555555555555b55555b55555555
        5555b5555dccccd5555555555dccceececccccccccccccccccccccccccccccccccccccccccccccccceccccccccccccccccccccccccccccccccceccccceccccccccccd555555555555b55555b55555555
        5555b5555dccccdb555555555dccccececccccccccccccccccc3333333cccccccccccccccc333cccceccccc333cccccccccc33333cccccccccccccccccccccccccccd5555555555555b5555b55555555
        5555b5555dccccd5555555555dcccccccccccccccc333cccccc33333333ccccc3333ccccc33333333cccc333333cccccc3c333333333ccccccccccccccccccccccccd5555555555555b5555b55555555
        555b55555dccccd5bb5555555dccccccccccc33333333ccccc333333333cccc33333cc3cc33333333cccc333333cccccccc333333333ccccccccccccccccccccccccd5555555555555b5555b55555555
        555b55555dccccdb5b5555555dcccccccccc333333333ccccc3333c3333cccc333333cccc333333333ccc333333ccccc3cc333333333ccccccccccccccccccccccccd55555555555555b555b55555555
        55b555555dccccdb555555555dcccccccccc33333333cccccc333ccc333cccc333333cc3c333cc333cccc333ccccccccc3c333c33333ccccccccccccccccccccccccd55555555555555b555b55555555
        5b5555555dccccd5555555555dcccccccccc3333ccc3cccccc333cc3333ccc33333333ccc333cc333cccc33333ccccccccc333333333ccc3ccccccccccccccccccccd555555555555555b55b55555555
        b55555555dccccd5555555555dccccccccccc3333ccccccccc333333333ccc33333333ccc333c3333cccc333333cccccccc33333333ccc33ccccccccccccccccccccd5555555555555555b5b55555555
        55555555dccccd55555555555dccccccccccc33333cccccccc33333333cccc333c3333ccc33333333cccc3333333ccccccc3333333cccc333cc3c33cccccccc3ccccd55555555555555555bb55555555
        55555555dccccd55555555555dcccccccccccc33333cccccccc3333333ccc3333cc333ccc33333333cccc3333333ccccccc333333cccc3333cccc3333cc33cccccccd555555555555555555b55555555
        5555555dcccccd55555555555dcccccccccccc33333cccccccc33333c3ccc3333333333cc333333333ccc3333333ccccccc333c3ccccc33c33cc33cc3cc333333cccd5555555555555555555bb555555
        555555dcccccd555555555555dccccccccccccc3333cccccccc3333cccccc3333333333ccc333333333cc333c3ccccccc3c333ccccccc33333cc33333ccc33333cccd5555555555555555555b5b55555
        5555ddccccccd555555555555dcccccccc333333333cccccccc3333ccccc3333c333333ccc333333333cc333333cccccccc333cccccc333333cc33333cccc33cccccd5555555555555555555b55b5555
        ddddccccccccd555555555555dccccccc3333333333ccccccccc333ccccc3333c3cc333ccc3333c3333cc333333cccccccc333cccccc333cc3cc3333cccc333c333cd55555555555555555555b55bb55
        cccccccccccd5555555555555dcccccccc333333333ccccccccc333ccccc3333cccc333cccc333cc333cccc3333cccccccccc3ccccccc3ccc3cc3cc33ccc33cc3c3cd55555555555555555555b5555bb
        ccccccccccd55555555555555dcccccccccc333333cccccccccc333cccccc3ccccccccccccccc3cccccccccc33ccccccccccccccccccccccc3cccccccccc33cc3cccd55555555555555555555b555555
        cccccccdddbb5555555555555dccccccccccc3ccccccccccccccc3ccccccccccccccccccccccccccccccccccc3ccccdcccccccccccccccccc3ccccccccccc3ccc3ccd555555555555555555555b55555
        ccccddd55555b555555555555dccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdfccccccccccccccccccccccccccccccc33cc3d555555555555555555555bb5555
        dddd55555555b555555555555ddddddddddddddddedddddddddddddddddddddddddddddddddedddddddddddddedddddfddedddddddfdddddddddddddddddddddddddd55555555555555555555555b555
        555555555555555555555555555555555ddddddddecccccccccccccccccccccccccccccccccedddddddddddddedddddfddedddddddfdddddddddddddddddddd55555555555555555555555555555b555
        555555555555555555555555555555555ddddddddecececccccccccccccccccccccccccececedddddddddddddedddddfddedddddddfdddddddddddddddddddd555555555555555555555555555555b55
        555555555555555555555555555555555ddddddddeccccccccccccccccccccccccccccccccceddddddddddddddeddddfdeddddddddfdddddddddddddddddddd5555555555555555555555555555555bb
        55555555555555555555555555559ee55ddddddddeccccc3ccccccccccccccccccccccccccceddddddddddddddeddddfdeddddddddfdddddddddddddddddddd55ee95555555555555555555555555555
        5555555555555555555555555559ebbe5ddddddddecccc333ccccccccccccccccccccccccdddddddddddddddddedddddfedddddddfddddddddddddddddddddd5ebbe9555555555555555555555555555
        5555555555555555555555555559ebbe5ddddddddeccc33cccccccccccccccccccccccccccddddddddddddddddedddddfedddddddfddddddddddddddddddddd5ebbe9555555555555555555555555555
        55555555555555555555555555559ee55ddddddddeccc33cccccccc33cccccccccccccccccfddddddddddddddddeddddefddddddfdddddddddddddddddddddd55ee95555555555555555555555555555
        555555555555555555555555555555555ddddddddecccc33ccccccc33cc3cccccccccccccccedddddddddddddddeddddefddddddfdddddddddddddddddddddd555555555555555555555555555555555
        555555555555555555555555555555555ddddddddeccccc333cccc333cc3cccc33ccccccccceddddddddddddddddeddedfddddddfdddddddddddddddddddddd555555555555555555555555555555555
        555555555555555555555555555555555ddddddddeccccccc3cccc3c3cc3cccc333ccc3ccccedddddddddddddddddeeddfddddddfdddddddddddddddddddddd555555555555555555555555555555555
        55555555555555555555555555559ee55ddddddddeccc3ccc33cc3333cc3cccc3ccccc3cccceddddddddddddddddddddddfddddfddddddddddddddddddddddd55ee95555555555555555555555555555
        5555555555555555555555555559ebbe5ddddddddeccc333333cc3cc3c33cccc3cccc33ccccedddddddddddddddddddddddfddfdddddddddddddddddddddddd5ebbe9555555555555555555555555555
        5555555555555555555555555559ebbe5ddddddddeccccc33ccc33cc3c3cccc333ccc33cccceddddddddddddddddddddddddffddddddddddddddddddddddddd5ebbe9555555555555555555555555555
        55555555555555555555555555559ee55ddddddddecccccccccccccc333cccc33cccc33cccceddddddddddddddddddddddddddddddddddddddddddddddddddd55ee95555555555555555555555555555
        555555555555555555555555555555555ddddddddeccccccccccccccc333ccc3ccccc3ccccceddddddddddddddddddddddddddddddddddddddddddddddddddd555555555555555555555555555555555
        555555555555555555555555555555555ddddddddeeeecccccccccccccc33cc33cccc3ccccceddddddddddddddddddddddddddddddddddddddddddddddddddd555555555555555555555555555555555
        555555555555555555555555555555555ddddddddddddeeeeeccccccdcccccc33cccccccccceddddddddddddddddddddddddddddddddddddddddddddddddddd555555555555555555555555555555555
        55555555555555555555555555559ee55dddddddddddddddddeeeecddccccccccccc33ccccceddddddddddddddddddddddddddddddddddddddddddddddddddd55ee95555555555555555555555555555
        5555555555555555555555555559ebbe5ddddddddddddddddddddddddeeccccccccc3cccccceddddddddddddddddddddddddddddddddddddddddddddddddddd5ebbe9555555555555555555555555555
        5555555555555555555555555559ebbe5ddddddddddddddddddddddddddeeeeeccccccccccceddddddddddddddddddddddddddddddddddddddddddddddddddd5ebbe9555555555555555555555555555
        55555555555555555555555555559ee55dddddddddddddddddddddddddddddddeeeeccccccceddddddddddddddddddddddddddddddddddddddddddddddddddd55ee95555555555555555555555555555
        555555555555555555555555555555555dddddddddddddddddddddddddddddddddddeeeeecceddddddddddddddddddddddddddddddddddddddddddddddddddd555555555555555555555555555555555
        555555555555555885555555555555555ddddddddddddddddddddddddddddddddddddddddeeeddddddddddddddddddddddddddddddddddddddddddddddddddd555555555555555555555555555555555
        555555555555555885bb5555555555555dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd555555555555555555555555555555555
        55555555555555588b2b555555559ee55dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd55ee95555555555555555555555555555
        55555558855555b8882b55555559ebbe5dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd5ebbe9555555555555555555555555555
        55555558855bbb22882b55555559ebbe5dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd5ebbe9555555555555555555555555555
        555555588bb22222222b555555559ee55dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd55ee95555555555555555555555555555
        5555555b88222222292b5555555555555dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd555555555555555555555555555555555
        55555bb288222229222b5555555555555dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd555555555555555555555555555555555
        555bbb2222299222292b5555555555555dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd555555555555555555555555555555555
        555558b222992299992b555555559ee55dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd55ee95555555555555555555555555555
        555558b229222992222b55555559ebbe5dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd5ebbe9555555555555555555555555555
        555558b222222222222b55555559ebbe5dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd5ebbe9555555555555555555555555555
        555558b222292222222b555555559ee55dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd55ee95555555555555555555555555555
        555558b222222222282b5555555555555dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd555555555555555555555555555555555
        555558b222222222222b5555555555555dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd555555555555555555555555555555555
        555558b228822288222b5555555555555dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd555555555555555555555555555555555
        555558b222822822822b555555559ee55dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd55ee95555555555555555555555555555
        555558b222222822822b55555559ebbe5dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd5ebbe9555555555555555555555555555
        555558b222222288222b55555559ebbe5dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd5ebbe9555555555555555555555555555
        555558b223222222222b555555559ee55dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd55ee95555555555555555555555555555
        555558b223222222222b5555555555555dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd555555555555555555555555555555555
        555558b22322222222b55555555555555dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd555555555555555555555555555555555
        555558b22222222222b55555555555555dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd555555555555555555555555555555555
        555558b223222222bb55555555559ee55dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd55ee95555555555555555555555555555
        555558b2222222bb855555555559ebbe5dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd5ebbe9555555555555555555555555555
        555558b22222bb85555555555559ebbe5dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd5ebbe9555555555555555555555555555
        555558b222bb85555555555555559ee55dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd55ee95555555555555555555555555555
        555558b2bb85555555555555555555555dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd555555555555555555555555555555555
        555555bb5555555555555555555555555dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd555555555555555555555555555555555
        555555555555555555555555555555555dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd555555555555555555555555555555555
        55555555555555555555555555559ee55dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd55ee95555555555555555555555555555
        5555555555555555555555555559ebbe5dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd5ebbe9555555555555555555555555555
        5555555555555555555555555559ebbe5dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd5ebbe9555555555555555555555555555
        55555555555555555555555555559ee55dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd55ee95555555555555555555555555555
        555555555555555555555555555555555dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd555555555555555555555555555555555
        555555555555555555555555555555555dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd555555555555555555555555555555555
        555555555555555555555555555555555dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd555555555555555555555555555555555
        55555555555555555555555555559ee55dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd55ee95555555555555555555555555555
        5555555555555555555555555559ebbe5dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd5ebbe9555555555555555555555555555
        5555555555555555555555555559ebbe5dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd5ebbe9555555555555555555555555555
        55555555555555555555555555559ee55dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd55ee95555555555555555555555555555
        555555555555555555555555555555666dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd665556555555555555555555555555555
        555555555555555555555555555556666dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd666556655555555555555555555555555
        555555555555555555555656555556666dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd666666655555555555555555555555555
        555555555555555555555556555556666dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd666666655555555555555555555555555
        55555555555555555555555665555666daaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaad66666665555555555555555555555555
        5555555555555555555555666566666daaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaad6666665565555555555555555555555
        555555555555555555555566666666daaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaad666666565555555555555555555555
        55555555555555555555566666666daaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaad66666666555555555555555555555
        5555555555555555555556666666daaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaad6666666555555555555555555555
        555555555555555555555666666daaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaad666666655555555555555555555
        55555555555555555555566666daaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaad66666666555555555555555555
        5555555555555555556556666daaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaad6666666655555555555555555
        555555555555555555656666daaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaad666666665555555555555555
        55555555555555555566666daaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaad66666665555555555555555
        5555555555555555566666daaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaad6666665555555555555555
        555555555555556566666daaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaad666665555555565555555
        55555555555555666666daaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaad66666555555555555555
        5555556555566666666daaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaad6666566555555555555
        555555555556666666daaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaad666666555555555555
        55555565556666666daaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaad66666555555555555
        5555566555666666daaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaad6666655555555555
        555556655566666daaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaad666665555555555
        55555665656666daaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaad66666655555555
        5565666666666daaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaad6666665565555
        555566666666daaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaad666665665555
        55556666666daaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaad66666665555
        5555666666daaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaad6666665555
        555666666daaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaad666666555
        56566666daaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaad66666665
        5666666daaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaad6666665
        666666daaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaad666665
        66666daaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaad66666
        6666daaaaaaadadadddaaadaddaadddadaaadadaadaaaadaadddadddadddadaaadaddaaadddadddaaaadadaadddadadadddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaad6666
        666daaaaaaaadadadadaadaadadadadadadadaddadaaadadadadadadadadadadadadaaaaadaadadaaadadadadadadadaddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaad666
        66daaaaaaaaadadadddaadaadadadadadadadadaddaaadddaddaaddaadadadadadaadaaaadaadadaaadadadadadadadadaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaad66
        6daaaaaaaaaadddadaaadaaaddaadddaadadaadaadaaadadadadadadadddaadadaaddaaaadaadddaaadaaadadddaadaadddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaad6
        daaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaad
        `)
    invisibleSprite1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Intangible)
    invisibleSprite1.setPosition(7, 0)
    invisibleSprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Intangible)
    invisibleSprite2.setPosition(100, 32)
    invisibleSprite3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Intangible)
    invisibleSprite3.setPosition(150, 0)
    selector_timeline_two = 4
    updown()
    rightSprite = sprites.create(img`
        d d d d d d d d d d d d d d d 
        d 5 5 5 5 5 5 5 5 5 5 5 5 5 d 
        d 5 5 5 5 5 5 5 5 5 5 5 5 5 d 
        d 5 5 5 5 5 5 5 5 5 5 5 5 5 d 
        d 5 5 5 5 5 5 5 5 3 5 5 5 5 d 
        d 5 5 5 5 5 5 5 5 3 3 5 5 5 d 
        d 5 3 3 3 3 3 3 3 3 3 3 5 5 d 
        d 5 3 3 3 3 3 3 3 3 3 3 3 5 d 
        d 5 3 3 3 3 3 3 3 3 3 3 5 5 d 
        d 5 5 5 5 5 5 5 5 3 3 5 5 5 d 
        d 5 5 5 5 5 5 5 5 3 5 5 5 5 d 
        d 5 5 5 5 5 5 5 5 5 5 5 5 5 d 
        d 9 5 5 5 5 5 5 5 5 5 5 5 9 d 
        d 9 9 9 9 9 9 9 9 9 9 9 9 9 d 
        d d d d d d d d d d d d d d d 
        `, SpriteKind.Icon)
    rightSprite.setPosition(152, 113)
}
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    if (input_availability_of_ANY_BUTTON_TO_START == 1) {
        cost_multiplier = 1
        input_availability_of_ANY_BUTTON_TO_START = 0
        effects.confetti.endScreenEffect()
        color.startFadeFromCurrent(color.Sweet, 500)
        color.pauseUntilFadeDone()
        color.startFadeFromCurrent(color.Black, 2000)
        color.pauseUntilFadeDone()
        timer.after(500, function () {
            sprites.destroyAllSpritesOfKind(SpriteKind.Intangible)
            sprites.destroy(textSprite)
            color.startFadeFromCurrent(color.originalPalette)
            shipments_per_second = 1
            shipment_value = 1
            production_multiplier = 1
            shipment_value_multiplier = 1
            production_and_math()
        })
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (timeline_location == 1) {
        shipmentSprite = sprites.create(img`
            . . . e e e e e e e e e e . . . 
            . e e d d d d d d d d 4 d e e . 
            . e d d d d d d d d 6 4 d d e . 
            e d d d d d d d d 4 d d d d d e 
            e d d d d d d d 6 4 d d d d d e 
            e 6 6 4 4 4 4 4 d d d d d d d e 
            e d d d d d d d d d d d d d d e 
            e d d e e d d d d d d e e d d e 
            e d e 3 3 e d d d d e 3 3 e d e 
            e d e 3 3 e d d d d e 3 3 e d e 
            e d d e e d d d d d d e e d d e 
            e d d d d d d d d d d d d d d e 
            e d d d d d d d d d d d d d d e 
            e b d d d d d d d d d d d d b e 
            e e b b b e e e e e e b b b e e 
            . . e e e . . . . . . e e e . . 
            `, SpriteKind.Shipment)
        shipmentSprite.setPosition(20, -10)
        shipmentSprite.z = z_inverter
        shipmentSprite.setVelocity(5, 50)
        shipmentSprite.ay = 500
        z_inverter += -1
        info.changeScoreBy(shipment_value * shipment_value_multiplier)
    } else if (timeline_location == 2) {
        if (selector_timeline_two == 4) {
            if (info.score() >= shipments_per_second * (100 * cost_multiplier)) {
                info.changeScoreBy(shipments_per_second * (-100 * cost_multiplier))
                cost_multiplier += 1
                shipments_per_second += 1
                updown()
            }
        } else if (selector_timeline_two == 3) {
            if (info.score() >= production_multiplier * (100 * cost_multiplier)) {
                info.changeScoreBy(production_multiplier * (-100 * cost_multiplier))
                cost_multiplier += 1
                production_multiplier += 1
                updown()
            }
        } else if (selector_timeline_two == 2) {
            if (info.score() >= shipment_value * (100 * cost_multiplier)) {
                info.changeScoreBy(shipment_value * (-100 * cost_multiplier))
                cost_multiplier += 1
                shipment_value += 1
                updown()
            }
        } else if (selector_timeline_two == 1) {
            if (info.score() >= shipment_value_multiplier * (100 * cost_multiplier)) {
                info.changeScoreBy(shipment_value_multiplier * (-100 * cost_multiplier))
                cost_multiplier += 1
                shipment_value_multiplier += 1
                updown()
            }
        }
    } else if (timeline_location == 3) {
        if (line_2_purchased == 0 && info.score() >= 5000) {
            info.changeScoreBy(-5000)
            line_2_purchased = 1
            timeline_location = -1
            color.startFadeFromCurrent(color.White, 2000)
            color.pauseUntilFadeDone()
            color.startFadeFromCurrent(color.originalPalette, 500)
            sprites.destroy(textSprite)
            shipments_per_second2 = 1
            shipment_value2 = 5
            production_multiplier2 = 1
            shipment_value_multiplier2 = 1
            cost_multiplier2 = cost_multiplier * 2
            production_and_math2()
        } else if (line_2_purchased == 1) {
            if (selector_timeline_three == 4) {
                if (info.score() >= shipments_per_second2 * (100 * cost_multiplier2)) {
                    info.changeScoreBy(shipments_per_second2 * (-100 * cost_multiplier2))
                    cost_multiplier2 += 1
                    shipments_per_second2 += 1
                    updown2()
                }
            } else if (selector_timeline_three == 3) {
                if (info.score() >= production_multiplier2 * (100 * cost_multiplier2)) {
                    info.changeScoreBy(production_multiplier2 * (-100 * cost_multiplier2))
                    cost_multiplier2 += 1
                    production_multiplier2 += 1
                    updown2()
                }
            } else if (selector_timeline_three == 2) {
                if (info.score() >= shipment_value2 * (100 * cost_multiplier2)) {
                    info.changeScoreBy(shipment_value2 * (-100 * cost_multiplier2))
                    cost_multiplier2 += 1
                    shipment_value2 += 1
                    updown2()
                }
            } else if (selector_timeline_three == 1) {
                if (info.score() >= shipment_value_multiplier2 * (100 * cost_multiplier2)) {
                    info.changeScoreBy(shipment_value_multiplier2 * (-100 * cost_multiplier2))
                    cost_multiplier2 += 1
                    shipment_value_multiplier2 += 1
                    updown2()
                }
            }
        }
    } else if (timeline_location == 4) {
        shipmentSprite = sprites.create(img`
            . . . 9 9 9 9 9 9 9 9 9 9 . . . 
            . 9 9 2 5 2 5 2 2 2 2 3 2 9 9 . 
            . 9 2 2 5 2 5 2 2 2 3 3 2 2 9 . 
            9 2 2 2 2 2 2 2 2 3 2 2 2 2 2 9 
            9 2 2 2 2 2 2 2 3 3 2 2 2 2 2 9 
            9 3 3 3 3 3 3 3 2 2 2 2 2 2 2 9 
            9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 
            9 2 2 e e 2 2 2 2 2 2 e e 2 2 9 
            9 2 e 1 1 e 2 2 2 2 e 1 1 e 2 9 
            9 2 e 1 1 e 2 2 2 2 e 1 1 e 2 9 
            9 2 5 e e 5 2 2 2 2 5 e e 5 2 9 
            9 2 2 5 5 2 2 2 2 2 2 5 5 2 2 9 
            9 5 2 2 2 2 2 2 2 2 2 2 2 2 5 9 
            9 b 5 5 2 2 2 2 2 2 2 2 5 5 b 9 
            9 9 b b b 9 9 9 9 9 9 b b b 9 9 
            . . 9 9 9 . . . . . . 9 9 9 . . 
            `, SpriteKind.Shipment)
        shipmentSprite.setPosition(20, -10)
        shipmentSprite.z = z_inverter
        shipmentSprite.setVelocity(5, 50)
        shipmentSprite.ay = 500
        z_inverter += -1
        info.changeScoreBy(shipment_value2 * shipment_value_multiplier2)
    } else if (timeline_location == 5) {
        if (line_3_purchased == 0 && info.score() >= 20000) {
            info.changeScoreBy(-20000)
            line_3_purchased = 1
            timeline_location = -1
            color.startFadeFromCurrent(color.White, 2000)
            color.pauseUntilFadeDone()
            color.startFadeFromCurrent(color.originalPalette, 500)
            sprites.destroy(textSprite)
            shipments_per_second3 = 1
            shipment_value3 = 25
            production_multiplier3 = 1
            shipment_value_multiplier3 = 1
            cost_multiplier3 = 3 * cost_multiplier2
            cost_multiplier4 = 1
            master_upgrade_price = (2000 + cost_multiplier4) * (cost_multiplier + (cost_multiplier2 + cost_multiplier3))
            production_and_math3()
        } else if (line_3_purchased == 1) {
            if (selector_timeline_five == 4) {
                if (info.score() >= shipments_per_second3 * (100 * cost_multiplier3)) {
                    info.changeScoreBy(shipments_per_second3 * (-100 * cost_multiplier3))
                    cost_multiplier3 += 1
                    shipments_per_second3 += 1
                    updown3()
                }
            } else if (selector_timeline_five == 3) {
                if (info.score() >= production_multiplier3 * (100 * cost_multiplier3)) {
                    info.changeScoreBy(production_multiplier3 * (-100 * cost_multiplier3))
                    cost_multiplier3 += 1
                    production_multiplier3 += 1
                    updown3()
                }
            } else if (selector_timeline_five == 2) {
                if (info.score() >= shipment_value3 * (100 * cost_multiplier3)) {
                    info.changeScoreBy(shipment_value3 * (-100 * cost_multiplier3))
                    cost_multiplier3 += 1
                    shipment_value3 += 1
                    updown3()
                }
            } else if (selector_timeline_five == 1) {
                if (info.score() >= shipment_value_multiplier3 * (100 * cost_multiplier3)) {
                    info.changeScoreBy(shipment_value_multiplier3 * (-100 * cost_multiplier3))
                    cost_multiplier3 += 1
                    shipment_value_multiplier3 += 1
                    updown3()
                }
            }
        }
    } else if (timeline_location == 6) {
        shipmentSprite = sprites.create(img`
            . . . 9 9 9 9 9 9 9 9 9 9 . . . 
            . 9 9 2 5 2 5 2 2 2 2 3 2 9 9 . 
            . 9 2 2 5 2 5 2 2 2 3 3 2 2 9 . 
            9 2 2 2 2 2 2 2 2 3 2 2 2 2 2 9 
            9 2 2 2 2 2 2 2 3 3 2 2 2 2 2 9 
            9 3 3 3 3 3 3 3 2 2 2 2 2 2 2 9 
            9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 
            9 2 2 e e 2 2 2 2 2 2 e e 2 2 9 
            9 2 e 1 1 e 2 2 2 2 e 1 1 e 2 9 
            9 2 e 1 1 e 2 2 2 2 e 1 1 e 2 9 
            9 2 5 e e 5 2 2 2 2 5 e e 5 2 9 
            9 2 2 5 5 2 2 2 2 2 2 5 5 2 2 9 
            9 5 2 2 2 2 2 2 2 2 2 2 2 2 5 9 
            9 b 5 5 2 2 2 2 2 2 2 2 5 5 b 9 
            9 9 b b b 9 9 9 9 9 9 b b b 9 9 
            . . 9 9 9 . . . . . . 9 9 9 . . 
            `, SpriteKind.Shipment)
        shipmentSprite.setPosition(20, -10)
        shipmentSprite.z = z_inverter
        shipmentSprite.setVelocity(5, 50)
        shipmentSprite.ay = 500
        z_inverter += -1
        info.changeScoreBy(shipment_value3 * shipment_value_multiplier3)
    } else if (timeline_location == 7 && info.score() >= master_upgrade_price) {
        info.changeScoreBy(-1 * master_upgrade_price)
        scene.cameraShake(4, 500)
        for (let index = 0; index < 4; index++) {
            shopSprite_shipmentsPerSecond = sprites.create(img`
                . . . 4 4 . 4 4 4 . 4 4 . . . 
                . 4 . 4 5 4 4 5 4 4 5 4 . 4 . 
                . . 4 4 5 5 5 5 5 5 5 4 4 . . 
                4 4 4 5 5 5 5 5 5 5 5 5 4 4 4 
                4 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
                . 4 5 5 5 5 4 4 4 5 5 5 5 4 . 
                4 4 5 5 5 4 7 7 7 4 5 5 5 4 4 
                4 5 5 5 5 4 . . . 4 5 5 5 5 4 
                4 4 5 5 5 4 . . . 4 5 5 5 4 4 
                . 4 5 5 5 5 4 4 4 5 5 5 5 4 . 
                4 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
                4 4 4 7 5 5 5 5 5 5 5 7 4 4 4 
                . . 4 4 7 7 7 7 7 7 7 4 4 . . 
                . 4 . 4 7 4 4 7 4 4 7 4 . 4 . 
                . . . 4 4 . 4 4 4 . 4 4 . . . 
                `, SpriteKind.Intangible)
            shopSprite_shipmentsPerSecond.setVelocity(50, 50)
            shopSprite_shipmentMultiplier = sprites.create(img`
                . . . . . . . . . . . . . 7 7 
                . . . . . . . . . . 7 7 7 6 6 
                . . . . . . . . . 7 6 6 6 . . 
                . . . . . . 7 7 7 6 . . . . . 
                . . . . . d d 6 9 9 . d . . . 
                . . 7 9 9 9 d b 9 9 d d d . . 
                . 7 d d d 9 b d d d d d d d . 
                7 7 7 7 d 7 7 7 d 7 7 7 7 7 7 
                7 6 6 6 d 6 6 6 d 6 6 6 6 6 7 
                7 6 6 6 6 6 6 6 d 6 6 2 2 6 7 
                7 6 6 6 6 6 6 6 6 6 6 2 2 6 7 
                7 6 6 6 6 6 6 6 6 6 6 6 6 6 7 
                7 6 6 6 6 6 6 6 6 6 6 6 6 6 7 
                7 6 6 6 6 6 6 6 6 6 6 6 6 6 7 
                7 9 9 9 9 9 9 9 9 9 9 9 9 9 7 
                `, SpriteKind.Intangible)
            shopSprite_setValue = sprites.create(img`
                . . . . 4 4 4 4 4 4 4 . . . . 
                . . 4 4 2 2 5 5 5 5 5 4 4 . . 
                . 4 2 2 5 5 5 5 5 5 5 5 5 4 . 
                . 4 2 5 8 8 8 8 8 8 8 5 5 4 . 
                4 2 5 8 2 5 5 b 5 5 5 8 5 5 4 
                4 5 5 8 5 5 c c c 5 5 8 5 5 4 
                4 5 5 8 5 5 c b 5 5 5 8 5 5 4 
                4 5 5 8 5 5 5 c c 5 5 8 5 5 4 
                4 5 5 8 5 5 5 b c 5 5 8 5 5 4 
                4 5 5 8 7 5 c c c 5 7 8 5 5 4 
                4 5 5 8 7 7 7 b 7 7 7 8 5 5 4 
                . 4 5 5 8 8 8 8 8 8 8 5 5 4 . 
                . 8 5 5 5 5 5 5 5 5 5 5 5 8 . 
                . . 8 8 5 5 5 5 5 5 5 8 8 . . 
                . . . . 8 8 8 8 8 8 8 . . . . 
                `, SpriteKind.Intangible)
        }
        shipments_per_second += 5
        shipments_per_second2 += 5
        shipments_per_second3 += 5
        production_multiplier += 5
        production_multiplier2 += 5
        production_multiplier3 += 5
        shipment_value += 5
        shipment_value2 += 5
        shipment_value3 += 5
        shipment_value_multiplier += 5
        shipment_value_multiplier2 += 5
        shipment_value_multiplier3 += 5
        cost_multiplier += 20
        cost_multiplier2 += 20
        cost_multiplier3 += 20
        cost_multiplier4 += 5
        master_upgrade_price = 2000 * cost_multiplier4 * (cost_multiplier + (cost_multiplier2 + cost_multiplier3))
        sprites.destroyAllSpritesOfKind(SpriteKind.Text)
        sprites.destroyAllSpritesOfKind(SpriteKind.Intangible)
        sprites.destroy(leftSprite)
        master_upgrade()
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (timeline_location == 1) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Intangible)
        sprites.destroyAllSpritesOfKind(SpriteKind.Shipment)
        sprites.destroyAllSpritesOfKind(SpriteKind.Text)
        sprites.destroyAllSpritesOfKind(SpriteKind.Icon)
        upgrades()
    } else if (timeline_location == 3) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Intangible)
        sprites.destroyAllSpritesOfKind(SpriteKind.Text)
        sprites.destroyAllSpritesOfKind(SpriteKind.Icon)
        production_and_math()
    } else if (timeline_location == 4) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Intangible)
        sprites.destroyAllSpritesOfKind(SpriteKind.Shipment)
        sprites.destroyAllSpritesOfKind(SpriteKind.Text)
        sprites.destroyAllSpritesOfKind(SpriteKind.Icon)
        upgrades2()
    } else if (timeline_location == 5) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Intangible)
        sprites.destroyAllSpritesOfKind(SpriteKind.Text)
        sprites.destroyAllSpritesOfKind(SpriteKind.Icon)
        production_and_math2()
    } else if (timeline_location == 6) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Intangible)
        sprites.destroyAllSpritesOfKind(SpriteKind.Shipment)
        sprites.destroyAllSpritesOfKind(SpriteKind.Text)
        sprites.destroyAllSpritesOfKind(SpriteKind.Icon)
        upgrades3()
    } else if (timeline_location == 7) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Intangible)
        sprites.destroyAllSpritesOfKind(SpriteKind.Text)
        sprites.destroyAllSpritesOfKind(SpriteKind.Icon)
        production_and_math3()
    }
})
function production_and_math2 () {
    timeline_location = 4
    scene.setBackgroundImage(img`
        77777799999777777776666677777777777777777777777777777d77dd777777777b7777777d7777b7777777b7777d777777777d77b7777d7d777777777999997d777777766666777777777777777777
        777777999997777777766666777777777777777777777777777777dd7d7777777777b777777dd77b777777777b77dd777777777d7b77777d77d7777777799999d7777777766666777777777777777777
        77111d9d9d9d777777766666777777777777777777777777777777777d77777777777b77777dd7b7777777777b77dd777777777d7b77777d777d77777779999977777777766666777777777777777777
        7711179999977777777666667777777777777777777777777777777777d7777777777b7777dd7db77777777777bd77d77777777db77777d77777d7777779999977777777766666777777777777777777
        7711179999977777777666667777777777777777777777777777777777d77777777777b777d77bd77777777777db77d77777777d777777d777777dddddd9999977777777766666777777777777777777
        77111799999777777776666677777777777777777777777777777777777d77777777777b7d77b77d777777777d77b77d777777bd77777d77777777777779999977777777766666777777777777777777
        771117999997777777766666777777777777777777777777777777777777d77777777777dbbb7777ddddddddd7777bb7d777bb7d7777d777777777777779999977777777766666999999999999999999
        7711179999977777777666667777777777777777777777777777777777777d777777777d77777777777777777777777bbdbb777d777d7777777777777779999977777777766666999999999999999999
        77111799999777777776666677777777777777777777777777777777777777ddddddddd777777777777777777777777777ddddddddd77777777777777779999977777777766666999999999999999999
        7711179999977777777666667777777777777777777777777777777777777777777777777777777777777777777777777777777d77777777777777777779999977777777766666999999999999999999
        66666d9d9d9d6666666666667777777777777777777777777777777777777777777777777777777777777777777777777777777d7777777777777777777999997777777776666699999ddddddddddddd
        6666669999966666666666667777777777777777777777777777777777777777777777777777777777777777777777777777777d77777777777777777779999977777777766666999997777777777777
        6666669999966666666666667777777777777777777777777777777777777777777777777777777777777777777777777777777d77777777777777777779999977777777766666999997777777777777
        6666669999966666666666667777777777777777777777777777777777777777777777777777777777777777777777777777777d777777777777777777d9d9d9d777777776666d9d9d9d666666666666
        99999999999999999999999977777777777777777777777777777777777777777777777777777777777777777777777777777777d7777777777777777779999977777777766666999996666666666666
        7711179999977777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777779999977777777766666999996666666666666
        7711179999977777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777779999977777777766666999996666666666666
        77111799999777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777d9d9d9d777777779999d9d9d9d999999999999
        7711179999977777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777779999977777777777777999997777777777777
        7711179999977777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777779999999999999999999999997777777777777
        7711179999977777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777779999999999999999999999997777777777777
        7711179999977777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777779999999999999999999999997777777777777
        7711179999977777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777779999999999999999999999997777777777777
        771117999997777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777dddddddddddddddddddddddd7777777777777
        7711179999977777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        9999999999977777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        9999999999977777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        9999999999977777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        9999999999977777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        ddddddddddd77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7711177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7711177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7711177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7711177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7711177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7711177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7711177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7711177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7711177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7711177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7711177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7711177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7711111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111177
        7711111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111177
        7711111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111177
        7711111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111177
        7711122222777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711177
        7711127777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711177
        7711127727727727727777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711177
        7711127777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711177
        7711127777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711177
        7711177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711177
        7711177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711177
        7711177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711177
        7711177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711177
        7711177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711177
        7711177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711177
        7711177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711177
        7711177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711177
        7711177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711177
        7711111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111177
        7711111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111177
        7711111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111177
        7711111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111177
        7711122222777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711177
        7711127777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711177
        7711127727727727727777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711177
        7711127777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711177
        7711127777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711177
        7711177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711177
        7711177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711177
        7711177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711177
        7711177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711177
        7711177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711177
        7711177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711177
        7711177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711177
        7711177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711177
        7711177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711177
        7711111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111177
        7711111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111177
        7711111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111177
        7711111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111177
        7711112222277777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711177
        7711112777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711177
        7711112772772772772777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711177
        7711112777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711177
        7711112777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711177
        7711117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711177
        7711117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711177
        7711117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711177
        7711117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711177
        7711117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711177
        7711117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711177
        7711117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777711177
        7711117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666666
        7711117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666666666
        7711111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111116666666666
        7711111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111116666666666
        7711111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111116666699999
        7711111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111116666611177
        7711112222277777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666611177
        7711112777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666611177
        7711112772772772772777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666611177
        7711112777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666611177
        7711112777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666611177
        7711117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666611177
        7711117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666611177
        7711117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666611177
        7711117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777776666611d77
        7711117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777999999996666699999
        7711117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777999999996666699d99
        7711117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777999999996666699999
        7711117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777999999996666699d99
        771111777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777799999ddd66666ddddd
        7711111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111999991116666611d77
        7711111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111999991116666611177
        7711111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111999991116666611177
        7711111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111999991116666611177
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777999997776666677777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777999997776666677777
        `)
    invisibleSprite1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Intangible)
    invisibleSprite1.setPosition(103, 14)
    invisibleSprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Intangible)
    invisibleSprite2.setPosition(70, 0)
    invisibleSprite3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Intangible)
    invisibleSprite3.setPosition(120, 0)
    textSprite = textsprite.create("Shipments/second: " + shipments_per_second2)
    textSprite.setPosition(75, 53)
    textSprite2 = textsprite.create("Shipment value:  " + shipment_value2)
    textSprite2.setPosition(75, 71)
    textSprite3 = textsprite.create("Production X:    " + production_multiplier2)
    textSprite3.setPosition(75, 89)
    textSprite4 = textsprite.create("Value X:         " + shipment_value_multiplier2)
    textSprite4.setPosition(75, 107)
    leftSprite = sprites.create(img`
        d d d d d d d d d d d d d d d 
        d 5 5 5 5 5 5 5 5 5 5 5 5 5 d 
        d 5 5 5 5 5 5 5 5 5 5 5 5 5 d 
        d 5 5 5 5 5 5 5 5 5 5 5 5 5 d 
        d 5 5 5 5 3 5 5 5 5 5 5 5 5 d 
        d 5 5 5 3 3 5 5 5 5 5 5 5 5 d 
        d 5 5 3 3 3 3 3 3 3 3 3 3 5 d 
        d 5 3 3 3 3 3 3 3 3 3 3 3 5 d 
        d 5 5 3 3 3 3 3 3 3 3 3 3 5 d 
        d 5 5 5 3 3 5 5 5 5 5 5 5 5 d 
        d 5 5 5 5 3 5 5 5 5 5 5 5 5 d 
        d 5 5 5 5 5 5 5 5 5 5 5 5 5 d 
        d 9 5 5 5 5 5 5 5 5 5 5 5 9 d 
        d 9 9 9 9 9 9 9 9 9 9 9 9 9 d 
        d d d d d d d d d d d d d d d 
        `, SpriteKind.Icon)
    leftSprite.setPosition(8, 113)
    rightSprite = sprites.create(img`
        d d d d d d d d d d d d d d d 
        d 5 5 5 5 5 5 5 5 5 5 5 5 5 d 
        d 5 5 5 5 5 5 5 5 5 5 5 5 5 d 
        d 5 5 5 5 5 5 5 5 5 5 5 5 5 d 
        d 5 5 5 5 5 5 5 5 3 5 5 5 5 d 
        d 5 5 5 5 5 5 5 5 3 3 5 5 5 d 
        d 5 3 3 3 3 3 3 3 3 3 3 5 5 d 
        d 5 3 3 3 3 3 3 3 3 3 3 3 5 d 
        d 5 3 3 3 3 3 3 3 3 3 3 5 5 d 
        d 5 5 5 5 5 5 5 5 3 3 5 5 5 d 
        d 5 5 5 5 5 5 5 5 3 5 5 5 5 d 
        d 5 5 5 5 5 5 5 5 5 5 5 5 5 d 
        d 9 5 5 5 5 5 5 5 5 5 5 5 9 d 
        d 9 9 9 9 9 9 9 9 9 9 9 9 9 d 
        d d d d d d d d d d d d d d d 
        `, SpriteKind.Icon)
    rightSprite.setPosition(152, 113)
    conveyorSprite = sprites.create(img`
        ....fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff....
        ..ffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaff..
        .faa88dddddddb88888b88888b88888b88888b88888b88dddddddb88888b88888b88888b88888b88888b88dddddddb88888b88888b88888b88888b88888b88ddddddd88aaf.
        .fa88d3331333d88888b88888b88888b88888b88888b8d3331333d88888b88888b88888b88888b88888b8d3331333d88888b88888b88888b88888b88888b8d3331333d88af.
        fa88d3ccc1ccc3d8888b88888b88888b88888b88888bd3ccc1ccc3d8888b88888b88888b88888b88888bd3ccc1ccc3d8888b88888b88888b88888b88888bd3ccc1ccc3d88af
        fa8d3cccc1cccc3d888b88888b88888b88888b88888d3cccc1cccc3d888b88888b88888b88888b88888d3cccc1cccc3d888b88888b88888b88888b88888d3cccc1cccc3d8af
        fa8d3cccc1cccc3ddddddddddddddddddddddddddddd3cccc1cccc3ddddddddddddddddddddddddddddd3cccc1cccc3ddddddddddddddddddddddddddddd3cccc1cccc3d8af
        fa8d3cccdddccc3d888dd8888dd8888dd8888dd8888d3cccdddccc3d888dd8888dd8888dd8888dd8888d3cccdddccc3d888dd8888dd8888dd8888dd8888d3cccdddccc3d8af
        fa8d3cccdcdccc3d88dbbd88dbbd88dbbd88dbbd88dd3cccdcdccc3d88dbbd88dbbd88dbbd88dbbd88dd3cccdcdccc3d88dbbd88dbbd88dbbd88dbbd88dd3cccdcdccc3d8af
        fa8d3cccdddccc3dddb88bddb88bddb88bddb88bddbd3cccdddccc3dddb88bddb88bddb88bddb88bddbd3cccdddccc3dddb88bddb88bddb88bddb88bddbd3cccdddccc3d8af
        fa8d3ccccccccc3ddddddddddddddddddddddddddddd3ccccccccc3ddddddddddddddddddddddddddddd3ccccccccc3ddddddddddddddddddddddddddddd3ccccccccc3d8af
        fa8d3ccccccccc3dbbbbbbbbbbbbbbbbbbbbbbbbbbbd3ccccccccc3dbbbbbbbbbbbbbbbbbbbbbbbbbbbd3ccccccccc3dbbbbbbbbbbbbbbbbbbbbbbbbbbbd3ccccccccc3d8af
        fa88d3ccccccc3db888b88888b88888b88888b88888bd3ccccccc3db888b88888b88888b88888b88888bd3ccccccc3db888b88888b88888b88888b88888bd3ccccccc3d88af
        .fa88d3333333db8888b88888b88888b88888b88888bbd3333333db8888b88888b88888b88888b88888b8d3333333db8888b88888b88888b88888b88888b8d3333333d88af.
        .faa88dddddddb88888b88888b88888b88888b88888b88dddddddb88888b88888b88888b88888b88888b88dddddddb88888b88888b88888b88888b88888b88ddddddd88aaf.
        ..ffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaff..
        ....fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff....
        `, SpriteKind.Intangible)
    conveyorSprite.setPosition(80, 35)
    conveyorSprite.z = -1e+160
}
function master_upgrade () {
    timeline_location = 7
    scene.setBackgroundImage(img`
        1111111111111111f1111111111111111111ffffffffffff11111111111111111111111111111ffffffffffffffff1111111111111111111111111111111111111111111111111111111f11111111111
        1111111111111111f111111111111111111ffffffffffff111111111111111111111111111fffffffffffffffff111111111111111111111111111111111111111111111111111111111f11111111111
        111111111111111f111111111111111111ffffffffffff1111111111111111111111111fffffffffffffffff111111111111111111111111111111111111111111111111111111111111f11111111111
        111111111111111f111111111111111ffffffffffffff11111111111111111111111fffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111f1111111111
        111111111111111f11111111111111f1ffffffffffff11111111111111111111ffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111f1111111111
        11111111111111f11111111111111f1ffffffffffff111111111111111111ffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111f1111111111
        11111111111111f111111111111ff1ffffffffffff1111111111111111ffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111f1111111111
        11111111111111f111111111fff11ffffffffffff11111111111111ffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111f1111111111
        1111111111111f1111111fff1111ffffffffffff111111111111fffffffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111f1111111111
        111111111111f111111ff111111ffffffffffff1111111111fffffffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111f1111111111
        11111111111f11111ff1111111ffffffffffff11111111fffffffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111f1111111111
        1111111111f1fffff11111111ffffffffffff111111fffffffffffffffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f111111111
        1111111fffff111111111111ffffffffffff111ffffffffffffffffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f111111111
        1ffffff1f11111111111111ffffffffffff1ffffffffffffffffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f111111111
        f111111f11111111111111fffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f111111111
        111111f11111111111111fffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f11111111
        11111f11111111111111fffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f11111111
        1111f11111111111111fffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f1111111
        11ff11111111111111fffffffffffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f1111111
        1f111111111111111fffffffffffffffffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f111111
        f11111111111111ffffffffffffffffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f111111
        11111111111fffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f11111
        11111111fffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f11111
        11111ffffffffffffffffffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f11111
        11ffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f1111
        fffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f111
        ffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f111
        fffffffffffffffffffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f111
        ffffffffffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f11
        fffff11ffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f1
        ff1111ffffffffffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f
        11111ffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f
        1111ffffffffffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111ffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1ffffffffffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        ffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        ffffffffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        ffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        ffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        ffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        fff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        ff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        f111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f
        11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff
        11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffff
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffff
        11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffff
        11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffff
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffff
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffff
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffff
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffff
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffff
        11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffff1
        11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffff1
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffff1
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffff11
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffff11
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffff11
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffff111
        11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffff111
        11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffff1111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffff1111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffff1111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffff11111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffff11111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffff11111
        11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffff111111
        11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffff111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffff111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffff1111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffff1111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffff11111111
        11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffff11111111
        11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffff11111111
        11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffff111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffff111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffff111111111
        `)
    invisibleSprite1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Intangible)
    invisibleSprite1.setPosition(160, 120)
    invisibleSprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Intangible)
    invisibleSprite2.setPosition(160, 120)
    invisibleSprite3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Intangible)
    invisibleSprite3.setPosition(160, 120)
    textSprite = textsprite.create("MASTER UPGRADE", 0, 15)
    textSprite.setPosition(80, 30)
    if (cost_multiplier4 == 1) {
        textSprite2 = textsprite.create("?", 0, 15)
    } else {
        textSprite2 = textsprite.create("+5 to ALL values", 0, 15)
    }
    textSprite2.setPosition(80, 70)
    textSprite3 = textsprite.create("$" + master_upgrade_price, 0, 15)
    textSprite3.setPosition(80, 100)
    leftSprite = sprites.create(img`
        d d d d d d d d d d d d d d d 
        d 5 5 5 5 5 5 5 5 5 5 5 5 5 d 
        d 5 5 5 5 5 5 5 5 5 5 5 5 5 d 
        d 5 5 5 5 5 5 5 5 5 5 5 5 5 d 
        d 5 5 5 5 3 5 5 5 5 5 5 5 5 d 
        d 5 5 5 3 3 5 5 5 5 5 5 5 5 d 
        d 5 5 3 3 3 3 3 3 3 3 3 3 5 d 
        d 5 3 3 3 3 3 3 3 3 3 3 3 5 d 
        d 5 5 3 3 3 3 3 3 3 3 3 3 5 d 
        d 5 5 5 3 3 5 5 5 5 5 5 5 5 d 
        d 5 5 5 5 3 5 5 5 5 5 5 5 5 d 
        d 5 5 5 5 5 5 5 5 5 5 5 5 5 d 
        d 9 5 5 5 5 5 5 5 5 5 5 5 9 d 
        d 9 9 9 9 9 9 9 9 9 9 9 9 9 d 
        d d d d d d d d d d d d d d d 
        `, SpriteKind.Icon)
    leftSprite.setPosition(8, 113)
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (timeline_location == 1) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Intangible)
        sprites.destroyAllSpritesOfKind(SpriteKind.Shipment)
        sprites.destroyAllSpritesOfKind(SpriteKind.Text)
        sprites.destroyAllSpritesOfKind(SpriteKind.Icon)
        upgrades2()
    } else if (timeline_location == 2) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Intangible)
        sprites.destroyAllSpritesOfKind(SpriteKind.Text)
        sprites.destroyAllSpritesOfKind(SpriteKind.Icon)
        production_and_math()
    } else if (timeline_location == 3) {
        if (line_2_purchased == 1) {
            sprites.destroyAllSpritesOfKind(SpriteKind.Intangible)
            sprites.destroyAllSpritesOfKind(SpriteKind.Text)
            sprites.destroyAllSpritesOfKind(SpriteKind.Icon)
            production_and_math2()
        }
    } else if (timeline_location == 4) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Intangible)
        sprites.destroyAllSpritesOfKind(SpriteKind.Shipment)
        sprites.destroyAllSpritesOfKind(SpriteKind.Text)
        sprites.destroyAllSpritesOfKind(SpriteKind.Icon)
        upgrades3()
    } else if (timeline_location == 5) {
        if (line_3_purchased == 1) {
            sprites.destroyAllSpritesOfKind(SpriteKind.Intangible)
            sprites.destroyAllSpritesOfKind(SpriteKind.Text)
            sprites.destroyAllSpritesOfKind(SpriteKind.Icon)
            production_and_math3()
        }
    } else if (timeline_location == 6) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Intangible)
        sprites.destroyAllSpritesOfKind(SpriteKind.Shipment)
        sprites.destroyAllSpritesOfKind(SpriteKind.Text)
        sprites.destroyAllSpritesOfKind(SpriteKind.Icon)
        master_upgrade()
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (timeline_location == 2 && selector_timeline_two != 1) {
        selector_timeline_two += -1
        updown()
    } else if (timeline_location == 3 && selector_timeline_three != 1 && line_2_purchased == 1) {
        selector_timeline_three += -1
        updown2()
    } else if (timeline_location == 5 && selector_timeline_five != 1 && line_3_purchased == 1) {
        selector_timeline_five += -1
        updown3()
    }
})
function upgrades2 () {
    timeline_location = 3
    if (line_2_purchased == 0) {
        scene.setBackgroundImage(img`
            aaaaaaaaaaaaf444444d4457aaaaaaaaaaaaacc22222222222222222226aabbccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab2222222222222d222222c222222222222222
            aaaaaaaaaaaaf444444d4457aaaaaaaaaaacc222222222222222222266abbccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab222aaa2222222d222222c222222222222222
            aaaaaaaaaaaaf444444d4457aaaaaaaaacc222222222222222222266abbccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabb222aba2222222d222222c222222222222222
            aaaaaaaaaaaaf444444d4457aaaaaaacc222222222222222222266abbccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab222aaa2222222d222222c222222222222222
            aaaaaaaaaaaaf444444d4457aaaaacc222222222222222222266abbccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab22222222222222d22222c222222222222222
            aaaaaaaaaaaaf444444d4457aaacc222222222222222222266abbccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab22222222222222d22222c222222222222222
            aaaaaaaaaaaaf444444d4457acc222222222222222222266abbccaaaaaaaaaaaaaaaaadddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab222aaa22222222d22222c222222222222222
            aaaaaaaaaaaaf44444d4445cc222222222222222222266abbccaaaaaaaaaaaaaaadddd777777778888877777777ddddaaaaaaaaaaaaaaaaaaaaaaaaaaabb222aba22222222d22222c222222222222222
            aaaaaaaaaaaaf44444d44cc222222222222222222266abbccaaaaaaaaaaaaaaddd77777777777788888777777777777dddaaaaaaaaaaaaaaaaaaaaaaaaab222aaa222222222d2222c222222222222222
            aaaaaaaaaaaaf44444dcc222222222222222222266abbccaaaaaaaaaaaaaddd77777777777777788888777777777777777dddaaaaaaaaaaaaaaaaaaaaaab222222222222222d2222c222222222222222
            aaaaaaaaaaaaf4444dc222222222222222222266abbccaaaaaaaaaaaaadd77777777777777777788888777777777777777777ddaaaaaaaaaaaaaaaaaaaab222222222222222d2222c222222222222222
            aaaaaaaaaaaaf44cd222222222222222222266abbccaaaaaaaaaaaaadd777777777777777777778888877777777777777777777ddaaaaaaaaaaaaaaaaaab222aaa222222222d2222c222222222222222
            aaaaaaaaaaaafcc2d2222222222222222266abbccaaaaaaaaaaaaadd7777777777777777777777888887777777777777777777777ddaaaaaaaaaaaaaaabb222aba2222222222d222c222222222222222
            aaaaaaaaaaacf222d22222222222222266abbccaaaaaaaaaaaaadd77777777777777777777777788888777777777777777777777777ddaaaaaaaaaaaaaab992aaa2222222222d222c222222222222222
            cccccccccccf222d2222222222222266abbccaaaaaaaaaaaaadd777777777777777777777777778888877777777777777777777777777ddaaaaaaaaaaaabbb99222222222222d222c222222222222222
            22222222222f222d22222222222266abbccaaaaaaaaaaaaaad7777777777777777777777777777888887777777777777777777777777777daaaaaaaaaaaaaabb9922222222222d22c222222222222222
            22222222222f22d2222222222266abbccaaaaaaaaaaaaaadd777777777777777777777777777778888877777777777777777777777777777ddaaaaaaaaaaaaaabb99222222222d222c22222222222222
            22222222222f22d22222222266abbccaaaaaaaaaaaaaaad7777777777777777777777777777777888887777777777777777777777777777777daaaaaaaaaaaaaaabb992222222d222c22222222222222
            22222222222f2d2222222266abbccaaaaaaaaaaaaaaaad777777777777777777777777777777778888877777777777777777777777777777777daaaaaaaaaaaaaaaabb99922222d222c2222222222222
            22222222222f2d22222266abbccaaaaaaaaaaaaaaaaad77777777777777777777777777777777788888777777777777777777777777777777777daaaaaaaaaaaaaaaaabbb992222d22c2222222222222
            22222222222f2d222266abbccaaaaaaaaaaaaaaaaaad77777777777777777777777777777777778888877777777777777777b7777777777777777daaaaaaaaaaaaaaaaaaabb9922d22c2222222222222
            22222222222fd22266abbcc7aaaaaaaaaaaaaaaaaad7777777777777777777777777777777777788888777777777777777b7777777777777777777daaaaaaaaaaaaaaaaaaaabb992d2c2222222222222
            2222222222fd2266abbcc457aaaaaaaaaaaaaaaaad77777777777777777777777777777777777788888777777777777777777777777777777777777daaaaaaaaaaaaaaaaaaaaabb9d22c222222222222
            2222222222f266abbcc44457aaaaaaaaaaaaaaaad7777777777777777777777777777777bbbbbb88888bbbbbb7777777777777777b77777777777777daaaaaaaaaaaaaaaaaaaa44bbd9c222222222222
            6666666666f6abbcc4444457aaaaaaaaaaaaaaad7777777777777777777777777777bbbb88888888888888888bbbb77777777777b7b7777b777777777daaaaaaaaaaaaaaaaaaa4444bdc992222222222
            aaaaaaaaadfbbcc444444457aaaaaaaaaaaaaad777777777777777777777777777bb8888888888888888888888888bb77777777777b777777777777777daaaaaaaaaaaaaaaaaa44444dbcb9922222222
            bbbbbbbbdfbcc44444444457aaaaaaaaaaaaad77777777777777777777777777bb88888888888888888888888888888bb77777777777777777777777777daaaaaaaaaaaaaaaaa444444dc4bb99222222
            ccccccccdfcaa44444444457aaaaaaaaaaaad7777777777777777777777777bb888888888888888888888888888888888bb7777777777777777777777777daaaaaaaaaaaaaaaa4444444d444bb992222
            aaaaaaadafaaa44444444457aaaaaaaaaaaad777777ddd77777777777777bb8888888888888888888888888888888888888bb77777777777777ddd777777daaaaaaaaaaaaaaaa44444444d46aabb9922
            aaaaaadaafaaa4444444457baaaaaaaaaaadddddddd444ddddd77777777b88888888888888888888888888888888888888888b77777777ddddd444ddddddddaaaaaaaaaaaaaaa44444444cd6aaaabb99
            aaaaadbaafaa4444444457baaaaaaaaaaad4444444d222d4444d77777bb8888888888888888888888888888888888888888888bb77777d4444d222d4444444daaaaaaaaaaaaaa44444444c4daaaaaabb
            aaaadbaafaa4444444457baaaaaaaaaaaad4444444ddddd44444d777b88888888888888888888888888888888888888888888888b777d44444ddddd4444444daaaaaaaaaaaaaa444444444c6ddaaaaaa
            aaadbaaafa4444444457baaaaaaaaaaaad449494944444444444d77b8888888888888888888888888888888888888888888888888b77d444444444449494944daaaaaaaaaaaaa4444444444caadaaaaa
            aadbaaaaf4444444457baaaaaaaaaaaaad449494944444444444d7b888888888888888888888888888888888888888888888888888b7d444444444449494944daaaaaaaaaaaaa44444444446caaddaaa
            adbaaaaaf444444457baaaaaaaaaaaaad444444444444444444dab88888888888888888888888888888888888888888888888888888bad444444444444444444daaaaaaaaaaaa44444444446caaaaddd
            dbaaaaa4f44444457baaaaaaaaaaaaaadddddddddddddddddddab8888888888888888888888888888888888888888888888888888888badddddddddddddddddddaaaaaaaaaaaa44444444446acaaaaaa
            baaaaa4f44444457baaaaaaaaaaaaaadaaaabbaaabbaaaabaaab888888888888888888888888888888888888888888888888888888888baaabaaaabbaaabbaaaadaaaaaaaaaaa44444444446accaaaaa
            aaaaa44f4444457baaaaaaaaaaaaaaad777ccccccccc77bb77b88888888888888888888888888888888888888888888888888888888888b77bb77ccccccccc777daaaaaaaaaaa44444444446aaacaaaa
            aaaa44f4444457baaaaaaaaaaaaaaadbbbbc5555555cbbb777b88888888888888888888888888888888888888888888888888888888888b777bbbc5555555cbbbbdaaaaaaaaaa44444444446aaaacaaa
            aaa444f444457baaaaaaaaaaaaaaaad7777ccccccccc77777b8888888888888888888888888888888888888888888888888888888888888b77777ccccccccc7777daaaaaaaaaa44444444446aaaaacca
            aa4444f44457baaaaaaaaaaaaaaaad777777aaaaaaa77777b888888888888888888888888888888888888888888888888888888888888888b77777aaaaaaa777777daaaaaaaaa44444444446aaaaaacc
            a4444f44457baaaaaaaaaaaaaaaaad777777777777777777b888888888888888888888888888888888888888888888888888888888888888b777777777777777777daaaaaaaaa44444444446aaaaaaaa
            4444f54457baaaaaaaaaaaaaaaaaad77777777777777777b88888888888888888888888888888888888888888888888888888888888888888b77777777777777777daaaaaaaaa44444444446aaaaaaaa
            444f54457baaaaaaaaaaaaaaaaaad777777777777777777b88888888888888888888888888888888888888888888888888888888888888888b777777777777777777daaaaaaaa44444444446aaaaaaaa
            444f4457baaaaaaaaaaaaaaaaaaad77777777777777777b8888888888888888888888888888888888888888888888888888888888888888888b77777777777777777daaaaaaaa44444444446aaaaaaaa
            44f4457baaaaaaaaaaaaaaaaaaaad77777777777777777b8888888888888888888888888888888888888888888888888888888888888888888b77777777777777777daaaaaaaa44444444446aaaaaaaa
            4f4457baaaaaaaaaaaaaaaaaaaad77777777777777777b888888888888888888888888888888888888888888888888888888888888888888888b77777777777777777daaaaaaa44444444446aaaaaaaa
            f4457baaaaaaaaaaaaaaaaaaaaad77777777777777777b888888888888888888888888888888888888888888888888888888888888888888888b77777777777777777daaaaaaa44444444446aaaaaaaa
            4457baaaaaaaaaaaaaaaaaaaaaad7777777777777777b88888888888888888888888888888888888888888888888888888888888888888888888b7777777777777777daaaaaaa44444444446aaaaaaaa
            457baaaaaaaaaaaaaaaaaaaaaaad7777777777777777b88888888888888888888888888888888888888888888888888888888888888888888888b7777777777777777daaaaaaa44444444446aaaaaaaa
            57baaaaaaaaaaaaaaaaaaaaaaad77777777777777777b88888888888888888888888888888888888888888888888888888888888888888888888b7777777777b777777daaaaaa44444444446aaaaaaaa
            7baaaaaaaaaaaaaaaaaaaaaaaad77777777777777777b88888888888888888888888888888888888888888888888888888888888888888888888b77777777777b77777daaaaaa44444444446aaaaaaaa
            baaaaaaaaaaaaaaaaaaaaaaaaad7777777777777777b8888888888888888888888888888888888888888888888888888888888888888888888888b7777777777777777daaaaaa44444444446aaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaad7777777777777777b8888888888888888888888888888888888888888888888888888888888888888888888888b7777777777777777daaaaaa44444444446aaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaad7777777777777777b8888888888888888888888888888888888888888888888888888888888888888888888888b7777777777777777daaaaaa44444444446aaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaad7777777777777777b8888888888888888888888888888888888888888888888888888888888888888888888888b7777777777777777daaaaaa44444444446aaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaad7777777777777777b8888888888888888888888888888888888888888888888888888888888888888888888888b7777777777777777daaaaaa44444444446aaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaad7777777777777777b8888888888888888888888888888888888888888888888888888888888888888888888888b7777777777777777daaaaaa44444444466aaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaad88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888daaaaaa44444444466aaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaad88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888daaaaaa44444444466aaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaad88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888daaaaaa44444444466aaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaad88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888daaaaaa44444444466aaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaad88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888daaaaaa44444444466aaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaad7777777777777777b8888888888888888888888888888888888888888888888888888888888888888888888888b7777777777777777daaaaaa44444444466aaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaad7777777777777777b8888888888888888888888888888888888888888888888888888888888888888888888888b7777777777777777daaaaaa44444444466aaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaad777777777777b777b8888888888888888888888888888888888888888888888888888888888888888888888888b7777777777777777daaaaaa44444444466aaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaad7777777777777777b8888888888888888888888888888888888888888888888888888888888888888888888888b7777777777777777daaaaaa44444444466aaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaad7777777777777777b8888888888888888888888888888888888888888888888888888888888888888888888888b7777777777777777daaaaaa44444444466aaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaad7777777777777777b8888888888888888888888888888888888888888888888888888888888888888888888888b7777777777777777daaaaaa44444444466aaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaad77777777777777777b88888888888888888888888888888888888888888888888888888888888888888888888b77777777777777777daaaaaa44444444466aaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaad77777777777777777b88888888888888888888888888888888888888888888888888888888888888888888888b77777777777777777daaaaaa44444444466aaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaad7777777777777777b88888888888888888888888888888888888888888888888888888888888888888888888b7777777777777777daaaaaaa44444444466aaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaad7777777777777777b88888888888888888888888888888888888888888888888888888888888888888888888b7777777777777777daaaaaaa44444444466aaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaad77777777777777777b888888888888888888888888888888888888888888888888888888888888888888888b77777777777777777daaaaaaa44444444466aaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaad777777777b7777777b888888888888888888888888888888888888888888888888888888888888888888888b77777777777777777daaaaaaa44444444466aaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaad777777777b7777777b8888888888888888888888888888888888888888888888888888888888888888888b77777777777777777daaaaaaaa44444444466aaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaad77777777777777777b8888888888888888888888888888888888888888888888888888888888888888888b77777777777777777daaaaaaaa44444444466aaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaad777777777777777777b88888888888888888888888888888888888888888888888888888888888888888b777777777777777777daaaaaaaa44444444466aaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaad77777777777777777b88888888888888888888888888888888888888888888888888888888888888888b77777777777777777daaaaaaaaa44444444466aaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaad777777777777777777b888888888888888888888888888888888888888888888888888888888888888b777777777777777777daaaaaaaaa44444444466aaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaad777777777777777777b888888888888888888888888888888888888888888888888888888888888888b777777777777777777daaaaaaaaa44444444466aaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaad777777777777777777b8888888888888888888888888888888888888888888888888888888888888b777777777777777777daaaaaaaaaa44444444466aaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaad7777777777777777777b88888888888888888888888888888888888888888888888888888888888b7777777777777777777daaaaaaaaaa44444444466aaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaad777777777777777777b88888888888888888888888888888888888888888888888888888888888b777777777777777777daaaaaaaaaaa44444444466aaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadd7777ccccccccc77777b888888888888888888888888888888888888888888888888888888888b77777ccccccccc7777ddaaaaaaaaaaa44444444466aaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadbbbbc5555555cbbb777b8888888888888888888888888888888888888888888888888888888b777bbbc5555555cbbbbdaaaaaaaaaaaa44444444466aaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadd777ccccccccc77bb777b88888888888888888888888888888888888888888888888888888b777bb77ccccccccc777ddaaaaaaaaaaaa44444444466aaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaad7777bbaaabb7777b7777b888888888888888888888888888888888888888888888888888b7777b7777bbaaabb7777daaaaaaaaaaaaa44444444666aaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadddddddddddddddddddd77b8888888888888888888888888888888888888888888888888b77ddddddddddddddddddddaaaaaaaaaaaaa44444444666aaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaad444444444444444444d77b88888888888888888888888888888888888888888888888b77d444444444444444444daaaaaaaaaaaaaa44444444666aaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadd449494944444444444d77bb8888888888888888888888888888888888888888888bb77d444444444449494944ddaaaaaaaaaaaaaa44444444666aaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaad449494944444444444d7777b88888888888888888888888888888888888888888b7777d444444444449494944daaaaaaaaaaaaaaa44444444666aaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaad4444444ddddd44444d77777bb8888888888888888888888888888888888888bb77777d44444ddddd4444444daaaaaaaaaaaaaaaa44444444666aaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaad4444444d222d4444da7777777bb888888888888888888888888888888888bb7777777ad4444d222d4444444daaaaaaaaaaaaaaaa44444444666aaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadddddddd444ddddda7777777777bb88888888888888888888888888888bb7777777777addddd444ddddddddaaaaaaaaaaaaaaaaa44444444666aaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadaaaaaadddaaaaa7777777777777bb8888888888888888888888888bb7777777777777aaaaadddaaaaaadaaaaaaaaaaaaaaaaaa44444444666aaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaad7777777777777777777777777777bbbb88888888888888888bbbb7777777777777777777777777777daaaaaaaaaaaaaaaaaaa44444444666aaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaad7777777777777777777777777777777bbbbbb88888bbbbbb7777777777777777777777777777777daaaaaaaaaaaaaaaaaaaa44444444666aaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaad77777777777777777777777777777777777788888777777777777777777777777777777777777daaaaaaaaaaaaaaaaaaaaa44444444666aaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabd77777777777777777777777777777777777888887777777777777b777777777777777777777dbaaaaaaaaaaaaaaaaaaaaa44444444666aaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabd77777777777777777777777777777777778888877777777777777b7777777777777777777dbaaaaaaaaaaaaaaaaaaaaaa44444444666aaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabd77777777777777777777777777777777788888777777777777777777777777777777777dbaaaaaaaaaaaaaaaaaaaaaaa44444444666aaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabd777777777777777777777777777777778888877777777777777777777777777777777dbaaaaaaaaaaaaaaaaaaaaaaaa44444444666aaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabd7777777777777777777777777777777888887777777777777777777777777777777dbaaaaaaaaaaaaaaaaaaaaaaaaa44444444666aaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabdd777777777777777777777777777778888877777777777777777777777777777ddbaaaaaaaaaaaaaaaaaaaaaaaaaa44444444666aaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbd7777777777777777777777777777888887777777777777777777777777777dbbaaaaaaaaaaaaaaaaaaaaaaaaaaa44444444666aaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbdd777777777777777777777777778888877777777777777777777777777ddbaaaaaaaaaaaaaaaaaaaaaaaaaaaaa44444444666aaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbabbdd77777777777777777777777788888777777777777777777777777ddbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaab4b4b4b4b6b6baaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaabbdd7777777777777777777777888887777777777777777777777ddbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa44444444666aaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaabbdd777777777777777777778888877777777777777777777ddbbabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa44444444666aaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbdd77777777777777777788888777777777777777777ddbbbbabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa44444444666aaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbddd77777777777777788888777777777777777dddbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa44444444666aaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbaabbbbbddd77777777777788888777777777777dddbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa44444444666aaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbaaaabbbbbbdddd777777778888877777777ddddbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa44444444666aaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaabbbbbbbdddddddddddddddddddddbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa44444444666aaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbabbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa44444444666aaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbaaaaababaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa44444446666aaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaabaaaaaaaaaaaaaaababaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab4b4b4b4b6b6baaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa44444446666aaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa44444446666aaaaaaaa
            `)
        textSprite = textsprite.create("Next area: $5,000", 2, 3)
        textSprite.setPosition(80, 60)
        invisibleSprite1 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Intangible)
        invisibleSprite1.setPosition(40, 38)
        invisibleSprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Intangible)
        invisibleSprite2.setPosition(40, 38)
        invisibleSprite3 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Intangible)
        invisibleSprite3.setPosition(145, 120)
        leftSprite = sprites.create(img`
            d d d d d d d d d d d d d d d 
            d 5 5 5 5 5 5 5 5 5 5 5 5 5 d 
            d 5 5 5 5 5 5 5 5 5 5 5 5 5 d 
            d 5 5 5 5 5 5 5 5 5 5 5 5 5 d 
            d 5 5 5 5 3 5 5 5 5 5 5 5 5 d 
            d 5 5 5 3 3 5 5 5 5 5 5 5 5 d 
            d 5 5 3 3 3 3 3 3 3 3 3 3 5 d 
            d 5 3 3 3 3 3 3 3 3 3 3 3 5 d 
            d 5 5 3 3 3 3 3 3 3 3 3 3 5 d 
            d 5 5 5 3 3 5 5 5 5 5 5 5 5 d 
            d 5 5 5 5 3 5 5 5 5 5 5 5 5 d 
            d 5 5 5 5 5 5 5 5 5 5 5 5 5 d 
            d 9 5 5 5 5 5 5 5 5 5 5 5 9 d 
            d 9 9 9 9 9 9 9 9 9 9 9 9 9 d 
            d d d d d d d d d d d d d d d 
            `, SpriteKind.Icon)
        leftSprite.setPosition(8, 113)
    } else {
        scene.setBackgroundImage(img`
            2222222222222222222232222dccccccccccccccccccccccccccccccc3ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccd222222332222222222222222222
            2222222222222222222232222dccc3cc33cc33cc3ccc333c3ccc3c333c333cc333c3ccc3c3cc3cccccccccccccccccccccccccccccccccccccccccccccccccccccccd222222332222222222222222222
            2222222222222222222223222dcc3c3c3c3c3cc3c3ccc3cc3ccc3c3c3c3cccc3c3c3ccc3c33c3cccccccccccccccccccccccccccccccccccccccccccccccccccccccd222223332222222222222222222
            2222222222222222222223222dcc333c33cc33c333ccc3cc3c3c3c3c3c333cc3c3c3c3c3c3c33cccccccccccccccccccccccccccccccccccccccccccccccccccccccd222223332222222222222222222
            2222222222222222222222322dcc3c3c3c3c3cc3c3ccc3cc3c3c3c3c3ccc3cc3c3c3c3c3c3cc3cccccccccccccccccccccccccccccccccccccccccccccccccccccccd222223322222222222222222222
            2222222222222222222222233dcc3c3c3c3c33c3c3ccc3ccc3c3cc333c333cc333cc3c3cc3cc3cccccccccccccccccccccccccccccccccccccccccccccccccccccccd222223322222222222222222222
            82bb222222222222222222222dccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccd222233322222222222222222222
            8b2b222222222222222222222dccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccd222333222222222222222222222
            882b222222222222222222222dcc333ccc33333ccc333ccc3c3333c3c3c3ccc3c33333ccc333cccc3ccc333cc33333ccc333ccccccccccccccccccccccccccccccccd33333222222222222bb28822222
            882b222222222222222222222dcc3cc3cccc3cccc3ccccc3cc3cc3c3c3c33cc3ccc3ccccc3cc3cc3c3cc3cc3ccc3cccc3cccccccccccccccccccccccccccccccccccd33332222222222222b2b8822222
            222b222222222222222222222dcc3ccc3ccc3ccc3ccccc3ccc3cc3c3c3c3c3c3ccc3ccccc3cc3cc3c3cc3cc3ccc3ccc3ccccccccccccccccccccccccccccccccccccd22222222222222222b2888b2222
            292b222222222222222222222dcc3ccc3ccc3cccc3cccc3ccc3cc3c3c3c3c3c3ccc3ccccc333cc3ccc3c333cccc3cccc3cccccccccccccccccccccccccccccccccccd22222222222222222b28822bbb2
            222b222222222222222222222dcc3ccc3ccc3ccccc33cc3ccc3cc3c3c3c3cc33ccc3ccccc3cccc3ccc3c3c3cccc3ccccc33ccccc3ccc3ccc3ccc3ccc3ccc3ccc3cccd22222222222222222b22222222b
            292b222222222222222222222dcc3ccc3ccc3ccccccc3c3ccc3cc3c3c3c3ccc3ccc3ccccc3cccc33333c3cc3ccc3ccccccc3ccccccccccccccccccccccccccccccccd22222222222222222b292222222
            992b222222222222222222222dcc3cc3cccc3cccccc3ccc3cc3cc3c3c3c3ccc3ccc3ccccc3cccc3ccc3c3cc3ccc3cccccc3cccccccccccccccccccccccccccccccccd22222222222222222b222922222
            222b222222222222222222222dcc333ccc33333c333ccccc3c3333c333c3ccc3ccc3ccccc3cccc3ccc3c3cc3ccc3ccc333ccccccccccccccccccccccccccccccccccd22222222222222222b292222992
            222b222222222222222222222dccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccd22222222222222222b299992299
            222b222222222222222222222dccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccd22222222222222222b222299222
            282b222222222222222222222dccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccd22222222222222222b222222222
            222b222222222222222222222dddddddd5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555dddddd22222222222222222b222222292
            222b22222222222222222222222222222ddd777dddd777dddd777dddd777dddd777dddd777dddd777dddd777dddd777dddd777dddd777dddd777dddd777dddd22222222222222222222222b282222222
            822b22222222222222222222222222222dd11111dd11111dd11111dd11111dd11111dd11111dd11111dd11111dd11111dd11111dd11111dd11111dd11111ddd22222222222222222222222b222222222
            822b22222222222222222222222222222dd11111dd11111dd11111dd11111dd11111dd11111dd11111dd11111dd11111dd11111dd11111dd11111dd11111ddd22222222222222222222222b222882228
            222b2222222222222222222222229ee22dd11111dd11111dd11111dd11111dd11111dd11111dd11111dd11111dd11111dd11111dd11111dd11111dd11111ddd22ee9222222222222222222b228228228
            222b222222222222222222222229ebbe2ddd111dddd111dddd111dddd111dddd111dddd111dddd111dddd111dddd111dddd111dddd111dddd111dddd111dddd2ebbe922222222222222222b228228222
            222b222222222222222222222229ebbe2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd2ebbe922222222222222222b222882222
            22b22222222222222222222222229ee22dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd22ee9222222222222222222b222222222
            22b222222222222222222222222222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd22222222222222222222222b222222222
            bb2222222222222222222222222222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd222222222222222222222222b22222222
            822222222222222222222222222222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd222222222222222222222222b22bb2882
            22222222222222222222222222229ee22dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd22ee922222222222222222222b2b2b882
            2222222222222222222222222229ebbe2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd2ebbe922222222222222222222bb2888b
            2222222222222222222222222229ebbe2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd2ebbe9222222222222222222222b28822
            22222222222222222222222222229ee22dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd22ee92222222222222222222222b22222
            222222222222222222222222222222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd222222222222222222222222222b29222
            222222222222222222222222222222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd222222222222222222222222222b22292
            222222222222222222222222222222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd222222222222222222222222222b29222
            22222222222222222222222222229ee22dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd22ee92222222222222222222222b29999
            2222222222222222222222222229ebbe2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd2ebbe9222222222222222222222b22229
            2222222222222222222222222229ebbe2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd2ebbe9222222222222222222222b22222
            22222222222222222222222222229ee22dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd22ee92222222222222222222222b22222
            222222222222222222222222222222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd222222222222222222222222222b28222
            222222222222222882222222222222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd222222222222222222222222222b22222
            222222222222222882bb2222222222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd222222222222222222222222222b22288
            22222222222222288b2b222222229ee22dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd22ee92222222222222222222222b22822
            22222228822222b8882b22222229ebbe2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd2ebbe9222222222222222222222b22822
            22222228822bbb22882b22222229ebbe2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd2ebbe9222222222222222222222b22288
            222222288bb22222222b222222229ee22dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd22ee92222222222222222222222b22222
            2222222b88222222292b2222222222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd222222222222222222222222222b22222
            22222bb288222229222b2222222222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd2222222222222222222222222222b2222
            222bbb2222299222292b2222222222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd2222222222222222222222222222b2222
            222228b222992299992b222222229ee22dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd22ee9222222222222222222222222bb22
            222228b229222992222b22222229ebbe2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd2ebbe92222222222222222222222228bb
            222228b222222222222b22222229ebbe2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd2ebbe9222222222222222222222222228
            222228b222292222222b222222229ee22dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd22ee92222222222222222222222222222
            222228b222222222282b2222222222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd222222222222222222222222222222222
            222228b222222222222b2222222222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd222222222222222222222222222222222
            222228b228822288222b2222222222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd222222222222222222222222222222222
            222228b222822822822b222222229ee22dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd22ee92222222222222222222222222222
            222228b222222822822b22222229ebbe2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd2ebbe9222222222222222222222222222
            222228b222222288222b22222229ebbe2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd2ebbe9222222222222222222222222222
            222228b223222222222b222222229ee22dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd22ee92222222222222222222222222222
            222228b223222222222b2222222222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd222222222222222222222222222222222
            222228b22322222222b22222222222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd222222222222222222222222222222222
            222228b22222222222b22222222222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd222222222222222222222222222222222
            222228b223222222bb22222222229ee22dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd22ee92222222222222222222222222222
            222228b2222222bb822222222229ebbe2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd2ebbe9222222222222222222222222222
            222228b22222bb82222222222229ebbe2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd2ebbe9222222222222222222222222222
            82bb28b222bb82222222222222229ee22dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd22ee92222222222222222222222222222
            8b2b28b2bb82222222222222222222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd222222222222222222222222222222222
            882b22bb2222222222222222222222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd222222222222222222222222222222222
            882b22222222222222222222222222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd222222222222222222222222222222222
            222b2222222222222222222222229ee22dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd22ee92222222222222222222222222222
            292b222222222222222222222229ebbe2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd2ebbe9222222222222222222222222222
            222b222222222222222222222229ebbe2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd2ebbe9222222222222222222222222222
            292b2222222222222222222222229ee22dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd22ee92222222222222222222222222222
            992b22222222222222222222222222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd222222222222222222222222222222222
            222b22222222222222222222222222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd222222222222222222222222222222222
            222b22222222222222222222222222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd222222222222222222222222222222222
            222b2222222222222222222222229ee22dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd22ee92222222222222222222222222222
            282b222222222222222222222229ebbe2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd2ebbe9222222222222222222222222222
            222b222222222222222222222229ebbe2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd2ebbe9222222222222222222222222222
            222b2222222222222222222222229ee22dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd22ee92222222222222222222222222222
            822b22222222222222222222222222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd222222222222222222222222222222222
            822b22222222222222222222222222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd222222222222222222222222222222222
            222b22222222222222222222222222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd222222222222222222222222222222222
            222b22222222222222222222222222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd222222222222222222222222222222222
            222b2222222222222222222222222222d5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555d22222222222222222222222222222222
            22b2222222222222222222222222222d555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555d2222222222222222222222222222222
            22b222222222222222222222222222d55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555d222222222222222222222222222222
            bb222222222222222222222222222d5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555d22222222222222222222222222222
            8222222222222222222222222222d555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555d2222222222222222222222222222
            222222222222222222222222222d55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555d222222222222222222222222222
            22222222222222222222222222d5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555d22222222222222222222222222
            2222222222222222222222222d555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555d2222222222222222222222222
            222222222222222222222222d55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555d222222222222222222222222
            22222222222222222222222d5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555d22222222222222222222222
            2222222222222222222222d555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555d2222222222222222222222
            222222222222222222222d55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555d222222222222222222222
            22222222222222222222d5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555d22222222222222222222
            2222222222222222222d555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555d2222222222222222222
            222222222222222222d55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555d222222222222222222
            22222222222222222d5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555d22222222222222222
            2222222222222222d555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555d2222222222222222
            222222222222222d55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555d222222222222222
            22222222222222d5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555d22222222222222
            2222222222222d555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555d2222222222222
            222222222222d55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555d222222222222
            22222222222d5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555d22222222222
            2222222222d555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555d2222222222
            222222222d55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555d222222222
            22222222d5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555d22222222
            2222222d555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555d2222222
            222222d55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555d222222
            22222d5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555d22222
            2222d55555555555555dd5ddd5ddd555d55dd55ddd55d555ddd5d555d5ddd55ddd5d55d5d55d5d55555555555555555555555555555555555555555555555555555555555555555555555555555d2222
            222d555555555555555d55d5d5d5d55d5d5d5d5dd55d5d555d55d5d5d5d5d55d5d5dd5d5d555d5555555555555555555555555555555555555555555555555555555555555555555555555555555d222
            22d5555555555555555dd5d5d5dd555ddd5dd55d555ddd555d55d5d5d5d5d55d5d5d5dd5d555d55555555555555555555555555555555555555555555555555555555555555555555555555555555d22
            2d55555555555555555d55ddd5d5d55d5d5d5d5ddd5d5d555d555d5d55ddd55ddd5d55d5dd55d555555555555555555555555555555555555555555555555555555555555555555555555555555555d2
            d55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555d
            `)
        invisibleSprite1 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Intangible)
        invisibleSprite1.setPosition(160, 120)
        invisibleSprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Intangible)
        invisibleSprite2.setPosition(160, 120)
        invisibleSprite3 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Intangible)
        invisibleSprite3.setPosition(160, 120)
        selector_timeline_three = 4
        updown2()
        leftSprite = sprites.create(img`
            d d d d d d d d d d d d d d d 
            d 5 5 5 5 5 5 5 5 5 5 5 5 5 d 
            d 5 5 5 5 5 5 5 5 5 5 5 5 5 d 
            d 5 5 5 5 5 5 5 5 5 5 5 5 5 d 
            d 5 5 5 5 3 5 5 5 5 5 5 5 5 d 
            d 5 5 5 3 3 5 5 5 5 5 5 5 5 d 
            d 5 5 3 3 3 3 3 3 3 3 3 3 5 d 
            d 5 3 3 3 3 3 3 3 3 3 3 3 5 d 
            d 5 5 3 3 3 3 3 3 3 3 3 3 5 d 
            d 5 5 5 3 3 5 5 5 5 5 5 5 5 d 
            d 5 5 5 5 3 5 5 5 5 5 5 5 5 d 
            d 5 5 5 5 5 5 5 5 5 5 5 5 5 d 
            d 9 5 5 5 5 5 5 5 5 5 5 5 9 d 
            d 9 9 9 9 9 9 9 9 9 9 9 9 9 d 
            d d d d d d d d d d d d d d d 
            `, SpriteKind.Icon)
        leftSprite.setPosition(8, 113)
        rightSprite = sprites.create(img`
            d d d d d d d d d d d d d d d 
            d 5 5 5 5 5 5 5 5 5 5 5 5 5 d 
            d 5 5 5 5 5 5 5 5 5 5 5 5 5 d 
            d 5 5 5 5 5 5 5 5 5 5 5 5 5 d 
            d 5 5 5 5 5 5 5 5 3 5 5 5 5 d 
            d 5 5 5 5 5 5 5 5 3 3 5 5 5 d 
            d 5 3 3 3 3 3 3 3 3 3 3 5 5 d 
            d 5 3 3 3 3 3 3 3 3 3 3 3 5 d 
            d 5 3 3 3 3 3 3 3 3 3 3 5 5 d 
            d 5 5 5 5 5 5 5 5 3 3 5 5 5 d 
            d 5 5 5 5 5 5 5 5 3 5 5 5 5 d 
            d 5 5 5 5 5 5 5 5 5 5 5 5 5 d 
            d 9 5 5 5 5 5 5 5 5 5 5 5 9 d 
            d 9 9 9 9 9 9 9 9 9 9 9 9 9 d 
            d d d d d d d d d d d d d d d 
            `, SpriteKind.Icon)
        rightSprite.setPosition(152, 113)
    }
}
function updown3 () {
    if (timeline_location == 5) {
        sprites.destroy(textSprite)
        sprites.destroy(textSprite2)
        sprites.destroy(textSprite3)
        sprites.destroy(shopSprite_shipmentsPerSecond)
        sprites.destroy(shopSprite_shipmentMultiplier)
        sprites.destroy(shopSprite_setValue)
        sprites.destroy(shopSprite_valueMultiplier)
        if (selector_timeline_five == 4) {
            shopSprite_shipmentsPerSecond = sprites.create(img`
                . . . . . . . . . . . . . 7 7 
                . . . . . . . . . . 7 7 7 6 6 
                . . . . . . . . . 7 6 6 6 . . 
                . . . . . . 7 7 7 6 . . . . . 
                . . . . . d d 6 9 9 . d . . . 
                . . 7 9 9 9 d b 9 9 d d d . . 
                . 7 d d d 9 3 3 3 3 3 3 d d . 
                7 7 7 7 d 7 3 3 3 3 3 7 7 7 7 
                7 6 6 6 d 6 3 3 3 3 6 6 6 6 7 
                7 6 6 6 6 6 3 3 3 3 3 2 2 6 7 
                7 6 6 6 6 6 3 3 6 3 3 3 2 6 7 
                7 6 6 6 6 6 3 6 6 6 3 3 3 6 7 
                7 6 6 6 6 6 6 6 6 6 6 3 3 3 7 
                7 6 6 6 6 6 6 6 6 6 6 6 3 3 3 
                7 9 9 9 9 9 9 9 9 9 9 9 9 3 3 
                `, SpriteKind.Icon)
            textSprite = textsprite.create("Shipments/second", 0, 15)
            textSprite2 = textsprite.create("x" + shipments_per_second3, 0, 3)
            textSprite3 = textsprite.create("$" + shipments_per_second3 * (100 * cost_multiplier3), 0, 15)
            textSprite2.setPosition(82, 40)
        } else {
            shopSprite_shipmentsPerSecond = sprites.create(img`
                . . . . . . . . . . . . . 7 7 
                . . . . . . . . . . 7 7 7 6 6 
                . . . . . . . . . 7 6 6 6 . . 
                . . . . . . 7 7 7 6 . . . . . 
                . . . . . d d 6 9 9 . d . . . 
                . . 7 9 9 9 d b 9 9 d d d . . 
                . 7 d d d 9 b d d d d d d d . 
                7 7 7 7 d 7 7 7 d 7 7 7 7 7 7 
                7 6 6 6 d 6 6 6 d 6 6 6 6 6 7 
                7 6 6 6 6 6 6 6 d 6 6 2 2 6 7 
                7 6 6 6 6 6 6 6 6 6 6 2 2 6 7 
                7 6 6 6 6 6 6 6 6 6 6 6 6 6 7 
                7 6 6 6 6 6 6 6 6 6 6 6 6 6 7 
                7 6 6 6 6 6 6 6 6 6 6 6 6 6 7 
                7 9 9 9 9 9 9 9 9 9 9 9 9 9 7 
                `, SpriteKind.Icon)
        }
        shopSprite_shipmentsPerSecond.setPosition(90, 45)
        if (selector_timeline_five == 3) {
            shopSprite_shipmentMultiplier = sprites.create(img`
                . . . 4 4 . 4 4 4 . 4 4 . . . 
                . 4 . 4 5 4 4 5 4 4 5 4 . 4 . 
                . . 4 4 5 5 5 5 5 5 5 4 4 . . 
                4 4 4 5 5 5 5 5 5 5 5 5 4 4 4 
                4 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
                . 4 5 5 5 5 4 4 4 5 5 5 5 4 . 
                4 4 5 5 5 4 3 3 3 3 3 3 5 4 4 
                4 5 5 5 5 4 3 3 3 3 3 5 5 5 4 
                4 4 5 5 5 4 3 3 3 3 5 5 5 4 4 
                . 4 5 5 5 5 3 3 3 3 3 5 5 4 . 
                4 5 5 5 5 5 3 3 5 3 3 3 5 5 4 
                4 4 4 7 5 5 3 5 5 5 3 3 3 4 4 
                . . 4 4 7 7 7 7 7 7 7 3 3 3 . 
                . 4 . 4 7 4 4 7 4 4 7 4 3 3 3 
                . . . 4 4 . 4 4 4 . 4 4 . 3 3 
                `, SpriteKind.Icon)
            textSprite = textsprite.create("Shipments multiplier", 0, 15)
            textSprite2 = textsprite.create("x" + production_multiplier3, 0, 3)
            textSprite3 = textsprite.create("$" + production_multiplier3 * (100 * cost_multiplier3), 0, 15)
            textSprite2.setPosition(62, 50)
        } else {
            shopSprite_shipmentMultiplier = sprites.create(img`
                . . . 4 4 . 4 4 4 . 4 4 . . . 
                . 4 . 4 5 4 4 5 4 4 5 4 . 4 . 
                . . 4 4 5 5 5 5 5 5 5 4 4 . . 
                4 4 4 5 5 5 5 5 5 5 5 5 4 4 4 
                4 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
                . 4 5 5 5 5 4 4 4 5 5 5 5 4 . 
                4 4 5 5 5 4 7 7 7 4 5 5 5 4 4 
                4 5 5 5 5 4 . . . 4 5 5 5 5 4 
                4 4 5 5 5 4 . . . 4 5 5 5 4 4 
                . 4 5 5 5 5 4 4 4 5 5 5 5 4 . 
                4 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
                4 4 4 7 5 5 5 5 5 5 5 7 4 4 4 
                . . 4 4 7 7 7 7 7 7 7 4 4 . . 
                . 4 . 4 7 4 4 7 4 4 7 4 . 4 . 
                . . . 4 4 . 4 4 4 . 4 4 . . . 
                `, SpriteKind.Icon)
        }
        shopSprite_shipmentMultiplier.setPosition(70, 55)
        if (selector_timeline_five == 2) {
            shopSprite_setValue = sprites.create(img`
                . . . . 4 4 4 4 4 4 4 . . . . 
                . . 4 4 2 2 5 5 5 5 5 4 4 . . 
                . 4 2 2 5 5 5 5 5 5 5 5 5 4 . 
                . 4 2 5 8 8 8 8 8 8 8 5 5 4 . 
                4 2 5 8 2 5 5 b 5 5 5 8 5 5 4 
                4 5 5 8 5 5 c c c 5 5 8 5 5 4 
                4 5 5 8 5 5 3 3 3 3 3 3 5 5 4 
                4 5 5 8 5 5 3 3 3 3 3 8 5 5 4 
                4 5 5 8 5 5 3 3 3 3 5 8 5 5 4 
                4 5 5 8 7 5 3 3 3 3 3 8 5 5 4 
                4 5 5 8 7 7 3 3 7 3 3 3 5 5 4 
                . 4 5 5 8 8 3 8 8 8 3 3 3 4 . 
                . 8 5 5 5 5 5 5 5 5 5 3 3 3 . 
                . . 8 8 5 5 5 5 5 5 5 8 3 3 3 
                . . . . 8 8 8 8 8 8 8 . . 3 3 
                `, SpriteKind.Icon)
            textSprite = textsprite.create("Shipment value", 0, 15)
            textSprite2 = textsprite.create("x" + shipment_value3, 0, 3)
            textSprite3 = textsprite.create("$" + shipment_value3 * (100 * cost_multiplier3), 0, 15)
            textSprite2.setPosition(82, 60)
        } else {
            shopSprite_setValue = sprites.create(img`
                . . . . 4 4 4 4 4 4 4 . . . . 
                . . 4 4 2 2 5 5 5 5 5 4 4 . . 
                . 4 2 2 5 5 5 5 5 5 5 5 5 4 . 
                . 4 2 5 8 8 8 8 8 8 8 5 5 4 . 
                4 2 5 8 2 5 5 b 5 5 5 8 5 5 4 
                4 5 5 8 5 5 c c c 5 5 8 5 5 4 
                4 5 5 8 5 5 c b 5 5 5 8 5 5 4 
                4 5 5 8 5 5 5 c c 5 5 8 5 5 4 
                4 5 5 8 5 5 5 b c 5 5 8 5 5 4 
                4 5 5 8 7 5 c c c 5 7 8 5 5 4 
                4 5 5 8 7 7 7 b 7 7 7 8 5 5 4 
                . 4 5 5 8 8 8 8 8 8 8 5 5 4 . 
                . 8 5 5 5 5 5 5 5 5 5 5 5 8 . 
                . . 8 8 5 5 5 5 5 5 5 8 8 . . 
                . . . . 8 8 8 8 8 8 8 . . . . 
                `, SpriteKind.Icon)
        }
        shopSprite_setValue.setPosition(90, 65)
        if (selector_timeline_five == 1) {
            shopSprite_valueMultiplier = sprites.create(img`
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . 8 8 8 8 8 8 8 . . . . 
                . . 8 8 2 2 2 2 2 2 2 8 8 . . 
                . 8 2 2 4 9 9 9 9 9 4 2 2 8 . 
                8 4 4 4 9 4 3 3 3 3 3 3 4 4 8 
                8 7 4 4 4 4 3 3 3 3 3 4 4 7 8 
                6 8 4 4 4 7 3 3 3 3 4 4 4 8 6 
                8 6 8 8 4 4 3 3 3 3 3 8 8 6 8 
                6 8 6 6 8 8 3 3 8 3 3 3 6 8 6 
                8 6 8 8 6 6 3 6 6 6 3 3 3 6 8 
                . 8 6 6 8 8 8 8 8 8 8 3 3 3 . 
                . . 8 8 6 6 6 6 6 6 6 8 3 3 3 
                . . . . 8 8 8 8 8 8 8 . . 3 3 
                `, SpriteKind.Icon)
            textSprite = textsprite.create("Value multiplier", 0, 15)
            textSprite2 = textsprite.create("x" + shipment_value_multiplier3, 0, 3)
            textSprite3 = textsprite.create("$" + shipment_value_multiplier3 * (100 * cost_multiplier3), 0, 15)
            textSprite2.setPosition(62, 70)
        } else {
            shopSprite_valueMultiplier = sprites.create(img`
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . 8 8 8 8 8 8 8 . . . . 
                . . 8 8 2 2 2 2 2 2 2 8 8 . . 
                . 8 2 2 4 9 9 9 9 9 4 2 2 8 . 
                8 4 4 4 9 4 4 4 4 4 9 4 4 4 8 
                8 7 4 4 4 4 4 4 4 4 4 4 4 7 8 
                6 8 4 4 4 7 7 7 7 7 4 4 4 8 6 
                8 6 8 8 4 4 4 4 4 4 4 8 8 6 8 
                6 8 6 6 8 8 8 8 8 8 8 6 6 8 6 
                8 6 8 8 6 6 6 6 6 6 6 8 8 6 8 
                . 8 6 6 8 8 8 8 8 8 8 6 6 8 . 
                . . 8 8 6 6 6 6 6 6 6 8 8 . . 
                . . . . 8 8 8 8 8 8 8 . . . . 
                `, SpriteKind.Icon)
        }
        shopSprite_valueMultiplier.setPosition(70, 75)
        textSprite.setPosition(80, 95)
        textSprite3.setPosition(80, 105)
        shopSprite_shipmentsPerSecond.y += -15
        shopSprite_shipmentMultiplier.y += -15
        shopSprite_setValue.y += -15
        shopSprite_valueMultiplier.y += -15
        textSprite2.y += -15
    }
}
function upgrades3 () {
    timeline_location = 5
    if (line_3_purchased == 0) {
        scene.setBackgroundImage(img`
            7777777777773444444d44577777777777777cc22222222222222222226aabbcc7777777777777777777777777777777777777777777777777777777777b2222222222222d2222223222222222222222
            7777777777773444444d445777777777777cc222222222222222222266abbcc777777777777777777777777777777777777777777777777777777777777b222aaa2222222d2222223222222222222222
            7777777777773444444d4457777777777cc222222222222222222266abbcc7777777777777777777777777777777777777777777777777777777777777bb222aba2222222d2222223222222222222222
            7777777777773444444d44577777777cc222222222222222222266abbcc7777777777777777777777777777777777777777777777777777777777777777b222aaa2222222d2222223222222222222222
            7777777777773444444d445777777cc222222222222222222266abbcc777777777777777777777777777777777777777777777777777777777777777777b22222222222222d222223222222222222222
            7777777777773444444d4457777cc222222222222222222266abbcc77777777777777777777777777777777777777777777777777777777777777777777b22222222222222d222223222222222222222
            7777777777773444444d44577cc222222222222222222266abbcc77777777777777777ddddddddddddddddddddd77777777777777777777777777777777b222aaa22222222d222223222222222222222
            777777777777344444d4445cc222222222222222222266abbcc777777777777777dddd444444442222244444444dddd777777777777777777777777777bb222aba22222222d222223222222222222222
            777777777777344444d44cc222222222222222222266abbcc77777777777777ddd44444444444422222444444444444ddd7777777777777777777777777b222aaa222222222d22223222222222222222
            777777777777344444dcc222222222222222222266abbcc7777777777777ddd44444444444444422222444444444444444ddd7777777777777777777777b222222222222222d22223222222222222222
            77777777777734444dc222222222222222222266abbcc7777777777777dd44444444444444444422222444444444444444444dd77777777777777777777b222222222222222d22223222222222222222
            777777777777344cd222222222222222222266abbcc7777777777777dd444444444444444444442222244444444444444444444dd777777777777777777b222aaa222222222d22223222222222222222
            7777777777773cc2d2222222222222222266abbcc7777777777777dd4444444444444444444444222224444444444444444444444dd777777777777777bb222aba2222222222d2223222222222222222
            77777777777c3222d22222222222222266abbcc7777777777777dd44444444444444444444444422222444444444444444444444444dd77777777777777b992aaa2222222222d2223222222222222222
            ccccccccccc3222d2222222222222266abbcc7777777777777dd444444444444444444444444442222244444444444444444444444444dd777777777777bbb99222222222222d2223222222222222222
            222222222223222d22222222222266abbcc77777777777777d4444444444444444444444444444222224444444444444444444444444444d77777777777777bb9922222222222d223222222222222222
            22222222222322d2222222222266abbcc77777777777777dd444444444444444444444444444442222244444444444444444444444444444dd77777777777777bb99222222222d222322222222222222
            22222222222322d22222222266abbcc777777777777117d4444444444444444444444444444444222224444444444444444444444444444444d777777777777777bb992222222d222322222222222222
            2222222222232d2222222266abbcc7777777777777771d444444444444444444444444444444442222244444444444444444444444444444444d7777777777777777bb99922222d22232222222222222
            2222222222232d22222266abbcc77777777777777777d44444444444444444444444444444444422222444444444444444444444444444444444d77777777777777777bbb992222d2232222222222222
            2222222222232d222266abbcc777777777777777777d44444444444444444444444444444444442222244444444444444444b4444444444444444d7717777777777777777bb9922d2232222222222222
            222222222223d22266abbcc7777777777777777777d4444444444444444444444444444444444422222444444444444444b4444444444444444444d77777777777777777777bb992d232222222222222
            22222222223d2266abbcc45777777777777777177d44444444444444444444444444444444444422222444444444444444444444444444444444444d777777777777777777777bb9d223222222222222
            22222222223266abbcc444577777777777777777d4444444444444444444444444444444bbbbbb22222bbbbbb4444444444444444b44444444444444d7777777777777777777744bbd93222222222222
            666666666636abbcc4444457777777777777777d4444444444444444444444444444bbbb22222222222222222bbbb44444444444b4b4444b444444444d77777777777777777774444bd3992222222222
            aaaaaaaaad3bbcc44444445777777777777777d444444444444444444444444444bb2222222222255522222222222bb44444444444b444444444444444d77777777777777777744444db3b9922222222
            bbbbbbbbd3bcc444444444577777777777777d44444444444444444444444444bb22222222222225552222222222222bb44444444444444444444444444d77777777777777777444444d34bb99222222
            ccccccccd3c7744444444457777777777777d4444444444444444444444444bb222222222222222555222222222222222bb4444444444444444444444444d77777777777777774444444d444bb992222
            7777777d7377744444444457777777777777d444444ddd44444444444444bb2222222222222222222222222222222222222bb44444444444444ddd444444d777777777777777744444444d4677bb9922
            777777d7737774444444457b77777777777dddddddd444ddddd44444444b22222222222222222222222222222222222222222b44444444ddddd444dddddddd777777777777777444444443d67777bb99
            77777db773774444444457b77777777777d4444444d222d4444d44444bb2222222222222222222222222222222222222222222bb44444d4444d222d4444444d777777777777774444444434d777777bb
            7777db773774444444457b777777777777d4444444ddddd44444d444b22222222222222222222222222222222222222222222222b444d44444ddddd4444444d7777777777777744444444436dd777777
            777db777374444444457b777777777777d449494944444444444d44b2222222222222222222222222222222222222222222222222b44d444444444449494944d77777777777774444444444377d77777
            77db777734444444457b7777777777777d449494944444444444d4b222222222222222222222222222222222222222222222222222b4d444444444449494944d777777777777744444444446377dd777
            7db777773444444457b7777777777777d444444444444444444dab22222222222222222222222222222222222222222222222222222bad444444444444444444d7777777777774444444444637777ddd
            db777774344444457b77777777777777dddddddddddddddddddab2222222222222222222222222222222222222222222222222222222baddddddddddddddddddd7777777777774444444444673777777
            b777774344444457b77777777777777daaaabbaaabbaaaabaaab222222222222222222222222222222222222222222222222222222222baaabaaaabbaaabbaaaad777777777774444444444673377777
            777774434444457b777777777777777d444ccccccccc44bb44b22222222222222222222222222222222222222222222222222222222222b44bb44ccccccccc444d771777777774444444444677737777
            77774434444457b777777777777777dbbbbc3333333cbbb444b22222222222222222222222222222222222222222222222222222222222b444bbbc3333333cbbbbd11777777774444444444677773777
            7774443444457b7777777777777177d4444ccccccccc44444b2222222222222222222222222222222222222222222222222222222222222b44444ccccccccc4444d11717777774444444444677777337
            774444344457b7777777777777777d444444aaaaaaa44444b222222222222222222222222222222222222222222222222222222222222222b44444aaaaaaa444444d7777777774444444444677777733
            74444344457b77777777777777711d444444444444444444b222222222222222222222222222222222222222222222222222222222222222b444444444444444444d7777777774444444444677777777
            4444354457b777777777777777771d44444444444444444b22222222222222222222222222222222222222222222222222222222222222222b44444444444444444d7777777774444444444677777777
            444354457b777777777777777777d444444444444444444b22222222222222222222222222222222222222222222222222222222222222222b444444444444444444d777777774444444444677777777
            44434457b7777777777777777777d44444444444444444b2222222222222222222222222222222222222222222222222222222222222222222b44444444444444444d777777774444444444677777777
            4434457b77777777777777777777d44444444444444444b2222222222222222222222222222222222222222222222222222222222222222222b44444444444444444d777777774444444444677777777
            434457b77777777777777777777d44444444444444444b222222222222222222222222222222222222222222222222222222222222222222222b44444444444444444d77777774444444444677777777
            34457b777777777777777777777d44444444444444444b222222222222222222222222222222222222222222222222222222222222222222222b44444444444444444d77777774444444444677777777
            4457b7777777777777777777777d4444444444444444b22222222222222222222222222222222222222222222222222222222222222222222222b4444444444444444d77777774444444444677777777
            457b77777777777777777777777d4444444444444444b22222222222222222222222222222222222222222222222222222222222222222222222b4444444444444444d77777774444444444677777777
            57b77777777777777777777777d44444444444444444b22222222222222222222222222222222222222222222222222222222222222222222222b4444444444b444444d7777774444444444677777777
            7b777777777777777777777777d44444444444444444b22222222222222222222222222222222222222222222222222222222222222222222222b44444444444b44444d7777774444444444677777777
            b7777777777777777777777777d4444444444444444b2222222222222222222222222222222222222222222222222222222222222222222222222b4444444444444444d7777774444444444677777777
            77777777777777777777777777d4444444444444444b2222222222222222222222222222222222222222222222222222222222222222222222222b4444444444444444d7777774444444444677777777
            77777777777777777777777777d4444444444444444b2222222222222222222222222222222222222222222222222222222222222222222222222b4444444444444444d7777774444444444677777777
            77777777777777777777777777d4444444444444444b2222222222222222222222222222222222222222222222222222222222222222222222222b4444444444444444d7777774444444444677777777
            77777777777777777777777777d4444444444444444b2222222222222222222222222222222222222222222222222222222222222222222222222b4444444444444444d7777774444444444677777777
            77777777777777777777777777d4444444444444444b2222222222222222222222222222222222222222222222222222222222222222222222222b4444444444444444d7777774444444446677777777
            77777777777777777777777777d22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222d7777774444444446677777777
            77777777777777777777777777d22222222222222222255522222222222222222222222222222222222222222222222222222222222222222555222222222222222222d7777774444444446677777777
            77777777777777777777777777d22222222222222222255522222222222222222222222222222222222222222222222222222222222222222555222222222222222222d7777774444444446677777777
            77777777777777777777777777d22222222222222222255522222222222222222222222222222222222222222222222222222222222222222555222222222222222222d7777774444444446677777777
            77777777777777777777777777d22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222d7777774444444446677777777
            77777777777777777777777777d4444444444444444b2222222222222222222222222222222222222222222222222222222222222222222222222b4444444444444444d7777774444444446677777777
            77777777777777777777777777d4444444444444444b2222222222222222222222222222222222222222222222222222222222222222222222222b4444444444444444d7777774444444446677777777
            77777777777777777777777777d444444444444b444b2222222222222222222222222222222222222222222222222222222222222222222222222b4444444444444444d7777774444444446677777777
            77777777777777777777777777d4444444444444444b2222222222222222222222222222222222222222222222222222222222222222222222222b4444444444444444d7777774444444446677777777
            77777777777777777777777777d4444444444444444b2222222222222222222222222222222222222222222222222222222222222222222222222b4444444444444444d7777774444444446677777777
            77777777777777777777777777d4444444444444444b2222222222222222222222222222222222222222222222222222222222222222222222222b4444444444444444d7777774444444446677777777
            77777777777777777777777777d44444444444444444b22222222222222222222222222222222222222222222222222222222222222222222222b44444444444444444d7777774444444446677777777
            77777777777777777777777777d44444444444444444b22222222222222222222222222222222222222222222222222222222222222222222222b44444444444444444d7777774444444446677777777
            777777777777777777777777777d4444444444444444b22222222222222222222222222222222222222222222222222222222222222222222222b4444444444444444d77777774444444446677777777
            777777777777777777777777777d4444444444444444b22222222222222222222222222222222222222222222222222222222222222222222222b4444444444444444d77777774444444446677777777
            777777777777777777777777777d44444444444444444b222222222222222222222222222222222222222222222222222222222222222222222b44444444444444444d77777774444444446677777777
            777777777777777777777777777d444444444b4444444b222222222222222222222222222222222222222222222222222222222222222222222b44444444444444444d77777774444444446677777777
            7777777777777777777777777777d444444444b4444444b2222222222222222222222222222222222222222222222222222222222222222222b44444444444444444d777777774444444446677777777
            7777777777777777777777777777d44444444444444444b2222222222222222222222222222222222222222222222222222222222222222222b44444444444444444d777777774444444446677777777
            7777777777777777777777777777d444444444444444444b22222222222222222222222222222222222222222222222222222222222222222b444444444444444444d777777774444444446677777777
            77777777777777777777777777777d44444444444444444b22222222222222222222222222222222222222222222222222222222222222222b44444444444444444d7777777774444444446677777777
            77777777777777777777777777777d444444444444444444b222222222222222222222222222222222222222222222222222222222222222b444444444444444444d7777777774444444446677777777
            77777777777777777777777777777d444444444444444444b222222222222222222222222222222222222222222222222222222222222222b444444444444444444d7777777774444444446677777777
            777777777777777777777777777777d444444444444444444b2222222222222222222222222222222222222222222222222222222222222b444444444444444444d77777777774444444446677777777
            777777777777777777777777777777d4444444444444444444b22222222222222222222222222222222222222222222222222222222222b4444444444444444444d77777777774444444446677777777
            7777777777777777777777777777777d444444444444444444b22222222222222222222222222222222222222222222222222222222222b444444444444444444d777777777774444444446677777777
            7777777777777777777777777777777dd4444ccccccccc44444b222222222222222222222222222222222222222222222222222222222b44444ccccccccc4444dd777777777774444444446677777777
            77777777777777777777777777777777dbbbbc3333333cbbb444b2222222222222222222222222222222222222222222222222222222b444bbbc3333333cbbbbd7777777777774444444446677777777
            77777777777777777777777777777777dd444ccccccccc44bb444b22222222222222222222222222222222222222222222222222222b444bb44ccccccccc444dd7777777777774444444446677777777
            777777777777777777777777777777777d4444bbaaabb4444b4444b222222222222222222222222222222222222222222222222222b4444b4444bbaaabb4444d77777777777774444444466677777777
            777777777777777777777777777777777dddddddddddddddddddd44b2222222222222222222222222222222222222222222222222b44dddddddddddddddddddd77777777777774444444466677777777
            7777777777777777777777777777777777d444444444444444444d44b22222222222222222222222222222222222222222222222b44d444444444444444444d777777777777774444444466677777777
            7777777777777777777777777777777777dd449494944444444444d44bb2222222222222222222222222222222222222222222bb44d444444444449494944dd777777777777774444444466677777777
            77777777777777777777777777777777777d449494944444444444d4444b22222222222222222222222222222222222222222b4444d444444444449494944d7777777777777774444444466677777777
            777777777777777777777777777777777777d4444444ddddd44444d44444bb2222222222222222222222222222222222222bb44444d44444ddddd4444444d77777777777777774444444466677777777
            777777777777777777777777777777777777d4444444d222d4444da4444444bb222222222222222555222222222222222bb4444444ad4444d222d4444444d77777777777777774444444466677777777
            7777777777777777777777777777777777777dddddddd444ddddda4444444444bb22222222222225552222222222222bb4444444444addddd444dddddddd777777777777777774444444466677777777
            77777777777777777777777777777777777777daaaaaadddaaaaa4444444444444bb2222222222255522222222222bb4444444444444aaaaadddaaaaaad7777777777777777774444444466677777777
            777777777777777777777777777777777777777d4444444444444444444444444444bbbb22222222222222222bbbb4444444444444444444444444444d77777777777777777774444444466677777777
            7777777777777777777777777777777777777777d4444444444444444444444444444444bbbbbb22222bbbbbb4444444444444444444444444444444d777777777777777777774444444466677777777
            77777777777777777777777777777777777777777d44444444444444444444444444444444444422222444444444444444444444444444444444444d7777777777777777777774444444466677777777
            77777777777777777777777777777777777777777bd44444444444444444444444444444444444222224444444444444b444444444444444444444db7777777777777777777774444444466677777777
            777777777777777777777777777777777777777777bd44444444444444444444444444444444442222244444444444444b4444444444444444444db77777777777777777777774444444466677777777
            7777777777777777777777777777777777777777777bd44444444444444444444444444444444422222444444444444444444444444444444444db777777777777777777777774444444466677777777
            77777777777777777777777777777777777777777777bd444444444444444444444444444444442222244444444444444444444444444444444db7777777777777777777777774444444466677777777
            777777777777777777777777777777777777777777777bd4444444444444444444444444444444222224444444444444444444444444444444db77777777777777777777777774444444466677777777
            7777777777777777777777777777777777777777777777bdd444444444444444444444444444442222244444444444444444444444444444ddb777777777777777777777777774444444466677777777
            7777777777777777777777777777777777777777777777bbbd4444444444444444444444444444222224444444444444444444444444444dbb7777777777777777777777777774444444466677777777
            77777777777777777777777777777777777777777777777bbbdd444444444444444444444444442222244444444444444444444444444ddb777777777777777777777777777774444444466677777777
            77777777777777777777777777777777777777777777777bb7bbdd44444444444444444444444422222444444444444444444444444ddbb77777777777777777777777777777b4b4b4b4b6b6b7777777
            77777777777777777777777777777777777777777777777b7777bbdd4444444444444444444444222224444444444444444444444ddbb777777777777777777777777777777774444444466677777777
            77777777777777777777777777777777777777777777777b777777bbdd444444444444444444442222244444444444444444444ddbb7b777777777777777777777777777777774444444466677777777
            777777777777777777777777777777777777777777777777777777bbbbdd44444444444444444422222444444444444444444ddbbbb7b777777777777777777777777777777774444444466677777777
            777777777777777777777777777777777777777777777777777777bbbbbbddd44444444444444422222444444444444444dddbbbb7777777777777777777777777777777777774444444466677777777
            777777777777777777777777777777777777777777777777777777bb77bbbbbddd44444444444422222444444444444dddbbbbb777777777777777777777777777777777777774444444466677777777
            777777777777777777777777777777777777777777777777777777bb7777bbbbbbdddd444444442222244444444ddddbbbbbb77777777777777777777777777777777777777774444444466677777777
            777777777777777777777777777777777777777777777777777777b77777777bbbbbbbdddddddddddddddddddddbbbbbbbb7777777777777777777777777777777777777777774444444466677777777
            777777777777777777777777777777777777777777777777777777777777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbb7bbb7777777777777777777777777777777777777777774444444466677777777
            7777777777777777777777777777777777777777777777777777777777777777777777bbbbbbbbbbbbbbbbbbbbb77777b7b7777777777777777777777777777777777777777774444444666677777777
            77777777777777777777777777777777777777777777777777777777777777777777777b77777777b777777777777777b7b77777777777777777777777777777777777777777b4b4b4b4b6b6b7777777
            77777777777777777777777777777777777777777777777777777777777777777777777777777777b77777777777777777b7777777777777777777777777777777777777777774444444666677777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777774444444666677777777
            `)
        textSprite = textsprite.create("Next area: $20,000", 2, 3)
        textSprite.setPosition(80, 60)
        invisibleSprite1 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Intangible)
        invisibleSprite1.setPosition(40, 38)
        invisibleSprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Intangible)
        invisibleSprite2.setPosition(40, 38)
        invisibleSprite3 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Intangible)
        invisibleSprite3.setPosition(145, 120)
        leftSprite = sprites.create(img`
            d d d d d d d d d d d d d d d 
            d 5 5 5 5 5 5 5 5 5 5 5 5 5 d 
            d 5 5 5 5 5 5 5 5 5 5 5 5 5 d 
            d 5 5 5 5 5 5 5 5 5 5 5 5 5 d 
            d 5 5 5 5 3 5 5 5 5 5 5 5 5 d 
            d 5 5 5 3 3 5 5 5 5 5 5 5 5 d 
            d 5 5 3 3 3 3 3 3 3 3 3 3 5 d 
            d 5 3 3 3 3 3 3 3 3 3 3 3 5 d 
            d 5 5 3 3 3 3 3 3 3 3 3 3 5 d 
            d 5 5 5 3 3 5 5 5 5 5 5 5 5 d 
            d 5 5 5 5 3 5 5 5 5 5 5 5 5 d 
            d 5 5 5 5 5 5 5 5 5 5 5 5 5 d 
            d 9 5 5 5 5 5 5 5 5 5 5 5 9 d 
            d 9 9 9 9 9 9 9 9 9 9 9 9 9 d 
            d d d d d d d d d d d d d d d 
            `, SpriteKind.Icon)
        leftSprite.setPosition(8, 113)
    } else {
        scene.setBackgroundImage(img`
            bbbbbbbbbbbbbfeebbbbbbbbebbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbfbebebbbbbbebbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbfbebebbbbbbebbbbbffbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbeecbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbfbebbebbbbebbbbbffffbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbebbecbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbfbebbebbbbebbbbbffffbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbebbecbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbfebbbebbbbebbbbbbffbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbeecbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbfbebbbbebbebbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbfebbbbbbeebbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbebbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbebbbbbbbbbbbbbbbbceebbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbeecbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbefbbbbbbbbbbbbbbbcebbebddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbebbecbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbefbbbbbbbbbbbbbbbcebbebddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbebbecbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbefbbbbbbbbbbbbbbbbbceebbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbeecbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbebfbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbebfbbbbbbbbbbbbbbbbbbbbbbaaddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbebbfbbbbbbbbbbbbbbbbbbbbbb99aaadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbebbfbbbbbbbbbbbbbbbbbbceebb99999aaaddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbeecbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbebbfbbbbbbbbbbbbbbbbbcebbeb99999999aaadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbebbecbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbebbbfbbbbbbbbbbbbbbbbbcebbeb99999999999aaaadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbebbecbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbebbbbfbbbbbbbbbbbbbbbbbbceebb999999999999999aaaddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbeecbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbebbbbfbbbbbbbbbbbbbbbbbbbbbbbb999999999999999999aaaddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbebbbbbfbbbbbbbbbbbbbbbbbbbbbbbb999999999999999999999aaadddddddddddddddddddddddddddddddddddddddddddddddddddaaaaaaaaaaaa9999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            eebbbbbbfbbbbbbbbbbbbbbbbbbbbbbbb999999999999999999999999aaadddddddddddddddddddddddddddddddddddddaaaaaaaaaaa9999999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbfbbbbbbbbbbbbbbbbbbbbbffbb999999999999999999999999999aaaddddddddddddddddddddddaaaaaaaaaaaa999999999999999999999999999999bbeecbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbfbbbbbbbbbbbbbbbbbbbbffffb999999999999999999999999999999aaaddddddddaaaaaaaaaaa999999999999999999999999999999999999999999bebbecbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbfbbbbbbbbbbbbbbbbbbbbffffb999999999999999999999999999999999aaaaaaaa99999999999999999999999999999999999999999999999999999bebbecbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbfbbbbbbbbbbbbbbbbbbbbbffbaa999999999999999999999999999999999999aaa999999999999999999999999999999999999999999999999999999bbeecbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbdaaa999999999999999999999999999999999999aaa999999999999999999999999999999999999999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbb9999aaa999999999999999999999999999999999999aaa999999999999999999999999999999999999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbb9999999aaa999999999999999999999999999999999999aaa999999999999999999999999999999999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbfbbbbbbbbbbbbbbbbbbbbbceebb9999999999aaa999999999999999999999999999999999999aaa99999999999999999999999999999999999aaaaaaabbeecbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbfbbbbbbbbbbbbbbbbbbbbbcebbeb9999999999999aaa999999999999999999999999999999999999aaa99999999999999999999aaaaaaaaaaaadddddddbebbecbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbfbbbbbbbbbbbbbbbbbbbbbcebbeb9999999999999999aaa999999999999999999999999999999999999aaa999999aaaaaaaaaaadddddddddddddddddddbebbecbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbfbbbbbbbbbbbbbbbbbbbbbbceebb9999999999999999999aaa999999999999999999999999999999999999aaaaaaddddddddddddddddddddddddddddddbbeecbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbb9999999999999999999999aaa999999999999999999999999999999999999aaaadddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbb9999999999999999999999999aaa999999999999da99999999999999999999999aaaddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbb999999999999999999aaaaaaaaaaaaa999999addda99999999999999999999999999aaadddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbfbbbbbbbbbbbbbbbbbbbbbbbbceebb999999aaaaaaaaaaaadddddddddddddaaa99addda999999999999999999999999999999aaaddddddddddddddddddddbbffbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbfbbbbbbbbbbbbbbbbbbbbbbbcebbebaaaaaaddddddddddddddddddddddddddddaadddda999999999999999999999999999999999aaadddddddddddddddddbffffbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbfbbbbbbbbbbbbbbbbbbbbbbbcebbebddddddddddddddddddddddddddddddddddddddda9999999999999999999999999999999999999addddddddddddddddbffffbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbfbbbbbbbbbbbbbbbbbbbbbbbbceebbddddddddddddddddddddddddddddddddddddddddaaa9999999999999999999999999999999999dddaaaaddddddddddbbffbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddddddddddddddddddddddddaaaa999999999999999999999999999999dda9999aaadddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddaaa9999999999999999999999999999999999999aaaddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddaaa9999999999999999999999999999999999999aaadbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            fbbbbbbbbbbbbbbbbbbbbbbbbbbbceebbdddddddddddddddddddddddddddddddddddddddddddddddddddddaaa99999999999999999999999999999999999aaabbeecbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            fbbbbbbbbbbbbbbbbbbbbbbbbbbcebbebddddddddddddddddddddddddddddddddddddddddddddddddddddddddaaa99999999999999999999999999999999999bebbecbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbcebbebdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddaaa99999999999999999999999999999999bebbecbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbceebbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddaaa99999999999999999999999999999bbeecbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddaaa99999999999999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddaaaa99999999999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddaaaaa9999aaa99999999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbceebbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddaaaaa999999999999aaa99999999999999999bbeecbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbcebbebddddddddddddddddddddddddddddddddddddddddddddddddddddaaaaa99999999999999999999aaa99999999999999bebbecbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbcebbebdddddddddddddddddddddddddddddddddddddddddddddddaadda9999999999999999999999999999aaa99999999999bebbecbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbceebbddddddddddddddddddddddddddddddddddddddddddaaaaa99d999999999999999999999999999999999aaa99999999bbeecbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddddddddddddddddddaaaaa99999999999999999999999999999999999999999999aaa99999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddaaaaa9999999999999999999999999999999999999999999999999aaaaaa99bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddddddddaaaaa9999999999999999999999999999999999999999999999999aaaaaddddddaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbceebbdddddddddddddddddddddddaaaa999999999999999999999999999999999999999999999999aaaaaadddddddddddddbbffbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbcebbebddddddddddddddddddaaaaa99999999999999999999999999999999999999999da9999aaaaadddddddddddddddddddbffffbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbcebbebdddddddddddddaaaaa999999999999999999999999999999999999999999999addaaaaddddddddddddddddddddddddbffffbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbceebbddddddddaaaaa99999999999999999999999999999999999999999999999aaaaddddddddddddddddddddddddddddddbbffbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddaaaaa99999999999999999999999999999999999999999999999aaaaaddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbaaa99999999999999999999999999999999999999999dda999aaaaadddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb9999999999999999999999999999999999999999999adddaaaddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbceebb999999999999999999999999999999999999999aaaaaddddddddddddddddddddddddddddddddddddddddddddddddddbbffbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbcebbeb9999999999999999999999999999999999aaaaadddddddddddddddddddddddddddddddddddddddddddddddddddddddbffffbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbcebbeb99999999999999999999999999999aaaaaddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbffffbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbceebb999999999999999999999999aaaaadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbffbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb9999999999999999999aaaaaddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb9999999999999aaaaaadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb99999999aaaaadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbceebb999aaaaaddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbeecbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbcebbebaaadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbebbecbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbcebbebddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbebbecbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbceebbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbeecbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbceebbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbeecbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbcebbebddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbebbecbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbcebbebddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbebbecbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbceebbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbeecbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcbbccccbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbcbcbbbbbccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcccccccbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbcbbbbbccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcccccccbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbccbbbbcccd4444444444444447444444444744444444444744444444444744444444444444474444444444444744444444444444dcccccccbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbcccbcccccd444444444444444744444444474444444444474444444444447444444444444444474444444444444744444444444444dccccccbbcbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbccccccccd44444444444444474444444447444444444444744444444444474444444444444444744444444444444744444444444444dccccccbcbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbccccccccd7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777dccccccccbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbcccccccd444445444444445555554444447444444444444744444444444447444444444444444447444444444444444744444444444444dcccccccbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbccccccd44444444455544555555555554744444444444447444444444444447444444444444444474444444444444444744444444444444dcccccccbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbcccccd4444455555555555555555555557444444444444474444444444444474444444444444444474444444444444444744444444444444dccccccccbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbcbbccccd777777555555555555555555555777777777777777777777777777777777777777777777777777777777777777777777777777777777dccccccccbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbcbccccd44444444445555555555555555474444444444444474444444444444447444444444444444444744444444444444447444444444444444dccccccccbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbcccccd4444444444455555555555554444744444444444447444444444444444474444455444444444447444444444444444447444444444444444dcccccccbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbcccccd444444444444445555554444444574444444444444474444444444444444474455555544444444474444444444444444447444444444444444dccccccbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbcbcccccd44444444444444474444444444447444444444444444744444444444444444744455554444444444474444444444444444447444444444444444dcccccbbbbbbbbcbbbbbbb
            bbbbbbbbbbbbbbccccccd4444444444444447444444444444474444488888444474444444444444444447444454444444444444744444444444444444447444444444444444dcccccbbbbbbbbbbbbbbb
            bbbbbbcbbbbccccccccd777777777777777777777777777777888888555558777777777777777777777777777777777777777777777777777777777777777777777777777777dccccbccbbbbbbbbbbbb
            bbbbbbbbbbbcccccccd4444444444444447444444444444478555555555558ccc7444444444444444444744444444444455444447444444444444444444447444444444444444dccccccbbbbbbbbbbbb
            bbbbbbcbbbcccccccd444444444444444744444444444447c85555555555558c744444444444444444444744444555555555544474444444444444444444447444444444444444dcccccbbbbbbbbbbbb
            bbbbbccbbbccccccd4444444444444447444444444444447c85555555555558c7444444444444444444447445555555555555544474444444444444444444447444444444444444dcccccbbbbbbbbbbb
            bbbbbccbbbcccccd4444444444444447444444444444447ccc8555555555555874444444444444444444474444555555555555444744444444444444444444447444444444444444dcccccbbbbbbbbbb
            bbbbbccbcbccccd4444444444444447444444444444447cccc85555555555558444444444444444444444744444445554444444444744444444444444444444447444444444444444dccccccbbbbbbbb
            bbcbcccccccccd777777777777777777777777777777777777c85555555555558777777777777777777777777777777777777777777777777777777777777777777777777777777777dccccccbbcbbbb
            bbbbccccccccd4444444444444447444444444444444744444c855555555555584444444444444444444447444444444444444444474444444444444444444444474444444444444444dcccccbccbbbb
            bbbbcccccccd4444444444444447444444444444444744444448555555588888844444444444444444444474444444444444444444474444444444444444444444474444444444444444dcccccccbbbb
            bbbbccccccd4444444444444447444444444444444474444444c8888888cccc44444444444444444444444744444444444444444444744444444444444444444444455555544444444444dccccccbbbb
            bbbccccccd444444444444444744444444444444447444444444ccccccc4474444444444444444444444447444444444444444444444744444444444444444444445555555554444444444dccccccbbb
            bcbcccccd4444444444444447444444444444444474444444444444444444744444444444444444444444474444444444444444444447444444444444444444444444455554444444444444dcccccccb
            bccccccd444444444444444744444444444444444744444444444444444447444444444444444444444444474444444444444444444474444444444444444444444444474444444444444444dccccccb
            ccccccd44444444444444474444444444444444474444444444444444444744444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777dcccccb
            cccccd7777777777777777777777777777777777777777777777777777777777777777777777777444444444744444444444444444444744444444444444444444444444474444444444444444dccccc
            ccccd444444444444444744444444444444444474444444444444444444474444444444444444444444444447444444444444444444447444444444444444444444444444474444444444444444dcccc
            cccd44444444444444474444444444444444444744444444444444444444744444444444444444444444444447444444444444444444447444444444444444444444444444474444444444444444dccc
            ccd4444444444444447444444444444444444474444444444444444444474444444444444444444444444444474444444444444444444474444444444444444444444444444474444444444444444dcc
            cd444444444444444744444444444444444444744444444444444444444744444444444444444444444444444744444444444444444444744444444444444444444444444444474444444444444444dc
            d44444444444444474444444444444444444474444444444444444444474444444444444444444444444444444744444444444444444444744444444444444444444444444444474444444444444444d
            `)
        invisibleSprite1 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Intangible)
        invisibleSprite1.setPosition(13, 0)
        invisibleSprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Intangible)
        invisibleSprite2.setPosition(13, 0)
        invisibleSprite3 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Intangible)
        invisibleSprite3.setPosition(13, 0)
        selector_timeline_five = 4
        updown3()
        leftSprite = sprites.create(img`
            d d d d d d d d d d d d d d d 
            d 5 5 5 5 5 5 5 5 5 5 5 5 5 d 
            d 5 5 5 5 5 5 5 5 5 5 5 5 5 d 
            d 5 5 5 5 5 5 5 5 5 5 5 5 5 d 
            d 5 5 5 5 3 5 5 5 5 5 5 5 5 d 
            d 5 5 5 3 3 5 5 5 5 5 5 5 5 d 
            d 5 5 3 3 3 3 3 3 3 3 3 3 5 d 
            d 5 3 3 3 3 3 3 3 3 3 3 3 5 d 
            d 5 5 3 3 3 3 3 3 3 3 3 3 5 d 
            d 5 5 5 3 3 5 5 5 5 5 5 5 5 d 
            d 5 5 5 5 3 5 5 5 5 5 5 5 5 d 
            d 5 5 5 5 5 5 5 5 5 5 5 5 5 d 
            d 9 5 5 5 5 5 5 5 5 5 5 5 9 d 
            d 9 9 9 9 9 9 9 9 9 9 9 9 9 d 
            d d d d d d d d d d d d d d d 
            `, SpriteKind.Icon)
        leftSprite.setPosition(8, 113)
        rightSprite = sprites.create(img`
            d d d d d d d d d d d d d d d 
            d 5 5 5 5 5 5 5 5 5 5 5 5 5 d 
            d 5 5 5 5 5 5 5 5 5 5 5 5 5 d 
            d 5 5 5 5 5 5 5 5 5 5 5 5 5 d 
            d 5 5 5 5 5 5 5 5 3 5 5 5 5 d 
            d 5 5 5 5 5 5 5 5 3 3 5 5 5 d 
            d 5 3 3 3 3 3 3 3 3 3 3 5 5 d 
            d 5 3 3 3 3 3 3 3 3 3 3 3 5 d 
            d 5 3 3 3 3 3 3 3 3 3 3 5 5 d 
            d 5 5 5 5 5 5 5 5 3 3 5 5 5 d 
            d 5 5 5 5 5 5 5 5 3 5 5 5 5 d 
            d 5 5 5 5 5 5 5 5 5 5 5 5 5 d 
            d 9 5 5 5 5 5 5 5 5 5 5 5 9 d 
            d 9 9 9 9 9 9 9 9 9 9 9 9 9 d 
            d d d d d d d d d d d d d d d 
            `, SpriteKind.Icon)
        rightSprite.setPosition(152, 113)
    }
}
function updown () {
    if (timeline_location == 2) {
        sprites.destroy(textSprite)
        sprites.destroy(textSprite2)
        sprites.destroy(textSprite3)
        sprites.destroy(shopSprite_shipmentsPerSecond)
        sprites.destroy(shopSprite_shipmentMultiplier)
        sprites.destroy(shopSprite_setValue)
        sprites.destroy(shopSprite_valueMultiplier)
        if (selector_timeline_two == 4) {
            shopSprite_shipmentsPerSecond = sprites.create(img`
                . . . . . . . . . . . . . 7 7 
                . . . . . . . . . . 7 7 7 6 6 
                . . . . . . . . . 7 6 6 6 . . 
                . . . . . . 7 7 7 6 . . . . . 
                . . . . . d d 6 9 9 . d . . . 
                . . 7 9 9 9 d b 9 9 d d d . . 
                . 7 d d d 9 3 3 3 3 3 3 d d . 
                7 7 7 7 d 7 3 3 3 3 3 7 7 7 7 
                7 6 6 6 d 6 3 3 3 3 6 6 6 6 7 
                7 6 6 6 6 6 3 3 3 3 3 2 2 6 7 
                7 6 6 6 6 6 3 3 6 3 3 3 2 6 7 
                7 6 6 6 6 6 3 6 6 6 3 3 3 6 7 
                7 6 6 6 6 6 6 6 6 6 6 3 3 3 7 
                7 6 6 6 6 6 6 6 6 6 6 6 3 3 3 
                7 9 9 9 9 9 9 9 9 9 9 9 9 3 3 
                `, SpriteKind.Icon)
            textSprite = textsprite.create("Shipments/second")
            textSprite2 = textsprite.create("x" + shipments_per_second, 0, 3)
            textSprite3 = textsprite.create("$" + shipments_per_second * (100 * cost_multiplier))
            textSprite2.setPosition(82, 40)
        } else {
            shopSprite_shipmentsPerSecond = sprites.create(img`
                . . . . . . . . . . . . . 7 7 
                . . . . . . . . . . 7 7 7 6 6 
                . . . . . . . . . 7 6 6 6 . . 
                . . . . . . 7 7 7 6 . . . . . 
                . . . . . d d 6 9 9 . d . . . 
                . . 7 9 9 9 d b 9 9 d d d . . 
                . 7 d d d 9 b d d d d d d d . 
                7 7 7 7 d 7 7 7 d 7 7 7 7 7 7 
                7 6 6 6 d 6 6 6 d 6 6 6 6 6 7 
                7 6 6 6 6 6 6 6 d 6 6 2 2 6 7 
                7 6 6 6 6 6 6 6 6 6 6 2 2 6 7 
                7 6 6 6 6 6 6 6 6 6 6 6 6 6 7 
                7 6 6 6 6 6 6 6 6 6 6 6 6 6 7 
                7 6 6 6 6 6 6 6 6 6 6 6 6 6 7 
                7 9 9 9 9 9 9 9 9 9 9 9 9 9 7 
                `, SpriteKind.Icon)
        }
        shopSprite_shipmentsPerSecond.setPosition(90, 45)
        if (selector_timeline_two == 3) {
            shopSprite_shipmentMultiplier = sprites.create(img`
                . . . 4 4 . 4 4 4 . 4 4 . . . 
                . 4 . 4 5 4 4 5 4 4 5 4 . 4 . 
                . . 4 4 5 5 5 5 5 5 5 4 4 . . 
                4 4 4 5 5 5 5 5 5 5 5 5 4 4 4 
                4 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
                . 4 5 5 5 5 4 4 4 5 5 5 5 4 . 
                4 4 5 5 5 4 3 3 3 3 3 3 5 4 4 
                4 5 5 5 5 4 3 3 3 3 3 5 5 5 4 
                4 4 5 5 5 4 3 3 3 3 5 5 5 4 4 
                . 4 5 5 5 5 3 3 3 3 3 5 5 4 . 
                4 5 5 5 5 5 3 3 5 3 3 3 5 5 4 
                4 4 4 7 5 5 3 5 5 5 3 3 3 4 4 
                . . 4 4 7 7 7 7 7 7 7 3 3 3 . 
                . 4 . 4 7 4 4 7 4 4 7 4 3 3 3 
                . . . 4 4 . 4 4 4 . 4 4 . 3 3 
                `, SpriteKind.Icon)
            textSprite = textsprite.create("Shipments multiplier")
            textSprite2 = textsprite.create("x" + production_multiplier, 0, 3)
            textSprite3 = textsprite.create("$" + production_multiplier * (100 * cost_multiplier))
            textSprite2.setPosition(62, 50)
        } else {
            shopSprite_shipmentMultiplier = sprites.create(img`
                . . . 4 4 . 4 4 4 . 4 4 . . . 
                . 4 . 4 5 4 4 5 4 4 5 4 . 4 . 
                . . 4 4 5 5 5 5 5 5 5 4 4 . . 
                4 4 4 5 5 5 5 5 5 5 5 5 4 4 4 
                4 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
                . 4 5 5 5 5 4 4 4 5 5 5 5 4 . 
                4 4 5 5 5 4 7 7 7 4 5 5 5 4 4 
                4 5 5 5 5 4 . . . 4 5 5 5 5 4 
                4 4 5 5 5 4 . . . 4 5 5 5 4 4 
                . 4 5 5 5 5 4 4 4 5 5 5 5 4 . 
                4 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
                4 4 4 7 5 5 5 5 5 5 5 7 4 4 4 
                . . 4 4 7 7 7 7 7 7 7 4 4 . . 
                . 4 . 4 7 4 4 7 4 4 7 4 . 4 . 
                . . . 4 4 . 4 4 4 . 4 4 . . . 
                `, SpriteKind.Icon)
        }
        shopSprite_shipmentMultiplier.setPosition(70, 55)
        if (selector_timeline_two == 2) {
            shopSprite_setValue = sprites.create(img`
                . . . . 4 4 4 4 4 4 4 . . . . 
                . . 4 4 2 2 5 5 5 5 5 4 4 . . 
                . 4 2 2 5 5 5 5 5 5 5 5 5 4 . 
                . 4 2 5 8 8 8 8 8 8 8 5 5 4 . 
                4 2 5 8 2 5 5 b 5 5 5 8 5 5 4 
                4 5 5 8 5 5 c c c 5 5 8 5 5 4 
                4 5 5 8 5 5 3 3 3 3 3 3 5 5 4 
                4 5 5 8 5 5 3 3 3 3 3 8 5 5 4 
                4 5 5 8 5 5 3 3 3 3 5 8 5 5 4 
                4 5 5 8 7 5 3 3 3 3 3 8 5 5 4 
                4 5 5 8 7 7 3 3 7 3 3 3 5 5 4 
                . 4 5 5 8 8 3 8 8 8 3 3 3 4 . 
                . 8 5 5 5 5 5 5 5 5 5 3 3 3 . 
                . . 8 8 5 5 5 5 5 5 5 8 3 3 3 
                . . . . 8 8 8 8 8 8 8 . . 3 3 
                `, SpriteKind.Icon)
            textSprite = textsprite.create("Shipment value")
            textSprite2 = textsprite.create("x" + shipment_value, 0, 3)
            textSprite3 = textsprite.create("$" + shipment_value * (100 * cost_multiplier))
            textSprite2.setPosition(82, 60)
        } else {
            shopSprite_setValue = sprites.create(img`
                . . . . 4 4 4 4 4 4 4 . . . . 
                . . 4 4 2 2 5 5 5 5 5 4 4 . . 
                . 4 2 2 5 5 5 5 5 5 5 5 5 4 . 
                . 4 2 5 8 8 8 8 8 8 8 5 5 4 . 
                4 2 5 8 2 5 5 b 5 5 5 8 5 5 4 
                4 5 5 8 5 5 c c c 5 5 8 5 5 4 
                4 5 5 8 5 5 c b 5 5 5 8 5 5 4 
                4 5 5 8 5 5 5 c c 5 5 8 5 5 4 
                4 5 5 8 5 5 5 b c 5 5 8 5 5 4 
                4 5 5 8 7 5 c c c 5 7 8 5 5 4 
                4 5 5 8 7 7 7 b 7 7 7 8 5 5 4 
                . 4 5 5 8 8 8 8 8 8 8 5 5 4 . 
                . 8 5 5 5 5 5 5 5 5 5 5 5 8 . 
                . . 8 8 5 5 5 5 5 5 5 8 8 . . 
                . . . . 8 8 8 8 8 8 8 . . . . 
                `, SpriteKind.Icon)
        }
        shopSprite_setValue.setPosition(90, 65)
        if (selector_timeline_two == 1) {
            shopSprite_valueMultiplier = sprites.create(img`
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . 8 8 8 8 8 8 8 . . . . 
                . . 8 8 2 2 2 2 2 2 2 8 8 . . 
                . 8 2 2 4 9 9 9 9 9 4 2 2 8 . 
                8 4 4 4 9 4 3 3 3 3 3 3 4 4 8 
                8 7 4 4 4 4 3 3 3 3 3 4 4 7 8 
                6 8 4 4 4 7 3 3 3 3 4 4 4 8 6 
                8 6 8 8 4 4 3 3 3 3 3 8 8 6 8 
                6 8 6 6 8 8 3 3 8 3 3 3 6 8 6 
                8 6 8 8 6 6 3 6 6 6 3 3 3 6 8 
                . 8 6 6 8 8 8 8 8 8 8 3 3 3 . 
                . . 8 8 6 6 6 6 6 6 6 8 3 3 3 
                . . . . 8 8 8 8 8 8 8 . . 3 3 
                `, SpriteKind.Icon)
            textSprite = textsprite.create("Value multiplier")
            textSprite2 = textsprite.create("x" + shipment_value_multiplier, 0, 3)
            textSprite3 = textsprite.create("$" + shipment_value_multiplier * (100 * cost_multiplier))
            textSprite2.setPosition(62, 70)
        } else {
            shopSprite_valueMultiplier = sprites.create(img`
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . 8 8 8 8 8 8 8 . . . . 
                . . 8 8 2 2 2 2 2 2 2 8 8 . . 
                . 8 2 2 4 9 9 9 9 9 4 2 2 8 . 
                8 4 4 4 9 4 4 4 4 4 9 4 4 4 8 
                8 7 4 4 4 4 4 4 4 4 4 4 4 7 8 
                6 8 4 4 4 7 7 7 7 7 4 4 4 8 6 
                8 6 8 8 4 4 4 4 4 4 4 8 8 6 8 
                6 8 6 6 8 8 8 8 8 8 8 6 6 8 6 
                8 6 8 8 6 6 6 6 6 6 6 8 8 6 8 
                . 8 6 6 8 8 8 8 8 8 8 6 6 8 . 
                . . 8 8 6 6 6 6 6 6 6 8 8 . . 
                . . . . 8 8 8 8 8 8 8 . . . . 
                `, SpriteKind.Icon)
        }
        shopSprite_valueMultiplier.setPosition(70, 75)
        textSprite.setPosition(80, 95)
        textSprite3.setPosition(80, 105)
    }
}
function production_and_math () {
    timeline_location = 1
    scene.setBackgroundImage(img`
        ccccccccdccccccccdccccdcccccccccccdcccccccccccccccccccdcccccccdccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdcccccccdcccc
        ccccccccdccccccccdccccdcccccccccccdcccccccccccccccccccdcccccccdccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdcccccccdcccc
        ccbbbcccdcccccccdcccccdcccccccccccdcccccccccccccccccccdcccccccdcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdccccccdcccc
        ccbbbcccdcccccccdcccccdccccccccccccdccccccccccccccccccdccccccdccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdccccccdcccc
        ccbbbcccdcccccccdccccccdcccccccccccdcccccccccccccccccdcccccccdcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdcccccdcccc
        ccbbbcccdccccccdcccccccdcccccccccccdcccccccccccccccccdcccccccdcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdcccccdcccc
        ccbbbcccdccccccdccccccccdcccccccccccdcccccccccccccccdcccccccdcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdccccdcccc
        ccbbbcccdccccccdccccccccdcccccccccccdcccccccccccccccdcccccccdccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdcccdcccc
        ccbbbcccdcccccdccccccccccdcccccccccccdcccccccccccccdcccccccdccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdccdcccc
        ccbbbcccdcccccdccccccccccdccccccccccccdccccccccccccdccccccdccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdccdccc
        ccbbbcccdcccddccccccccccccdccccccccccccdccccccccccdccccccdccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdcdccc
        ccbbbccdccccdccccccccccccccdccccccccccccdccccccccdccccccdccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddccc
        ccbbbccdcccddcccccccccccccccdccccccccccccddcccccdcccccddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdccc
        ccbbbccdccddcccccccccccccccccddccccccccccccdddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddcc
        ccbbbccdccdccccccccccccccccccccddcccccccccccddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdcdc
        ccbbbcdccdcccccccccccccccccccccccdddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdccd
        ccbbbcdddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdcc
        ccbbbcdccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdcc
        ccbbdddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddc
        ddddbdccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdc
        ccbbddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdd
        ccbddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccd
        ccddbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cdbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        dcbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc
        ccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc
        ccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc
        ccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc
        ccbbb222227777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbcc
        ccbbb277777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbcc
        ccbbb277277277277277777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbcc
        ccbbb277777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbcc
        ccbbb277777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbcc
        ccbbb777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbcc
        ccbbb777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbcc
        ccbbb777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbcc
        ccbbb777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbcc
        ccbbb777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbcc
        ccbbb777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbcc
        ccbbb777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbcc
        ccbbb777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbcc
        ccbbb777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbcc
        ccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc
        ccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc
        ccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc
        ccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc
        ccbbb222227777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbcc
        ccbbb277777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbcc
        ccbbb277277277277277777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbcc
        ccbbb277777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbcc
        ccbbb277777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbcc
        ccbbb777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbcc
        ccbbb777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbcc
        ccbbb777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbcc
        ccbbb777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbcc
        ccbbb777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbcc
        ccbbb777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbcc
        ccbbb777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbcc
        ccbbb777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbcc
        ccbbb777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbcc
        ccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc
        ccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc
        ccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc
        ccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc
        ccbbbb22222777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbcc
        ccbbbb27777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbcc
        ccbbbb27727727727727777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbcc
        ccbbbb27777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbcc
        ccbbbb27777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbcc
        ccbbbb77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbcc
        ccbbbb77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbcc
        ccbbbb77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbcc
        ccbbbb77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbcc
        ccbbbb77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbcc
        ccbbbb77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbcc
        ccbbbb77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbcc
        ccbbbb77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbcc
        ccbbbb77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbcc
        ccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc
        ccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc
        ccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc
        ccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc
        ccbbbb22222777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbcc
        ccbbbb27777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbcc
        ccbbbb27727727727727777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbcc
        ccbbbb27777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbcc
        ccbbbb27777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbcc
        ccbbbb77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbcc
        ccbbbb77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbcc
        ccbbbb77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbcc
        ccbbbb77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbcc
        ccbbbb77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbcc
        ccbbbb77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbcc
        ccbbbb77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbcc
        ccbbbb77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbcc
        ccbbbb77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbcc
        ccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc
        ccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc
        ccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc
        ccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        `)
    invisibleSprite1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Intangible)
    invisibleSprite1.setPosition(15, 0)
    invisibleSprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Intangible)
    invisibleSprite2.setPosition(50, 0)
    invisibleSprite3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Intangible)
    invisibleSprite3.setPosition(140, 0)
    textSprite = textsprite.create("Shipments/second: " + shipments_per_second)
    textSprite.setPosition(75, 53)
    textSprite2 = textsprite.create("Shipment value:  " + shipment_value)
    textSprite2.setPosition(75, 71)
    textSprite3 = textsprite.create("Production X:    " + production_multiplier)
    textSprite3.setPosition(75, 89)
    textSprite4 = textsprite.create("Value X:         " + shipment_value_multiplier)
    textSprite4.setPosition(75, 107)
    leftSprite = sprites.create(img`
        d d d d d d d d d d d d d d d 
        d 5 5 5 5 5 5 5 5 5 5 5 5 5 d 
        d 5 5 5 5 5 5 5 5 5 5 5 5 5 d 
        d 5 5 5 5 5 5 5 5 5 5 5 5 5 d 
        d 5 5 5 5 3 5 5 5 5 5 5 5 5 d 
        d 5 5 5 3 3 5 5 5 5 5 5 5 5 d 
        d 5 5 3 3 3 3 3 3 3 3 3 3 5 d 
        d 5 3 3 3 3 3 3 3 3 3 3 3 5 d 
        d 5 5 3 3 3 3 3 3 3 3 3 3 5 d 
        d 5 5 5 3 3 5 5 5 5 5 5 5 5 d 
        d 5 5 5 5 3 5 5 5 5 5 5 5 5 d 
        d 5 5 5 5 5 5 5 5 5 5 5 5 5 d 
        d 9 5 5 5 5 5 5 5 5 5 5 5 9 d 
        d 9 9 9 9 9 9 9 9 9 9 9 9 9 d 
        d d d d d d d d d d d d d d d 
        `, SpriteKind.Icon)
    leftSprite.setPosition(8, 113)
    rightSprite = sprites.create(img`
        d d d d d d d d d d d d d d d 
        d 5 5 5 5 5 5 5 5 5 5 5 5 5 d 
        d 5 5 5 5 5 5 5 5 5 5 5 5 5 d 
        d 5 5 5 5 5 5 5 5 5 5 5 5 5 d 
        d 5 5 5 5 5 5 5 5 3 5 5 5 5 d 
        d 5 5 5 5 5 5 5 5 3 3 5 5 5 d 
        d 5 3 3 3 3 3 3 3 3 3 3 5 5 d 
        d 5 3 3 3 3 3 3 3 3 3 3 3 5 d 
        d 5 3 3 3 3 3 3 3 3 3 3 5 5 d 
        d 5 5 5 5 5 5 5 5 3 3 5 5 5 d 
        d 5 5 5 5 5 5 5 5 3 5 5 5 5 d 
        d 5 5 5 5 5 5 5 5 5 5 5 5 5 d 
        d 9 5 5 5 5 5 5 5 5 5 5 5 9 d 
        d 9 9 9 9 9 9 9 9 9 9 9 9 9 d 
        d d d d d d d d d d d d d d d 
        `, SpriteKind.Icon)
    rightSprite.setPosition(152, 113)
    conveyorSprite = sprites.create(img`
        ....fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff....
        ..ffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaff..
        .faa88dddddddb88888b88888b88888b88888b88888b88dddddddb88888b88888b88888b88888b88888b88dddddddb88888b88888b88888b88888b88888b88ddddddd88aaf.
        .fa88d3331333d88888b88888b88888b88888b88888b8d3331333d88888b88888b88888b88888b88888b8d3331333d88888b88888b88888b88888b88888b8d3331333d88af.
        fa88d3ccc1ccc3d8888b88888b88888b88888b88888bd3ccc1ccc3d8888b88888b88888b88888b88888bd3ccc1ccc3d8888b88888b88888b88888b88888bd3ccc1ccc3d88af
        fa8d3cccc1cccc3d888b88888b88888b88888b88888d3cccc1cccc3d888b88888b88888b88888b88888d3cccc1cccc3d888b88888b88888b88888b88888d3cccc1cccc3d8af
        fa8d3cccc1cccc3ddddddddddddddddddddddddddddd3cccc1cccc3ddddddddddddddddddddddddddddd3cccc1cccc3ddddddddddddddddddddddddddddd3cccc1cccc3d8af
        fa8d3cccdddccc3d888dd8888dd8888dd8888dd8888d3cccdddccc3d888dd8888dd8888dd8888dd8888d3cccdddccc3d888dd8888dd8888dd8888dd8888d3cccdddccc3d8af
        fa8d3cccdcdccc3d88dbbd88dbbd88dbbd88dbbd88dd3cccdcdccc3d88dbbd88dbbd88dbbd88dbbd88dd3cccdcdccc3d88dbbd88dbbd88dbbd88dbbd88dd3cccdcdccc3d8af
        fa8d3cccdddccc3dddb88bddb88bddb88bddb88bddbd3cccdddccc3dddb88bddb88bddb88bddb88bddbd3cccdddccc3dddb88bddb88bddb88bddb88bddbd3cccdddccc3d8af
        fa8d3ccccccccc3ddddddddddddddddddddddddddddd3ccccccccc3ddddddddddddddddddddddddddddd3ccccccccc3ddddddddddddddddddddddddddddd3ccccccccc3d8af
        fa8d3ccccccccc3dbbbbbbbbbbbbbbbbbbbbbbbbbbbd3ccccccccc3dbbbbbbbbbbbbbbbbbbbbbbbbbbbd3ccccccccc3dbbbbbbbbbbbbbbbbbbbbbbbbbbbd3ccccccccc3d8af
        fa88d3ccccccc3db888b88888b88888b88888b88888bd3ccccccc3db888b88888b88888b88888b88888bd3ccccccc3db888b88888b88888b88888b88888bd3ccccccc3d88af
        .fa88d3333333db8888b88888b88888b88888b88888bbd3333333db8888b88888b88888b88888b88888b8d3333333db8888b88888b88888b88888b88888b8d3333333d88af.
        .faa88dddddddb88888b88888b88888b88888b88888b88dddddddb88888b88888b88888b88888b88888b88dddddddb88888b88888b88888b88888b88888b88ddddddd88aaf.
        ..ffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaff..
        ....fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff....
        `, SpriteKind.Intangible)
    conveyorSprite.setPosition(80, 35)
    conveyorSprite.z = -1e+160
}
sprites.onOverlap(SpriteKind.Shipment, SpriteKind.Intangible, function (sprite, otherSprite) {
    sprite.setVelocity(40, -70)
    timer.after(3000, function () {
        sprite.setKind(SpriteKind.Intangible)
    })
    timer.after(3500, function () {
        sprites.destroy(sprite)
    })
})
let randomizer = 0
let cost_multiplier4 = 0
let cost_multiplier3 = 0
let z_inverter = 0
let shipmentSprite: Sprite = null
let master_upgrade_price = 0
let shipment_value_multiplier = 0
let production_multiplier = 0
let shipment_value = 0
let shipments_per_second = 0
let cost_multiplier = 0
let line_3_purchased = 0
let selector_timeline_five = 0
let line_2_purchased = 0
let selector_timeline_two = 0
let conveyorSprite: Sprite = null
let rightSprite: Sprite = null
let leftSprite: Sprite = null
let shipment_value_multiplier3 = 0
let textSprite4: TextSprite = null
let production_multiplier3 = 0
let shipment_value3 = 0
let shipments_per_second3 = 0
let invisibleSprite3: Sprite = null
let invisibleSprite2: Sprite = null
let invisibleSprite1: Sprite = null
let shipment_value_multiplier2 = 0
let shipment_value2 = 0
let production_multiplier2 = 0
let cost_multiplier2 = 0
let shipments_per_second2 = 0
let selector_timeline_three = 0
let shopSprite_valueMultiplier: Sprite = null
let shopSprite_setValue: Sprite = null
let shopSprite_shipmentMultiplier: Sprite = null
let shopSprite_shipmentsPerSecond: Sprite = null
let textSprite3: TextSprite = null
let textSprite2: TextSprite = null
let timeline_location = 0
let input_availability_of_ANY_BUTTON_TO_START = 0
let textSprite: TextSprite = null
let R: Sprite = null
let E: Sprite = null
let K: Sprite = null
let C2: Sprite = null
let I: Sprite = null
let L: Sprite = null
scene.setBackgroundImage(img`
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1177777777777777777777777777777777777777777777777777777777777777777777777777771111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1175555555555555555555555555555555555555555555555555555555555555555555555555551111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1175555555555555555555555555555555555555555555555555555555555555555555555555551111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1175555555555555555555555555555555555555555555555555555555555555111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1175555555555555555555555555555555555555555555555555555555555111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1175555111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1175555177777711111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1175555171111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1175555171111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1175555171111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1175555171111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1175555171111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1175555111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1175555111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1175555111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1175555111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1175555111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1175555111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1175555111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1175555111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1175555111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1175555111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1175555111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1175555111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1175555111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1175555111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1175555111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1175555111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1175555111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1175555111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1175555111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1175555111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1175555111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1175555111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1175555111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1175555111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1175555111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1175555111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1175555111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1175555111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1175555111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111155711
    1175555111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111155711
    1175555111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111155711
    1175555111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111155711
    1175555111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111155711
    1175555111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111155711
    1175555111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111155711
    1175555111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111155711
    1175555111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111155711
    1175555111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111155711
    1175555111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111155711
    1175555111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111155711
    1175555111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111155711
    1175555111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111155711
    1175555111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111555711
    1175555111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111555711
    1175555111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111555711
    1175555111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111115555711
    1175555111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111115555711
    1175551111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111115555711
    1175551111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111115555711
    1175551111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111115555711
    1175511111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111115555711
    1175511111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111115555711
    1175511111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111115555711
    1175511111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111115555711
    1175511111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111115555711
    1175511111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111115555711
    1175511111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111115555711
    1175511111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111115555711
    1175511111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111115555711
    1175511111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111115555711
    1175511111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111115555711
    1175511111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111115555711
    1175511111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111115555711
    1175511111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111115555711
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111115555711
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111115555711
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111115555711
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111115555711
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111115555711
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111115555711
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111115555711
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111115555711
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111115555711
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111115555711
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111115555711
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111115555711
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111115555711
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111115555711
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111115555711
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111115555711
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111115555711
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111115555711
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111115555711
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111115555711
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111115555711
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111115555711
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111115555711
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111115555711
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111115555711
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111115555711
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111115555711
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111115555711
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111715555711
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111715555711
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111715555711
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111715555711
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111715555711
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111177777715555711
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111115555711
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111115555555555555555555555555555555555555555555555555555555555711
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111115555555555555555555555555555555555555555555555555555555555555711
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111555555555555555555555555555555555555555555555555555555555555555555555555555711
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111555555555555555555555555555555555555555555555555555555555555555555555555555711
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777777777777711
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    `)
pause(1000)
scene.cameraShake(4, 200)
let C = sprites.create(img`
    . . . . . . . 9 9 9 9 . . . . . 
    . . . . 9 9 9 3 3 3 3 9 9 . . . 
    . . . 9 3 3 3 3 3 3 3 3 3 9 . . 
    . . 9 3 3 3 3 9 9 9 9 3 3 3 9 . 
    . . 9 3 3 3 9 . . . . 9 3 3 9 . 
    . . 9 3 3 9 . . . . . . 9 9 . . 
    . 9 3 3 9 . . . . . . . . . . . 
    . 9 3 3 9 . . . . . . . . . . . 
    . 9 3 3 9 . . . . . . . . . . . 
    . 9 3 3 9 . . . . . . . . . . . 
    . . 9 3 3 9 . . . . . . 9 9 . . 
    . . 9 3 3 3 9 . . . . 9 3 3 9 . 
    . . 9 3 3 3 3 9 9 9 9 3 3 3 9 . 
    . . . 9 3 3 3 3 3 3 3 3 3 9 . . 
    . . . . 9 9 9 3 3 3 3 9 9 . . . 
    . . . . . . . 9 9 9 9 . . . . . 
    `, SpriteKind.Intangible)
C.setPosition(40, 30)
timer.after(6500, function () {
    effects.confetti.startScreenEffect()
    animation.runMovementAnimation(
    C,
    animation.animationPresets(animation.bobbing),
    1000,
    true
    )
    timer.after(100, function () {
        animation.runMovementAnimation(
        L,
        animation.animationPresets(animation.bobbing),
        1000,
        true
        )
        timer.after(100, function () {
            animation.runMovementAnimation(
            I,
            animation.animationPresets(animation.bobbing),
            1000,
            true
            )
            timer.after(100, function () {
                animation.runMovementAnimation(
                C2,
                animation.animationPresets(animation.bobbing),
                1000,
                true
                )
                timer.after(100, function () {
                    animation.runMovementAnimation(
                    K,
                    animation.animationPresets(animation.bobbing),
                    1000,
                    true
                    )
                    timer.after(100, function () {
                        animation.runMovementAnimation(
                        E,
                        animation.animationPresets(animation.bobbing),
                        1000,
                        true
                        )
                        timer.after(100, function () {
                            animation.runMovementAnimation(
                            R,
                            animation.animationPresets(animation.bobbing),
                            1000,
                            true
                            )
                            textSprite = textsprite.create("ANY BUTTON TO START", 0, 3)
                            textSprite.setPosition(80, 90)
                            input_availability_of_ANY_BUTTON_TO_START = 1
                        })
                    })
                })
            })
        })
    })
})
pause(1000)
scene.cameraShake(4, 200)
L = sprites.create(img`
    . . . . . . 9 9 . . . . . . . . 
    . . . . . 9 3 3 9 . . . . . . . 
    . . . . . 9 3 3 9 . . . . . . . 
    . . . . . 9 3 3 9 . . . . . . . 
    . . . . . 9 3 3 9 . . . . . . . 
    . . . . . 9 3 3 9 . . . . . . . 
    . . . . . 9 3 3 9 . . . . . . . 
    . . . . . 9 3 3 9 . . . . . . . 
    . . . . . 9 3 3 9 . . . . . . . 
    . . . . . 9 3 3 9 . . . . . . . 
    . . . . . 9 3 3 9 . . . . . . . 
    . . . . . 9 3 3 9 . . . . . . . 
    . . . . . 9 3 3 3 9 9 . . . . . 
    . . . . . . 9 3 3 3 3 9 . . . . 
    . . . . . . . 9 3 3 3 9 . . . . 
    . . . . . . . . 9 9 9 9 . . . . 
    `, SpriteKind.Intangible)
L.setPosition(55, 30)
pause(900)
scene.cameraShake(4, 200)
I = sprites.create(img`
    . . . . . . . 9 9 . . . . . . . 
    . . . . . . 9 3 3 9 . . . . . . 
    . . . . . . 9 3 3 9 . . . . . . 
    . . . . . . . 9 9 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 9 9 . . . . . . . 
    . . . . . . 9 3 3 9 . . . . . . 
    . . . . . . 9 3 3 9 . . . . . . 
    . . . . . . 9 3 3 9 . . . . . . 
    . . . . . . 9 3 3 9 . . . . . . 
    . . . . . . 9 3 3 9 . . . . . . 
    . . . . . . 9 3 3 9 . . . . . . 
    . . . . . . 9 3 3 9 . . . . . . 
    . . . . . . 9 3 3 9 . . . . . . 
    . . . . . . 9 3 3 9 . . . . . . 
    . . . . . . . 9 9 . . . . . . . 
    `, SpriteKind.Intangible)
I.setPosition(65, 30)
pause(800)
scene.cameraShake(4, 200)
C2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 9 9 9 . . . . . . 
    . . . . . 9 9 3 3 3 9 9 . . . . 
    . . . . 9 3 3 3 9 3 3 3 9 . . . 
    . . . 9 3 3 3 9 . 9 3 3 9 . . . 
    . . . 9 3 3 9 . . . 9 9 . . . . 
    . . . 9 3 3 9 . . . . . . . . . 
    . . . 9 3 9 . . . . . . . . . . 
    . . . 9 3 9 . . . . . . . . . . 
    . . . 9 3 3 9 . . . . . . . . . 
    . . . 9 3 3 9 . . . 9 9 . . . . 
    . . . 9 3 3 3 9 . 9 3 3 9 . . . 
    . . . . 9 3 3 3 9 3 3 3 9 . . . 
    . . . . . 9 9 3 3 3 9 9 . . . . 
    . . . . . . . 9 9 9 . . . . . . 
    `, SpriteKind.Intangible)
C2.setPosition(75, 30)
pause(700)
scene.cameraShake(4, 200)
K = sprites.create(img`
    . . . 9 9 . . . . . . . . . . . 
    . . 9 3 3 9 . . . . . . . . . . 
    . . 9 3 3 9 . . . . . 9 9 . . . 
    . . 9 3 3 9 . . . . 9 3 3 9 . . 
    . . 9 3 3 9 . . . 9 3 3 3 9 . . 
    . . 9 3 3 9 . . 9 3 3 3 9 . . . 
    . . 9 3 3 9 . 9 3 3 3 9 . . . . 
    . . 9 3 3 3 9 3 3 3 9 . . . . . 
    . . 9 3 3 3 3 3 3 9 . . . . . . 
    . . 9 3 3 3 3 3 3 9 . . . . . . 
    . . 9 3 3 9 9 3 3 3 9 . . . . . 
    . . 9 3 3 9 . 9 3 3 3 9 . . . . 
    . . 9 3 3 9 . . 9 3 3 3 9 . . . 
    . . 9 3 3 9 . . . 9 3 3 3 9 . . 
    . . 9 3 3 9 . . . . 9 3 3 9 . . 
    . . . 9 9 . . . . . . 9 9 . . . 
    `, SpriteKind.Intangible)
K.setPosition(90, 30)
pause(600)
scene.cameraShake(4, 200)
E = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . 9 9 9 9 9 9 . . . . . 
    . . . . 9 3 3 3 3 3 3 9 . . . . 
    . . . 9 3 3 3 3 3 3 3 3 9 . . . 
    . . 9 3 3 3 9 9 9 9 3 3 3 9 . . 
    . . 9 3 3 9 . . . . 9 3 3 9 . . 
    . . 9 3 3 9 9 9 9 9 9 3 3 9 . . 
    . . 9 3 3 3 3 3 3 3 3 3 3 9 . . 
    . . 9 3 3 9 9 9 9 9 9 9 9 9 . . 
    . . 9 3 3 9 . . . . . . . . . . 
    . . 9 3 3 9 . . . . . 9 9 . . . 
    . . 9 3 3 3 9 . . . 9 3 3 9 . . 
    . . . 9 3 3 3 9 9 9 3 3 3 9 . . 
    . . . 9 3 3 3 3 3 3 3 3 3 9 . . 
    . . . . 9 9 3 3 3 3 3 9 9 . . . 
    . . . . . . 9 9 9 9 9 . . . . . 
    `, SpriteKind.Intangible)
E.setPosition(105, 30)
pause(500)
scene.cameraShake(4, 200)
R = sprites.create(img`
    . . . . 9 9 9 9 9 9 9 . . . . . 
    . . . 9 3 9 3 3 3 3 3 9 . . . . 
    . . . 9 3 3 3 3 3 3 3 3 9 . . . 
    . . . 9 3 3 3 9 9 9 9 3 9 . . . 
    . . . 9 3 3 9 . . . . 9 . . . . 
    . . . 9 3 3 9 . . . . . . . . . 
    . . . 9 3 3 9 . . . . . . . . . 
    . . . 9 3 3 9 . . . . . . . . . 
    . . . 9 3 3 9 . . . . . . . . . 
    . . . 9 3 3 9 . . . . . . . . . 
    . . . 9 3 3 9 . . . . . . . . . 
    . . . 9 3 3 9 . . . . . . . . . 
    . . . 9 3 3 9 . . . . . . . . . 
    . . . 9 3 3 9 . . . . . . . . . 
    . . . 9 3 3 9 . . . . . . . . . 
    . . . . 9 9 . . . . . . . . . . 
    `, SpriteKind.Intangible)
R.setPosition(120, 30)
game.onUpdateInterval(2000, function () {
    if (timeline_location >= 1) {
        randomizer = randint(1, 3)
        if (randomizer == 1) {
            invisibleSprite1.startEffect(effects.spray, 200)
        } else if (randomizer == 2) {
            invisibleSprite2.startEffect(effects.spray, 200)
        } else if (randomizer == 3) {
            invisibleSprite3.startEffect(effects.spray, 200)
        }
    }
})
forever(function () {
    if (timeline_location == 1) {
        shipmentSprite = sprites.create(img`
            . . . e e e e e e e e e e . . . 
            . e e d d d d d d d d 4 d e e . 
            . e d d d d d d d d 6 4 d d e . 
            e d d d d d d d d 4 d d d d d e 
            e d d d d d d d 6 4 d d d d d e 
            e 6 6 4 4 4 4 4 d d d d d d d e 
            e d d d d d d d d d d d d d d e 
            e d d e e d d d d d d e e d d e 
            e d e 3 3 e d d d d e 3 3 e d e 
            e d e 3 3 e d d d d e 3 3 e d e 
            e d d e e d d d d d d e e d d e 
            e d d d d d d d d d d d d d d e 
            e d d d d d d d d d d d d d d e 
            e b d d d d d d d d d d d d b e 
            e e b b b e e e e e e b b b e e 
            . . e e e . . . . . . e e e . . 
            `, SpriteKind.Shipment)
        shipmentSprite.setPosition(20, -10)
        shipmentSprite.z = z_inverter
        shipmentSprite.setVelocity(5, 50)
        shipmentSprite.ay = 500
        z_inverter += -1
        pause(1000 / shipments_per_second / production_multiplier)
    } else if (timeline_location == 4) {
        shipmentSprite = sprites.create(img`
            . . . 9 9 9 9 9 9 9 9 9 9 . . . 
            . 9 9 2 5 2 5 2 2 2 2 3 2 9 9 . 
            . 9 2 2 5 2 5 2 2 2 3 3 2 2 9 . 
            9 2 2 2 2 2 2 2 2 3 2 2 2 2 2 9 
            9 2 2 2 2 2 2 2 3 3 2 2 2 2 2 9 
            9 3 3 3 3 3 3 3 2 2 2 2 2 2 2 9 
            9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 
            9 2 2 e e 2 2 2 2 2 2 e e 2 2 9 
            9 2 e 1 1 e 2 2 2 2 e 1 1 e 2 9 
            9 2 e 1 1 e 2 2 2 2 e 1 1 e 2 9 
            9 2 5 e e 5 2 2 2 2 5 e e 5 2 9 
            9 2 2 5 5 2 2 2 2 2 2 5 5 2 2 9 
            9 5 2 2 2 2 2 2 2 2 2 2 2 2 5 9 
            9 b 5 5 2 2 2 2 2 2 2 2 5 5 b 9 
            9 9 b b b 9 9 9 9 9 9 b b b 9 9 
            . . 9 9 9 . . . . . . 9 9 9 . . 
            `, SpriteKind.Shipment)
        shipmentSprite.setPosition(20, -10)
        shipmentSprite.z = z_inverter
        shipmentSprite.setVelocity(5, 50)
        shipmentSprite.ay = 500
        z_inverter += -1
        pause(1000 / shipments_per_second2 / production_multiplier2)
    } else if (timeline_location == 6) {
        shipmentSprite = sprites.create(img`
            . . . 9 9 9 9 9 9 9 9 9 9 . . . 
            . 9 9 2 5 2 5 2 2 2 2 3 2 9 9 . 
            . 9 2 2 5 2 5 2 2 2 3 3 2 2 9 . 
            9 2 2 2 2 2 2 2 2 3 2 2 2 2 2 9 
            9 2 2 2 2 2 2 2 3 3 2 2 2 2 2 9 
            9 3 3 3 3 3 3 3 2 2 2 2 2 2 2 9 
            9 2 2 2 2 2 2 2 2 2 2 2 2 2 2 9 
            9 2 2 e e 2 2 2 2 2 2 e e 2 2 9 
            9 2 e 1 1 e 2 2 2 2 e 1 1 e 2 9 
            9 2 e 1 1 e 2 2 2 2 e 1 1 e 2 9 
            9 2 5 e e 5 2 2 2 2 5 e e 5 2 9 
            9 2 2 5 5 2 2 2 2 2 2 5 5 2 2 9 
            9 5 2 2 2 2 2 2 2 2 2 2 2 2 5 9 
            9 b 5 5 2 2 2 2 2 2 2 2 5 5 b 9 
            9 9 b b b 9 9 9 9 9 9 b b b 9 9 
            . . 9 9 9 . . . . . . 9 9 9 . . 
            `, SpriteKind.Shipment)
        shipmentSprite.setPosition(20, -10)
        shipmentSprite.z = z_inverter
        shipmentSprite.setVelocity(5, 50)
        shipmentSprite.ay = 500
        z_inverter += -1
        pause(1000 / shipments_per_second3 / production_multiplier3)
    }
})
forever(function () {
    if (timeline_location >= 1) {
        info.changeScoreBy(shipment_value * shipment_value_multiplier)
        pause(1000 / shipments_per_second / production_multiplier)
    }
})
forever(function () {
    if (line_2_purchased == 1) {
        info.changeScoreBy(shipment_value2 * shipment_value_multiplier2)
        pause(1000 / shipments_per_second2 / production_multiplier2)
    }
})
forever(function () {
    if (line_3_purchased == 1) {
        info.changeScoreBy(shipment_value3 * shipment_value_multiplier3)
        pause(1000 / shipments_per_second3 / production_multiplier3)
    }
})
