import { ClassesApiAuth } from "./auth";
import { ClassesApiEmail } from "./email";
import { ClassesApiEncrypt } from "./encrypt";
import { ClassesApiJwt } from "./jwt";
import { ClassesApiGraphHandler } from "./_handler";

export class ClassesApi {
  private graphhandler: ClassesApiGraphHandler;

  private graphemails: ClassesApiEmail;

  private graphjwt: ClassesApiJwt;

  private graphencryption: ClassesApiEncrypt;

  private graphauth: ClassesApiAuth;

  constructor() {
    this.graphhandler = new ClassesApiGraphHandler();
    this.graphemails = new ClassesApiEmail();
    this.graphjwt = new ClassesApiJwt();
    this.graphencryption = new ClassesApiEncrypt();
    this.graphauth = new ClassesApiAuth();
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

  public get encryption(): ClassesApiEncrypt {
    return this.graphencryption;
  }

  public get auth(): ClassesApiAuth {
    return this.graphauth;
  }
}
