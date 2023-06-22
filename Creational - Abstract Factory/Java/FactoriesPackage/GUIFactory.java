package FactoriesPackage;

import ButtonsPackage.Button;
import CheckboxesPackage.Checkbox;


public interface GUIFactory {
    Button createButton();
    Checkbox createCheckbox();
}
