
export interface CardData {
  id: number;
  category: string;
  question: string;
}

export const cards: CardData[] = [
  // 1-10 • Easing In
  { id: 1, category: "Easing In", question: "What's a simple pleasure you haven't allowed yourself in a while—and why?" },
  { id: 2, category: "Easing In", question: "When do you feel most 'yourself' during a normal week?" },
  { id: 3, category: "Easing In", question: "Name a smell that instantly takes you back to childhood." },
  { id: 4, category: "Easing In", question: "What non-work achievement are you quietly proud of?" },
  { id: 5, category: "Easing In", question: "Who, outside your family, has believed in you the longest?" },
  { id: 6, category: "Easing In", question: "Which recent headline hit you harder than you expected?" },
  { id: 7, category: "Easing In", question: "When was the last time you felt playful?" },
  { id: 8, category: "Easing In", question: "What's a small risk you took that paid off?" },
  { id: 9, category: "Easing In", question: "Which habit are you glad nobody sees?" },
  { id: 10, category: "Easing In", question: "Describe a moment this month that made you smile by surprise." },

  // 11-20 • Stress & Anxiety
  { id: 11, category: "Stress & Anxiety", question: "What does stress feel like in your body before your mind notices?" },
  { id: 12, category: "Stress & Anxiety", question: "Which daily task drains you more than it should?" },
  { id: 13, category: "Stress & Anxiety", question: "What fear keeps sneaking into your thoughts at night?" },
  { id: 14, category: "Stress & Anxiety", question: "When did you last wake up anxious—and what helped?" },
  { id: 15, category: "Stress & Anxiety", question: "Who do you talk to when life feels unmanageable?" },
  { id: 16, category: "Stress & Anxiety", question: "What 'quick fix' do you reach for even though it rarely works?" },
  { id: 17, category: "Stress & Anxiety", question: "Describe a recent time you said 'I'm fine' but weren't." },
  { id: 18, category: "Stress & Anxiety", question: "What would change if you allowed yourself to rest today?" },
  { id: 19, category: "Stress & Anxiety", question: "Which sound or song calms you fastest?" },
  { id: 20, category: "Stress & Anxiety", question: "Anxiety aside, what excites you about the next six months?" },

  // 21-30 • Masculinity Scripts
  { id: 21, category: "Masculinity Scripts", question: "What message about 'real men' do you wish you could delete from culture?" },
  { id: 22, category: "Masculinity Scripts", question: "When did you feel pressured to hide sadness?" },
  { id: 23, category: "Masculinity Scripts", question: "Describe a time you pretended to know something you didn't." },
  { id: 24, category: "Masculinity Scripts", question: "What does strength look like when no one is watching?" },
  { id: 25, category: "Masculinity Scripts", question: "Which stereotype of men have you unconsciously internalized?" },
  { id: 26, category: "Masculinity Scripts", question: "Name a male role model who showed tenderness well." },
  { id: 27, category: "Masculinity Scripts", question: "When did you realize vulnerability could be courageous?" },
  { id: 28, category: "Masculinity Scripts", question: "What part of 'man up' still echoes, and how do you push back?" },
  { id: 29, category: "Masculinity Scripts", question: "If masculinity were a toolbox, which tool have you overused?" },
  { id: 30, category: "Masculinity Scripts", question: "What quality in other men secretly inspires you?" },

  // 31-40 • Relationships & Intimacy
  { id: 31, category: "Relationships & Intimacy", question: "How do you know you're being truly listened to?" },
  { id: 32, category: "Relationships & Intimacy", question: "What's the kindest thing a friend has done for you unasked?" },
  { id: 33, category: "Relationships & Intimacy", question: "Where in your life do you crave more closeness?" },
  { id: 34, category: "Relationships & Intimacy", question: "Which friendship feels stuck on the surface, and why?" },
  { id: 35, category: "Relationships & Intimacy", question: "When did you last apologize first?" },
  { id: 36, category: "Relationships & Intimacy", question: "What's one story you haven't told a partner but want to?" },
  { id: 37, category: "Relationships & Intimacy", question: "How does jealousy show up for you?" },
  { id: 38, category: "Relationships & Intimacy", question: "What young version of you still needs reassurance?" },
  { id: 39, category: "Relationships & Intimacy", question: "Describe a recent conflict that taught you something useful." },
  { id: 40, category: "Relationships & Intimacy", question: "What do you need from friends that you rarely request?" },

  // 41-50 • Body & Sexuality
  { id: 41, category: "Body & Sexuality", question: "How comfortable are you in your own skin right now—why?" },
  { id: 42, category: "Body & Sexuality", question: "What's one way your body has surprised you lately?" },
  { id: 43, category: "Body & Sexuality", question: "When did you first learn about consent, and what would you add now?" },
  { id: 44, category: "Body & Sexuality", question: "How do you handle moments when your body 'doesn't cooperate'?" },
  { id: 45, category: "Body & Sexuality", question: "What does healthy sexuality mean to you today?" },
  { id: 46, category: "Body & Sexuality", question: "Which part of aging worries you; which part intrigues you?" },
  { id: 47, category: "Body & Sexuality", question: "Recall a compliment about your appearance that actually landed." },
  { id: 48, category: "Body & Sexuality", question: "What's one sensation you wish you felt more often?" },
  { id: 49, category: "Body & Sexuality", question: "How does touch (wanted or unwanted) affect your mood?" },
  { id: 50, category: "Body & Sexuality", question: "What would sexual confidence look like for you?" },

  // 51-60 • Work & Purpose
  { id: 51, category: "Work & Purpose", question: "Outside your job title, who are you?" },
  { id: 52, category: "Work & Purpose", question: "What part of work feels most meaningful—and most empty?" },
  { id: 53, category: "Work & Purpose", question: "When did you last feel competent and alive simultaneously?" },
  { id: 54, category: "Work & Purpose", question: "Describe a failure that redirected you in a good way." },
  { id: 55, category: "Work & Purpose", question: "What career dream have you quietly retired?" },
  { id: 56, category: "Work & Purpose", question: "How do you measure success for yourself (really)?" },
  { id: 57, category: "Work & Purpose", question: "Which colleague actually knows the real you?" },
  { id: 58, category: "Work & Purpose", question: "What would you pursue if income were guaranteed?" },
  { id: 59, category: "Work & Purpose", question: "Who benefits from your work that you never meet?" },
  { id: 60, category: "Work & Purpose", question: "What boundary at work still needs reinforcement?" },

  // 61-70 • Emotions We Hide
  { id: 61, category: "Emotions We Hide", question: "Which emotion do you find hardest to admit out loud?" },
  { id: 62, category: "Emotions We Hide", question: "When did anger last protect you—and when did it harm you?" },
  { id: 63, category: "Emotions We Hide", question: "What triggers embarrassment faster than you'd like?" },
  { id: 64, category: "Emotions We Hide", question: "Describe a moment of unexpected joy that caught you off-guard." },
  { id: 65, category: "Emotions We Hide", question: "What does loneliness feel like at 9 p.m. on a weekday?" },
  { id: 66, category: "Emotions We Hide", question: "When did envy teach you something useful about yourself?" },
  { id: 67, category: "Emotions We Hide", question: "How do you know when sadness is moving through instead of settling in?" },
  { id: 68, category: "Emotions We Hide", question: "What emotion from childhood still visits today?" },
  { id: 69, category: "Emotions We Hide", question: "What's a recent tear-jerker scene, song, or memory—and what stirred you?" },
  { id: 70, category: "Emotions We Hide", question: "Which feeling do you wish men shared more openly with each other?" },

  // 71-80 • Past & Forgiveness
  { id: 71, category: "Past & Forgiveness", question: "What childhood rule no longer serves you?" },
  { id: 72, category: "Past & Forgiveness", question: "If you could relive one ordinary afternoon, which would you choose?" },
  { id: 73, category: "Past & Forgiveness", question: "Who from your past would you like to thank properly?" },
  { id: 74, category: "Past & Forgiveness", question: "What mistake are you gentler with now than a year ago?" },
  { id: 75, category: "Past & Forgiveness", question: "Describe a time you let someone down—and what you learned." },
  { id: 76, category: "Past & Forgiveness", question: "What apology (giving or receiving) still hangs in the air?" },
  { id: 77, category: "Past & Forgiveness", question: "When did you forgive yourself for something big?" },
  { id: 78, category: "Past & Forgiveness", question: "What family story shaped you more than you realized?" },
  { id: 79, category: "Past & Forgiveness", question: "Which unresolved chapter still tugs at your attention?" },
  { id: 80, category: "Past & Forgiveness", question: "How would your ten-year-old self cheer you on today?" },

  // 81-90 • Coping & Growth
  { id: 81, category: "Coping & Growth", question: "What 'numbing' strategy are you ready to replace?" },
  { id: 82, category: "Coping & Growth", question: "Which routine keeps you grounded when life tilts?" },
  { id: 83, category: "Coping & Growth", question: "How do you celebrate small wins—if at all?" },
  { id: 84, category: "Coping & Growth", question: "What new skill proved harder than expected?" },
  { id: 85, category: "Coping & Growth", question: "When did you recently surprise yourself with resilience?" },
  { id: 86, category: "Coping & Growth", question: "What's one habit you'd teach a younger friend to avoid burnout?" },
  { id: 87, category: "Coping & Growth", question: "How do you track progress when changes are invisible?" },
  { id: 88, category: "Coping & Growth", question: "Name a fear you faced head-on this year." },
  { id: 89, category: "Coping & Growth", question: "What role does spirituality, philosophy, or meaning-making play for you?" },
  { id: 90, category: "Coping & Growth", question: "Which personal value have you defended most fiercely?" },

  // 91-100 • Looking Ahead
  { id: 91, category: "Looking Ahead", question: "What does 'enough' look like for your future self?" },
  { id: 92, category: "Looking Ahead", question: "What would peace of mind feel like in a normal morning?" },
  { id: 93, category: "Looking Ahead", question: "Name one dream you're not ready to give up on." },
  { id: 94, category: "Looking Ahead", question: "How will you know you're living, not merely surviving?" },
  { id: 95, category: "Looking Ahead", question: "What legacy do you hope to repair, not just leave?" },
  { id: 96, category: "Looking Ahead", question: "Which relationship do you most want to deepen next year?" },
  { id: 97, category: "Looking Ahead", question: "If you had six months off, how would you spend them?" },
  { id: 98, category: "Looking Ahead", question: "What support do you need right now—and who could you ask?" },
  { id: 99, category: "Looking Ahead", question: "Imagine your 80-year-old self gives you advice today; what's the message?" },
  { id: 100, category: "Looking Ahead", question: "Tomorrow, what's one tiny act that would move you toward connection?" }
];
