public class Main {
    public static void main(String[] args) {
        long l = 20;
        byte b = -128;
        int i = l;
        short s = b;
        float f = 12.34;
        double d = f;
        l = d;
        d = i;
        i = b;

    }
}