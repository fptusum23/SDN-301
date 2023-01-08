import { Sample } from "../../models/collections";
import { CrudService } from "../crudService";


export class SampleService extends CrudService<typeof Sample> {
    constructor() {
        super(Sample);
    }
}
