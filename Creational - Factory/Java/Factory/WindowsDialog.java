package Factory;

import ButtonsPackage.Button;
import ButtonsPackage.WindowsButton;

public class WindowsDialog extends Dialog {

  @Override
  public Button createButton() {
      return new WindowsButton();
  }
}
