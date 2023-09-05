package main

import (
	"cor/cor"
)

func main() {
	cachier := &cor.Cashier{}

	medical := &cor.Medical{}
	medical.SetNext(cachier)

	doctor := &cor.Doctor{}
	doctor.SetNext(medical)

	reception := &cor.Reception{}
	reception.SetNext(doctor)

	patient := &cor.Patient{
		Name: "Joaquim",
	}

	reception.Execute(patient)
}
