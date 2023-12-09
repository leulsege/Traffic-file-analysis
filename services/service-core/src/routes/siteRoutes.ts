import express from 'express'
import {
  getAllSites,
  createSite,
  getSite,
  updateSite,
  deleteSite,
} from '../controllers/siteController'

const siteRouter = express.Router()

siteRouter.route('/').post(createSite).get(getAllSites)
siteRouter.route('/:id').get(getSite).patch(updateSite).delete(deleteSite)

export default siteRouter
