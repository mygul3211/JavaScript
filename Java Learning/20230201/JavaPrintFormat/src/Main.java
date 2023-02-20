public class Main {
    public static void main(String[] args) {
        // "%d is used if you want to only show one variable inside the system out print if there is more than one written"
        int myInt = 123;
        int myInt1 = 456;
        int myInt2 = 789;
        System.out.printf("%d",myInt,myInt1,myInt2); // writing souf will give you the system out print line written out
        System.out.println("myInt = " + myInt + ", myInt1 = " + myInt1 + ", myInt2 = " + myInt2);
        System.out.printf("myInt = %d, myInt1 = %d, myInt2 = %d",myInt,myInt1,myInt2);

        boolean myBoolean = false;
        System.out.printf("myBoolean = %b \n",myBoolean); // \n puts the line in its own separate line

        String myString = "David";
        System.out.printf("My name is %s \n", myString);

        float myFloat = 17/3f;
        System.out.printf("myFloat = %f \n", myFloat);
        System.out.printf("myFloat = %.2f \n",myFloat);

        char myChar = 'A';
        System.out.printf("myChar = \n", myChar);

        String name = "Sakura";
        int age = 20;
        boolean isMarried = false;
        double salary = 200000.190D;
        char rank = 'S';

        System.out.printf("im %s.\n%d years old.\nMarital status %b.\nMy salary is %f.\nRank %c",name,age,isMarried,salary,rank);

    }
}