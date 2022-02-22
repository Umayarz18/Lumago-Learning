import { getClient } from "../lib/sanity.server";
import * as queries from "./queries";

export async function getAllDocSlugs(doc) {
	const data = await getClient().fetch(
		`*[_type == "${doc}" && !(_id in [${queries.homeID}, ${queries.shopID}, ${queries.errorID}]) && wasDeleted != true && isDraft != true]{ "slug": slug.current }`
	);
	return data;
}

export async function getPage(slug, preview) {
	const slugs = JSON.stringify([slug, `/${slug}`, `/${slug}/`]);

	const query = `
      {
        "page": *[_type == "page" && slug.current in ${slugs}] | order(_updatedAt desc)[0]{
          "id": _id,
          hasTransparentHeader,
          modules[]{
            defined(_ref) => { ...@->content[0] {
              ${queries.modules}
            }},
            !defined(_ref) => {
              ${queries.modules},
            }
          },
          title,
          seo
        },
        ${queries.site}
      }
    `;

	const data = await getClient(preview).fetch(query);

	return data;
}
