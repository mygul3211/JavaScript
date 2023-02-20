public class Main {
    public static void main(String[] args) {
        String numOne = "127";
        int changeInt = Integer.parseInt(numOne);
        System.out.println(changeInt);

        byte changeByte = Byte.parseByte(numOne);
        System.out.println(changeByte);
    }
}