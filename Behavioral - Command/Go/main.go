package main

import (
	"command/com"
)

func main() {
	tv := &com.Tv{}
	onCommand := &com.OnCommand{
		Device: tv,
	}

	offCommand := &com.OffCommand{
		Device: tv,
	}

	onButton := &com.Button{
		Command: onCommand,
	}
	onButton.Press()

	offButton := &com.Button{
		Command: offCommand,
	}
	offButton.Press()
}