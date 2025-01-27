const data = [
    { item: "Quartz", type: "Crystal", properties: ["amplification of energy", "clarity", "spiritual growth"], imageUrl: "nan" },
    { item: "Calcite", type: "Crystal", properties: ["energy cleansing", "emotional healing", "boosting creativity"], imageUrl: "nan" },
    { item: "Chert", type: "Rock", properties: ["grounding", "protection", "enhancing survival instincts"], imageUrl: "nan" },
    { item: "Limestone", type: "Rock", properties: ["grounding", "stability", "strength"], imageUrl: "nan" },
    { item: "Dolomite", type: "Rock", properties: ["balance", "calming", "energy boosting"], imageUrl: "nan" },
    { item: "Selenite", type: "Crystal", properties: ["clarity", "purification", "connection to higher realms"], imageUrl: "nan" },
    { item: "Hematite", type: "Crystal", properties: ["grounding", "protection", "balancing energies"], imageUrl: "nan" },
    { item: "Pyrite", type: "Crystal", properties: ["prosperity", "protection", "enhancing willpower"], imageUrl: "nan" },
    { item: "Marble", type: "Rock", properties: ["clarity", "strength", "serenity"], imageUrl: "nan" },
    { item: "Eastern Red Cedar", type: "Plant", properties: ["purification", "protection", "dispelling negative energy"], imageUrl: "nan" },
    { item: "White Oak", type: "Plant", properties: ["strength", "wisdom", "stability"], imageUrl: "nan" },
    { item: "Goldenrod", type: "Plant", properties: ["prosperity", "intuition", "emotional balance"], imageUrl: "nan" },
    { item: "Sassafras", type: "Plant", properties: ["healing", "protection", "enhancing psychic abilities"], imageUrl: "nan" },
    { item: "Dogwood", type: "Plant", properties: ["renewal", "rebirth", "resilience"], imageUrl: "nan" },
    { item: "Wild Ginger", type: "Plant", properties: ["prosperity", "grounding", "protection"], imageUrl: "nan" },
    { item: "Yarrow", type: "Plant", properties: ["courage", "healing", "love"], imageUrl: "nan" },
    { item: "Black-eyed Susan", type: "Plant", properties: ["encouragement", "motivation", "positivity"], imageUrl: "nan" },
    { item: "American Holly", type: "Plant", properties: ["protection", "overcoming anger", "dreaming"], imageUrl: "nan" },
    { item: "Wild Rose", type: "Plant", properties: ["love", "healing", "protection"], imageUrl: "nan" },
    { item: "Echinacea", type: "Plant", properties: ["healing", "strength", "boosting the immune system"], imageUrl: "nan" },
    { item: "Bee Balm", type: "Plant", properties: ["protection", "love", "clarity"], imageUrl: "nan" },
    { item: "Spicebush", type: "Plant", properties: ["protection", "prosperity", "enhancing intuition"], imageUrl: "nan" },
    { item: "Agate", type: "Crystal", properties: ["protection", "strength", "harmony"], imageUrl: "nan" },
    { item: "Amethyst", type: "Crystal", properties: ["peace", "intuition", "spiritual awareness"], imageUrl: "nan" },
    { item: "Smoky Quartz", type: "Crystal", properties: ["grounding", "protection", "stress relief"], imageUrl: "nan" },
    { item: "Fluorite", type: "Crystal", properties: ["clarity", "protection", "enhancing concentration"], imageUrl: "nan" },
    { item: "Jasper", type: "Crystal", properties: ["nurturing", "grounding", "stabilizing energy"], imageUrl: "nan" },
    { item: "Tiger's Eye", type: "Crystal", properties: ["courage", "confidence", "protection"], imageUrl: "nan" },
    { item: "Obsidian", type: "Crystal", properties: ["protection", "grounding", "releasing negativity"], imageUrl: "nan" },
    { item: "Moss Agate", type: "Crystal", properties: ["growth", "abundance", "new beginnings"], imageUrl: "nan" },
    { item: "Amazonite", type: "Crystal", properties: ["communication", "emotional balance", "truth", "hope", "manifestation"], imageUrl: "nan" },
    { item: "Green Adventurine", type: "Crystal", properties: ["luck", "prosperity", "emotional healing", "creativity", "calming"], imageUrl: "nan" },
    { item: "Opalite", type: "Crystal", properties: ["transition", "emotional healing", "communication", "calmness", "self-esteem"], imageUrl: " " },
    { item: "Rhondonite", type: "Crystal", properties: ["emotional healing", "love", "balance", "grounding", "self-confidence"], imageUrl: "nan" },
    { item: "Labrodite", type: "Crystal", properties: ["protection", "transformation", "intuition", "courage", "clarity"], imageUrl: "nan" },
    { item: "Rose Quarts", type: "Crystal", properties: ["love", "emotional healing", "compassion", "calmness", "heart chakra"], imageUrl: "nan" },
    { item: "Opal", type: "Crystal", properties: ["creativity", "emotional balance", "protection", "intuition", "transformation"], imageUrl: "nan" },
    { item: "Dandelion", type: "Plant", properties: ["manifestation", "growth", "transformation", "resilience", "healing"], imageUrl: "nan" },
    { item: "Elderberry", type: "Plant", properties: ["protection", "health", "prosperity", "transformation", "intuition"], imageUrl: "nan" },
    { item: "Yarrow", type: "Plant", properties: ["healing", "protection", "love", "courage", "psychic abilities"], imageUrl: "nan" },
    { item: "Plantain", type: "Plant", properties: ["healing", "strength", "protection", "grounding", "manifestation"], imageUrl: "nan" },
    { item: "Clover", type: "Plant", properties: ["luck", "prosperity", "protection", "love", "fertility"], imageUrl: "nan" },
    { item: "Goldenrod", type: "Plant", properties: ["prosperity", "good fortune", "divination", "love", "healing"], imageUrl: "nan" },
    { item: "Violet", type: "Plant", properties: ["love", "protection", "healing", "peace", "tranquility"], imageUrl: "nan" },
    { item: "Chicory", type: "Plant", properties: ["removing obstacles", "frugality", "gaining favors", "endurance", "strength"], imageUrl: "nan" },
    { item: "Mint", type: "Plant", properties: ["healing", "prosperity", "protection", "purification", "love"], imageUrl: "nan" },
    { item: "Thyme", type: "Plant", properties: ["courage", "health", "purification", "healing", "love"], imageUrl: "nan" },
    { item: "Flint", type: "Rock", properties: ["protection", "grounding", "strength", "courage", "endurance"], imageUrl: "nan" },
    { item: "Sandstone", type: "Rock", properties: ["clarity", "protection", "grounding", "strength", "creativity"], imageUrl: "nan" },
    { item: "Shale", type: "Rock", properties: ["transformation", "grounding", "stability", "protection", "resilience"], imageUrl: "nan" },
    { item: "Conglomerate", type: "Rock", properties: ["strength", "stability", "grounding", "protection", "endurance"], imageUrl: "nan" },
    { item: "Gneiss", type: "Rock", properties: ["transformation", "strength", "stability", "grounding", "protection"], imageUrl: "nan" },
    { item: "Quartzite", type: "Rock", properties: ["clarity", "transformation", "strength", "grounding", "protection"], imageUrl: "nan" },
    { item: "Purple Coneflower", type: "Plant", properties: ["strength", "health", "healing", "protection", "resilience"], imageUrl: "nan" },
    { item: "Black-eyed Susan", type: "Plant", properties: ["encouragement", "motivation", "positivity", "justice", "spiritual insight"], imageUrl: "nan" },
    { item: "Wild Bergamot", type: "Plant", properties: ["clarity", "intuition", "communication", "cleansing", "spiritual awakening"], imageUrl: "nan" },
    { item: "Cardinal Flower", type: "Plant", properties: ["passion", "vitality", "love", "courage", "spiritual growth"], imageUrl: "nan" },
    { item: "Joe-Pye Weed", type: "Plant", properties: ["healing", "support", "empathy", "community", "spiritual connection"], imageUrl: "nan" },
    { item: "Ironweed", type: "Plant", properties: ["endurance", "strength", "perseverance", "determination", "spiritual fortitude"], imageUrl: "nan" },
    { item: "Sunflower", type: "Plant", properties: ["adoration", "loyalty", "happiness", "longevity", "spiritual insight"], imageUrl: "nan" },
    { item: "Obedient Plant", type: "Plant", properties: ["adaptability", "grace", "flexibility", "communication", "spiritual openness"], imageUrl: "nan" },
    { item: "White Oak", type: "Plant", properties: ["strength", "endurance", "protection", "wisdom", "truth"], imageUrl: "nan" },
    { item: "Red Oak", type: "Plant", properties: ["resilience", "survival", "steadfastness", "courage", "strength"], imageUrl: "nan" },
    { item: "Shagbark Hickory", type: "Plant", properties: ["healing", "growth", "adaptability", "resilience", "strength"], imageUrl: "nan" },
    { item: "Mockernut Hickory", type: "Plant", properties: ["balance", "strength", "grounding energy", "protection", "resilience"], imageUrl: "nan" },
    { item: "Sugar Maple", type: "Plant", properties: ["balance", "promise", "practicality", "abundance", "success"], imageUrl: "nan" },
    { item: "Red Maple", type: "Plant", properties: ["passion", "energy", "creativity", "heart connection", "emotions"], imageUrl: "nan" },
    { item: "Black Walnut", type: "Plant", properties: ["clarity", "focus", "introspection", "inner wisdom", "knowledge"], imageUrl: "nan" },
    { item: "Tulip Poplar", type: "Plant", properties: ["renewal", "transformation", "growth", "beauty", "grace"], imageUrl: "nan" },
    { item: "White Ash", type: "Plant", properties: ["protection", "strength", "empowerment", "harmony", "balance"], imageUrl: "nan" },
    { item: "Shortleaf Pine", type: "Plant", properties: ["longevity", "wisdom", "peace", "resilience", "purification"], imageUrl: "nan" },
];
