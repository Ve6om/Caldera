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
