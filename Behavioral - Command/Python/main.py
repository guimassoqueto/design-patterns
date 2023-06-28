
from complex_command.complex_command import ComplexCommand
from invoker.invoker import Invoker
from receiver.receiver import Receiver
from simple_command.simple_command import SimpleCommand


if __name__ == "__main__":
    invoker = Invoker()
    invoker.set_on_start(SimpleCommand("Say Hi!"))
    receiver = Receiver()
    invoker.set_on_finish(ComplexCommand(
        receiver, "Send email", "Save report"))

    invoker.do_something_important()