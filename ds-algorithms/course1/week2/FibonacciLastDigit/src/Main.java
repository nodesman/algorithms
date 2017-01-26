import java.math.BigInteger;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        int a = s.nextInt();

        BigInteger lastDigit = fibonacciDigit(a);

        System.out.println(lastDigit);
    }

    private static BigInteger fibonacciDigit(int n) {

        
        int iter = 2;
        int current = null;
        for (; iter <= n; iter++) {

        }

        BigInteger number = current;
        return number.mod(BigInteger.valueOf(10));
    }
}
