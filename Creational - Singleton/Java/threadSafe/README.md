## Thread-safe Singleton with lazy loading

To fix the problem, you have to synchronize threads during first creation of the Singleton object.