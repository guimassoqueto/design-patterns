package StrategiesPackage;

public interface PayStrategy {
  boolean pay(int paymentAmount);
  void collectPaymentDetails();
}