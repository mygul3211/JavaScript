public class Main {
    public static void main(String[] args) {
        String str = "Miguel";
//       String method : substring()
        System.out.println(str.substring(0,6));

        String cut2 = str.substring(0,6);
        System.out.println(cut2);

        String cut3 = str.substring(5,6);
        System.out.println(cut3);

        int length = str.length();
        System.out.println(length);

//      valueOf() used for changing a data type into a string
        int myInt = 123;
        String conMyInt = String.valueOf(myInt);
        System.out.println(conMyInt);

        boolean myBoolean = false;
        String convMyBoolean = String.valueOf(myBoolean);
        System.out.println(convMyBoolean);

//      Numeric String to Numeric
    }
}