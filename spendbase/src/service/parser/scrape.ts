import axios from "axios";
import * as cheerio from "cheerio";
import { CustomError } from "constants/errors";
import type { Profile, SocialLinks } from "service/types";
import ApiError from "utils/error/ApiError";

const scrapeData = async () => {
  try {
    const url = process.env.SCRAPE_SOURCE;
    if (!url) {
      throw ApiError.badRequest(CustomError.SCRAPE_SOURCE);
    }
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const profiles: Profile[] = [];
    const profilesTag = $(
      ".section-team-list .speakers-list_list .speakers-list_item"
    );
    profilesTag.each((_, element) => {
      const name = $(element).find(".speakers-list_item-heading").text().trim();
      const role = $(element)
        .find(
          ".speakers-list_item-wrapper > div:nth-child(2) > div:nth-child(2)"
        )
        .text()
        .trim();
      const image = $(element)
        .find(".speakers-list_item-image-wrapper > img")
        .attr("src")!
        .slice(2);
      const socialLinks = extractSocialLinks(element, $);
      profiles.push({ name, role, image, socialLinks });
    });

    if (!profiles.length) {
      throw ApiError.internal(CustomError.SCRAPE);
    }

    return profiles;
  } catch (err) {
    throw err;
  }
};

const extractSocialLinks = (
  element: cheerio.Element,
  $: cheerio.CheerioAPI
): SocialLinks => {
  const socialLinks: SocialLinks = [];
  $(element)
    .find(".speakers-list_social-link")
    .each((_, link) => {
      const href = $(link).attr("href");
      href && href !== "index.html#" && socialLinks.push(href);
    });
  return socialLinks;
};

export default { scrapeData };
