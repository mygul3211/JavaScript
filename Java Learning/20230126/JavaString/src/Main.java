public class Main {
    public static void main(String[] args) {
        String str = "Hello World";
        // string length
        int strLength = str.length();
        System.out.println(strLength);

        // To Uppercase
        String strUpperCase = str.toUpperCase();
        System.out.println(strUpperCase);

        // To Lowercase
        String strLowercase = str.toLowerCase();
        System.out.println(strLowercase);

        //Finding character in String
        String str1 = "The quick brown fox jumps over the lazy bitch";
        // Search method > indexOf
        int pos = str1.indexOf("brown");
        System.out.println("brown pos >" + pos);

        // if the String/Char that you want to search for doesn't exist, the return will be -1
        int pos1  = str1.indexOf("blue");
        System.out.println("blue pos > " + pos1);

        String str2 = "Hello Girls";
        char chr = str2.charAt(1);
        System.out.println(chr);

        // String vs String compare
        // 0 => equal
        // !0 (difference) => not equal
        String myStr1 = "Nice";
        String myStr2 = "Nice";
        String myStr3 = "NICE";

        int comRes = myStr1.compareTo(myStr2);
        System.out.println(comRes);

        int comRes1 = myStr1.compareTo(myStr3);
        System.out.println(comRes1);

        // SubString

        String str4 = "Apple,Orange,Pineapple";
        String cut1 = str4.substring(0,5);
        System.out.println(cut1);
    }
}