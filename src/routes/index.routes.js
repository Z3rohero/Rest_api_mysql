import {Router} from 'express'

const router  = Router()

router.get('/ping', async (req, res) => {
  const [result] = await conne.query('select 1 + 1 as result')
  res.json(result)
});


export default  router 