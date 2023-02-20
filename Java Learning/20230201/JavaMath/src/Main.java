public class Main {
    public static void main(String[] args) {
        int age = 25;
        int miguelAge = 25;

        int numOne =  12;
        int numTwo =  9;

        int results = Math.max(numOne,numTwo);
        System.out.printf("numOne:%d vs numTwo:%d = %d \n", numOne, numTwo,results);

        long numOneLong = 1234;
        long numTwoLong = 654321;

        long resultLong = Math.max(numOneLong,numTwoLong);
        System.out.printf("numOneLong:%d vs numTwoLong:%d = %d \n", numOneLong, numTwoLong, resultLong);

        int resultMin = Math.min(numOne, numTwo);
        System.out.printf("Minimum(numOne:%d vs numTwo:%d = %d)",numOne,numTwo,resultMin);

        int absInt = 123;
        int resultAbsInt = Math.abs(absInt);
        System.out.printf("Absolute Int Results = %d",resultAbsInt);

        long absLong = 5432;
//        int resultAbsLong = Math.abs(absLong);
        long resultAbsLong = Math.abs(absLong);

        float myFloatOne = 10/3F;
        float myFloatTwo = 17/3F;

        System.out.printf("My Float One = %f \n", myFloatOne);
        System.out.printf("My Float One = %f \n", myFloatTwo);

//        切り捨て : Math.floor
        double resultMyFloatOneFloor = Math.floor(myFloatOne);
        System.out.println(resultMyFloatOneFloor);

        double myNumber = Math.floor(3.5);

        System.out.println(myNumber);

        double resultOneMathCeil = Math.ceil(3.3);
        System.out.println(resultOneMathCeil);

        double resultTwoMathCeil = Math.ceil(3.3);
        System.out.println(resultTwoMathCeil);

        double chicken = Math.round(3.11);
        double chicken2 = Math.round(3.24);
        double chicken3 = Math.round(3.56);
        double chicken4 = Math.round(3.43);
        double chicken5 = Math.round(3.67);
        double chicken6 = Math.round(3.91);

        double chicken7 = Math.round(3.24);

        System.out.println(chicken);
        System.out.println(chicken2);
        System.out.println(chicken3);
        System.out.println(chicken4);
        System.out.println(chicken5);
        System.out.println(chicken6);

        //四捨五入(ししゃごにゆう);

//        Math.random
        double randomVar = Math.random() * 100; // 0 - 99
        System.out.printf("Random Number = %.1f \n", randomVar);

        int randomInt = ((int) randomVar) + 1; // 1 - 100
        System.out.println("randomInt => " + randomInt);
    }
}