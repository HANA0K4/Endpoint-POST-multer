import Boom from '@hapi/boom';
import HttpStatusCode from 'http-status-codes';

const applyFiltersHandler = async (req, res, next) => {
  try {
    const { body } = req;
    const response = await req.container.processService.applyFilters({ ...body, files: req.files });
    return res.status(HttpStatusCode.OK).json(response);
  } catch (error) {
    const err = Boom.isBoom(error) ? error : Boom.internal(error);
    return next(err);
  }
};

export default applyFiltersHandler;
