import global from "./util/global.js";
import clamp from "./util/clamp.js";

const api_base = "https://www.wanikani.com/api/v1.4";

export default class wanikani_api {
  constructor(config) {
    if (!("key" in config)) {
      throw new Error("WaniKani API requires an API key.");
    }

    if (!("fetch" in config)) {
      if (!("fetch" in global)) {
        throw new Error(
          "No support for `fetch` found, you may need to pass a function in the WaniKani API config."
        );
      } else {
        config.fetch = global.fetch;
      }
    }

    this.config = config;
  }

  fetch(path, options = undefined) {
    return this.config
      .fetch(`${api_base}/${path}`, options)
      .then(response => response.json());
  }

  get_user() {
    return this.fetch(`/user/${this.config.key}/user-information`);
  }

  get_study_queue() {
    return this.fetch(`/user/${this.config.key}/study-queue`);
  }

  get_level_progression() {
    return this.fetch(`/user/${this.config.key}/level-progression`);
  }

  get_srs_distribution() {
    return this.fetch(`/user/${this.config.key}/srs-distribution`);
  }

  get_recent_unlocks(limit = 10) {
    return this.fetch(
      `/user/${this.config.key}/recent-unlocks/${clamp(1, 100, limit)}`
    );
  }

  get_critical_items(percentage = 75) {
    return this.fetch(
      `/user/${this.config.key}/critical-items/${clamp(0, 100, percentage)}`
    );
  }

  get_radicals(level = undefined) {
    return this.fetch(
      `/user/${this.config.key}/radicals/${level ? clamp(1, 60, level) : ""}`
    );
  }

  get_kanji(level = undefined) {
    return this.fetch(
      `/user/${this.config.key}/kanji/${level ? clamp(1, 60, level) : ""}`
    );
  }

  get_vocabulary(level = undefined) {
    return this.fetch(
      `/user/${this.config.key}/vocabulary/${level ? clamp(1, 60, level) : ""}`
    );
  }
}
