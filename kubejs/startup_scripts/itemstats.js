ItemEvents.modification(event => {

   event.modify('the_flesh_that_hates:scalpel', item => {
       item.attackDamage = 8
    })
    event.modify('the_flesh_that_hates:flesh_sword', item => {
       item.attackDamage = 8
    })
    event.modify('the_flesh_that_hates:flesh_mask_helmet', item => {
       item.armorProtection = 5.0
       item.armorToughness = 4.0
    })
    event.modify('the_flesh_that_hates:flesh_chest_chestplate', item => {
       item.armorProtection = 10.0
       item.armorToughness = 4.0
    })
    event.modify('the_flesh_that_hates:flesh_pants_leggings', item => {
       item.armorProtection = 7.0
       item.armorToughness = 4.0
    })
    event.modify('the_flesh_that_hates:flesh_boot_boots', item => {
       item.armorProtection = 5.0
       item.armorToughness = 4.0
    })
})