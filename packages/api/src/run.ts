import Api from ".";

const api = new Api();
api.start().then(() => console.log(`[dig-it]: Api. Started.`));
