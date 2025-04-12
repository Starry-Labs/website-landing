import { BirthChart } from "../types";

export const sampleBirthChart: BirthChart = {
  ascendant: "Virgo",
  sun: "Leo",
  moon: "Pisces",
  venus: "Libra",
  mars: "Scorpio",
  mercury: "Leo",
  jupiter: "Sagittarius",
  saturn: "Capricorn",
  houses: {
    1: "Virgo",
    2: "Libra",
    3: "Scorpio",
    4: "Sagittarius",
    5: "Capricorn",
    6: "Aquarius",
    7: "Pisces",
    8: "Aries",
    9: "Taurus",
    10: "Gemini",
    11: "Cancer",
    12: "Leo",
  },
  aspects: [
    {
      id: 1,
      planet1: "Sun",
      planet2: "Moon",
      aspect: "Trine",
      influence:
        "Harmonious flow between your conscious identity and emotional nature, supporting self-expression and emotional well-being.",
    },
    {
      id: 2,
      planet1: "Mercury",
      planet2: "Venus",
      aspect: "Conjunction",
      influence:
        "Your communication style is naturally charming and diplomatic, with an appreciation for aesthetics and beauty in expression.",
    },
    {
      id: 3,
      planet1: "Mars",
      planet2: "Jupiter",
      aspect: "Square",
      influence:
        "Tension between your drive for action and desire for growth may lead to taking on too much or pursuing goals impulsively.",
    },
    {
      id: 4,
      planet1: "Moon",
      planet2: "Saturn",
      aspect: "Opposition",
      influence:
        "You may experience conflict between emotional needs and sense of responsibility, requiring balance between vulnerability and structure.",
    },
    {
      id: 5,
      planet1: "Sun",
      planet2: "Ascendant",
      aspect: "Sextile",
      influence:
        "Your core identity flows easily into your outward personality, allowing for authentic self-expression and personal presence.",
    },
  ],
  interpretation:
    "With your Leo Sun and Pisces Moon, you blend confidence and creativity with sensitivity and intuition. Your Virgo Ascendant gives you an analytical, detail-oriented approach to life, even while your inner nature is more expressive and imaginative. This combination suggests someone who appears practical and methodical to others but has deep emotional waters and creative potential.\n\nThe trine between your Sun and Moon indicates an inner harmony between your will and emotions, helping you integrate different aspects of your personality. Mercury conjunct Venus gives you an eloquent, charming communication style that others find appealing.\n\nYour Mars in Scorpio provides intense drive and determination, especially in pursuit of what you desire, while Jupiter in Sagittarius expands your philosophical outlook and brings optimism to your quest for meaning. However, the square between them suggests you may sometimes take on too much or pursue goals impulsively.\n\nWith Moon opposing Saturn, you may experience tension between emotional expression and maintaining control or meeting responsibilities. Finding balance between vulnerability and structure will be important for your emotional well-being.",
};
