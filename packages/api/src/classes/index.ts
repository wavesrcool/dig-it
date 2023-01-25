import { envapi } from "../_env";
import { ClassesApiEmail } from "./email";
import { ClassesApiGraphHandler } from "./_handler";

const { GRAPH_MAIL_KEY } = envapi;

class ClassesApi {
  private graphhandler: ClassesApiGraphHandler;

  private graphemails: ClassesApiEmail;

  constructor() {
    this.graphhandler = new ClassesApiGraphHandler();
    this.graphemails = new ClassesApiEmail(GRAPH_MAIL_KEY);
  }

  public get handler(): ClassesApiGraphHandler {
    return this.graphhandler;
  }

  public get emails(): ClassesApiEmail {
    return this.graphemails;
  }
}

export const classesapi = new ClassesApi();
