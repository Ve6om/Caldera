LootJS.modifiers((event) => {
    
    event
        .addLootTableModifier("new_classic_battle_towers:towerloot_1")
        .addWeightedLoot(
            [4,8],
            [
                LootEntry.of("minecraft:stone_sword").withChance(7),
                LootEntry.of("minecraft:stone_pickaxe").withChance(7),
                LootEntry.of("minecraft:stone").limitCount([1,64]).withChance(12),
                LootEntry.of("minecraft:glass").limitCount([1,64]).withChance(12),
                LootEntry.of("minecraft:brick").limitCount([1,64]).withChance(12),
                LootEntry.of("minecraft:blaze_rod").withChance(1),
                LootEntry.of("minecraft:blaze_powder").limitCount([0,1]).withChance(4),
                LootEntry.of("minecraft:ender_pearl").limitCount([0,1]).withChance(5),
                LootEntry.of("minecraft:coal").limitCount([1,16]).withChance(11),
                LootEntry.of("minecraft:diamond").limitCount([0,2]).withChance(2),
                LootEntry.of("minecraft:iron").limitCount([1,6]).withChance(2),
                LootEntry.of("minecraft:gold").limitCount([1,5]).withChance(2),
                LootEntry.of("minecraft:emerald").limitCount([1,5]).withChance(2),
                LootEntry.of("sophisticated_backpacks:upgrade_base").withChance(3),
                LootEntry.of("minecraft:golen_apple").withChance(6),
                LootEntry.of("minecraft:name_tag").limitCount([0,2]).withChance(3),
                LootEntry.of("potionring:potion_ring").withChance(1),
                LootEntry.of("potionring:ring_of_speed").withChance(1),
                LootEntry.of("potionring:ring_of_jump_boost").withChance(1),
                LootEntry.of("minecraft:oak_bookshelf").limitCount([1,3]).withChance(7),
                LootEntry.of("minecraft:book").limitCount([1,16]).withChance(11),
                LootEntry.of("minecraft:book").enchantWithLevels([2,16]).withChance(7),
                LootEntry.of("scalinghealth:heart_crystal_shard").limitCount([0,3]).withChance(7),
                LootEntry.of("minecraft:heart_crystal").withChance(3),
                LootEntry.of("xpbook:xp_tome", 1, { xp:0 }).withChance(2), 
                LootEntry.of("xpbook:xp_tome", 1, { xp:465 }).withChance(1), 
                LootEntry.of("xpbook:xp_tome", 1, { xp:930 }).withChance(1), 
                LootEntry.of("xpbook:xp_tome", 1, { xp:1395 }).withChance(0)
            ])


    event
        .addLootTableModifier("new_classic_battle_towers:towerloot_2")
        .addWeightedLoot(
            [6,16],
            [
                LootEntry.of("minecraft:iron_block").limitCount([0,12]).withChance(3),
                LootEntry.of("minecraft:diamond_block").limitCount([0,4]).withChance(2),
                LootEntry.of("minecraft:gold_block").limitCount([0,12]).withChance(3),
                LootEntry.of("minecraft:emerald_block").limitCount([0,12]).withChance(3),
                LootEntry.of("sophisticated_backpacks:stack_upgrade_tier_2").withChance(2),
                LootEntry.of("minecraft:blaze_rod").limitCount([0,5]).withChance(7),
                LootEntry.of("minecraft:blaze_powder").limitCount([0,2]).withChance(5),
                LootEntry.of("minecraft:netherite_scrap").withChance(1),
                LootEntry.of("potionring:potion_ring").withChance(1),
                LootEntry.of("potionring:ring_of_speed").withChance(1),
                LootEntry.of("potionring:ring_of_jump_boost").withChance(1),
                LootEntry.of("potionring:ring_of_haste").withChance(1),
                LootEntry.of("potionring:ring_of_regeneration").withChance(1),
                LootEntry.of("potionring:ring_of_jump_resistance").withChance(1),
                LootEntry.of("potionring:ring_of_jump_strength").withChance(1),
                LootEntry.of("minecraft:oak_bookshelf").limitCount([1,9]).withChance(3),
                LootEntry.of("minecraft:book").limitCount([1,64]).withChance(4),
                LootEntry.of("minecraft:book").enchantWithLevels([20,50]).withChance(7),
                LootEntry.of("scalinghealth:heart_crystal_shard").limitCount([1,9]).withChance(3),
                LootEntry.of("minecraft:heart_crystal").limitCount([1,3]).withChance(7),
                LootEntry.of("xpbook:xp_tome", 1, { xp:0 }).withChance(1), 
                LootEntry.of("xpbook:xp_tome", 1, { xp:465 }).withChance(2), 
                LootEntry.of("xpbook:xp_tome", 1, { xp:930 }).withChance(3), 
                LootEntry.of("xpbook:xp_tome", 1, { xp:1395 }).withChance(5)
            ])
                
}) 

