import asyncError from '../utils/asyncError'
import SiteModel from '../models/siteModel'
import GenericController from './genericController'

const SiteController = new GenericController(SiteModel)

export const createSite = asyncError(SiteController.create.bind(SiteController))
export const getAllSites = asyncError(
  SiteController.getAll.bind(SiteController),
)
export const getSite = asyncError(SiteController.getOne.bind(SiteController))
export const updateSite = asyncError(
  SiteController.updateOne.bind(SiteController),
)
export const deleteSite = asyncError(
  SiteController.deleteOne.bind(SiteController),
)
