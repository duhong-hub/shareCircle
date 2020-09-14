import { environment } from "../environments/environment";

const {
  // _CONTEXT_API_ROOT: apiRoot,
  // _CONTEXT_URL_ROOT: urlRoot
} = environment;

window['context'] = {
  apiroot: 'https://f.longjuli.com'
};
