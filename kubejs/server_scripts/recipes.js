ServerEvents.recipes(event => {
    [
      'spawnermod:spawner_key',
        'angelring:energetic_angel_ring',
        'angelring:angel_ring',
        'angelring:diamond_ring',
        'sophisticatedbackpacks:battery_upgrade',
        'scalinghealth:power_crystal',
        'cataclysm:bone_reptile_helmet',
        'cataclysm:bone_reptile_chestplate',

        'spartanfire:lightning_dragonsteel_boomerang',
        'spartanfire:lightning_dragonsteel_javelin',
        'spartanfire:lightning_dragonsteel_tomahawk',
        'spartanfire:lightning_dragonsteel_throwing_knife',
        'spartanfire:fire_dragonsteel_boomerang',
        'spartanfire:fire_dragonsteel_javelin',
        'spartanfire:fire_dragonsteel_tomahawk',
        'spartanfire:fire_dragonsteel_throwing_knife',
        'spartanfire:ice_dragonsteel_boomerang',
        'spartanfire:ice_dragonsteel_javelin',
        'spartanfire:ice_dragonsteel_tomahawk',
        'spartanfire:ice_dragonsteel_throwing_knife',
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

    ].forEach((itemID) => event.remove({output: itemID}))
    /*
    event.shaped(
        Item.of('angelring:angel_ring', 1), // arg 1: output
        [
          'ABA',
          'CED', // arg 2: the shape (array of strings)
          'AFA'
        ],
        {
          A: 'cataclysm:ignitium_ingot',
          B: 'iceandfire:dragonsteel_lightning_ingot',  //arg 3: the mapping object
          C: 'iceandfire:dragonsteel_ice_ingot',
          D: 'iceandfire:dragonsteel_fire_ingot',
          E: 'angelring:diamond_ring',
          F: 'minecraft:nether_star'
        }
    )
    */
    event.replaceInput(
      { output: 'backpacked:backpack' }, 
      'minecraft:rabbit_hide',
      'minecraft:leather'
    )
    event.replaceInput(
      { output: 'tan__a_curios_expansion:regulation_circuit_shard' }, 
      'minecraft:prismarine_crystals',
      'minecraft:quartz'
    )
    event.replaceInput(
      { output: 'tan__a_curios_expansion:regulation_crystal' }, 
      'minecraft:prismarine_crystals',
      'minecraft:quartz'
    )
    event.remove({ 
      input: 'eldritch_end:primordial_planks',
      not: {input:['#notreepunching:saws','#notreepunching:weak_saws']},
      output: 'minecraft:stick'
    })
    event.remove({ 
      input: 'minecraft:gravel',
      output: 'minecraft:flint'
    })
    event.remove({ 
      input: ['vinery:apple_log','vinery:apple_wood'],
      output: 'minecraft:oak_planks'
    })
    event.remove({ 
      input: '#minecraft:logs',
      not: {input:['#notreepunching:saws','#notreepunching:weak_saws']},
      output: 'minecraft:stick'
    })
    event.shaped(
      Item.of('minecraft:wooden_pickaxe', 1), // arg 1: output
      [
        'AAA',
        ' B ', // arg 2: the shape (array of strings)
        ' B '
      ],
      {
        A: '#minecraft:planks',
        B: 'minecraft:stick',  //arg 3: the mapping object
      }
    )
    event.shaped(
      Item.of('minecraft:wooden_axe', 1), // arg 1: output
      [
        'AA',
        'AB', // arg 2: the shape (array of strings)
        ' B'
      ],
      {
        A: '#minecraft:planks',
        B: 'minecraft:stick',  //arg 3: the mapping object
      }
    )
    event.shaped(
      Item.of('minecraft:wooden_hoe', 1), // arg 1: output
      [
        'AA',
        ' B', // arg 2: the shape (array of strings)
        ' B'
      ],
      {
        A: '#minecraft:planks',
        B: 'minecraft:stick',  //arg 3: the mapping object
      }
    )
    event.shaped(
      Item.of('minecraft:wooden_sword', 1), // arg 1: output
      [
        'A',
        'A', // arg 2: the shape (array of strings)
        'B'
      ],
      {
        A: '#minecraft:planks',
        B: 'minecraft:stick',  //arg 3: the mapping object
      }
    )
    event.shaped(
      Item.of('minecraft:wooden_shovel', 1), // arg 1: output
      [
        'A',
        'B', // arg 2: the shape (array of strings)
        'B'
      ],
      {
        A: '#minecraft:planks',
        B: 'minecraft:stick',  //arg 3: the mapping object
      }
    )
})
