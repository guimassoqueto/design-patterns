package FactoriesPackage;

import ButtonsPackage.Button;
import ButtonsPackage.MacOSButton;
import CheckboxesPackage.Checkbox;
import CheckboxesPackage.MacOSCheckbox;

public class MacOSFactory implements GUIFactory {

    @Override
    public Button createButton() {
        return new MacOSButton();
    }

    @Override
    public Checkbox createCheckbox() {
        return new MacOSCheckbox();
    }
}