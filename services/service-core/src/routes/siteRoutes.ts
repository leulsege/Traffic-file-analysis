import express from 'express'
import {
  getAllSites,
  createSite,
  getSite,
  updateSite,
  deleteSite,
} from '../controllers/siteController'
import { protect, restrictTo } from '../middleware/authMiddleware'

const siteRouter = express.Router()

siteRouter
  .route('/')
  .all(protect, restrictTo('admin', 'owner'))
  .post(createSite)
  .get(getAllSites)
siteRouter
  .route('/:id')
  .all(protect)
  .get(getSite)
  .patch(restrictTo('admin', 'owner'), updateSite)
  .delete(restrictTo('admin', 'owner'), deleteSite)

export default siteRouter
