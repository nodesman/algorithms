import java.math.BigInteger;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        BigInteger a = s.nextBigInteger();
        BigInteger b = s.nextBigInteger();
        System.out.println(lcm(a, b));
    }

    private static BigInteger lcm(BigInteger a, BigInteger b) {
        return a.multiply(b).divide(gcd(a, b));
    }

    private static BigInteger gcd(BigInteger a, BigInteger b) {

        if (a.equals(BigInteger.ZERO)) {
            return b;
        }

        if (b.equals(BigInteger.ZERO)) {
            return a;
        }

        switch (a.compareTo(b)) {

            case 1:
                return gcd(b, a.mod(b));
            case 0:
                return a;
            case -1:
                return gcd(a, b.mod(a));
        }

        return a;
    }
}
