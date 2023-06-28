import { Invoker } from "./invoker/invoker.ts";
import { SimpleCommand } from "./simple-command/simple-command.ts";
import { ComplexCommand } from "./complex-command/complex-command.ts";
import { Receiver } from "./receiver/receiver.ts";

function main() {
  const invoker = new Invoker();
  invoker.setOnStart(new SimpleCommand('Say Hi!'));
  const receiver = new Receiver();
  invoker.setOnFinish(new ComplexCommand(receiver, 'Send email', 'Save report'));
  invoker.doSomethingImportant();
}

main()