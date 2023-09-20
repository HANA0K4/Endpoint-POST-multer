import applyFilters from "../../controllers/filters/applyFilters.mjs";
import Boom from "@hapi/boom"
import HttpStatusCode from "http-status-codes"
const applyFiltersHandler = async (req, res, next) => {
    try {
        const files = req.files
        const {filters} = req.body;
        const parse = JSON.parse(`{"filters": ${body.filters}}`);
        const response = await applyFilters(files,{filters:parse});
        return res.status(HttpStatusCode.OK).json(response);
    } catch (error) {
        const err = Boom.isBoom(error) ? error : Boom.internal(error);
        next(error);
    }
}

    ;
export default applyFiltersHandler;