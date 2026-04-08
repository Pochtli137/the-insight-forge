export interface DecorationElement {
  path: string;
  x: number;
  y: number;
  fill: string;
  opacity: number;
}

export const realmDecorations: Record<number, DecorationElement[]> = {
  // Realm 1: The Threshold of Seeing — candles, eyes, knowledge
  1: [
    // Small candle dish
    { path: 'M8,40 L8,12 Q8,10 10,10 L10,40 Z M4,40 L14,40 L14,44 Q11,46 7,46 L4,44 Z M7,10 L11,10 L11,6 Q9,0 7,6 Z', x: 30, y: 50, fill: 'var(--color-forge-gold)', opacity: 0.3 },
    // Tall taper candle
    { path: 'M6,50 L6,10 Q6,8 8,8 L10,8 Q12,8 12,10 L12,50 Z M2,50 L16,50 L16,54 L2,54 Z M7,8 L11,8 L10,2 Q9,-4 8,2 Z', x: 120, y: 44, fill: 'var(--color-forge-gold)', opacity: 0.35 },
    // Closed eye
    { path: 'M0,20 Q15,0 30,20 Q15,12 0,20 Z', x: 220, y: 72, fill: 'var(--color-forge-gold)', opacity: 0.3 },
    // Small scroll
    { path: 'M0,8 Q4,4 4,8 L4,36 Q4,40 0,36 Z M4,8 L28,8 L28,36 L4,36 Z M28,8 Q32,4 32,8 L32,36 Q32,40 28,36 Z', x: 310, y: 56, fill: 'var(--color-forge-gold)', opacity: 0.35 },
    // Opening eye with iris
    { path: 'M0,18 Q20,-6 40,18 Q20,6 0,18 Z M20,18 m-6,0 a6,6 0 1,0 12,0 a6,6 0 1,0 -12,0 Z', x: 410, y: 68, fill: 'var(--color-forge-gold)', opacity: 0.4 },
    // Two candles cluster
    { path: 'M4,50 L4,18 Q4,16 6,16 L8,16 Q10,16 10,18 L10,50 Z M5,16 L9,16 L8,10 Q7,4 6,10 Z M16,50 L16,8 Q16,6 18,6 L20,6 Q22,6 22,8 L22,50 Z M17,6 L21,6 L20,0 Q19,-6 18,0 Z M0,50 L26,50 L26,54 L0,54 Z', x: 510, y: 42, fill: 'var(--color-forge-gold)', opacity: 0.45 },
    // Magnifying glass
    { path: 'M18,0 a12,12 0 1,0 0.1,0 Z M18,6 a6,6 0 1,0 0.1,0 Z M6,22 L0,36 L4,38 L10,24 Z', x: 620, y: 54, fill: 'var(--color-forge-gold)', opacity: 0.4 },
    // Open book
    { path: 'M20,6 Q10,0 0,6 L0,36 Q10,30 20,36 Z M20,6 Q30,0 40,6 L40,36 Q30,30 20,36 Z M20,6 L20,36', x: 710, y: 56, fill: 'var(--color-forge-gold)', opacity: 0.5 },
    // All-seeing eye in triangle
    { path: 'M20,0 L40,36 L0,36 Z M20,6 L34,32 L6,32 Z M20,22 m-5,0 a5,5 0 1,0 10,0 a5,5 0 1,0 -10,0 Z', x: 810, y: 54, fill: 'var(--color-forge-gold)', opacity: 0.5 },
    // Lantern
    { path: 'M12,0 L20,0 M16,0 L16,6 M8,6 L24,6 L22,10 L22,34 Q22,38 16,38 Q10,38 10,34 L10,10 L8,6 Z M12,14 L20,14 M12,18 L20,18', x: 910, y: 54, fill: 'var(--color-forge-gold)', opacity: 0.55 },
  ],

  // Realm 2: The Counting House — coins, scales, treasure
  2: [
    // Single coin
    { path: 'M14,0 a14,14 0 1,0 0.1,0 Z M14,4 a10,10 0 1,0 0.1,0 Z', x: 30, y: 72, fill: 'var(--color-forge-gold)', opacity: 0.3 },
    // Coin stack
    { path: 'M0,28 Q10,24 20,28 L20,32 Q10,28 0,32 Z M0,22 Q10,18 20,22 L20,26 Q10,22 0,26 Z M0,16 Q10,12 20,16 L20,20 Q10,16 0,20 Z', x: 130, y: 62, fill: 'var(--color-forge-gold)', opacity: 0.35 },
    // Abacus
    { path: 'M0,0 L0,40 L36,40 L36,0 Z M2,0 L2,40 M34,0 L34,40 M2,10 L34,10 M2,20 L34,20 M2,30 L34,30 M8,6 a4,4 0 1,0 0.1,0 M16,6 a4,4 0 1,0 0.1,0 M12,16 a4,4 0 1,0 0.1,0 M24,16 a4,4 0 1,0 0.1,0 M8,26 a4,4 0 1,0 0.1,0 M20,26 a4,4 0 1,0 0.1,0 M28,26 a4,4 0 1,0 0.1,0', x: 220, y: 52, fill: 'var(--color-forge-gold)', opacity: 0.35 },
    // Balance scale (empty)
    { path: 'M20,4 L20,36 M14,36 L26,36 M8,4 L32,4 M8,4 L2,16 Q8,20 14,16 L8,4 Z M32,4 L26,16 Q32,20 38,16 L32,4 Z', x: 320, y: 52, fill: 'var(--color-forge-gold)', opacity: 0.4 },
    // Coin pile
    { path: 'M10,30 Q18,26 26,30 Q32,26 38,30 L40,34 L0,34 Q4,26 10,30 Z M14,26 Q20,22 26,26 M8,22 Q16,18 24,22 M12,18 Q18,14 24,18', x: 420, y: 58, fill: 'var(--color-forge-gold)', opacity: 0.4 },
    // Hourglass
    { path: 'M4,0 L28,0 L28,4 L4,4 Z M6,4 L26,4 L16,18 L26,32 L6,32 L16,18 Z M4,32 L28,32 L28,36 L4,36 Z', x: 530, y: 56, fill: 'var(--color-forge-gold)', opacity: 0.45 },
    // Tally marks
    { path: 'M0,0 L0,30 M8,0 L8,30 M16,0 L16,30 M24,0 L24,30 M-2,8 L26,22 M34,0 L34,30 M42,0 L42,30 M50,0 L50,30', x: 620, y: 62, fill: 'var(--color-forge-gold)', opacity: 0.45 },
    // Ledger with quill
    { path: 'M0,4 L30,4 L30,40 L0,40 Z M4,10 L26,10 M4,16 L26,16 M4,22 L26,22 M4,28 L20,28 M32,40 Q36,20 34,0 Q36,2 38,0 Q36,4 34,4', x: 720, y: 52, fill: 'var(--color-forge-gold)', opacity: 0.5 },
    // Weighted scale
    { path: 'M20,4 L20,36 M14,36 L26,36 M6,8 L34,2 M6,8 L0,20 Q6,24 12,20 L6,8 Z M34,2 L28,14 Q34,18 40,14 L34,2 Z', x: 820, y: 52, fill: 'var(--color-forge-gold)', opacity: 0.5 },
    // Open treasure chest
    { path: 'M0,20 L40,20 L40,40 L0,40 Z M2,22 L38,22 M0,20 L-4,8 Q20,0 44,8 L40,20 M8,28 a4,4 0 1,0 0.1,0 Z M16,26 a3,3 0 1,0 0.1,0 Z M28,30 a3,3 0 1,0 0.1,0 Z', x: 910, y: 52, fill: 'var(--color-forge-gold)', opacity: 0.55 },
  ],

  // Realm 3: The Mirror Chamber — mirrors, glass, reflections
  3: [
    // Small hand mirror
    { path: 'M14,0 a10,10 0 1,0 0.1,0 Z M14,4 a6,6 0 1,0 0.1,0 Z M11,20 L10,34 L18,34 L17,20', x: 30, y: 58, fill: 'var(--color-forge-teal)', opacity: 0.3 },
    // Glass shard
    { path: 'M0,30 L8,0 L16,4 L20,28 L12,32 Z', x: 140, y: 62, fill: 'var(--color-forge-teal)', opacity: 0.3 },
    // Standing mirror on frame
    { path: 'M14,0 Q0,2 0,20 Q0,36 14,38 Q28,36 28,20 Q28,2 14,0 Z M14,4 Q4,6 4,20 Q4,32 14,34 Q24,32 24,20 Q24,6 14,4 Z M10,38 L6,46 M18,38 L22,46 M2,46 L26,46', x: 230, y: 46, fill: 'var(--color-forge-teal)', opacity: 0.35 },
    // Spectacles
    { path: 'M12,10 a10,10 0 1,0 0.1,0 Z M12,14 a6,6 0 1,0 0.1,0 Z M36,10 a10,10 0 1,0 0.1,0 Z M36,14 a6,6 0 1,0 0.1,0 Z M22,12 Q24,10 26,12', x: 330, y: 68, fill: 'var(--color-forge-teal)', opacity: 0.35 },
    // Reflecting pool
    { path: 'M0,10 Q20,0 40,10 Q20,20 0,10 Z M10,8 Q20,4 30,8 M14,12 Q20,10 26,12', x: 430, y: 78, fill: 'var(--color-forge-teal)', opacity: 0.4 },
    // Cracked mirror
    { path: 'M4,0 L28,0 Q32,0 32,4 L32,40 Q32,44 28,44 L4,44 Q0,44 0,40 L0,4 Q0,0 4,0 Z M16,16 L10,0 M16,16 L28,8 M16,16 L4,30 M16,16 L30,36 M16,16 L16,44', x: 530, y: 48, fill: 'var(--color-forge-teal)', opacity: 0.4 },
    // Eye in mirror frame
    { path: 'M16,0 Q0,2 0,18 Q0,34 16,36 Q32,34 32,18 Q32,2 16,0 Z M6,18 Q16,8 26,18 Q16,14 6,18 Z M16,18 m-3,0 a3,3 0 1,0 6,0 a3,3 0 1,0 -6,0 Z', x: 630, y: 56, fill: 'var(--color-forge-teal)', opacity: 0.45 },
    // Prism with light
    { path: 'M16,0 L32,32 L0,32 Z M32,16 L44,10 M32,16 L44,16 M32,16 L44,22', x: 730, y: 60, fill: 'var(--color-forge-teal)', opacity: 0.45 },
    // Double facing mirrors
    { path: 'M0,0 L4,0 L4,40 L0,40 Z M6,4 L6,36 M24,0 L28,0 L28,40 L24,40 Z M22,4 L22,36 M8,14 L20,14 M8,20 L20,20 M8,26 L20,26', x: 830, y: 52, fill: 'var(--color-forge-teal)', opacity: 0.5 },
    // Crystal ball on stand
    { path: 'M18,0 a16,16 0 1,0 0.1,0 Z M18,6 a10,10 0 1,0 0.1,0 Z M10,30 L6,38 L30,38 L26,30 M14,38 L12,44 L24,44 L22,38', x: 920, y: 48, fill: 'var(--color-forge-teal)', opacity: 0.55 },
  ],

  // Realm 4: The Deep Well — stones, roots, underground
  4: [
    // Single stone
    { path: 'M0,16 Q2,0 16,2 Q28,0 28,14 Q30,24 16,26 Q2,28 0,16 Z', x: 30, y: 68, fill: 'var(--color-forge-gold-dim)', opacity: 0.3 },
    // Curved wall stones
    { path: 'M0,30 Q4,10 20,8 Q36,10 40,30 Z M8,16 L14,14 M18,12 L26,14 M4,24 L12,22 M16,20 L24,20 M28,22 L34,24', x: 130, y: 62, fill: 'var(--color-forge-gold-dim)', opacity: 0.3 },
    // Coiled rope
    { path: 'M16,8 a8,8 0 1,0 0.1,0 Z M16,12 a4,4 0 1,0 0.1,0 Z M20,14 Q24,18 22,24 Q20,30 16,30 Q12,30 14,26', x: 240, y: 66, fill: 'var(--color-forge-gold-dim)', opacity: 0.35 },
    // Bucket
    { path: 'M4,10 L8,36 L28,36 L32,10 Z M2,8 L34,8 L34,12 L2,12 Z M10,4 Q18,0 26,4 M10,4 L10,8 M26,4 L26,8', x: 340, y: 56, fill: 'var(--color-forge-gold-dim)', opacity: 0.35 },
    // Root tendril
    { path: 'M12,0 Q10,8 14,14 Q18,20 12,28 Q8,34 10,42 Q6,36 8,28 Q12,20 8,14 Q4,8 6,0 Z M14,14 Q18,18 22,16 Q26,14 28,18 M12,28 Q8,32 4,34 Q2,36 4,38', x: 440, y: 50, fill: 'var(--color-forge-gold-dim)', opacity: 0.4 },
    // Stalactites
    { path: 'M0,0 L4,0 L6,20 L8,0 L14,0 L18,28 L22,0 L26,0 L28,16 L30,0 L36,0 L38,24 L40,0 L44,0', x: 530, y: 50, fill: 'var(--color-forge-gold-dim)', opacity: 0.4 },
    // Chain links
    { path: 'M6,0 Q0,0 0,6 L0,12 Q0,18 6,18 Q12,18 12,12 L12,6 Q12,0 6,0 Z M6,4 Q4,4 4,6 L4,12 Q4,14 6,14 Q8,14 8,12 L8,6 Q8,4 6,4 Z M6,16 Q0,16 0,22 L0,28 Q0,34 6,34 Q12,34 12,28 L12,22 Q12,16 6,16 Z M6,20 Q4,20 4,22 L4,28 Q4,30 6,30 Q8,30 8,28 L8,22 Q8,20 6,20 Z', x: 640, y: 58, fill: 'var(--color-forge-gold-dim)', opacity: 0.45 },
    // Mushroom cluster
    { path: 'M8,24 L8,14 Q0,14 0,8 Q0,0 10,0 Q18,0 18,8 Q18,14 10,14 Z M24,24 L24,10 Q18,10 18,4 Q18,-2 26,-2 Q34,-2 34,4 Q34,10 28,10 Z M36,24 L36,16 Q32,16 32,12 Q32,8 38,8 Q44,8 44,12 Q44,16 40,16 Z', x: 730, y: 68, fill: 'var(--color-forge-gold-dim)', opacity: 0.45 },
    // Complete well
    { path: 'M0,36 Q4,20 20,18 Q36,20 40,36 Z M8,26 L8,4 L32,4 L32,26 M16,4 L16,0 L24,0 L24,4 M20,4 L20,18', x: 830, y: 56, fill: 'var(--color-forge-gold-dim)', opacity: 0.5 },
    // Glowing gem
    { path: 'M16,6 L28,16 L22,30 L10,30 L4,16 Z M16,10 L24,16 L20,26 L12,26 L8,16 Z M16,0 L16,4 M30,16 L26,16 M2,16 L6,16 M24,32 L22,30 M8,32 L10,30', x: 930, y: 60, fill: 'var(--color-forge-gold)', opacity: 0.55 },
  ],

  // Realm 5: The Oracle's Trial — mysticism, divination
  5: [
    // Rune stone
    { path: 'M4,4 Q4,0 10,0 L20,0 Q26,0 26,4 L26,28 Q26,32 20,32 L10,32 Q4,32 4,28 Z M10,8 L10,24 M10,16 L18,12 M10,16 L18,20', x: 30, y: 60, fill: 'var(--color-forge-crimson)', opacity: 0.3 },
    // Incense burner
    { path: 'M4,20 Q0,20 0,24 L0,30 Q0,34 4,34 L24,34 Q28,34 28,30 L28,24 Q28,20 24,20 Z M10,20 L10,16 Q14,10 10,6 Q14,2 12,0 M18,20 L18,16 Q22,10 18,6 Q22,2 20,0', x: 140, y: 58, fill: 'var(--color-forge-crimson)', opacity: 0.3 },
    // Tarot card
    { path: 'M0,0 L24,0 L24,38 L0,38 Z M2,2 L22,2 L22,36 L2,36 Z M12,12 L8,20 L16,20 Z M12,8 L12,12 M12,20 L12,28 M8,24 L16,24', x: 250, y: 54, fill: 'var(--color-forge-crimson)', opacity: 0.35 },
    // Potion bottle
    { path: 'M10,0 L18,0 L18,6 L22,12 L22,32 Q22,36 14,36 Q6,36 6,32 L6,12 L10,6 Z M8,20 L20,20 M10,26 Q14,22 18,26', x: 350, y: 56, fill: 'var(--color-forge-crimson)', opacity: 0.35 },
    // Skull
    { path: 'M16,0 Q0,2 0,16 Q0,26 8,28 L8,32 L24,32 L24,28 Q32,26 32,16 Q32,2 16,0 Z M8,14 a4,4 0 1,0 0.1,0 Z M24,14 a4,4 0 1,0 0.1,0 Z M14,22 L14,26 M18,22 L18,26 M12,28 L12,32 M16,28 L16,32 M20,28 L20,32', x: 450, y: 60, fill: 'var(--color-forge-crimson)', opacity: 0.4 },
    // Spell book
    { path: 'M0,4 Q0,0 4,0 L28,0 Q32,0 32,4 L32,32 Q32,36 28,36 L4,36 Q0,36 0,32 Z M4,0 L4,36 M8,8 L26,8 M8,14 L26,14 M8,20 L22,20 M16,4 a2,2 0 1,0 0.1,0 Z', x: 550, y: 56, fill: 'var(--color-forge-crimson)', opacity: 0.4 },
    // Staff with crystal
    { path: 'M4,50 L8,50 L10,14 L12,8 L10,4 L6,0 L2,4 L0,8 L2,14 Z M6,0 L6,4 a4,4 0 1,0 0.1,0 Z', x: 660, y: 42, fill: 'var(--color-forge-crimson)', opacity: 0.45 },
    // Pentagram in circle
    { path: 'M18,0 a18,18 0 1,0 0.1,0 Z M18,4 a14,14 0 1,0 0.1,0 Z M18,4 L8,30 L32,14 L4,14 L28,30 Z', x: 740, y: 54, fill: 'var(--color-forge-crimson)', opacity: 0.45 },
    // Oracle crystal ball (large)
    { path: 'M20,0 a18,18 0 1,0 0.1,0 Z M20,6 a12,12 0 1,0 0.1,0 Z M12,10 Q16,14 14,20 M12,34 L8,42 L32,42 L28,34 M14,42 L12,48 L28,48 L26,42', x: 840, y: 44, fill: 'var(--color-forge-crimson)', opacity: 0.5 },
    // Phoenix feather
    { path: 'M4,44 Q6,30 12,20 Q18,10 20,0 Q22,10 18,18 Q24,12 28,8 Q24,16 20,22 Q26,18 32,16 Q26,22 20,26 Q16,32 14,40 Q10,36 4,44 Z M16,20 Q18,24 16,30', x: 930, y: 48, fill: 'var(--color-forge-gold)', opacity: 0.55 },
  ],
};
