import Joi from "joi";
import Boom from "@hapi/boom";
import { BLUR_FILTER, GREYSCALE_FILTER, NEGATIVE_FILTER } from "../../commons/constants.mjs";
import Process from "../../models/Process.mjs";

const PayloadValidation = Joi.object({
    filters: Joi.array().items(Joi.string().valid("negative", "greyscale", "blur")).min(1)
});



const applyFilters = async (files, filters) => {
    try {
        await PayloadValidation.validateAsync(filters, files);
    } catch (error) {
        throw Boom.badData(error.message, { error });
    }

 
    const filesData = [];

    for (const file of files) {
        const fileData = file.buffer;
        filesData.push(fileData);
    }
    const newProcess = new Process;
    newProcess.files = filesData;
    newProcess.filters = filters;
    await newProcess.save();
    return newProcess;
};



export default applyFilters;

