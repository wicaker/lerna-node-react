'use strict';

module.exports = class {

  constructor(id = null, name, image_url, description) {
    this.id = id;
    this.name = name;
    this.image_url = image_url;
    this.description = description;
  }

};