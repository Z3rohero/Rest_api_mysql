import { conne } from '../db/connect.js'

export const ping = async (req, res) => {
  const [result] = await conne.query('select 1 + 1 as result')
  res.json(result)
};