function randomTextLogger() {
    // generate random sentence with words
    const words = [
        "hello", "world", "javascript", "programming", "code", "developer", 
        "awesome", "amazing", "fantastic", "wonderful", "beautiful", "creative",
        "innovation", "technology", "future", "success", "learning", "growth",
        "inspiration", "motivation", "excellence", "quality", "performance",
        "solution", "problem", "challenge", "opportunity", "experience",
        "knowledge", "wisdom", "intelligence", "creativity", "imagination",
        "adventure", "journey", "discovery", "exploration", "wonder", "magic",
        "dream", "vision", "purpose", "passion", "energy", "vibrant", "dynamic",
        "powerful", "strong", "resilient", "flexible", "adaptive", "versatile",
        "brilliant", "genius", "masterpiece", "artwork", "design", "style",
        "elegance", "grace", "harmony", "balance", "peace", "tranquility",
        "serenity", "calm", "gentle", "kind", "generous", "compassionate",
        "courageous", "brave", "heroic", "legendary", "epic", "magnificent",
        "splendid", "gorgeous", "stunning", "breathtaking", "mesmerizing",
        "captivating", "enchanting", "charming", "delightful", "pleasing",
        "satisfying", "fulfilling", "rewarding", "valuable", "precious",
        "treasure", "gem", "jewel", "diamond", "golden", "silver", "platinum",
        "crystal", "sparkle", "shine", "glow", "radiate", "illuminate",
        "brighten", "lighten", "enlighten", "educate", "teach", "guide",
        "mentor", "coach", "train", "develop", "build", "construct",
        "create", "generate", "produce", "manufacture", "craft", "sculpt",
        "paint", "draw", "sketch", "illustrate", "visualize", "imagine",
        "conceive", "invent", "discover", "uncover", "reveal", "expose",
        "showcase", "display", "present", "demonstrate", "exhibit", "feature",
        "highlight", "emphasize", "focus", "concentrate", "dedicate", "commit",
        "devote", "invest", "contribute", "participate", "engage", "involve",
        "connect", "link", "join", "unite", "combine", "merge", "integrate",
        "synchronize", "coordinate", "organize", "arrange", "structure",
        "systematize", "standardize", "optimize", "improve", "enhance",
        "upgrade", "advance", "progress", "evolve", "transform", "change",
        "adapt", "adjust", "modify", "alter", "revise", "update", "refresh",
        "renew", "restore", "revive", "rejuvenate", "energize", "activate",
        "stimulate", "excite", "thrill", "amaze", "astonish", "surprise",
        "shock", "stun", "dazzle", "impress", "influence", "inspire",
        "encourage", "support", "help", "assist", "aid", "serve", "benefit",
        "advantage", "profit", "gain", "earn", "achieve", "accomplish",
        "complete", "finish", "conclude", "finalize", "perfect", "polish",
        "refine", "hone", "sharpen", "strengthen", "fortify", "reinforce",
        "secure", "protect", "defend", "guard", "shield", "shelter",
        "nurture", "care", "tend", "maintain", "preserve", "conserve",
        "sustain", "endure", "persist", "continue", "proceed", "advance",
        "move", "travel", "journey", "venture", "explore", "discover",
        "find", "locate", "identify", "recognize", "understand", "comprehend",
        "grasp", "realize", "appreciate", "value", "respect", "honor",
        "celebrate", "commemorate", "remember", "recall", "reflect", "think",
        "consider", "contemplate", "meditate", "ponder", "wonder", "question",
        "investigate", "research", "study", "analyze", "examine", "review",
        "assess", "evaluate", "judge", "determine", "decide", "choose",
        "select", "pick", "elect", "vote", "support", "back", "endorse",
        "approve", "accept", "welcome", "embrace", "adopt", "implement",
        "execute", "perform", "conduct", "carry", "deliver", "provide",
        "supply", "offer", "present", "give", "share", "distribute",
        "spread", "circulate", "propagate", "multiply", "expand", "extend",
        "stretch", "reach", "touch", "connect", "bridge", "link", "join",
        "unite", "merge", "combine", "integrate", "synthesize", "blend",
        "mix", "fuse", "melt", "dissolve", "absorb", "assimilate", "incorporate",
        "include", "contain", "hold", "carry", "bear", "support", "sustain",
        "maintain", "preserve", "keep", "retain", "save", "store", "collect",
        "gather", "accumulate", "build", "grow", "increase", "multiply",
        "expand", "extend", "stretch", "reach", "achieve", "attain", "gain",
        "obtain", "acquire", "secure", "get", "receive", "accept", "welcome"
    ];
    
    const randomText = words[Math.floor(Math.random() * words.length)] + " " + 
                      words[Math.floor(Math.random() * words.length)] + " " + 
                      words[Math.floor(Math.random() * words.length)];
    console.log(randomText);
}


module.exports = randomTextLogger;