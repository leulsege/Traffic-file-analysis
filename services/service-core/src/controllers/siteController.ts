import { Request, Response, NextFunction } from 'express'
import SiteModel from '../models/siteModel'

class SiteController {
  // Create a site
  async createSite(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    const newSite = await SiteModel.create(req.body)

    res.status(201).json({
      status: 'success',
      data: {
        site: newSite,
      },
    })
  }

  // Get all sites
  async getAllSites(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    const sites = await SiteModel.find()

    res.status(200).json({
      status: 'success',
      results: sites.length,
      data: {
        sites,
      },
    })
  }

  // Get a specific site by ID
  async getSite(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    const site = await SiteModel.findById(req.params.id)

    if (!site) {
      res.status(404).json({
        status: 'fail',
        message: 'Site not found',
      })
      return
    }

    res.status(200).json({
      status: 'success',
      data: {
        site,
      },
    })
  }

  // Update a site
  async updateSite(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    const updatedSite = await SiteModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      },
    )

    if (!updatedSite) {
      res.status(404).json({
        status: 'fail',
        message: 'Site not found',
      })
      return
    }

    res.status(200).json({
      status: 'success',
      data: {
        site: updatedSite,
      },
    })
  }

  // Delete a site
  async deleteSite(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    const deletedSite = await SiteModel.findByIdAndDelete(req.params.id)

    if (!deletedSite) {
      res.status(404).json({
        status: 'fail',
        message: 'Site not found',
      })
      return
    }

    res.status(204).json({
      status: 'success',
      data: null,
    })
  }
}

export default SiteController
