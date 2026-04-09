export function useSound() {
  const play = (type: 'correct' | 'wrong' | 'streak' | 'achievement' | 'rune-segment' | 'rune-complete' | 'boss-intro' | 'boss-defeat') => {
    try {
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      switch (type) {
        case 'correct':
          osc.frequency.setValueAtTime(523, ctx.currentTime);
          osc.frequency.setValueAtTime(659, ctx.currentTime + 0.1);
          gain.gain.setValueAtTime(0.3, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
          osc.start(ctx.currentTime);
          osc.stop(ctx.currentTime + 0.3);
          break;
        case 'wrong':
          osc.frequency.setValueAtTime(150, ctx.currentTime);
          osc.frequency.setValueAtTime(100, ctx.currentTime + 0.15);
          osc.type = 'sawtooth';
          gain.gain.setValueAtTime(0.2, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
          osc.start(ctx.currentTime);
          osc.stop(ctx.currentTime + 0.3);
          break;
        case 'streak':
          osc.frequency.setValueAtTime(523, ctx.currentTime);
          osc.frequency.setValueAtTime(659, ctx.currentTime + 0.1);
          osc.frequency.setValueAtTime(784, ctx.currentTime + 0.2);
          gain.gain.setValueAtTime(0.3, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);
          osc.start(ctx.currentTime);
          osc.stop(ctx.currentTime + 0.4);
          break;
        case 'achievement':
          osc.frequency.setValueAtTime(523, ctx.currentTime);
          osc.frequency.setValueAtTime(659, ctx.currentTime + 0.12);
          osc.frequency.setValueAtTime(784, ctx.currentTime + 0.24);
          osc.frequency.setValueAtTime(1047, ctx.currentTime + 0.36);
          gain.gain.setValueAtTime(0.3, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.6);
          osc.start(ctx.currentTime);
          osc.stop(ctx.currentTime + 0.6);
          break;
        case 'rune-segment':
          osc.type = 'sine';
          osc.frequency.setValueAtTime(880, ctx.currentTime);
          gain.gain.setValueAtTime(0.15, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
          osc.start(ctx.currentTime);
          osc.stop(ctx.currentTime + 0.5);
          break;
        case 'rune-complete':
          [523, 659, 784].forEach((freq, i) => {
            const o = ctx.createOscillator();
            const g = ctx.createGain();
            o.connect(g);
            g.connect(ctx.destination);
            o.frequency.setValueAtTime(freq, ctx.currentTime);
            g.gain.setValueAtTime(0.2, ctx.currentTime);
            g.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.8);
            o.start(ctx.currentTime + i * 0.05);
            o.stop(ctx.currentTime + 0.8);
          });
          break;
        case 'boss-intro':
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(80, ctx.currentTime);
          osc.frequency.setValueAtTime(60, ctx.currentTime + 0.3);
          osc.frequency.setValueAtTime(80, ctx.currentTime + 0.6);
          gain.gain.setValueAtTime(0.25, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 1.0);
          osc.start(ctx.currentTime);
          osc.stop(ctx.currentTime + 1.0);
          break;
        case 'boss-defeat':
          osc.frequency.setValueAtTime(392, ctx.currentTime);
          osc.frequency.setValueAtTime(523, ctx.currentTime + 0.15);
          osc.frequency.setValueAtTime(659, ctx.currentTime + 0.3);
          osc.frequency.setValueAtTime(784, ctx.currentTime + 0.45);
          gain.gain.setValueAtTime(0.3, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.8);
          osc.start(ctx.currentTime);
          osc.stop(ctx.currentTime + 0.8);
          break;
      }
    } catch {
      // Audio not available, silently ignore
    }
  };

  return { play };
}
