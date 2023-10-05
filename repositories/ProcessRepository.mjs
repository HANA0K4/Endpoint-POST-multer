import ProcessModel from '../src/models/Process.mjs';

class ProcessRepository {
  // eslint-disable-next-line class-methods-use-this
  async saveProcess(process) {
    const newProcess = new ProcessModel();
    newProcess.filters = process.filters;
    await newProcess.save();
    return newProcess;
  }
}

export default ProcessRepository;
