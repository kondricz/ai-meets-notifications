/**
 * List of supported emotions.
 */
export enum Emotion {
    JOY = 'joy',
    SADNESS = 'sadness',
    TRUST = 'trust',
    DISGUST = 'disgust',
    FEAR = 'fear',
    ANGER = 'anger',
    ANTICIPATION = 'anticipation',
    ACCEPTANCE = 'acceptance',
    APPRECIATION = 'appreciation',
    SUBMISSION = 'submission',
    AWE = 'awe',
    LOVE = 'love',
    REMORSE = 'remorse',
    OPTIMISM = 'optimism',
    DISAPPROVAL = 'disapproval',
    AGGRESSIVENESS = 'aggressiveness',
    ADMIRATION = 'admiration',
    TERROR = 'terror',
    GRIEF = 'grief',
    CONTENTMENT = 'contentment',
    HOPE = 'hope',
    PESSIMISM = 'pessimism',
    LOATHING = 'loathing',
    ENVY = 'envy',
    PRIDE = 'pride',
    GRATITUDE = 'gratitude',
    LONELINESS = 'loneliness',
    COMPASSION = 'compassion',
    DETERMINATION = 'determination',
    DESPAIR = 'despair',
    CONFIDENCE = 'confidence',
    ANXIETY = 'anxiety',
    CONFUSION = 'confusion',
    REGRET = 'regret',
    EXCITEMENT = 'excitement',
    SATISFACTION = 'satisfaction',
    EMPOWERMENT = 'empowerment',
    NOSTALGIA = 'nostalgia',
    CURIOSITY = 'curiosity',
    INSPIRATION = 'inspiration',
    SHAME = 'shame',
    EMBARRASSMENT = 'embarrassment',
    APATHY = 'apathy',
    OVERWHELMED = 'overwhelmed',
    VULNERABLE = 'vulnerable',
    RELIEF = 'relief',
    PATIENCE = 'patience',
    CONTEMPT = 'contempt',
    GRATIFICATION = 'gratification',
    ENTHUSIASM = 'enthusiasm',
    INDIFFERENCE = 'indifference',
    HOPEFULNESS = 'hopefulness',
    FULFILLMENT = 'fulfillment',
    PANIC = 'panic',
    HELPLESSNESS = 'helplessness',
    IMPATIENCE = 'impatience',
    INSECURITY = 'insecurity',
    WORRY = 'worry',
    VIGILANCE = 'vigilance',
    RELAXATION = 'relaxation',
    NERVOUSNESS = 'nervousness',
    DEFENSIVE = 'defensive',
    GRATEFULNESS = 'gratefulness',
    SORROW = 'sorrow',
    EMPOWERED = 'empowered',
    IRRITATION = 'irritation',
    PROUD = 'proud',
    DISCOURAGEMENT = 'discouragement',
    ALERTNESS = 'alertness',
    INSIGNIFICANCE = 'insignificance',
    ACHIEVEMENT = 'achievement',
    IRRATIONAL = 'irrational',
    EAGERNESS = 'eagerness',
    UNCERTAINTY = 'uncertainty',
    DELIGHT = 'delight',
    EMBRACING = 'embracing',
    RESENTMENT = 'resentment',
    TENDERNESS = 'tenderness',
    RESTLESS = 'restless',
    EMBRACE = 'embrace',
    BOREDOM = 'boredom',
    ELATION = 'elation',
    EXASPERATION = 'exasperation',
    CAUTION = 'caution',
    JEALOUSY = 'jealousy',
    DESPERATION = 'desperation',
    SURPRISE = 'surprise',
    TENDER = 'tender',
    VIGILANT = 'vigilant',
    AGGRAVATION = 'aggravation',
    GRATEFUL = 'grateful',
    SELF_DISTRUST = 'self_distrust',
    SELF_ASSURED = 'self_assured',
    RESPONSIBILITY = 'responsibility',
    HOPELESS = 'hopeless',
    EMPOWER = 'empower',
    VENGEFUL = 'vengeful',
    INSULTING = 'insulting',
    TRAPPED = 'trapped',
    ACCEPTING = 'accepting',
    HUMILIATED = 'humiliated',
    AWKWARD = 'awkward',
    DREAD = 'dread',
    TIRED = 'tired',
    SUBMISSIVE = 'submissive',
    CAPABLE = 'capable',
    DEVASTATED = 'devastated',
    INSULTED = 'insulted',
    PESSIMISTIC = 'pessimistic',
    FATIGUED = 'fatigued',
    FORSAKEN = 'forsaken',
    BORED = 'bored',
    THRILLED = 'thrilled',
    ISOLATED = 'isolated',
    POWERLESS = 'powerless',
    RESPONSIBLE = 'responsible',
    RESTRAINED = 'restrained',
    VALUABLE = 'valuable',
    RESENTFUL = 'resentful',
    VULNERABILITY = 'vulnerability',
    GRATIFYING = 'gratifying',
    DETERMINED = 'determined',
    LONGING = 'longing',
    SAFETY = 'safety',
    UNHAPPY = 'unhappy',
    COMPETITIVE = 'competitive',
    WISTFUL = 'wistful',
    HOPELESSNESS = 'hopelessness',
    INSECURE = 'insecure',
    ANTICIPATE = 'anticipate',
    ALIENATED = 'alienated',
    ALIVE = 'alive',
    ISOLATION = 'isolation',
    DEFEATED = 'defeated',
    ALONE = 'alone',
    CONTENT = 'content',
    FORLORN = 'forlorn',
    FRUSTRATION = 'frustration',
    HELPLESS = 'helpless',
    SELF_CONFIDENT = 'self_confident',
    ENTHRALLED = 'enthralled',
    SKEPTICAL = 'skeptical',
    FORGIVENESS = 'forgiveness',
    COMFORTABLE = 'comfortable'
}

/**
 * ISO language codes for supported messages
 */
export enum Language {
    sq = 'Albanian',        // Albanian
    de = 'German',          // German
    en = 'English',         // English
    hy = 'Armenian',        // Armenian
    nl = 'Dutch',           // Dutch
    az = 'Azerbaijani',     // Azerbaijani
    mt = 'Maltese',         // Maltese
    be = 'Belarusian',      // Belarusian
    no = 'Norwegian',       // Norwegian
    bg = 'Bulgarian',       // Bulgarian
    pl = 'Polish',          // Polish
    ca = 'Catalan',         // Catalan
    pt = 'Portuguese',      // Portuguese
    hr = 'Croatian',        // Croatian
    ro = 'Romanian',        // Romanian
    cs = 'Czech',           // Czech
    ru = 'Russian',         // Russian
    da = 'Danish',          // Danish
    sr = 'Serbian',         // Serbian
    et = 'Estonian',        // Estonian
    sk = 'Slovak',          // Slovak
    fi = 'Finnish',         // Finnish
    sl = 'Slovenian',       // Slovenian
    fr = 'French',          // French
    es = 'Spanish',         // Spanish
    ka = 'Georgian',        // Georgian
    sv = 'Swedish',         // Swedish
    el = 'Greek',           // Greek
    tr = 'Turkish',         // Turkish
    hu = 'Hungarian',       // Hungarian
    uk = 'Ukrainian',       // Ukrainian
    is = 'Icelandic',       // Icelandic
    cy = 'Welsh',           // Welsh
    ga = 'Irish',           // Irish
    lv = 'Latvian',         // Latvian
    lt = 'Lithuanian',      // Lithuanian
    lb = 'Luxembourgish',   // Luxembourgish
}

/**
 * Configuration options for a message.
 * @param {number} maxLength - The maximum length allowed for the message. Must be a positive integer.
 * @param {number} minLength - The minimum length required for the message. Must be a positive integer.
 * @param {Language} language - The language of the message. Use ISO language codes (e.g., 'en', 'fr', 'es').
 * @param {Emotion[]} emotions - An array of emotions associated with the message. See Emotion enum for available options.
 */
export interface BaseMessageConfiguration {
    maxLength: number;
    minLength: number;
    language: Language;
    emotions: Emotion[];
}

export const DEFAULT_MODEL = `gpt-3.5-turbo`


/**
 * AI generated response. If we used the openai package, it would be included.
 * However in this package we rely on their HTTP endpoints, so to have the response type we need to type it ourselves.
 */
export interface OpenAIChatResponse {
    id: string;
    object: string;
    created: number;
    model: string;
    usage: {
      prompt_tokens: number;
      completion_tokens: number;
      total_tokens: number;
    };
    choices: [
      {
        message: {
          role: string;
          content: string;
        };
        finish_reason: string;
        index: number;
      }
    ];
  }

/**
 * General error message format
 */
export interface BaseMessageError {
  error: boolean;
  reason: string;
  message: string | undefined;
}

/**
 * General success message format
 */
export interface BaseMessageResponse {
  result: string;
  usage: OpenAIChatResponse["usage"];
}