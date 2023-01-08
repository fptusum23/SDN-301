import { sampleController } from "../../controllers";
import { CrudRouter } from "../crud.mongo";


export default class RecordRouter extends CrudRouter<typeof sampleController> {
  constructor() {
    super(sampleController);
  }
  customRouting() {

  }



}
