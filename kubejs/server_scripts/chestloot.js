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
        .addLootTableModifier("lostcities:chests/lostcitychest")
        .randomChance(0.2)
        .addLoot("angelring:angel_ring")
            
})
LootJS.modifiers(event => {
    event.addLootTableModifier(/.*/)
        .removeLoot(['scalinghealth:power_crystal','scalinghealth:power_crystal_shard','scalinghealth:cursed_heart','scalinghealth:enchanted_heart','scalinghealth:chance_heart'])
})