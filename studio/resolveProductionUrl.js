// Any random string, must match SANITY_PREVIEW_SECRET in the Next.js .env.local file
const previewSecret = "what";

// Replace `remoteUrl` with your deployed Next.js site
const remoteUrl = `https://roewynumayam.com`;
const localUrl = `http://localhost:3000`;

function stripDraftId(str) {
	return str.replace(/^drafts\./, "");
}

export default function resolveProductionUrl(document) {
	const id = stripDraftId(document._id);

	const baseUrl =
		window.location.hostname === "localhost" ? localUrl : remoteUrl;

	const previewUrl = new URL(baseUrl);
	previewUrl.pathname = `/api/preview`;
	previewUrl.searchParams.append(`secret`, previewSecret);
	previewUrl.searchParams.append(`slug`, doc?.slug?.current ?? `/`);

	return previewUrl.toString();
}
