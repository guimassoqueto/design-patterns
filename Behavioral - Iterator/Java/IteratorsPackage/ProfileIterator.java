package IteratorsPackage;

import ProfilePackage.Profile;

public interface ProfileIterator {
    boolean hasNext();

    Profile getNext();

    void reset();
}
