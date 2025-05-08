Dungeon Crawler + Roguelite
- After Death
    - Keep Abilities, Souls
    - Lose Gold, Gear, XP
- Randomly Generated Dungeons
- Between Runs:
    - Spend Souls To Buy/Upgrade:
        - Abilities
            - Abilities Are Not Manually Activated
                - Passive
                - Automatically Triggered
                    - Limited Use
                    - Unlimited Use
- During Runs:
    - Kill Enemies For Gold And XP
        - At Merchants, Spend Gold On:
            - Gear: Armour + Weapons
                - Increase Stats
        - XP Fills Level Bar
            - Level Up Boosts Stats
    - Combos
        - Number of Kills Without Being Hit
    - Challenge Rooms
        - Debuffs
        - Higher Reward
            - More $ On Enemies & In Chests
            - More Soul-Dense Enemies
- Stats
    - HP (Health): How Much Damage# You Can Take Before Death
    - AT (Attack): How Much Damage# You Deal Each Hit
    - DF (Defense): How Much Damage% You Absorb Each Hit
    - AG (Agility): Chance% To Take No Damage Each Hit
    - AC (Accuracy): Chance% To Deal Damage
    - CH (Charisma): Discount% On Armour + Weapons At Merchant
- Elements
    - Planned For Abilities & Gear
        - Earth
        - Fire
        - Water
        - Air
- Runs In-Console
    - ASCII Graphics
    - Top-Down
    - Turn-Based
    - Grid-Based
    - Colour
        - Bosses
        - Status Effects

Functions:

- "Elemental Affinity" Colour:
```py
def getHSV(earth, fire, water, air):
    import colorsys
    earth["score"] = 125 * earth["lvl"]
    fire["score"] = 360 * fire["lvl"]
    water["score"] = 250 * water["lvl"]
    air["score"] = 50 * air["lvl"]

    scoreList = [
        earth["score"],
        fire["score"],
        water["score"],
        air["score"]
    ]
    score = sum(scoreList)

    lvlList = [
        earth["lvl"],
        fire["lvl"],
        water["lvl"],
        air["lvl"]
    ]
    lvl = sum(lvlList)

    hue = score / lvl

    return colorsys.hsv_to_rgb(hue, 1, 1)
```
- Enemy In-Range Detector:
```py
"""
def giveOrTake(num, target, range):
    over = target + range
    under = target - range
    if under <= num <= over:
        return True
    else:
        return False
"""
# def enemyInRange(player, enemy):
#     distance = 1
#     x = giveOrTake(enemy["x"], player["x"], distance)
#     y = giveOrTake(enemy["y"], player["y"], distance)
#     if False is in [x, y]:
#         return False
#     else:
#         return True
def enemyInRange(player, enemy, max_distance=1):
    dx = abs(player["x"] - enemy["x"])
    dy = abs(player["y"] - enemy["y"])
    distance = sum(dx, dy)
    return distance <= max_distance
```