# Arcelik Stock Application

This is a REST API that can be used by any company aiming to follow their stock changes up to date. 

First of all, compile the backend code with Intellij IDE or Eclipse.
Then open a terminal, change directory to Frontend/depo and open a terminal. Run the command "npm install".
Then, run "ng serve".

Note: For this application to work, one should have PostgreSQL and 2 tables in it. The codes to create those tables in postgresql are written below:

CREATE TABLE stock(
	id serial primary key,
	stocknum text not null,
	countnum text not null
)

CREATE TABLE defects(
	id serial primary key,
	entrydate text not null,
	servicecode text not null,
	customername text not null,
	customerphone text not null,
	productcode text not null,
	explanation text not null,
	paymenttype text not null,
	stocknum text not null,
	status text not null,
	exitdate text not null
)
