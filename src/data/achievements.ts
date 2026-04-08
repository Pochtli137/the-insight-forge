export interface Achievement {
  id: string;
  name: string;
  description: string;
  emoji: string;
}

export const achievements: Achievement[] = [
  { id: 'first-blood', name: 'First Blood', description: 'Answer your first question correctly', emoji: '⚔️' },
  { id: 'streak-3', name: 'On Fire', description: 'Get 3 correct in a row', emoji: '🔥' },
  { id: 'streak-5', name: 'Unstoppable', description: 'Get 5 correct in a row', emoji: '⚡' },
  { id: 'streak-10', name: 'Legendary Streak', description: 'Get 10 correct in a row', emoji: '💫' },
  { id: 'flawless-realm', name: 'Runesmith', description: 'Complete a realm with all correct', emoji: '✨' },
  { id: 'all-runes', name: 'Lorekeeper', description: 'Collect all 6 complete runes', emoji: '📜' },
  { id: 'speed-demon', name: 'Speed Demon', description: 'Answer within 3 seconds', emoji: '💨' },
  { id: 'half-way', name: 'The Deep', description: 'Complete 3 realms', emoji: '🕳' },
  { id: 'perfectionist', name: 'Grand Forger', description: 'Finish with a perfect score', emoji: '👑' },
  { id: 'survivor', name: 'The Resilient', description: 'Get 3 wrong in a row and then get one right', emoji: '🛡' },
];
