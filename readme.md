# Task
    Requirement is to create a backend API that handles spatial data, specifically multiple points and multiple polygons

# Todo 
    Store, update, and retrieve multiple point data (latitude, longitude).
    Store, update, and retrieve multiple polygon data (geometrical areas).
    Use Node.js ( or Python).
    Use any spatial database (going with PostgreSQL + PostGIS).

# Branch Structure
    main :- Final Submissions 
    pit1 :- Trail branch 


# Database setup :
    Windows 
        Install postgress and postGIS
        Create database with psql CREATE DATABASE spatialdb;
        Change db to spatialdb \c spatialdb
        Enable postGIS with query CREATE EXTENSION postgis;
        Run script node/db/init.mjs


# Endpoints

    | Resource  | Method | Endpoint       | Description        |
    |-----------|--------|---------------|---------------------|
    | Points    | POST   | /points       | Add a new point     |
    | Points    | GET    | /points       | Get all points      |
    | Points    | GET    | /points/:id   | Get specific point  |
    | Points    | PUT    | /points/:id   | Update a point      |
    | Points    | DELETE | /points/:id   | Delete a point      |
    | Polygons  | POST   | /polygons     | Add a new polygon   |
    | Polygons  | GET    | /polygons     | Get all polygons    |
    | Polygons  | PUT    | /polygons/:id | Update a polygon    |
    | Polygons  | DELETE | /polygons/:id | Delete a polygon    |

# Points Sample API
    endpoint : http://localhost:3000/points

    sample body : {
                        "name": "Bangalore",
                        "latitude": 12.9716,
                        "longitude": 77.5946
                    }
# Polygons Sample API
    http://localhost:3000/polygons
    