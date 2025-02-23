import express from 'express';
import pool from '../db/db.mjs';

const router = express.Router();

// Create a Polygon
router.post('/', async (req, res) => {
  try {
    const { name, coordinates } = req.body;
    const polygon = `POLYGON((${coordinates.map(coord => coord.join(' ')).join(',')}))`;
    const query = 'INSERT INTO polygons (name, area) VALUES ($1, ST_GeomFromText($2, 4326)) RETURNING *';
    const values = [name, polygon];
    const result = await pool.query(query, values);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get All Polygons
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT id, name, ST_AsGeoJSON(area) AS area FROM polygons');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get Specific Polygon
router.get('/:id', async (req, res) => {
    try {
      const {id} = req.params
      const result = await pool.query('SELECT id, name, ST_AsGeoJSON(area) AS area FROM polygons WHERE id = $1', [id]);
      res.json(result.rows);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  

// Update a Polygon
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, coordinates } = req.body;
    const polygon = `POLYGON((${coordinates.map(coord => coord.join(' ')).join(',')}))`;
    const query = 'UPDATE polygons SET name = $1, area = ST_GeomFromText($2, 4326) WHERE id = $3 RETURNING *';
    const values = [name, polygon, id];
    const result = await pool.query(query, values);
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a Polygon
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query('DELETE FROM polygons WHERE id = $1', [id]);
    res.json({ message: 'Polygon deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
