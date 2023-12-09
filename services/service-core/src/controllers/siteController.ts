import SiteModel from '../models/siteModel'
import GenericController from './genericController'

const SiteController = new GenericController(SiteModel)

export const createSite = SiteController.create.bind(SiteController)
export const getAllSites = SiteController.getAll.bind(SiteController)
export const getSite = SiteController.getOne.bind(SiteController)
export const updateSite = SiteController.updateOne.bind(SiteController)
export const deleteSite = SiteController.deleteOne.bind(SiteController)
