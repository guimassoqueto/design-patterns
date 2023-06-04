import { Subject } from "./interface/subject.ts";
import { Proxy_ } from "./proxy/proxy.ts";
import { RealSubject } from "./real-subject/real-subject.ts";


function main(subject: Subject) {
  subject.request();
}

console.log('Client: Executing the client code with a real subject:');
const realSubject = new RealSubject();
main(realSubject);

console.log('');

console.log('Client: Executing the same client code with a proxy:');
const proxy = new Proxy_(realSubject);
main(proxy);
