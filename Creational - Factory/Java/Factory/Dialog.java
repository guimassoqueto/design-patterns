package Factory;

import ButtonsPackage.Button;

public abstract class Dialog {

  public void renderWindow() {
    // ... other code ...

    Button okButton = createButton();
    okButton.render();
  }

  public abstract Button createButton();
}