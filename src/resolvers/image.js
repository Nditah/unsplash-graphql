require("dotenv").config();
require("es6-promise").polyfill();
require("isomorphic-fetch");
const unsplash = require("unsplash-js");

class ImageResolver {
    URL = `https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY`;
  constructor() {
    this.api = unsplash.createApi({
      accessKey: process.env.UNSPLASH_ACCESS_KEY,
    });
  }

  //restructuring image.

  async structureImage(result) {
    return {
      ...result,
      link: result["links"]["download"],
      url: result["urls"]["full"],
    };
  }

  //restructuring user.

  async structureUser(result) {
    return {
      ...result,
      profile_image: result["profile_image"]
        ? result["profile_image"]["medium"]
        : null,
    };
  }

/**
 * @description getting the photos
 * @param {number} page default 1
 * @param {number} perPage default 10, maximum 30
 * @returns 
 */
  async listPhotos(page, perPage) {
    let result = await this.api.photos
      .list({
        page,
        perPage,
      })
      .catch(console.log);

    if (result.errors) throw new Error(result.errors[0]);
    return result.response["results"].map((photo) => {
      let image = this.structureImage.bind(this, photo);
      let user = this.structureUser.bind(this, photo["user"]);
      return { image, user };
    });
  }

  /**
   * @description function searching for photos
   * @param {string} query is the search string
   * @param {number} page Number of pages
   * @param {number} perPage Numper of records per page
   * @param {enum} orientation can be portrait | squarish | landscape
   * @returns array of photo records
   */
  async searchPhotos(query, page, perPage, orientation) {
    let result = await this.api.search
      .getPhotos({
        query,
        page,
        perPage,
        orientation,
      })
      .catch(console.log);

    if (result.errors) throw new Error(result.errors[0]);

    return result["response"]["results"].map((photo) => {
      let image = this.structureImage.bind(this, photo);
      let user = this.structureUser.bind(this, photo["user"]);
      return { image, user };
    });
  }

  //getting an image.
  async getImage(photoId) {
    let result = await this.api.photos.get({ photoId }).catch(console.log);
    if (result.errors) throw new Error(result.errors[0]);
    let image = this.structureImage.bind(this, result["response"]);
    let user = this.structureUser.bind(this, result["response"]["user"]);
    return { image, user };
  }
}

module.exports = ImageResolver;
