CREATE TABLE IF NOT EXISTS users (
	id SERIAL PRIMARY KEY,
	first_name TEXT,
	last_name TEXT,
	email TEXT,
	password TEXT
);

CREATE TABLE IF NOT EXISTS moods (
	id SERIAL PRIMARY KEY,
	mood TEXT
);

CREATE TABLE IF NOT EXISTS reasons (
	id SERIAL PRIMARY KEY,
	reason TEXT
);

CREATE TABLE IF NOT EXISTS entries (
	id SERIAL PRIMARY KEY,
	user_id INTEGER,
	content TEXT,
	mood_id INTEGER,
	reason_id INTEGER,
	created_at DATE DEFAULT now()
);

CREATE TABLE IF NOT EXISTS podcasts (
	id SERIAL PRIMARY KEY,
	mood_id INTEGER,
	reason_id INTEGER
);

CREATE TABLE IF NOT EXISTS messages (
	id SERIAL PRIMARY KEY,
	content TEXT,
	mood_id INTEGER
);

CREATE TABLE IF NOT EXISTS favorites (
	id SERIAL PRIMARY KEY,
	user_id INTEGER,
	podcast_id INTEGER
);