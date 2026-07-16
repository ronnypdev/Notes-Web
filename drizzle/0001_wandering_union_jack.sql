CREATE TABLE "note" (
	"id" text PRIMARY KEY NOT NULL,
	"title" varchar(255) DEFAULT 'Enter a title…',
	"tags" text[] DEFAULT ARRAY[]::text[],
	"content" varchar,
	"last_edited" date DEFAULT CURRENT_DATE,
	"archive" boolean DEFAULT false,
	"user_id" text NOT NULL,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
ALTER TABLE "note" ADD CONSTRAINT "note_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;