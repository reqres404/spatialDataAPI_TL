# Task
    Requirement is to create a backend API that handles spatial data, specifically multiple points and multiple polygons

# Todo 
    Store, update, and retrieve multiple point data (latitude, longitude).
    Store, update, and retrieve multiple polygon data (geometrical areas).
    Use Node.js ( or Python).
    Use any spatial database (going with PostgreSQL + PostGIS).

# Branch Structure
    main :- Final Submissions 
    pit1 :- Test branch 
    pit2 :  Trail branch

# Database setup :
    Windows 
        Install postgress and postGIS
        Create database with psql CREATE DATABASE spatialdb;
        Change db to spatialdb \c spatialdb
        Enable postGIS with query CREATE EXTENSION postgis;
        Run script node/db/init.mjs

