export class ApiService {
    public mainUrl = 'http://localhost/apiZokaji/c/';

    constructor() {}

    ajaxPost(url: string, data, callback) {
        const req = new XMLHttpRequest();
        req.open('POST', url);
        req.addEventListener('load', () => {
        if (req.status >= 200 && req.status < 400) {
          callback(JSON.parse(req.responseText));
        } else {
          console.error(req.status + ' ' + req.statusText);
        }
        });
        req.addEventListener('error', () => {
          console.error('Erreur réseau avec l\'URL ' + url);
        });
        req.send(data);
    }
}