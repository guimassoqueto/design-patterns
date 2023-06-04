from interface.subject import Subject
from proxy.proxy import Proxy
from real_subject.real_subject import RealSubject


def main(subject: Subject) -> None:
    subject.request()


if __name__ == "__main__":
    print("Client: Executing the client code with a real subject:")
    real_subject = RealSubject()
    main(real_subject)

    print("")

    print("Client: Executing the same client code with a proxy:")
    proxy = Proxy(real_subject)
    main(proxy)