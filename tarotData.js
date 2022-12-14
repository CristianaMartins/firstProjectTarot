const tarotData = [
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/06/ET-CUPS-ace.jpg",
    upright: "Love, new relationships, compassion, creativity.",
    reversed: "Self-love, intuition, repressed emotions.",
    name: "Ace of Cups",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/06/ET-CUPS-02.jpg",
    upright: "Unified love, partnership, mutual attraction",
    reversed: "Self-love, break-ups, disharmony, distrust.",
    name: "Two of Cups",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/06/ET-CUPS-03.jpg",
    upright: "Celebration, friendship, creativity, collaborations.",
    reversed: "Independence, alone time, hardcore partying, ‘three’s a crowd’.",
    name: "Three of Cups",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/06/ET-CUPS-04.jpg",
    upright: "Meditation, contemplation, apathy, reevaluation.",
    reversed: "Retreat, withdrawal, checking in for alignment.",
    name: "Four of Cups",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/06/ET-CUPS-05.jpg",
    upright: "Regret, failure, disappointment, pessimism.",
    reversed: "Personal setbacks, self-forgiveness, moving on.",
    name: "Five of Cups",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/06/ET-CUPS-06.jpg",
    upright: "Revisiting the past, childhood memories, innocence, joy.",
    reversed: "Living in the past, forgiveness, lacking playfulness.",
    name: "Six of Cups",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/06/ET-CUPS-07.jpg",
    upright: "Opportunities, choices, wishful thinking, illusion.",
    reversed: "Alignment, personal values, overwhelmed by choices.",
    name: "Seven of Cups",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/06/ET-CUPS-08.jpg",
    upright: "Disappointment, abandonment, withdrawal, escapism.",
    reversed:
      "Trying one more time, indecision, aimless drifting, walking away.",
    name: "Eight of Cups",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/06/ET-CUPS-09.jpg",
    upright: "Contentment, satisfaction, gratitude, wish come true.",
    reversed: "Inner happiness, materialism, dissatisfaction, indulgence.",
    name: "Nine of Cups",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/06/ET-CUPS-10.jpg",
    upright: "Divine love, blissful relationships, harmony, alignment.",
    reversed: "Disconnection, misaligned values, struggling relationships.",
    name: "Ten of Cups",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/06/ET-CUPS-page.jpg",
    upright:
      "Creative opportunities, intuitive messages, curiosity, possibility.",
    reversed:
      "New ideas, doubting intuition, creative blocks, emotional immaturity.",
    name: "Page of Cups",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/06/ET-CUPS-knight.jpg",
    upright: "Creativity, romance, charm, imagination, beauty.",
    reversed: "Overactive imagination, unrealistic, jealous, moody.",
    name: "Knight of Cups",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/06/ET-CUPS-queen.jpg",
    upright: "Compassionate, caring, emotionally stable, intuitive, in flow.",
    reversed: "Inner feelings, self-care, self-love, co-dependency.",
    name: "Queen of Cups",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/06/ET-CUPS-king.jpg",
    upright: "Emotionally balanced, compassionate, diplomatic.",
    reversed:
      "Self-compassion, inner feelings, moodiness, emotionally manipulative.",
    name: "King of Cups",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/06/ET-MA-00-the-Fool.jpg",
    upright: "Beginnings, innocence, spontaneity, a free spirit",
    reversed: "Holding back, recklessness, risk-taking",
    name: "The Fool",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/06/ET-MA-01-Magician.jpg",
    upright: "Manifestation, resourcefulness, power, inspired action",
    reversed: "Manipulation, poor planning, untapped talents",
    name: "The Magician",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/06/ET-MA-02-High-Priestess.jpg",
    upright:
      "Intuition, sacred knowledge, divine feminine, the subconscious mind",
    reversed: "Secrets, disconnected from intuition, withdrawal and silence",
    name: "The High Priestess",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/06/ET-MA-03-The-Empress.jpg",
    upright: "Femininity, beauty, nature, nurturing, abundance",
    reversed: "Creative block, dependence on others",
    name: "The Empress",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/06/ET-MA-04-Emperor.jpg",
    upright: "Authority, establishment, structure, a father figure",
    reversed:
      "Domination, excessive control, lack of discipline, inflexibility",
    name: "The Emperor",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/04/MA-05-the-hierophant.png",
    upright:
      "Spiritual wisdom, religious beliefs, conformity, tradition,institutions",
    reversed: "Personal beliefs, freedom, challenging the status quo",
    name: "The Hierophant",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/06/ET-MA-06-the-lovers.jpg",
    upright: "Love, harmony, relationships, values alignment, choices",
    reversed: "Self-love, disharmony, imbalance, misalignment of values",
    name: "The Lovers",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/06/ET-MA-07-the-chariot.jpg",
    upright: "Control, willpower, success, action, determination",
    reversed: "Self-discipline, opposition, lack of direction",
    name: "The Chariot",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/04/ET-MA-08-strength.jpg",
    upright: "Strength, courage, persuasion, influence, compassion",
    reversed: "Inner strength, self-doubt, low energy, raw emotion",
    name: "Strength",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/06/ET-MA-09-the-hermit.jpg",
    upright: "Soul-searching, introspection, being alone, inner guidance",
    reversed: "Isolation, loneliness, withdrawal",
    name: "The Hermit",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/06/ET-MA-10-wheel-of-fortune.jpg",
    upright: "Good luck, karma, life cycles, destiny, a turning point",
    reversed: "Bad luck, resistance to change, breaking cycles",
    name: "Wheel of Fortune",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/04/MA-11-justice.png",
    upright: "Justice, fairness, truth, cause and effect, law",
    reversed: "Unfairness, lack of accountability, dishonesty",
    name: "Justice",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/04/MA-12-the-hanged-man.png",
    upright: "Pause, surrender, letting go, new perspectives",
    reversed: "Delays, resistance, stalling, indecision",
    name: "The Hanged Man",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/06/ET-MA-13-Death.jpg",
    upright: "Endings, change, transformation, transition",
    reversed: "Resistance to change, personal transformation, inner purging",
    name: "Death",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/06/ET-MA-14-Temperance.jpg",
    upright: "Balance, moderation, patience, purpose",
    reversed: "Imbalance, excess, self-healing, re-alignment",
    name: "Temperance",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/06/ET-MA-15-The-Devil.jpg",
    upright: "Shadow self, attachment, addiction, restriction, sexuality",
    reversed: "Releasing limiting beliefs, exploring dark thoughts, detachment",
    name: "The Devil",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/06/ET-MA-16-The-Tower.jpg",
    upright: "Sudden change, upheaval, chaos, revelation, awakening",
    reversed: "Personal transformation, fear of change, averting disaster",
    name: "The Tower",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/06/ET-MA-17-The-Star.jpg",
    upright: "Hope, faith, purpose, renewal, spirituality",
    reversed: "Lack of faith, despair, self-trust, disconnection",
    name: "The Star",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/06/ET-MA-18-The-Moon.jpg",
    upright: "Illusion, fear, anxiety, subconscious, intuition",
    reversed: "Release of fear, repressed emotion, inner confusion",
    name: "The Moon",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/06/ET-MA-19-The-Sun.jpg",
    upright: "Positivity, fun, warmth, success, vitality",
    reversed: "Inner child, feeling down, overly optimistic",
    name: "The Sun",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/06/ET-MA-20-Judgement.jpg",
    upright: "Judgement, rebirth, inner calling, absolution",
    reversed: "Self-doubt, inner critic, ignoring the call",
    name: "Judgement",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/06/ET-MA-21-The-World.jpg",
    upright: "Completion, integration, accomplishment, travel",
    reversed: "Seeking personal closure, short-cuts, delays",
    name: "The World",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/06/ET-SWORDS-ace.jpg",
    upright: "Breakthroughs, new ideas, mental clarity, success",
    reversed: "Inner clarity, re-thinking an idea, clouded judgement",
    name: "Ace of Swords",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/06/ET-SWORDS-02.jpg",
    upright: "Difficult decisions, weighing up options, an impasse, avoidance",
    reversed: "Indecision, confusion, information overload, stalemate",
    name: "Two of Swords",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/06/ET-SWORDS-03.jpg",
    upright: "Heartbreak, emotional pain, sorrow, grief, hurt",
    reversed: "Negative self-talk, releasing pain, optimism, forgiveness",
    name: "Three of Swords",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/06/ET-SWORDS-04.jpg",
    upright: "Rest, relaxation, meditation, contemplation, recuperation",
    reversed: "Exhaustion, burn-out, deep contemplation, stagnation",
    name: "Four of Swords",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/06/ET-SWORDS-05.jpg",
    upright:
      "Conflict, disagreements, competition, defeat, winning at all costs",
    reversed: "Reconciliation, making amends, past resentment",
    name: "Five of Swords",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/06/ET-SWORDS-06.jpg",
    upright: "Transition, change, rite of passage, releasing baggage.",
    reversed: "Personal transition, resistance to change, unfinished business",
    name: "Six of Swords",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/06/ET-SWORDS-07.jpg",
    upright:
      "Betrayal, deception, getting away with something, acting strategically",
    reversed: "Imposter syndrome, self-deceit, keeping secrets",
    name: "Seven of Swords",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/06/ET-SWORDS-08.jpg",
    upright:
      "Negative thoughts, self-imposed restriction, imprisonment, victim mentality",
    reversed:
      "Self-limiting beliefs, inner critic, releasing negative thoughts, open to new perspectives",
    name: "Eight of Swords",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/06/ET-SWORDS-09.jpg",
    upright: "Anxiety, worry, fear, depression, nightmares",
    reversed: "Inner turmoil, deep-seated fears, secrets, releasing worry",
    name: "Nine of Swords",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/06/ET-SWORDS-10.jpg",
    upright: "Painful endings, deep wounds, betrayal, loss, crisis",
    reversed: "Recovery, regeneration, resisting an inevitable end",
    name: "Ten of Swords",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/06/ET-SWORDS-page.jpg",
    upright:
      "New ideas, curiosity, thirst for knowledge, new ways of communicating",
    reversed:
      "Self-expression, all talk and no action, haphazard action, haste",
    name: "Page of Swords",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/04/ET-SWORDS-knight.jpg",
    upright: "Ambitious, action-oriented, driven to succeed, fast-thinking",
    reversed: "Restless, unfocused, impulsive, burn-out",
    name: "Knight of Swords",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/06/ET-SWORDS-queen.jpg",
    upright:
      "Independent, unbiased judgement, clear boundaries, direct communication",
    reversed: "Overly-emotional, easily influenced, bitchy, cold-hearted",
    name: "Queen of Swords",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/06/ET-SWORDS-king.jpg",
    upright: "Mental clarity, intellectual power, authority, truth",
    reversed: "Quiet power, inner truth, misuse of power, manipulation",
    name: "King of Swords",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/06/ET-PENTACLES-ace.jpg",
    upright: "A new financial or career opportunity, manifestation, abundance.",
    reversed: "Lost opportunity, lack of planning and foresight.",
    name: "Ace of Pentacles",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/06/ET-PENTACLES-02.jpg",
    upright:
      "Multiple priorities, time management, prioritisation, adaptability.",
    reversed: "Over-committed, disorganisation, reprioritisation.",
    name: "Two of Pentacles",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/06/ET-PENTACLES-03.jpg",
    upright: "Teamwork, collaboration, learning, implementation.",
    reversed: "Disharmony, misalignment, working alone.",
    name: "Three of Pentacles",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/06/ET-PENTACLES-04.jpg",
    upright: "Saving money, security, conservatism, scarcity, control.",
    reversed: "Over-spending, greed, self-protection.",
    name: "Four of Pentacles",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/06/ET-PENTACLES-05.jpg",
    upright: "Financial loss, poverty, lack mindset, isolation, worry.",
    reversed: "Recovery from financial loss, spiritual poverty.",
    name: "Five of Pentacles",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/06/ET-PENTACLES-06.jpg",
    upright: "Giving, receiving, sharing wealth, generosity, charity.",
    reversed: "Self-care, unpaid debts, one-sided charity.",
    name: "Six of Pentacles",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/06/ET-PENTACLES-07.jpg",
    upright: "Long-term view, sustainable results, perseverance, investment.",
    reversed: "Lack of long-term vision, limited success or reward.",
    name: "Seven of Pentacles",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/06/ET-PENTACLES-08.jpg",
    upright: "Apprenticeship, repetitive tasks, mastery, skill development.",
    reversed: "Self-development, perfectionism, misdirected activity.",
    name: "Eight of Pentacles",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/06/ET-PENTACLES-09.jpg",
    upright: "Abundance, luxury, self-sufficiency, financial independence.",
    reversed: "Self-worth, over-investment in work, hustling.",
    name: "Nine of Pentacles",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/06/ET-PENTACLES-10.jpg",
    upright:
      "Wealth, financial security, family, long-term success, contribution.",
    reversed: "The dark side of wealth, financial failure or loss.",
    name: "Ten of Pentacles",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/06/ET-PENTACLES-page.jpg",
    upright: "Manifestation, financial opportunity, skill development.",
    reversed: "Lack of progress, procrastination, learn from failure.",
    name: "Page of Pentacles",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/06/ET-PENTACLES-knight.jpg",
    upright: "Hard work, productivity, routine, conservatism.",
    reversed: "Self-discipline, boredom, feeling ‘stuck’, perfectionism.",
    name: "Knight of Pentacles",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/06/ET-PENTACLES-queen.jpg",
    upright: "Nurturing, practical, providing financially, a working parent.",
    reversed: "Financial independence, self-care, work-home conflict.",
    name: "Queen of Pentacles",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/06/ET-PENTACLES-king.jpg",
    upright: "Wealth, business, leadership, security, discipline, abundance.",
    reversed: "Financially inept, obsessed with wealth and status, stubborn.",
    name: "King of Pentacles",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/06/ET-WANDS-ace.jpg",
    upright: "Inspiration, new opportunities, growth, potential",
    reversed: "An emerging idea, lack of direction, distractions, delays",
    name: "Ace of Wands",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/06/ET-WANDS-02.jpg",
    upright: "Future planning, progress, decisions, discovery",
    reversed:
      "Personal goals, inner alignment, fear of unknown, lack of planning",
    name: "Two of Wands",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/06/ET-WANDS-03.jpg",
    upright: "Progress, expansion, foresight, overseas opportunities",
    reversed: "Playing small, lack of foresight, unexpected delays",
    name: "Three of Wands",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/06/ET-WANDS-04.jpg",
    upright: "Celebration, joy, harmony, relaxation, homecoming",
    reversed:
      "Personal celebration, inner harmony, conflict with others, transition.",
    name: "Four of Wands",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/06/ET-WANDS-05.jpg",
    upright: "Conflict, disagreements, competition, tension, diversity",
    reversed: "Inner conflict, conflict avoidance, tension release",
    name: "Five of Wands",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/06/ET-WANDS-06.jpg",
    upright: "Success, public recognition, progress, self-confidence",
    reversed:
      "Private achievement, personal definition of success, fall from grace, egotism",
    name: "Six of Wands",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/06/ET-WANDS-07.jpg",
    upright: "Challenge, competition, protection, perseverance",
    reversed: "Exhaustion, giving up, overwhelmed",
    name: "Seven of Wands",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/06/ET-WANDS-08.jpg",
    upright: "Movement, fast paced change, action, alignment, air travel",
    reversed: "Delays, frustration, resisting change, internal alignment",
    name: "Eight of Wands",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/06/ET-WANDS-09.jpg",
    upright: "Resilience, courage, persistence, test of faith, boundaries",
    reversed: "Inner resources, struggle, overwhelm, defensive, paranoia",
    name: "Nine of Wands",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/06/ET-WANDS-10.jpg",
    upright: "Burden, extra responsibility, hard work, completion",
    reversed: "Doing it all, carrying the burden, delegation, release",
    name: "Ten of Wands",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/06/ET-WANDS-page.jpg",
    upright: "Inspiration, ideas, discovery, limitless potential, free spirit",
    reversed:
      "Newly-formed ideas, redirecting energy, self-limiting beliefs, a spiritual path",
    name: "Page of Wands",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/06/ET-WANDS-knight.jpg",
    upright: "Energy, passion, inspired action, adventure, impulsiveness",
    reversed: "Passion project, haste, scattered energy, delays, frustration",
    name: "Knight of Wands",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/06/ET-WANDS-queen.jpg",
    upright:
      "Courage, confidence, independence, social butterfly, determination",
    reversed:
      "Self-respect, self-confidence, introverted, re-establish sense of self",
    name: "Queen of Wands",
  },
  {
    img: "https://www.biddytarot.com/wp-content/uploads/2018/06/ET-WANDS-king.jpg",
    upright: "Natural-born leader, vision, entrepreneur, honour",
    reversed: "Impulsiveness, haste, ruthless, high expectations",
    name: "King of Wands",
  },
];
