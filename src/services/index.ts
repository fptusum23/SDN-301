
import { ErrorService } from "./errorService";


// Crud
import { ICrudExecOption, ICrudOption, CrudService } from "./crudService";
import { SampleService } from "./curd/sampleService";

const errorService = new ErrorService();
const sampleService = new SampleService()
export {
  CrudService,
  ICrudExecOption,
  ICrudOption,
  errorService,
  // CRUD
  sampleService


};
