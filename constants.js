const STATEMENT_WORST = "This sounds awful. I feel bad for you :(";
const STATEMENT_BAD = "C'mon, it's gonna get better. Life is beautiful.";
const STATEMENT_NEUTRAL = "Not great, not terrible. It is what it is.";
const STATEMENT_GOOD = "Not too shabby :) The Zodiac predicts good things also!";
const STATEMENT_BEST = "Amazing stuff! You should keep this up!";

const REACTIONS = {
    WORST: { MAX: -1, MIN: -0.7 },
    BAD: { MAX: -0.69, MIN: -0.3 },
    NEUTRAL: { MIN: -0.29, MAX: 0.29 },
    GOOD: { MIN: 0.3, MAX: 0.69 },
    BEST: { MIN: 0.7, MAX: 1 }
}