package Factory;

import ButtonsPackage.Button;
import ButtonsPackage.HtmlButton;

public class HtmlDialog extends Dialog {

  @Override
  public Button createButton() {
      return new HtmlButton();
  }
}