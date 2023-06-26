Whenb you run the code using `make run` in Ubuntu, using java 19, this error will be shown:

```
Exception in thread "main" java.awt.HeadlessException: 
No X11 DISPLAY variable was set,
or no headful library support was found,
but this program performed an operation which requires it,

        at java.desktop/java.awt.GraphicsEnvironment.checkHeadless(GraphicsEnvironment.java:166)
        at java.desktop/java.awt.Window.<init>(Window.java:553)
        at java.desktop/java.awt.Frame.<init>(Frame.java:428)
        at java.desktop/java.awt.Frame.<init>(Frame.java:393)
        at java.desktop/javax.swing.JFrame.<init>(JFrame.java:180)
        at EditorPackage.ImageEditor$EditorCanvas.createFrame(ImageEditor.java:45)
        at EditorPackage.ImageEditor$EditorCanvas.<init>(ImageEditor.java:32)
        at EditorPackage.ImageEditor.<init>(ImageEditor.java:17)
        at Main.main(Main.java:11)
make: *** [Makefile:5: run] Error 1
```

To correct this, just Roll back to openjdk-17.  

Solution found in: https://www.reddit.com/r/pop_os/comments/10kybky/no_x11_display_variable_was_set_when_using/