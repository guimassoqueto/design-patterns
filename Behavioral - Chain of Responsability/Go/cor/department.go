package cor

type Department interface {
	Execute(*Patient)
	SetNext(Department)
}
