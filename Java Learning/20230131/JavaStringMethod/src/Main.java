public class Main {
    public static void main(String[] args) {

        String str = "java int cannot be derefrenced";
        int strLength = str.length();
        System.out.println("str length :" + strLength);

        // String method : toUpperCase()
        String strUpper = str.toUpperCase();
        System.out.println(strUpper);
//      Original String can not change to Upper Case letters
        System.out.println(str);

//      String method : toLowerCase()

        String toLower = str.toLowerCase();

//      String method : indexOf()
        String str2 = "apple";
        int pPos = str2.indexOf("p");

//      String method : lastIndexOf()
        pPos = str2.lastIndexOf("p");
        System.out.println("first p pos : " + pPos);

        int rPos = str2.indexOf("r");
        System.out.println("r pos : " + rPos);

//      String method : charAt
        String str3 = "Happy new year 2023"; // 0 - 18
        char charVal = str3.charAt(4); // position of character in string
        System.out.println("pos 4 of char : " + charVal);

        charVal = str3.charAt(4);
        System.out.println(charVal);
//      the char your search by position is out of string range
//      occurs Exception error
//      charVal = str3.charAt(30);
//      System.out.println(charVal);

        String pieceOne = "Hello";
        String pieceTwo = " World";
        String pieceCombine = pieceOne.concat("" + pieceTwo);
        System.out.println(pieceCombine);

//      String method : contain
        String str4 = "Today is Wednesday, Yesterday was Tuesday";
        boolean isExitWednesday = str4.contains("Wednesday");
        System.out.println("isExistWednesday : " + isExitWednesday);
        

    }
}