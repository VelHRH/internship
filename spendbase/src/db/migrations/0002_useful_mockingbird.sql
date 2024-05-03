CREATE TABLE IF NOT EXISTS "parse_requests" (
	"id" serial NOT NULL,
	"userId" serial NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
