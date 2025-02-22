import pool from './db.mjs'

const createTables = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS points (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        location GEOMETRY(Point, 4326) NOT NULL
      );
    `);
    
    await pool.query(`
      CREATE TABLE IF NOT EXISTS polygons (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        area GEOMETRY(Polygon, 4326) NOT NULL
      );
    `);
    
    console.log('Tables created successfully');
  } catch (error) {
    console.error('Error creating tables:', error);
  } finally {
    pool.end();
  }
};

createTables();