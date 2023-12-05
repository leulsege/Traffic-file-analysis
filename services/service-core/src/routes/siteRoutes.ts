import express from 'express'
import SiteController from '../controllers/siteController'

const siteRouter = express.Router()
const { createSite, getAllSites, getSite, updateSite, deleteSite } =
  new SiteController()

siteRouter.route('/').post(createSite).get(getAllSites)
siteRouter.route('/:id').get(getSite).patch(updateSite).delete(deleteSite)

export default siteRouter
