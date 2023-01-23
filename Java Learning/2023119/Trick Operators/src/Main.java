public class Main {
    public static void main(String[] args) {
        int a = 10; //first declare a variable
        System.out.println("initial state > " + a);

        System.out.println(a);

        System.out.println("adding 10 >" + a);

        //Then you can update the variable after declaring.
        System.out.println(a + 10); //20

        System.out.println(a);

        a++; // a = a + 1
        a++; // a = a + 1

        // a++ => (a = a + 1)
        // aの変更した値は、2回目呼ぶ時に反映される
        System.out.println(a++);

        // ++a => (a = a + 1)
        System.out.println(++a);

        int c = 5;
        int b = (c++) + 10 + (++c) + (c++);
        System.out.println(b);
    }
}