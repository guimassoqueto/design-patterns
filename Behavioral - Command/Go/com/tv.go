package com

import "fmt"

type Tv struct {
	IsRunning bool
}

func (t *Tv) On() {
	t.IsRunning = true
	fmt.Println("Turing TV on")
}

func (t *Tv) Off() {
	t.IsRunning = false
	fmt.Println("Turning TV off")
}