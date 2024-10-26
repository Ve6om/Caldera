let dragonsteelweapon = [
   'spartanfire:fire_dragonsteel_dagger',
   'spartanfire:ice_dragonsteel_dagger',
   'spartanfire:lightning_dragonsteel_dagger',
   'spartanfire:fire_dragonsteel_parrying_dagger',
   'spartanfire:ice_dragonsteel_parrying_dagger',
   'spartanfire:lightning_dragonsteel_parrying_dagger',
   'spartanfire:fire_dragonsteel_longsword',
   'spartanfire:ice_dragonsteel_longsword',
   'spartanfire:lightning_dragonsteel_longsword',
   'spartanfire:fire_dragonsteel_katana',
   'spartanfire:ice_dragonsteel_katana',
   'spartanfire:lightning_dragonsteel_katana',
   'spartanfire:fire_dragonsteel_saber',
   'spartanfire:ice_dragonsteel_saber',
   'spartanfire:lightning_dragonsteel_saber',
   'spartanfire:fire_dragonsteel_rapier',
   'spartanfire:ice_dragonsteel_rapier',
   'spartanfire:lightning_dragonsteel_rapier',
   'spartanfire:fire_dragonsteel_greatsword',
   'spartanfire:ice_dragonsteel_greatsword',
   'spartanfire:lightning_dragonsteel_greatsword',
   'spartanfire:fire_dragonsteel_battle_hammer',
   'spartanfire:ice_dragonsteel_battle_hammer',
   'spartanfire:lightning_dragonsteel_battle_hammer',
   'spartanfire:fire_dragonsteel_warhammer',
   'spartanfire:ice_dragonsteel_warhammer',
   'spartanfire:lightning_dragonsteel_warhammer',
   'spartanfire:fire_dragonsteel_spear',
   'spartanfire:ice_dragonsteel_spear',
   'spartanfire:lightning_dragonsteel_spear',
   'spartanfire:fire_dragonsteel_halberd',
   'spartanfire:ice_dragonsteel_halberd',
   'spartanfire:lightning_dragonsteel_halberd',
   'spartanfire:fire_dragonsteel_pike',
   'spartanfire:ice_dragonsteel_pike',
   'spartanfire:lightning_dragonsteel_pike',
   'spartanfire:fire_dragonsteel_lance',
   'spartanfire:ice_dragonsteel_lance',
   'spartanfire:lightning_dragonsteel_lance',
   'spartanfire:fire_dragonsteel_battleaxe',
   'spartanfire:ice_dragonsteel_battleaxe',
   'spartanfire:lightning_dragonsteel_battleaxe',
   'spartanfire:fire_dragonsteel_flanged_mace',
   'spartanfire:ice_dragonsteel_flanged_mace',
   'spartanfire:lightning_dragonsteel_flanged_mace',
   'spartanfire:fire_dragonsteel_glaive',
   'spartanfire:ice_dragonsteel_glaive',
   'spartanfire:lightning_dragonsteel_glaive',
   'spartanfire:fire_dragonsteel_quarterstaff',
   'spartanfire:ice_dragonsteel_quarterstaff',
   'spartanfire:lightning_dragonsteel_quarterstaff',
   'spartanfire:fire_dragonsteel_scythe',
   'spartanfire:ice_dragonsteel_scythe',
   'spartanfire:lightning_dragonsteel_scythe'
]
let dragonsteelweaponvalues = [
 .94,
 .94,
 1.44,
 .56,
 .56,
 .5,
 1.42,
 1.88,
 1.42,
 .64,
 1.46,
 1,
 1,
 1.84,
 1.38,
 1.42,
 1.38,
 1.04
]
ItemEvents.modification(event => {
   
   event.modify('the_flesh_that_hates:flesh_sword', item => {
      item.attackSpeed = -2.4
      item.attackDamage = 7
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
   event.modify('endlessexpansion:shadowsteel_sword', item => {
      item.attackSpeed = -2.4
      item.attackDamage = 17
   })


   event.modify('endlessexpansion:shadowsteel_helmet', item => {
      item.armorProtection = 5.0
      item.armorToughness = 5
   })
   event.modify('endlessexpansion:shadowsteel_chestplate', item => {
      item.armorProtection = 10.0
      item.armorToughness = 5
   })
   event.modify('endlessexpansion:shadowsteel_leggings', item => {
      item.armorProtection = 7.0
      item.armorToughness = 5
   })
   event.modify('endlessexpansion:shadowsteel_boots', item => {
      item.armorProtection = 5.0
      item.armorToughness = 5
   })

   event.modify('endlessexpansion:celestial_helmet', item => {
      item.armorProtection = 3.0
      item.armorToughness = 2
   })
   event.modify('endlessexpansion:celestial_chestplate', item => {
      item.armorProtection = 8.0
      item.armorToughness = 2
   })
   event.modify('endlessexpansion:celestial_leggings', item => {
      item.armorProtection = 6.0
      item.armorToughness = 2
   })
   event.modify('endlessexpansion:celestial_boots', item => {
      item.armorProtection = 3.0
      item.armorToughness = 2
   })

   event.modify('endlessexpansion:cobalt_helmet', item => {
      item.armorProtection = 2.0
      item.armorToughness = 2
   })
   event.modify('endlessexpansion:cobalt_chestplate', item => {
      item.armorProtection = 6.0
      item.armorToughness = 2
   })
   event.modify('endlessexpansion:cobalt_leggings', item => {
      item.armorProtection = 5.0
      item.armorToughness = 2
   })
   event.modify('endlessexpansion:cobalt_boots', item => {
      item.armorProtection = 2.0
      item.armorToughness = 2
   })

   event.modify('cataclysm:ignitium_helmet', item => {
      item.armorProtection = 3.0
      item.armorToughness = 3
   })
   event.modify('cataclysm:ignitium_chestplate', item => {
      item.armorProtection = 8.0
      item.armorToughness = 3
   })
   event.modify('cataclysm:ignitium_elytra_chestplate', item => {
      item.armorProtection = 8.0
      item.armorToughness = 3
   })
   event.modify('cataclysm:ignitium_leggings', item => {
      item.armorProtection = 6.0
      item.armorToughness = 3
   })
   event.modify('cataclysm:ignitium_boots', item => {
      item.armorProtection = 3.0
      item.armorToughness = 3
   })
})
