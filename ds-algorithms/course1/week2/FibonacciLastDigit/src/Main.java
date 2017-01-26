import java.math.BigInteger;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        int a = s.nextInt();
        int m = s.nextInt();

        BigInteger lastDigit = fibonacciDigit(a, m);

        System.out.println(lastDigit);
    }

    private static BigInteger fibonacciDigit(int n, int m) {

        int iter = 2;
        BigInteger s = BigInteger.ZERO;
        BigInteger l = BigInteger.ONE;
        BigInteger c;
        for (; iter <= n; iter++) {
            c = s.add(l);
            s = new BigInteger(String.valueOf(l));
            l = new BigInteger(String.valueOf(c));
        }

        BigInteger number = c;
        return number.mod(BigInteger.valueOf(m));
    }
}
