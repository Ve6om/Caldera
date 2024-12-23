LootJS.modifiers(event => {
    event.addLootTableModifier(/.*/)
        .removeLoot([
            'scalinghealth:power_crystal',
            'scalinghealth:power_crystal_shard',
            'scalinghealth:cursed_heart',
            'scalinghealth:enchanted_heart',
            'scalinghealth:chance_heart',
            'enigmaticaddons:earth_heart_fragment',
            'enigmaticlegacy:enigmatic_eye'
        ])
})
LootJS.modifiers((event) => {
    event
        .addLootTableModifier("scaling_health_loot_chest")
        .removeLoot(Ingredient.all)
        .addWeightedLoot(
            [3,10],
            [
                Item.of("scalinghealth:heart_crystal").withChance(1),
                Item.of("scalinghealth:heart_crystal_shard").withChance(3)
            ])
            
})
LootJS.modifiers((event) => {
    event
        .addLootTableModifier("minecraft:chests/end_city_treasure")
        .addWeightedLoot(
            [3,12],
            [
                Item.of("enigmaticaddons:astral_dust").withChance(1),
            ])
            
})
LootJS.modifiers((event) => {
    event
        .addLootTableModifier("minecraft:chests/simple_dungeon")
        .randomChance(0.4)
        .addLoot("enigmaticlegacy:enigmatic_eye")
            
})
LootJS.modifiers((event) => {
    event
        .addLootTableModifier("lostcities:chests/lostcitychest")
        .randomChance(0.4)
        .addLoot("angelring:angel_ring")
    event
        .addLootTableModifier("lostcities:chests/lostcitychest")
        .randomChance(0.8)
        .addWeightedLoot(
            [3,12],
            [
                Item.of("enigmaticaddons:earth_heart_fragment").withChance(1),
            ])
    event
        .addLootTableModifier("lostcities:chests/lostcitychest")
        .randomChance(0.8)
        .addWeightedLoot(
            [3,8],
            [
                Item.of("scalinghealth:heart_crystal").withChance(1),
            ])
    event
        .addLootTableModifier("lostcities:chests/lostcitychest")
        .addWeightedLoot(
            [0,1],
            [
                Item.of("enigmaticlegacy:angel_blessing").withChance(1),
                Item.of("enigmaticlegacy:unholy_grail").withChance(1),
                Item.of("enigmaticlegacy:golem_heart").withChance(1),
                Item.of("enigmaticlegacy:eye_of_nebula").withChance(1),
                Item.of("enigmaticlegacy:void_pearl").withChance(1),
                Item.of("enigmaticlegacy:ocean_stone").withChance(1),
                Item.of("enigmaticlegacy:void_stone").withChance(1),
                Item.of("enigmaticlegacy:darkest_scroll").withChance(3),
                Item.of("enigmaticlegacy:abyssal_heart").withChance(1),
                Item.of("enigmaticlegacy:enigmatic_amulet").withChance(1),
                Item.of("enigmaticlegacy:ascension_amulet").withChance(1),
                Item.of("enigmaticaddons:lost_engine").withChance(1),
                Item.of("enigmaticaddons:revival_leaf").withChance(1),
            ])
    event
        .addLootTableModifier("lostcities:chests/raildungeonchest")
        .addWeightedLoot(
            [0,3],
            [
                Item.of("enigmaticlegacy:angel_blessing").withChance(1),
                Item.of("enigmaticlegacy:unholy_grail").withChance(1),
                Item.of("enigmaticlegacy:golem_heart").withChance(1),
                Item.of("enigmaticlegacy:eye_of_nebula").withChance(1),
                Item.of("enigmaticlegacy:void_pearl").withChance(1),
                Item.of("enigmaticlegacy:ocean_stone").withChance(1),
                Item.of("enigmaticlegacy:void_stone").withChance(1),
                Item.of("enigmaticlegacy:darkest_scroll").withChance(3),
                Item.of("enigmaticlegacy:abyssal_heart").withChance(1),
                Item.of("enigmaticlegacy:enigmatic_amulet").withChance(1),
                Item.of("enigmaticlegacy:ascension_amulet").withChance(1),
                Item.of("enigmaticaddons:lost_engine").withChance(1),
                Item.of("enigmaticaddons:revival_leaf").withChance(1),
            ])
})
LootJS.modifiers((event) => {
    event
        .addLootTableModifier("endlessexpansion:chests/arbor_house","endlessexpansion:chests/brown_shroom_house","endlessexpansion:chests/igloo","endlessexpansion:chests/mini_temple","endlessexpansion:chests/red_shroom_house")
        .randomChance(0.8)
        .addWeightedLoot(
            [3,12],
            [
                Item.of("enigmaticaddons:ichor_droplet").withChance(1),
            ])
    event
        .addEntityLootModifier("mowziesmobs:frostmaw")
        .addLoot("enigmaticaddons:forgotten_ice")
    event
        .addEntityLootModifier("mowziesmobs:umvuthi")
        .addLoot("enigmaticlegacy:blazing_core")
    event
        .addEntityLootModifier("mowziesmobs:ferrous_wroughtnaut")
        .addLoot("enigmaticaddons:hell_blade_charm")
})