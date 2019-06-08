module "@bytesize/wanikani-api" {
  export interface fetch_response {
    json: () => Promise<Object>;
  }

  export interface fetch_options {}

  export interface api_config {
    key: string;
    fetch?: (url: string, options: fetch_options) => Promise<fetch_response>;
  }

  export interface api_error {
    code: string;
    message: string;
  }

  export interface api_user_information {
    user_information: {
      username: string;
      gravatar: string;
      level: number;
      title: string;
      about: string;
      website: string | null;
      twitter: string | null;
      topics_count: number;
      posts_count: number;
      creation_date: number;
      vacation_date: number | null;
    };
  }

  export interface api_study_queue {
    requested_information: {
      lessons_available: number;
      reviews_available: number;
      next_review_date: number;
      reviews_available_next_hour: number;
      reviews_available_next_day: number;
    };
  }

  export interface api_level_progression {
    requested_information: {
      radicals_progress: number;
      radicals_total: number;
      kanji_progress: number;
      kanji_total: number;
    };
  }

  export interface api_srs_level {
    radicals: number;
    kanji: number;
    vocabulary: number;
    total: number;
  }

  export interface api_srs_distribution {
    apprentice: api_srs_level;
    guru: api_srs_level;
    master: api_srs_level;
    enlighten: api_srs_level;
    burned: api_srs_level;
  }

  export interface api_item_vocabulary {
    type: "vocabulary";
    character: string;
    kana: string;
    meaning: string;
    level: number;
    unlocked_date: number;
  }

  export interface api_recent_unlocks {
    requested_information: [api_item_vocabulary | object];
  }

  export interface api_critical_items {
    requested_information: [api_item_vocabulary | object];
  }

  export interface api_single_radical {
    level: number;
    character: string;
    meaning: string;
    image_file_name: string | null;
    image_content_type: string | null;
    image_file_size: number | null;
    image: string | null;
    user_specific: null | {
      srs: string;
      srs_numeric: number;
      unlocked_date: number;
      available_date: number;
      burned: boolean;
      burned_date: number | null;
      meaning_correct: number | null;
      meaning_incorrect: number | null;
      meaning_current_streak: number | null;
      reading_correct: number | null;
      reading_incorrect: number | null;
      reading_max_streak: number | null;
      reading_current_streak: number | null;
      meaning_note: string | null;
      reading_note: string | null;
      user_synonyms: string | null;
    };
  }

  export interface api_radical {
    requested_information: api_single_radical[];
  }

  export interface api_single_kanji {
    level: number;
    character: string;
    meaning: string;
    onyomi: string;
    kunyomi: string;
    important_reading: string;
    nanori: string;
    user_specific: null | {
      srs: string;
      srs_numeric: number;
      unlocked_date: number;
      available_date: number;
      burned: boolean;
      burned_date: number | null;
      meaning_correct: number | null;
      meaning_incorrect: number | null;
      meaning_current_streak: number | null;
      reading_correct: number | null;
      reading_incorrect: number | null;
      reading_max_streak: number | null;
      reading_current_streak: number | null;
      meaning_note: string | null;
      reading_note: string | null;
      user_synonyms: string | null;
    };
  }

  export interface api_kanji {
    requested_information: api_single_radical[];
  }

  export interface api_single_vocabulary {
    level: number;
    character: string;
    kana: string;
    meaning: string;
    user_specific: {
      srs: string;
      srs_numeric: number;
      unlocked_date: number;
      available_date: number;
      burned: boolean;
      burned_date: number | null;
      meaning_correct: number | null;
      meaning_incorrect: number | null;
      meaning_current_streak: number | null;
      reading_correct: number | null;
      reading_incorrect: number | null;
      reading_max_streak: number | null;
      reading_current_streak: number | null;
      meaning_note: string | null;
      reading_note: string | null;
      user_synonyms: string | null;
    };
  }

  export interface api_vocabulary {
    requested_information: api_single_vocabulary[];
  }

  export default class wanikani_api {
    config: api_config;
    constructor(config: api_config);

    get_user(): Promise<api_user_information | api_error>;

    get_study_queue(): Promise<
      (api_user_information & api_study_queue) | api_error
    >;

    get_level_progression(): Promise<
      (api_user_information & api_level_progression) | api_error
    >;

    get_srs_distribution(): Promise<
      (api_user_information & api_srs_distribution) | api_error
    >;

    get_recent_unlocks(
      limit?: number
    ): Promise<(api_user_information & api_recent_unlocks) | api_error>;

    get_critical_items(
      percentage?: number
    ): Promise<(api_user_information & api_critical_items) | api_error>;

    get_radicals(
      level?: number
    ): Promise<(api_user_information & api_radical) | api_error>;

    get_kanji(
      level?: number
    ): Promise<(api_user_information & api_kanji) | api_error>;

    get_vocabulary(
      level?: number
    ): Promise<(api_user_information & api_vocabulary) | api_error>;
  }
}
