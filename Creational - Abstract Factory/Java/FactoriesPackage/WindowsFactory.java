package FactoriesPackage;

import ButtonsPackage.Button;
import ButtonsPackage.WindowsButton;
import CheckboxesPackage.Checkbox;
import CheckboxesPackage.WindowsCheckbox;

public class WindowsFactory implements GUIFactory {

    @Override
    public Button createButton() {
        return new WindowsButton();
    }

    @Override
    public Checkbox createCheckbox() {
        return new WindowsCheckbox();
    }
}