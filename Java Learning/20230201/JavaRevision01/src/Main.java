public class Main {
    public static void main(String[] args) {
        byte myByte = -12;
        System.out.println(myByte);

        short myShort = 32767; // 2byte = 16bits, min = 32768, max = 32767
        System.out.println(myShort);

        int myInt = 3276;
        System.out.println(myShort);

//   these three data types are the only ones that require a letter at the end of the value.
//   usually it's the first letter of the data type that goes in the end of the value.

        long myLong = 32767L; // 8 bytes = 64bits
        System.out.println(myLong);

        float myFloat = 123.19F;
        System.out.println(myFloat);

        double myDouble = 12345.2345D;
        double myDuble = 10/30;
        System.out.println(myDouble);
        System.out.println(myDuble);

//      Data update
        myByte = 20;
        System.out.printf("Update %d \n",myByte);
        myByte = (byte) myShort;
        System.out.printf("Update Short Value %d \n",myByte);
        myByte = (byte) myInt;
        System.out.printf("Update Int Value %d \n",myByte);
        myByte = (byte) myLong;
        System.out.printf("Update Long Value %d \n",myByte);
        myByte = (byte) myFloat;
        System.out.printf("Update Float Value %d \n",myByte);
        myByte = (byte) myDouble;
        System.out.printf("Update Double Value %d \n",myByte);

        myShort = myByte;
        System.out.printf("Update float to short %d \n", myInt);
        myInt = myShort;
        System.out.printf("Update float to short %d \n", myInt);
        myInt = (int) myLong;
        System.out.println(myByte);
        myInt = (int) myLong;
        System.out.println();

        myFloat = myByte;
        myFloat = myByte;
        myFloat = myByte;
        myFloat = myByte;
        myFloat = myByte;

        char a = 'A';
        System.out.printf("char %c \n", a);


    }
}