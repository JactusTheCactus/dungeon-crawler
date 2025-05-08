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
        - "Elemental Affinity" Colour Formula:
```pl
use Convert::Color::HSV;
my $earthScore = 125 * $earthLevel;
my $fireScore = 360 * $fireLevel;
my $waterScore = 250 * $waterLevel;
my $airScore = 50 * $airLevel;
my $totalScore = $earthScore + $fireScore + $waterScore + $airScore;
my $levelCount = $earthLevel + $fireLevel + $waterLevel + $airLevel;
my $colour = Convert::Color::HSV->new( $hue, 1, 1 );
```