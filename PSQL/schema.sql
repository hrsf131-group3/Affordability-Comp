CREATE DATABASE IF NOT EXISTS mortgages;

/* Table 'home' */
CREATE TABLE IF NOT EXISTS home (
home_id SERIAL NOT NULL PRIMARY KEY,
askingPrice INTEGER NOT NULL,
hoa INTEGER,
insurance INTEGER,
neighborhood_id INTEGER REFERENCES "neighborhood"(id)
);

/* Table 'taxAndAssesment' */
CREATE TABLE IF NOT EXISTS taxAndAssesment (
"home_id" INTEGER REFERENCES home(id),
"year" INTEGER NOT NULL,
"tax" INTEGER NOT NULL,
"assesment" INTEGER NOT NULL
);

/* Table 'priceHistory' */
CREATE TABLE IF NOT EXISTS priceHistory (
"id" INTEGER NOT NULL PRIMARY KEY,
"home_id" INTEGER REFERENCES home(id),
"date" DATE NOT NULL,
"price" INTEGER NOT NULL,
"event" VARCHAR NOT NULL
);

/* Table 'Neighborhood' */
CREATE TABLE IF NOT EXISTS neighborhood (
"id" SERIAL NOT NULL PRIMARY KEY,
"zip" INTEGER,
"interestRate" NUMERIC
);