package Builders;

import CarsPackage.CarType;
import ComponentsPackage.Engine;
import ComponentsPackage.GPSNavigator;
import ComponentsPackage.Transmission;
import ComponentsPackage.TripComputer;

public interface Builder {
    void setCarType(CarType type);
    void setSeats(int seats);
    void setEngine(Engine engine);
    void setTransmission(Transmission transmission);
    void setTripComputer(TripComputer tripComputer);
    void setGPSNavigator(GPSNavigator gpsNavigator);
}