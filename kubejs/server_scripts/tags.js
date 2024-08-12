ServerEvents.tags('item', event => {    
    event.removeAll('vinery:apple_logs')
    event.add('minecraft:logs', '#endlessexpansion:arbor_logs')
    event.add('notreepunching:weak_saws', ['minecraft:wooden_axe','minecraft:stone_axe','endlessexpansion:cobalt_axe','endlessexpansion:celestial_axe','endlessexpansion:shadowsteel_axe','aquaculture:neptunium_axe','iceandfire:silver_axe','iceandfire:copper_axe','iceandfire:dragonbone_axe','iceandfire:myrmex_desert_axe','iceandfire:myrmex_jungle_axe','iceandfire:dragonsteel_fire_axe','iceandfire:dragonsteel_ice_axe','iceandfire:dragonsteel_lightning_axe'])
})