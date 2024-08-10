LootJS.modifiers((event) => {
    
    event
        .addLootTableModifier("battletowers:chests/top_floor")
        .addWeightedLoot(
            [0,1],
            [
                LootEntry.of("xpbook:xp_tome", 1, { xp:0 }).withChance(1), 
                LootEntry.of("xpbook:xp_tome", 1, { xp:465 }).withChance(2), 
                LootEntry.of("xpbook:xp_tome", 1, { xp:930 }).withChance(3), 
                LootEntry.of("xpbook:xp_tome", 1, { xp:1395 }).withChance(5)
            ])


    event
        .addLootTableModifier("battletowers:chests/floors_7_and_8")
        .addWeightedLoot(
            [0,1],
            [
                LootEntry.of("xpbook:xp_tome", 1, { xp:0 }).withChance(2), 
                LootEntry.of("xpbook:xp_tome", 1, { xp:465 }).withChance(1), 
                LootEntry.of("xpbook:xp_tome", 1, { xp:930 }).withChance(1), 
                LootEntry.of("xpbook:xp_tome", 1, { xp:1395 }).withChance(0)
            ])
    event
        .addLootTableModifier("battletowers:chests/underground/bottom_floor")
        .addWeightedLoot(
            [0,1],
            [
                LootEntry.of("xpbook:xp_tome", 1, { xp:0 }).withChance(1), 
                LootEntry.of("xpbook:xp_tome", 1, { xp:465 }).withChance(2), 
                LootEntry.of("xpbook:xp_tome", 1, { xp:930 }).withChance(3), 
                LootEntry.of("xpbook:xp_tome", 1, { xp:1395 }).withChance(5)
            ])


    event
        .addLootTableModifier("battletowers:chests/underground/floors_7_and_8")
        .addWeightedLoot(
            [0,1],
            [
                LootEntry.of("xpbook:xp_tome", 1, { xp:0 }).withChance(2), 
                LootEntry.of("xpbook:xp_tome", 1, { xp:465 }).withChance(1), 
                LootEntry.of("xpbook:xp_tome", 1, { xp:930 }).withChance(1), 
                LootEntry.of("xpbook:xp_tome", 1, { xp:1395 }).withChance(0)
            ])
                
}) 

