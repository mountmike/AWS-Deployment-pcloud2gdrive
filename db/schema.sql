CREATE DATABASE pcloud2gdrive;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username text NOT NULL,
  email text NOT NULL,
  password_digest text,
  pcloud_token TEXT,
  gdrive_token TEXT
);

CREATE TABLE "session" (
  "sid" varchar NOT NULL COLLATE "default",
  "sess" json NOT NULL,
  "expire" timestamp(6) NOT NULL
)

WITH (OIDS=FALSE);

ALTER TABLE "session" ADD CONSTRAINT "session_pkey" PRIMARY KEY ("sid") NOT DEFERRABLE INITIALLY IMMEDIATE;

CREATE INDEX "IDX_session_expire" ON "session" ("expire");


psql --host=pcloud2gdrive.c6pvsca4qou8.ap-southeast-2.rds.amazonaws.com --port=5432  --username=postgres --dbname=pcloud2gdrive