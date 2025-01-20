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
        'legendarysurvivaloverhaul:healing_herbs',
        'legendarysurvivaloverhaul:plaster',
        'legendarysurvivaloverhaul:bandage',
        'legendarysurvivaloverhaul:tonic',
        'legendarysurvivaloverhaul:medikit',
        'legendarysurvivaloverhaul:morphine',
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
      Item.of('oceanvillagertrader:turtle_armor_chestplate', 1), // arg 1: output
      [
        'A A',
        'AAA', // arg 2: the shape (array of strings)
        'AAA'
      ],
      {
        A: 'minecraft:scute',  //arg 3: the mapping object
      }
    )
    event.shaped(
      Item.of('oceanvillagertrader:turtle_armor_leggings', 1), // arg 1: output
      [
        'AAA',
        'A A', // arg 2: the shape (array of strings)
        'A A'
      ],
      {
        A: 'minecraft:scute',  //arg 3: the mapping object
      }
    )
    event.shaped(
      Item.of('oceanvillagertrader:turtle_armor_boots', 1), // arg 1: output
      [
        'A A', // arg 2: the shape (array of strings)
        'A A'
      ],
      {
        A: 'minecraft:scute',  //arg 3: the mapping object
      }
    )
    event.shaped(
      Item.of('oceanvillagertrader:turtle_sword', 1), // arg 1: output
      [
        'A', // arg 2: the shape (array of strings)
        'A',
        'B'
      ],
      {
        A: 'minecraft:scute',
        B: 'minecraft:stick',  //arg 3: the mapping object
      }
    )
    event.shaped(
      Item.of('oceanvillagertrader:turtle_axe', 1), // arg 1: output
      [
        'AA',
        'AB', // arg 2: the shape (array of strings)
        ' B'
      ],
      {
        A: 'minecraft:scute',
        B: 'minecraft:stick',  //arg 3: the mapping object
      }
    )
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
    event.shaped(
      Item.of('enigmaticlegacy:soul_crystal', 1), // arg 1: output
      [
        'AAA',
        'ABA', // arg 2: the shape (array of strings)
        'AAA'
      ],
      {
        A: 'minecraft:lapis_lazuli',
        B: 'minecraft:soul_sand',  //arg 3: the mapping object
      }
    )
})
