import { ClassesApiEmail } from "./email";
import { ClassesApiJwt } from "./jwt";
import { ClassesApiGraphHandler } from "./_handler";

export class ClassesApi {
  private graphhandler: ClassesApiGraphHandler;

  private graphemails: ClassesApiEmail;

  private graphjwt: ClassesApiJwt;

  constructor() {
    this.graphhandler = new ClassesApiGraphHandler();
    this.graphemails = new ClassesApiEmail();
    this.graphjwt = new ClassesApiJwt();
  }

  public get handler(): ClassesApiGraphHandler {
    return this.graphhandler;
  }

  public get emails(): ClassesApiEmail {
    return this.graphemails;
  }

  public get jwt(): ClassesApiJwt {
    return this.graphjwt;
  }
}
