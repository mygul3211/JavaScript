public class Main {
    // Main class - Starting class (needed to run class)
    public static void main(String[] args) {
        //
        byte myByte = 12; // 1byte
        short myShort = 13; // 2byte
        int myInt = 14; // 4byte
        long myLong = 15; // 8byte

        float myFloat = 12.43f;
        double myDouble = 124.33D;

        // Data Update
        // Byte
//        myByte = myShort;
        // myByte = myInt;
        // myByte = myLong;
        // myByte = myFloat;
        // myByte = myLong;

        // Short
        //myShort = myInt;
        //myShort = myLong;
        //myShort = myFloat;
        //myShort = myDouble;

        myInt = myByte;
        myInt = myShort;
        //myInt = myLong;
        //myInt = myFloat;
        //myInt = myDouble;

        myDouble = myByte;
        myDouble = myShort;
        myDouble = myInt;
        myDouble = myLong;
        myDouble = myFloat;
        myFloat = myShort;
    }
}