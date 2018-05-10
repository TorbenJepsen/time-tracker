CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    "name" VARCHAR(100) NOT NULL
);

CREATE TABLE entries (
    id SERIAL PRIMARY KEY,
    "entry" VARCHAR(140) NOT NULL,
	"date" DATE NOT NULL DEFAULT CURRENT_DATE ,
	"start_time" TIME NOT NULL,
	"end_time" TIME NOT NULL,
	"project_id" INT REFERENCES "projects" ON DELETE CASCADE
);
