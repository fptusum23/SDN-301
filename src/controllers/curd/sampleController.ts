
import { sampleService } from "../../services";
import { CrudController } from "../crudController";

export class SampleController extends CrudController<typeof sampleService> {
    constructor() {
        super(sampleService);
    }
}
