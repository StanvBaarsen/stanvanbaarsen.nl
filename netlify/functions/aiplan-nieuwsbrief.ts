import { Handler } from "@netlify/functions";
import { google } from "googleapis";

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const SPREADSHEET_ID = '1ybpf71hAxEhDfNuU5srlN1NTLb1zyxGBlcCxrUJhzMk';

export const handler: Handler = async (event) => {
	// Handle CORS, allow specific origins
	const allowedOrigins = [
		"https://aiplan.nl",
		"https://www.aiplan.nl",
		"http://localhost:8080",
		"http://localhost:3000"
	];
	const origin = event.headers.origin || event.headers.Origin || "";
	const allowOrigin = allowedOrigins.includes(origin) ? origin : allowedOrigins[0];

	const headers = {
		"Access-Control-Allow-Origin": allowOrigin,
		"Access-Control-Allow-Headers": "Content-Type",
		"Access-Control-Allow-Methods": "POST, OPTIONS",
	};

	if (event.httpMethod === "OPTIONS") {
		return { statusCode: 200, headers, body: "" };
	}

	if (event.httpMethod !== "POST") {
		return { statusCode: 405, headers, body: "Method Not Allowed" };
	}

	try {
		const { email } = JSON.parse(event.body || "{}");
		if (!email) {
			return {
				statusCode: 400,
				headers,
				body: "Email is required"
			};
		}

		const auth = new google.auth.GoogleAuth({
			credentials: {
				client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
				private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
				project_id: process.env.GOOGLE_PROJECT_ID,
			},
			scopes: SCOPES,
		});

		const sheets = google.sheets({ version: 'v4', auth });

		await sheets.spreadsheets.values.append({
			spreadsheetId: SPREADSHEET_ID,
			range: 'Sheet1!A:B',
			valueInputOption: 'USER_ENTERED',
			requestBody: {
				values: [
					[email, new Date().toLocaleString("nl-NL", { timeZone: "Europe/Amsterdam" })]
				],
			},
		});

		return {
			statusCode: 200,
			headers,
			body: "Succesvol geabonneerd op de nieuwsbrief!"
		};
	} catch (error: any) {
		console.error(error);
		return {
			statusCode: 500,
			headers,
			body: `Error: ${error.message || "Internal Server Error"}`
		};
	}
};
