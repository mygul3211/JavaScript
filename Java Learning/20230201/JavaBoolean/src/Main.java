public class Main {
//    Main function/method
    public static void main(String[] args) {
        int age = 20;
        boolean canMarry;

        if (age >= 18) {
            canMarry = true;
        } else {
            canMarry = false;
        }
        System.out.println(canMarry);

        if (age == 20) {
            System.out.println("Age is 20");
        } else {
            System.out.println("Not 20");

            String msg = age >=21 ? "OK" : "NG";
            System.out.println(msg);
        }
    }
}