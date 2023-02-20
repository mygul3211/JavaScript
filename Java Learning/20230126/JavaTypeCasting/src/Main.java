public class Main {
    public static void main(String[] args) {
        byte b = 120;
        int i = 127;

        b = (byte) i;
        System.out.println(b);

        double myDouble = 12.34D;

        // force casting
        float myFloat = (float) myDouble;

        short myShort = 250;
        byte myByte = (byte) myShort;
        System.out.println(myByte);
    }
}