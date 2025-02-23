import express from 'express';
import pool from '../db/db.mjs';

const router = express.Router();

// Create a Point
router.post('/', async (req, res) => {
  try {
    const { name, latitude, longitude } = req.body;
    const query = 'INSERT INTO points (name, location) VALUES ($1, ST_SetSRID(ST_MakePoint($2, $3), 4326)) RETURNING *';
    const values = [name, longitude, latitude];
    const result = await pool.query(query, values);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get All Points
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT id, name, ST_AsGeoJSON(location) AS location FROM points');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get A specific point
router.get('/:id',async(req,res)=>{
  try {
    const {id} = req.params
    const result = await pool.query('SELECT id, name, ST_AsGeoJSON(location) AS location FROM points WHERE id = $1', [id]);
    console.log(result)
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({error:error.message})
  }

  
})

// Update a Point
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, latitude, longitude } = req.body;
    const query = 'UPDATE points SET name = $1, location = ST_SetSRID(ST_MakePoint($2, $3), 4326) WHERE id = $4 RETURNING *';
    const values = [name, longitude, latitude, id];
    const result = await pool.query(query, values);
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a Point
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query('DELETE FROM points WHERE id = $1', [id]);
    res.json({ message: 'Point deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
